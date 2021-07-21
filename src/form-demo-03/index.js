import { useState } from 'react'
import { formId, Form, FormSummary } from './form'
import Layout from '../components/layout'
import Joi from 'joi'

// form with form level validation using JOI
const FormDemo = () => {
  const [data, setData] = useState()
  const id = formId()
  return (
    <Layout
      title="RHF using JOI for validation"
      left={() => (
        <Form
          id={id}
          validation={{
            description: Joi.string().max(10).required().messages({
              'string.empty': 'Please complete description',
              'string.max': 'Max length is {#limit}'
            }),
            question: Joi.string().required().messages({
              'string.empty': 'Please complete question'
            })
          }}
          inputs={[
            {
              name: 'description',
              label: 'Description'
            },
            {
              name: 'question',
              label: 'Question'
            }
          ]}
          onSubmit={data => setData(data)}
        />
      )}
      right={() => <FormSummary id={id} className="border p-4" />}
      output={() => <p className="font-mono">{JSON.stringify(data, null, 2)}</p>}
    />
  )
}

export default FormDemo
