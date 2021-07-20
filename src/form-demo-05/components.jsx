import { useController } from 'react-hook-form'
import RollUp from '../components/input-rollup'

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
      <RollUp.Input {...field} />
      {errors.message && <p className="text-red-500">Error: {errors.message}</p>}
    </div>
  )
}
