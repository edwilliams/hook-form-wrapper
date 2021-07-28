import { useState } from 'react'
import { Input } from './components'
import { Form } from './form/form'
import { FormSummary } from './form/summary'
import { FormCtxProvider } from './form/context'

export default function App() {
  const [data, setData] = useState()

  return (
    <FormCtxProvider>
      <div className="">
        <h3 className="text-xl">Details</h3>
        <hr className="mt-4 mb-4 border-blue-500" />
        <div className="flex justify-around">
          <div className="w-3/4 px-4">
            <Form title="Summary" onSubmit={data => setData(data)}>
              <Input
                name="name"
                label="Name"
                rules={{
                  required: { value: true, message: 'Please complete Name' }
                }}
              />
              <Input
                name="description"
                label="Description"
                rules={{
                  required: { value: true, message: 'Please complete Description' },
                  maxLength: { value: 5, message: 'Max length is 5' }
                }}
              />
            </Form>
          </div>

          <div className="w-1/4 px-4">
            <FormSummary className="border p-4" />
          </div>
        </div>
        <div className="mt-4">
          <code>{JSON.stringify(data)}</code>
        </div>
      </div>
    </FormCtxProvider>
  )
}
