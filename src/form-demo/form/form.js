import React, { useContext, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { FormContext } from './context'

export const Form = ({ title, defaultValues, children, onSubmit }) => {
  const { setData } = useContext(FormContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm({ defaultValues })

  const ref = useRef()

  const change = () => {
    setData({
      ref,
      // values: watch(),
      title
      // todo: transform data here into sections (TDD)
    })
    console.log({
      title,
      sections: []
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={change}>
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
      <input style={{ display: 'none' }} ref={ref} type="submit" />
    </form>
  )
}

export const FieldSet = ({ children }) => <fieldset>{children}</fieldset>
