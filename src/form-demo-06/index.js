import { useState } from 'react'
import { Input, InputWrapped, CheckboxWrapped } from './components'
import Layout from '../components/layout'
import { Form, formId, FormSummary } from './form'

export default function App() {
  const [data, setData] = useState()
  const id = formId()

  return (
    <Layout
      title="RHF using 'smart components' - uncontrolled and controlled (Ant Design)... w/ Checkbox"
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
          <InputWrapped
            name="question"
            label="Question"
            rules={{
              required: { value: true, message: 'Please complete question' }
            }}
          />
          <CheckboxWrapped
            name="somebox"
            label="Some Box"
            rules={{
              required: { value: true, message: 'Please complete some box' }
            }}
          />
        </Form>
      )}
      right={() => <FormSummary id={id} className="border p-4" />}
      output={() => <p>{JSON.stringify(data)}</p>}
      code={`
      <Form id={id} onSubmit={data => setData(data)}>
        <Input
          name="description"
          label="Description"
          rules={{
            required: { value: true, message: 'Please complete description' },
            maxLength: { value: 10, message: 'Max length is 10' }
          }}
        />
        <InputWrapped
          name="question"
          label="Question"
          rules={{
            required: { value: true, message: 'Please complete question' }
          }}
        />
        <CheckboxWrapped
          name="somebox"
          label="Some Box"
          rules={{
            required: { value: true, message: 'Please complete some box' }
          }}
        />
      </Form>`}
    />
  )
}
