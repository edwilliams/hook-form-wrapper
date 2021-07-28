import React, { useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const Form = ({ defaultValues, children, onChange, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({ defaultValues })

  const ref = useRef()

  const values = watch()

  useEffect(() => {
    const bool = true // diff values against previous stored values
    if (bool) onChange(values)
    // eslint-disable-next-line
  }, [values])

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
      <input style={{ display: 'none' }} ref={ref} type="submit" />
    </form>
  )
}

export const FormSummary = ({ data }) => {
  console.log({ data })
  return <p>[check console]</p>
}
