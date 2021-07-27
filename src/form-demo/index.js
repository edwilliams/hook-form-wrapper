// import { useState } from 'react'
import { Input, InputWrapped } from './components'
import { Form, FormSummary, FormCtxProvider } from './form'

export default function App() {
  // const [data, setData] = useState()

  return (
    <FormCtxProvider>
      <div className="">
        <h3 className="text-xl">Details</h3>
        <hr className="mt-4 mb-4 border-blue-500" />
        <div className="flex justify-around">
          <div className="w-1/2">
            <Form
              // onSubmit={data => setData(data)}
              onSubmit={data => {
                console.log(data)
              }}
            >
              <Input
                name="name"
                label="Name"
                rules={{
                  required: { value: true, message: 'Please complete Name' }
                }}
              />
              <InputWrapped
                name="description"
                label="Description"
                rules={{
                  required: { value: true, message: 'Please complete Description' },
                  maxLength: { value: 10, message: 'Max length is 10' }
                }}
              />
            </Form>
          </div>

          <div className="w-1/2">
            <FormSummary className="border p-4" />
          </div>
        </div>
      </div>
    </FormCtxProvider>
  )
}
