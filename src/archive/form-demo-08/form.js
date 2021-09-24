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
    formState: { errors },
    control
  } = useForm({ defaultValues })

  submitIds[id] = { ref: useRef(), errors }

  const names = Array.isArray(children)
    ? children.map(({ props }) => props.label)
    : [children.props.label]
  submitIds[id].names = names

  const _children = Array.isArray(children) ? children : [children]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {_children.map(child => {
        const opts = {
          ...child.props,
          register,
          key: child.props.name,
          errors: errors[child.props.name] || {},
          control // review passing this in for controlled and uncontrolled comps
        }

        // if (child.props.controlled) opts.control = control

        return child.props.name && typeof child.props.name === 'string'
          ? React.createElement(child.type, opts)
          : child
      })}
      <input style={{ display: 'none' }} ref={submitIds[id].ref} type="submit" />
    </form>
  )
}

export const FormSummary = ({ id, className }) => {
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

  return (
    <div data-id={id} className={cx('', className)}>
      {submitIds[id].names.map(name => {
        return <p key={name}>Name: {name}</p>
      })}
      <hr className="mb-2 mt-2" />
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
