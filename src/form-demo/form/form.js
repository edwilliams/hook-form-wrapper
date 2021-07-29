import React, {
  useContext,
  useEffect,
  useRef
  // useState
} from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import { FormContext } from './context'
import { getSummaryData } from './utils'

export const Form = ({ title, defaultValues, children, onSubmit }) => {
  const { data, setData } = useContext(FormContext)
  // const [rules, setRules] = useState([])

  const methods = useForm({ mode: 'all', defaultValues })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = methods

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
        ...getSummaryData({
          title,
          ref,
          children, // React.Children.count(children) === 1 ? [children] : children, //React.Children.map((children, child) => child),
          errors,
          watch
        })
      })
    }, 100)
  }

  useEffect(() => {
    setSummaryData()
  }, [])

  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  )
}

// NB element wrapping children may be div, fieldset or legend
export const FormGroup = ({ title, children }) => (
  <div data-title={title}>
    <h3 className="text-xl">{title}</h3>
    <hr className="mt-4 mb-4 border-blue-500" />
    <div>{children}</div>
  </div>
)
