import React, { useState } from 'react'
import Form from './form'

function FormDemo() {
  const [data, setData] = useState()
  return (
    <div>
      <Form
        inputs={[
          {
            name: 'description',
            label: 'Description',
            opts: {
              required: { value: true, message: 'Please complete description' },
              maxLength: { value: 10, message: 'Max length is 10' }
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
        onSubmit={data => setData(data)}
      />
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default FormDemo
