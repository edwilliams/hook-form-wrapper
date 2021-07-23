import React, { useState, useRef } from 'react'
import cx from 'classnames'
import { useForm } from 'react-hook-form'

import { v4 as uuidv4 } from 'uuid'

const handler = {
  get: (target, prop) => target[prop] || {}
}

window.formProxy = new Proxy({}, handler)

export const formId = () => uuidv4()

export const Form = ({ id, defaultValues, children, onSubmit }) => {
  const _form = useForm({ mode: 'all', defaultValues })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = _form

  window.formProxy[id] = {
    ref: useRef(),
    _form,
    // NB added watch means Proxy is updated via onKeyUp, rather than just via validation
    values: _form.watch()
  }

  return (
    <form data-id={id} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        if (!child) return

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
      <input type="submit" />
    </form>
  )
}

export const FormSummary = ({ id, className }) => {
  const [data, setData] = useState({})

  handler.set = (target, prop, value) => {
    target[prop] = value
    console.log(value.values)
    setData(value.values)
    return true
  }

  return (
    <div data-id={id} className={cx('', className)}>
      <p>summary</p>
      <hr className="mb-2 mt-2" />
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
