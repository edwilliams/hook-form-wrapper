import React, { useState, useRef } from 'react'
import cx from 'classnames'
import { useForm } from 'react-hook-form'

import { v4 as uuidv4 } from 'uuid'

export const formId = () => uuidv4()

let submitIds = {}

export const Form = ({ id, defaultValues, children, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  submitIds[id] = { ref: useRef(), errors }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name && typeof child.props.name === 'string'
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                    errors: errors[child.props.name] || {}
                  }
                })
              : child
          })
        : children}
      <input style={{ display: 'none' }} ref={submitIds[id].ref} type="submit" />
    </form>
  )
}

export const FormSummary = ({ id, className }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState([])

  const click = () => {
    submitIds[id].ref.current.click()

    // techdebt: .click() is async
    setTimeout(() => {
      const errors = Object.entries(submitIds[id].errors).map(arr => ({
        name: arr[0],
        message: arr[1].message
      }))
      setErrors(errors)
    }, 0)
  }

  // console.log(submitIds[id].names)

  return (
    <div data-id={id} className={cx('', className)}>
      {errors.map(({ name, message }) => {
        return (
          <div>
            <p>Name: {name}</p>
            <p>Message: {message}</p>
            <hr className="mb-2 mt-2" />
          </div>
        )
      })}
      <button className="border p-2 mt-2 cursor-pointer" onClick={click}>
        submit
      </button>
    </div>
  )
}
