import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ inputs, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(({ name, label, opts = {} }, key) => {
        return (
          <div key={key}>
            <label>{label}</label>
            <input {...register(name, opts)} />
            {errors[name] && <p>Error: {errors[name].message}</p>}
          </div>
        )
      })}
      <input type="submit" />
    </form>
  )
}
export default Form
