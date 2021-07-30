import { useState } from 'react'
import { Input, InputWrapped } from './components'
import { Form, FormGroup } from './form/form'
import { FormSummary } from './form/summary'
import { FormCtxProvider } from './form/context'
// import BigText from './big-text.jsx'

// techdebt - using FormGroup prop to identify component
export default function App() {
  const [data, setData] = useState()

  return (
    <FormCtxProvider>
      <div className="">
        <div className="flex justify-around">
          <div className="w-3/4 px-4">
            <Form title="Summary" onSubmit={data => setData(data)}>
              <FormGroup type="FormGroup" title="Details">
                <InputWrapped
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
                    // pattern: { value: /^\d+$/, message: 'Only numbers' }
                  }}
                />
              </FormGroup>
              <FormGroup type="FormGroup" title="Questions">
                <Input
                  name="colour"
                  label="Colour"
                  rules={{
                    required: { value: true, message: 'Please complete Colour' }
                  }}
                />
              </FormGroup>
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
