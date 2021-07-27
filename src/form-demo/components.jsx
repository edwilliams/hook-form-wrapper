import { useController } from 'react-hook-form'
import { Input as InputAntD } from 'antd'
import 'antd/lib/input/style/index.css'

export function Input({ control, label, name, rules, errors }) {
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
