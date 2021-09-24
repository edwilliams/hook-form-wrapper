import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import cx from 'classnames'

import { v4 as uuidv4 } from 'uuid'

export const formId = () => uuidv4()

let submitIds = {}

export const Form = ({ id, inputs, className, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  console.log(errors)

  submitIds[id] = { ref: useRef(), errors, names: inputs.map(({ name }) => name) }

  return (
    <form data-id={id} className={cx('', className)} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(({ name, label, rules = {} }, key) => {
        return (
          <div key={key}>
            <label>{label}</label>
            <br />
            <input {...register(name, rules)} className="border p-2" />
            {errors[name] && <p className="text-red-500">Error: {errors[name].message}</p>}
          </div>
        )
      })}
      <input style={{ display: 'none' }} ref={submitIds[id].ref} type="submit" />
    </form>
  )
}

export const FormSummary = ({ id, className }) => {
  // const [errors, setErrors] = useState([])

  const click = () => {
    submitIds[id].ref.current.click()

    // techdebt: .click() is async
    // setTimeout(() => {
    //   const errors = Object.entries(submitIds[id].errors).map(arr => ({
    //     name: arr[0],
    //     message: arr[1].message
    //   }))
    //   setErrors(errors)
    // }, 0)
  }

  console.log(submitIds[id].names)

  return (
    <div data-id={id} className={cx('', className)}>
      {/* {errors.map(({ name, message }) => {
        return (
          <div>
            <p>Name: {name}</p>
            <p>Message: {message}</p>
            <hr className="mb-2 mt-2" />
          </div>
        )
      })} */}
      <button className="border p-2 mt-2 cursor-pointer" onClick={click}>
        submit
      </button>
    </div>
  )
}
