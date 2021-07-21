import { useController } from 'react-hook-form'
import { Input as InputAntD, Checkbox } from 'antd'
import 'antd/lib/input/style/index.css'
import 'antd/lib/checkbox/style/index.css'

export function Input({ register, label, name, rules, errors = {}, ...rest }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input className="border p-2" {...register(name, rules)} {...rest} />
      {errors.message && <p className="text-red-500">Error: {errors.message}</p>}
    </div>
  )
}

export function CheckboxWrapped({ control, label, name, rules, errors, onChange }) {
  const {
    field // i.e. { ref, name, value, onChange, onBlur }
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: rules,
    defaultValue: ''
  })

  return (
    <div>
      <label>{label}</label>
      <br />
      <Checkbox {...field} onChange={onChange} />
      {errors.message && <p className="text-red-500">Error: {errors.message}</p>}
    </div>
  )
}
