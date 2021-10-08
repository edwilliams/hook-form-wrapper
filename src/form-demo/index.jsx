import React, { useContext, useEffect, useRef } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import { CtxProvider as _CtxProvider } from './context'
import * as Components from './components'

import { Context } from './context'
import { isEmptyObject, getSummarySections } from './utils'

const FormNew = ({ showSubmit, title, defaultValues, children, onSubmit }) => {
  const { data, setData } = useContext(Context)
  // const [rules, setRules] = useState([])

  const methods = useForm({ mode: 'all', defaultValues })

  const {
    handleSubmit,
    formState: { errors },
    watch,
    setFocus
    // setError
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
    e.preventDefault()
    setSummaryData()
    if (isEmptyObject(data.queryBuilderErrors)) {
      handleSubmit(obj => onSubmit({ ...obj, query: data.queryBuilderQuery }))(
        e
      )
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={submit} onChange={setSummaryData}>
        {React.Children.map(children, child => {
          if (!child) {
            return
          } else {
            return child
            // return React.createElement(child.type, {
            //   ...child.props,
            //   setError
            // })
          }
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

export default FormNew
export const CtxProvider = _CtxProvider
export const Group = Components.Group
export const Summary = Components.Summary
export const Input = Components.Input
export const QueryBuilder = Components.QueryBuilder
