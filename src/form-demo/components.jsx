import { useEffect, useContext, useState } from 'react'
import { useController } from 'react-hook-form'
import { Input as InputAntD } from 'antd'
import 'antd/lib/input/style/index.css'

import { FormContext } from './form/context'

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

export const QueryBuilderWrapped = {
  Component: ({
    formMeta = {},
    label,
    validations,
    metaPayload,
    immutableTree,
    onChange
  }) => {
    const { data, setData } = useContext(FormContext)

    const [initialised, setInitialised] = useState(false)

    useEffect(() => {
      if (!initialised) updateSummary()
    })

    const updateSummary = () => {
      if (!data.sections) return
      console.log('load')

      const section = data.sections?.find(
        ({ name }) => name === formMeta.groupTitle
      )

      if (section && !section.fields.some(fld => fld.name === formMeta.name)) {
        section.fields.push({
          name: formMeta.name,
          label,
          value: '',
          errors: [
            { name: formMeta.name, desc: 'Please complete Foo', show: true }
          ]
        })
      }

      // console.log('load', data.sections)

      setData({
        ...data
      })

      setInitialised(true)
    }

    return (
      <div>
        <label>{label}</label>
        <br />
        <QueryBuilder.Component
          validations={validations}
          metaPayload={metaPayload}
          immutableTree={immutableTree}
          formMeta={formMeta}
          onChange={({ query, immutableTree }) => {
            // console.log('change', data.sections)
            // updateSummary()
            onChange({ query, immutableTree })
          }}
          onError={val => {
            console.log(val)
          }}
        />

        {/* NB will we need to display error here as well as in Form Summary */}
        {false && <p className="text-red-500">Error: ...</p>}
      </div>
    )
  },
  getImmutableTree: QueryBuilder.getImmutableTree
}
