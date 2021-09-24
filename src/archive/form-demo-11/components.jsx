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
