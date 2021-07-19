import { useState } from 'react'
import { Input } from './components'
import Layout from '../components/layout'
import { Form, formId, FormSummary } from './form'
import { validateSync, validateAsync } from '../utils'

export default function App() {
  const [data, setData] = useState()
  const id = formId()

  return (
    <Layout
      left={() => (
        <Form id={id} onSubmit={data => setData(data)}>
          <Input
            name="description"
            label="Description"
            opts={{
              required: { value: true, message: 'Please complete description' },
              maxLength: { value: 10, message: 'Max length is 10' }
              // validate: validateSync({ message: 'some message here' })
            }}
          />
          <Input
            name="question"
            label="Question"
            opts={{
              required: { value: true, message: 'Please complete question' }
            }}
          />
        </Form>
      )}
      right={() => <FormSummary id={id} className="border p-4" />}
      output={() => <p>{JSON.stringify(data)}</p>}
    />
  )
}
