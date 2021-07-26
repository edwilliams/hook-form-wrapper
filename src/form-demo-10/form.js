import React, { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import { useForm } from 'react-hook-form'

import useEventListener from '@use-it/event-listener'

import { v4 as uuidv4 } from 'uuid'

import { triggerFormChange } from './utils'

export const formId = () => uuidv4()

const store = {}

/*
NB this is happening for CustomEvents and for Proxy :-(
Warning: Cannot update a component (`FormSummary`) while rendering a different component (`Form`).
To locate the bad setState() call inside `Form`,
follow the stack trace as described in https://reactjs.org/link/setstate-in-render
*/

export const Form = ({ id, defaultValues, children, onSubmit }) => {
  const _form = useForm({ defaultValues })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = _form

  const ref = useRef()

  const values = _form.watch()

  useEffect(() => {
    store[id] = { ref, values }
    triggerFormChange()
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
      <input type="submit" />
    </form>
  )
}

export const FormSummary = ({ id, className }) => {
  const [data, setData] = useState({})

  useEventListener('cmp-form-onchange', () => {
    setData(store[id])
  })

  return (
    <div data-id={id} className={cx('', className)}>
      {data && <p>{JSON.stringify(data.values)}</p>}
      {/* <button className="border p-2 mt-2 cursor-pointer" onClick={() => data.ref.current.click()}>
        submit
      </button> */}
    </div>
  )
}
