import { useContext } from 'react'
import { useController } from 'react-hook-form'
import isEqual from 'lodash.isequal'
import { Input as InputAntD } from 'antd'
import 'antd/lib/input/style/index.css'

import QueryBuilder from '../query-builder'

import { FormContext } from './form/context'

export const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-500 p-2 rounded-lg text-white cursor-pointer"
      onClick={e => {
        e.preventDefault() // prevent form submission
        onClick()
      }}
    >
      {text}
    </button>
  )
}

export const Input = ({ control, label, name, rules }) => {
  const {
    field, // i.e. { ref, name, value, onChange, onBlur }
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields }
    formState: { errors }
  } = useController({
    name,
    control,
    rules,
    defaultValue: ''
  })

  const error = errors[name]

  return (
    <div>
      <label>{label}</label>
      <br />
      <InputAntD {...field} />
      {error?.message && (
        <p className="text-red-500">Error: {error?.message}</p>
      )}
    </div>
  )
}

export const QueryBuilderWrapped = {
  Component: ({
    name,
    label,
    validations,
    metaPayload,
    immutableTree,
    onChange
  }) => {
    const { data, setData } = useContext(FormContext)

    return (
      <div>
        <label>{label}</label>
        <br />
        <QueryBuilder.Component
          validations={validations}
          metaPayload={metaPayload}
          immutableTree={immutableTree}
          formMeta={{}}
          onChange={onChange}
          onError={({ displayName, value }) => {
            const newErrors = {
              ...data.queryBuilderErrors,
              [name]: {
                message: `"${value}" is an incorrect value for "${displayName}"`
              }
            }
            // using setData in onError can cause infinite rendering
            if (!isEqual(data.queryBuilderErrors, newErrors)) {
              setData({
                key: 'queryBuilderErrors',
                val: newErrors
              })
            }
          }}
        />
      </div>
    )
  },
  getImmutableTree: QueryBuilder.getImmutableTree
}
