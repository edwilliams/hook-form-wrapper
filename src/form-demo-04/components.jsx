export function Input({ register, name, ...rest }) {
  return <input {...register(name)} {...rest} />
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
