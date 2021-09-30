import { useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Input as InputAntD } from 'antd'
import 'antd/lib/input/style/index.css'

import QueryBuilder from '../query-builder'

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

const QueryBuilderWrappedOne = {
  Component: ({
    name,
    rules,
    metaPayload,
    immutableTree,
    query,
    validations,
    onChange
  }) => {
    const { register, formState } = useFormContext()

    const error = formState.errors[name]

    return (
      <div>
        <input
          {...register(name, rules)}
          type="text"
          style={{ display: 'block', width: '100%' }}
          value={JSON.stringify(query)}
        />
        <QueryBuilder.Component
          validations={validations}
          metaPayload={metaPayload}
          immutableTree={immutableTree}
          onChange={onChange}
        />
        {error?.message && (
          <p className="text-red-500">Error: {error?.message}</p>
        )}
      </div>
    )
  },
  getImmutableTree: QueryBuilder.getImmutableTree
}

const QueryBuilderWrappedTwo = {
  Component: ({
    control,
    label,
    name,
    rules,
    validations,
    metaPayload,
    immutableTree,
    onChange
  }) => {
    const [value, setValue] = useState('')

    const {
      field, // { ref, ...inputProps }
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
        <InputAntD {...field} value={value} />
        <QueryBuilder.Component
          validations={validations}
          metaPayload={metaPayload}
          immutableTree={immutableTree}
          onChange={({ query, immutableTree }) => {
            /*
            problem...
            QB validation is happening via an input
            */
            // console.log(query)
            // console.log(field)
            setValue(JSON.stringify(query))
            onChange({ query, immutableTree })
          }}
        />
        {error?.message && (
          <p className="text-red-500">Error: {error?.message}</p>
        )}
      </div>
    )
  },
  getImmutableTree: QueryBuilder.getImmutableTree
}

export const QueryBuilderWrapped = QueryBuilderWrappedTwo
