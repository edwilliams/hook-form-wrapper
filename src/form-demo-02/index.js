import React, { useState } from 'react'
import { Form, FormSummary } from './form'
import { v4 as uuidv4 } from 'uuid'

function FormDemo() {
  const [data, setData] = useState()
  const id = uuidv4()
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '320px' }}>
        <h3>Form</h3>
        <Form
          id={id}
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

      <div style={{ width: '320px' }}>
        <h3>Form Summary</h3>
        <FormSummary id={id} />
      </div>
    </div>
  )
}

export default FormDemo
