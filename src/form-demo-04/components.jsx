export function Input({ register, label, name, opts, errors = {}, ...rest }) {
  // console.log(errors)
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
