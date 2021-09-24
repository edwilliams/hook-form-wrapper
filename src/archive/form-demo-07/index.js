import { useState } from 'react'
import { Input, CheckboxWrapped } from './components'
import Layout from '../components/layout'
import { Form, formId, FormSummary } from './form'

export default function App() {
  const [data, setData] = useState()
  const [toggle, setToggle] = useState(false)
  const id = formId()
  return (
    <Layout
      title="dynamic validation"
      left={() => (
        <Form id={id} onSubmit={data => setData(data)}>
          <CheckboxWrapped
            name="checkbox"
            label="Inputs Required?"
            onChange={e => setToggle(e.target.checked)}
          />
          <Input
            name="description"
            label="Description"
            rules={{
              required: { value: toggle, message: 'Please complete description' },
              maxLength: { value: toggle ? 10 : 9999, message: 'Max length is 10' }
            }}
          />
          <Input
            name="question"
            label="Question"
            rules={{
              required: { value: toggle, message: 'Please complete question' }
            }}
          />
        </Form>
      )}
      right={() => <FormSummary id={id} className="border p-4" />}
      output={() => <p>{JSON.stringify(data)}</p>}
      code={`
      <Form id={id} onSubmit={data => setData(data)}>
        <CheckboxWrapped
          name="checkbox"
          label="Inputs Required?"
          onChange={e => setToggle(e.target.checked)}
        />
        <Input
          name="description"
          label="Description"
          disabled={!toggle}
          rules={{
            required: { value: toggle, message: 'Please complete description' },
            maxLength: { value: toggle ? 10 : 9999, message: 'Max length is 10' }
          }}
        />
        <Input
          name="question"
          label="Question"
          disabled={!toggle}
          rules={{
            required: { value: toggle, message: 'Please complete question' }
          }}
        />
      </Form>
      `}
    />
  )
}
