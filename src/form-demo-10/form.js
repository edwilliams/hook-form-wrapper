import React, { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import { useForm } from 'react-hook-form'

import useEventListener from '@use-it/event-listener'

import { v4 as uuidv4 } from 'uuid'

import { triggerFormChange } from './utils'

export const formId = () => uuidv4()

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
    triggerFormChange({ id, ref, values })
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

export const FormSummary = ({ id, className }) => {
  const [values, setValues] = useState({})
  const [ref, setRef] = useState({})

  useEventListener('cmp-form-onchange', ({ detail }) => {
    if (detail.id === id) {
      setValues(detail.values)
      setRef(detail.ref)
    }
  })

  return (
    <div data-id={id} className={cx('', className)}>
      {values && <p>{JSON.stringify(values)}</p>}
      <button
        className="border p-2 mt-2 cursor-pointer"
        onClick={() => ref.current && ref.current.click()}
      >
        submit
      </button>
    </div>
  )
}
