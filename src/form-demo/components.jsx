import { useController, useFormContext } from 'react-hook-form'
import { Input as InputAntD } from 'antd'
import 'antd/lib/input/style/index.css'

const InputUncontrolled = ({ label, name, rules, ...rest }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const error = errors[name]

  return (
    <div>
      <label>{label}</label>
      <br />
      <input className="border p-2" {...register(name, rules)} {...rest} />
      {error?.message && <p className="text-red-500">Error: {error?.message}</p>}
    </div>
  )
}

export const Select = ({ label, name, rules, options, ...rest }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const error = errors[name]

  return (
    <div>
      <label>{label}</label>
      <br />
      <select className="w-full border p-2" {...register(name, rules)} {...rest}>
        {options.map(opt => (
          <option>{opt}</option>
        ))}
      </select>
      {error?.message && <p className="text-red-500">Error: {error?.message}</p>}
    </div>
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