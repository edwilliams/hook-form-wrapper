import { useState } from 'react'
import Form from './form'

// simple RHF demo
const FormDemo = () => {
  const [data, setData] = useState()
  return (
    <div>
      <h3 className="underline text-xl">Simple React Hook Form (RHF) Demo</h3>
      <hr className="mt-4" />
      <Form
        inputs={[
          {
            name: 'description',
            label: 'Description',
            rules: {
              required: { value: true, message: 'Please complete description' },
              maxLength: { value: 10, message: 'Max length is 10' }
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
        onSubmit={data => setData(data)}
      />
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default FormDemo
