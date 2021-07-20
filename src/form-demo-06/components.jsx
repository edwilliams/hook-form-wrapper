import { useController } from 'react-hook-form'
import { Input as InputAntD, Checkbox } from 'antd'
import 'antd/lib/input/style/index.css'
import 'antd/lib/checkbox/style/index.css'

export function Input({ register, label, name, opts, errors = {}, ...rest }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input className="border p-2" {...register(name, opts)} {...rest} />
      {errors.message && <p className="text-red-500">Error: {errors.message}</p>}
    </div>
  )
}

export function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
      {options.map(value => (
        <option value={value}>{value}</option>
      ))}
    </select>
  )
}

export function InputWrapped({ control, label, name, opts, errors }) {
  const {
    field // i.e. { ref, name, value, onChange, onBlur }
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: opts,
    defaultValue: ''
  })

  return (
    <div>
      <label>{label}</label>
      <br />
      <InputAntD {...field} />
      {errors.message && <p className="text-red-500">Error: {errors.message}</p>}
    </div>
  )
}

export function CheckboxWrapped({ control, label, name, opts, errors }) {
  const {
    field // i.e. { ref, name, value, onChange, onBlur }
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: opts,
    defaultValue: ''
  })

  return (
    <div>
      <label>{label}</label>
      <br />
      <Checkbox {...field} />
      {errors.message && <p className="text-red-500">Error: {errors.message}</p>}
    </div>
  )
}
