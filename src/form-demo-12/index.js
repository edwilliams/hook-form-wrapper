import { useState } from 'react'
import { Input } from './components'
import Layout from '../components/layout'
import { Form, FormSummary } from './form'

export default function App() {
  const [data, setData] = useState()
  const [summary, setSummary] = useState()

  return (
    <Layout
      title="Capture all form changes in FormSummary (Lifted state) - BROKEN"
      left={() => (
        <Form
          onChange={data => {
            console.log(data)
            // setSummary(data)
          }}
          onSubmit={data => setData(data)}
        >
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
      right={() => <FormSummary data={summary} className="border p-4" />}
      output={() => <p>{JSON.stringify(data)}</p>}
      code={`
      // console only - as RHF watch run in render or componentWillUpdate, which causes infinite render
      <Form
        onChange={data => {
          console.log(data)
          // setSummary(data)
        }}
        onSubmit={data => setData(data)}
      >
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
      `}
    />
  )
}
