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
      {error?.message && <p className="text-red-500">Error: {error?.message}</p>}
    </div>
  )
}

export const QueryBuilderWrapped = {
  Component: ({ name, rules, metaPayload, immutableTree, query, onChange }) => {
    const {
      register,
      formState: { errors }
    } = useFormContext()

    const error = errors[name]

    return (
      <div>
        <input
          type="text"
          // style={{ display: 'block', width: '100%' }}
          style={{ display: 'none' }}
          value={JSON.stringify(query)}
          {...register(name, rules)}
        />
        <QueryBuilder.Component
          metaPayload={metaPayload}
          immutableTree={immutableTree}
          onChange={onChange}
        />
        {error?.message && <p className="text-red-500">Error: {error?.message}</p>}
      </div>
    )
  },
  getImmutableTree: QueryBuilder.getImmutableTree
}
