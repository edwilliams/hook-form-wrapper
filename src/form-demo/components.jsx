import { useController, useFormContext } from 'react-hook-form'
import { Input as InputAntD } from 'antd'
import 'antd/lib/input/style/index.css'

export const Input = ({ label, name, rules, errors = {}, ...rest }) => {
  const { register } = useFormContext()
  return (
    <div>
      <label>{label}</label>
      <br />
      <input className="border p-2" {...register(name, rules)} {...rest} />
      {errors.message && <p className="text-red-500">Error: {errors.message}</p>}
    </div>
  )
}

// todo: if control, use controlled component
export const InputWrapped = ({ control, label, name, rules, errors }) => {
  const {
    field // i.e. { ref, name, value, onChange, onBlur }
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules,
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
