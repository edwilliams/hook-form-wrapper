import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import cx from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import Joi from 'joi'
import { useValidationResolver } from './hooks'

export const formId = () => uuidv4()

let submitIds = {}

export const Form = ({ id, inputs, validation, className, onSubmit }) => {
  const validationSchema = Joi.object(validation)

  const resolver = useValidationResolver(validationSchema)
  const { handleSubmit, register } = useForm({ resolver })

  submitIds[id] = {
    ref: useRef(),
    // errors,
    names: inputs.map(({ name }) => name)
  }

  const submit = data => {
    console.log(data)
    handleSubmit(onSubmit)
  }

  return (
    <form data-id={id} className={cx('', className)} onSubmit={handleSubmit(data => submit(data))}>
      {inputs.map(({ name, label, opts = {} }, key) => {
        return (
          <div key={key}>
            <label>{label}</label>
            <br />
            <input {...register(name, opts)} className="border p-2" />
            {/* {errors[name] && <p className="text-red-500">Error: {errors[name].message}</p>} */}
          </div>
        )
      })}
      <input style={{ display: 'none' }} ref={submitIds[id].ref} type="submit" />
    </form>
  )
}

export const FormSummary = ({ id, className }) => {
  const click = () => {
    submitIds[id].ref.current.click()
  }

  // console.log(submitIds[id].names)

  return (
    <div data-id={id} className={cx('', className)}>
      <button className="border p-2 mt-2 cursor-pointer" onClick={click}>
        submit
      </button>
    </div>
  )
}
