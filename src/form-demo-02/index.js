import { validateSync, validateAsync } from './utils'
import { useState } from 'react'
import { formId, Form, FormSummary } from './form'
import Layout from '../components/layout'

// form broken into 2 separate parts and custom validation
// form with input level validation using RHF
const FormDemo = () => {
  const [data, setData] = useState()
  const id = formId()
  return (
    <Layout
      left={() => (
        <Form
          id={id}
          inputs={[
            {
              name: 'description',
              label: 'Description',
              opts: {
                required: { value: true, message: 'Please complete description' },
                maxLength: { value: 10, message: 'Max length is 10' },
                validate: validateAsync
              }
            },
            {
              name: 'question',
              label: 'Question',
              opts: {
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
