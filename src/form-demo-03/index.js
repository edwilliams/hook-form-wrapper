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
      left={() => (
        <Form
          id={id}
          validation={{
            description: Joi.string().max(10).required(),
            question: Joi.string().required()
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
          onSubmit={data => {
            console.log(data)
            setData(data)
          }}
        />
      )}
      right={() => <FormSummary id={id} className="border p-4" />}
      output={() => <p>{JSON.stringify(data)}</p>}
    />
  )
}

export default FormDemo
