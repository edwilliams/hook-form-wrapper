import { useController } from 'react-hook-form'
import { TextField } from '@material-ui/core'

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
    field: { ref, ...inputProps }
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
      <TextField {...inputProps} inputRef={ref} />
      {errors.message && <p className="text-red-500">Error: {errors.message}</p>}
    </div>
  )
}
