import React, { useContext, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { Context } from './context'

export const Form = ({ defaultValues, children, onSubmit }) => {
  const { setData } = useContext(Context)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({ defaultValues })

  const ref = useRef()

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={() => setData({ ref, values: watch() })}>
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

export const FormSummary = () => {
  const { data } = useContext(Context)
  return (
    <div>
      {data.values && <p>{JSON.stringify(data.values)}</p>}
      <button className="border p-2 mt-2 cursor-pointer" onClick={() => data.ref?.current.click()}>
        submit
      </button>
    </div>
  )
}
