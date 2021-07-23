import { useState } from 'react'
import { InputWrapped } from './components'
import Layout from '../components/layout'
import { Form, formId, FormSummary } from './form'

export default function App() {
  const [data, setData] = useState()
  const inputs = [
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
  ]

  const idOne = formId()
  const idTwo = formId()

  return (
    <Layout
      title="Dynamically render new input ( instances)"
      left={() => (
        <div>
          <Form id={idOne} onSubmit={data => setData(data)}>
            {inputs.map(input => (
              <InputWrapped key={input.name} {...input} />
            ))}
          </Form>
          <Form id={idTwo} onSubmit={data => setData(data)}>
            {inputs.map(input => (
              <InputWrapped key={input.name} {...input} />
            ))}
          </Form>
        </div>
      )}
      right={() => (
        <div>
          <FormSummary id={idOne} className="border p-4" />
          <FormSummary id={idTwo} className="border p-4" />
        </div>
      )}
      output={() => <p>{JSON.stringify(data)}</p>}
      code={`
      `}
    />
  )
}
