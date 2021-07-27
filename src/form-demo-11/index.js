import { useState } from 'react'
import { Input } from './components'
import Layout from '../components/layout'
import { Form, FormSummary, FormCtxProvider } from './form'

export default function App() {
  const [data, setData] = useState()

  return (
    <FormCtxProvider>
      <Layout
        title="Capture all form changes in FormSummary (Context)"
        left={() => (
          <Form onSubmit={data => setData(data)}>
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
        right={() => <FormSummary className="border p-4" />}
        output={() => <p>{JSON.stringify(data)}</p>}
        code={`
        <FormCtxProvider>
          <SomeLayout
            someWhere={() => (
              <Form onSubmit={data => setData(data)}>
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
            someWhereElse={() => <FormSummary className="border p-4" />}
          />
        </FormCtxProvider>     
        `}
      />
    </FormCtxProvider>
  )
}
