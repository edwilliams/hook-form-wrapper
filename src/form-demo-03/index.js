import { useState } from 'react'
import { formId, Form, FormSummary } from './form'
import { validateAsync } from './utils'

const FormDemo = () => {
  const [data, setData] = useState()
  const id = formId()
  return (
    <div className="flex justify-around">
      <div className="w-1/2">
        <h3 className="text-lg bold underline mb-8">Form</h3>
        <Form
          id={id}
          inputs={[
            {
              name: 'description',
              label: 'Description',
              opts: {
                // required: { value: true, message: 'Please complete description' },
                // maxLength: { value: 10, message: 'Max length is 10' },
                validate: {
                  checkEmail: validateAsync() || 'wibble'
                }
              }
            },
            {
              name: 'question',
              label: 'Question',
              opts: {
                // required: { value: true, message: 'Please complete question' }
              }
            }
          ]}
          className="border p-4"
          onSubmit={data => setData(data)}
        />
        <p className="bg-black text-white font-mono p-2">{JSON.stringify(data)}</p>{' '}
      </div>

      <div className="w-1/2">
        <h3 className="text-lg bold underline mb-8">Form Summary</h3>
        <FormSummary id={id} className="border p-4" />
      </div>
    </div>
  )
}

export default FormDemo
