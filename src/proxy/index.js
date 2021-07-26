import { useState } from 'react'
import { Input } from './components'
import Layout from '../components/layout'
import { Form, formId, FormSummary } from './form'
// import { validateSync, validateAsync } from '../utils'

export default function App({ id }) {
  const [data, setData] = useState()
  // const id = formId()

  return (
    <Layout
      title="RHF using 'smart components' - all uncontrolled"
      left={() => (
        <Form id={id} onSubmit={data => setData(data)}>
          <Input
            name="description"
            label="Description"
            rules={{
              required: { value: true, message: 'Please complete description' },
              maxLength: { value: 10, message: 'Max length is 10' }
            }}
          />
          <Input
            name="question"
            label="Question"
            rules={{
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
