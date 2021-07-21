import { useState } from 'react'
import { validateAsync } from '../utils'
import { formId, Form, FormSummary } from './form'
import Layout from '../components/layout'

// form broken into 2 separate parts and custom validation
// form with input level validation using RHF
const FormDemo = () => {
  const [data, setData] = useState()
  const id = formId()
  return (
    <Layout
      title="RHF using async validation error"
      left={() => (
        <Form
          id={id}
          inputs={[
            {
              name: 'description',
              label: 'Description',
              rules: {
                required: { value: true, message: 'Please complete description' },
                maxLength: { value: 10, message: 'Max length is 10' },
                validate: validateAsync({ message: 'some message here' })
              }
            },
            {
              name: 'question',
              label: 'Question',
              rules: {
                required: { value: true, message: 'Please complete question' }
              }
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
