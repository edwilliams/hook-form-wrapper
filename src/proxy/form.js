import React, { useState, useRef } from 'react'
import cx from 'classnames'
import { useForm } from 'react-hook-form'

import { v4 as uuidv4 } from 'uuid'

export const formId = () => uuidv4()

let submitIds = {}

const handler = {
  get: (target, prop) => target[prop] || {}
}

const formProxy = new Proxy({}, handler)

export const Form = ({ id, defaultValues, children, onSubmit }) => {
  const _form = useForm({ defaultValues })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = _form

  const ref = useRef()

  submitIds[id] = { ref, errors }

  formProxy[id] = {
    ref,
    _form,
    // NB added watch means Proxy is updated via onKeyUp, rather than just via validation
    values: _form.watch()
  }

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
  const [errors, setErrors] = useState([])
  const [value, setValue] = useState(null)

  const click = () => {
    // submitIds[id].ref.current.click()

    console.log(value)
    if (value) value.ref.current.click()
    // techdebt: .click() is async
    // setTimeout(() => {
    //   const errors = Object.entries(submitIds[id].errors).map(arr => ({
    //     name: arr[0],
    //     message: arr[1].message
    //   }))
    //   setErrors(errors)
    // }, 0)
  }

  /*
  this is only being set in the first instance
  so while the handler.set function when called has all the data needed inside
  the id is always one - i.e. when it was first set
  we need FormSummary to register a custom event listener - onFormChange (?)
  so technically any FormSummary could render data from any form
  */
  handler.set = (target, prop, value) => {
    target[prop] = value
    console.log({ id, target, prop, value })
    setValue(target[prop])
    // setData(value.values)
    return true
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
