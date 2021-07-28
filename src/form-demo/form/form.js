import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { FormContext } from './context'
import { getSummaryData } from './utils'

export const Form = ({ title, defaultValues, children, onSubmit }) => {
  const { data, setData } = useContext(FormContext)
  // const [rules, setRules] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm({ mode: 'all', criteriaMode: 'all', defaultValues })

  const ref = useRef()

  // NB here in case we need rules for FormSummary
  // useEffect(() => {
  //   const rules = React.Children.map(children, child => {
  //     return { name: child.props.name, rules: child.props.rules }
  //   })
  //   setRules(rules)
  // }, [])

  const setSummaryData = () => {
    // techdebt
    setTimeout(() => {
      setData({
        ...data,
        ...getSummaryData({ title, ref, children, errors, watch })
      })
    }, 100)
  }

  useEffect(() => {
    setSummaryData()
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={setSummaryData}>
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
