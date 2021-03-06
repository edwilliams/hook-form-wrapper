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

  const submit = handleSubmit(({ value, error }) => {
    // todo: if we use JOI we should add errors to the inputs array
    // so it behaved as per RHF
    onSubmit({ value: value, error: error?.details })
  })

  return (
    <form data-id={id} className={cx('', className)} onSubmit={submit}>
      {inputs.map(({ name, label, rules = {} }, key) => {
        return (
          <div key={key}>
            <label>{label}</label>
            <br />
            <input {...register(name, rules)} className="border p-2" />
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

  return (
    <div data-id={id} className={cx('', className)}>
      <button className="border p-2 mt-2 cursor-pointer" onClick={click}>
        submit
      </button>
    </div>
  )
}
