import { useState } from 'react'
import { Input } from './components'
import Layout from '../components/layout'
import { Form, formId, FormSummary } from './form'

export default function App() {
  const [data, setData] = useState()
  const [inputs, setInputs] = useState([
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
  ])

  const id = formId()

  console.log(inputs.length)

  return (
    <Layout
      title="Dynamically render new input"
      left={() => (
        <Form id={id} onSubmit={data => setData(data)}>
          {inputs.map(input => (
            <Input key={input.name} {...input} />
          ))}
          {inputs.length === 2 && (
            <button
              onClick={() => {
                setInputs([
                  ...inputs,
                  {
                    name: 'another',
                    label: 'Another',
                    rules: {
                      required: { value: true, message: 'Please complete another' }
                    }
                  }
                ])
              }}
            >
              click to create new input
            </button>
          )}
        </Form>
      )}
      right={() => <FormSummary id={id} className="border p-4" />}
      output={() => <p>{JSON.stringify(data)}</p>}
      code={`
      `}
    />
  )
}
