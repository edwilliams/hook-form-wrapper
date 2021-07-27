import React, { useContext, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { FormContext } from './context'

export const Form = ({ defaultValues, children, onSubmit }) => {
  const { setData } = useContext(FormContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm({ defaultValues })

  const ref = useRef()

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={() => setData({ ref, values: watch() })}>
      {Array.isArray(children)
        ? children.map(child => {
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
          })
        : children}
      <input style={{ display: 'none' }} ref={ref} type="submit" />
    </form>
  )
}
