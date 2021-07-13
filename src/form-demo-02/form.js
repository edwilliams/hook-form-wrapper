import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

let submitIds = {}

export const Form = ({ id, inputs, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  submitIds[id] = { ref: useRef(), errors }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(({ name, label, opts = {} }, key) => {
        return (
          <div key={key}>
            <label>{label}</label>
            <input {...register(name, opts)} />
          </div>
        )
      })}
      <input style={{ display: 'none' }} ref={submitIds[id].ref} type="submit" />
    </form>
  )
}

export const FormSummary = ({ id }) => {
  const [errors, setErrors] = useState([])

  const click = () => {
    submitIds[id].ref.current.click()

    // techdebt: .click() is async
    setTimeout(() => {
      const errors = Object.entries(submitIds[id].errors).map(arr => ({
        name: arr[0],
        message: arr[1].message
      }))
      console.log(submitIds[id].errors)
      setErrors(errors)
    }, 0)
  }

  return (
    <div>
      {errors.map(({ name, message }) => {
        return (
          <div>
            <p>Name: {name}</p>
            <p>Message: {message}</p>
            <hr />
          </div>
        )
      })}
      <button style={{ marginTop: '10px' }} onClick={click}>
        submit
      </button>
    </div>
  )
}
