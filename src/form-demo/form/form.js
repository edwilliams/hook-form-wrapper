import React, { useContext, useEffect, useRef } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import { FormContext } from './context'
import { getSummarySections } from './utils'

export const Form = ({
  showSubmit,
  title,
  defaultValues,
  children,
  onSubmit
}) => {
  const { data, setData } = useContext(FormContext)
  // const [rules, setRules] = useState([])

  const methods = useForm({ mode: 'all', defaultValues })

  const {
    handleSubmit,
    formState: { errors },
    watch,
    setFocus
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
      const sections = getSummarySections({
        children,
        errors,
        queryBuilderErrors: data.queryBuilderErrors,
        watch,
        onClickError: ({ name }) => setFocus(name)
      })
      setData({ key: 'title', val: title })
      setData({ key: 'ref', val: ref })
      setData({ key: 'sections', val: sections })
    }, 0)
  }

  useEffect(() => {
    setSummaryData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submit = e => {
    setSummaryData()
    handleSubmit(onSubmit)(e)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={submit} onChange={setSummaryData}>
        {React.Children.map(children, child => {
          if (!child) return
          else return child
        })}
        <input
          style={{ display: showSubmit ? 'block' : 'none' }}
          ref={ref}
          type="submit"
        />
      </form>
    </FormProvider>
  )
}

// NB element wrapping children may be div, fieldset or legend
export const FormGroup = ({ title, children }) => (
  <div className="mt-4" data-title={title}>
    <h3 className="text-xl">{title}</h3>
    <hr className="mt-4 mb-4 border-blue-500" />
    <div>{children}</div>
  </div>
)
