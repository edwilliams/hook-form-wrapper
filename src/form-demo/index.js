import { useState } from 'react'
import { Input, Select } from './components'
import { Form, FormGroup } from './form/form'
import { FormSummary } from './form/summary'
import { FormCtxProvider } from './form/context'
// import BigText from './big-text'

const Add = ({ onClick }) => {
  return (
    <button
      onClick={e => {
        e.preventDefault() // prevent form submission
        onClick(123)
      }}
    >
      add trigger
    </button>
  )
}

// techdebt - using FormGroup prop to identify component
// NB FormGroup children must be wrapped (e.g. <Add/>)
export default function App() {
  const [data, setData] = useState()
  const [triggers, setTriggers] = useState([
    { label: 'Time', name: 'time', options: ['', 'hours', 'minutes'] }
  ])

  return (
    <FormCtxProvider>
      <div className="">
        <div className="flex justify-around">
          <div className="w-3/4 px-4">
            <Form title="Summary" onSubmit={data => setData(data)}>
              <div>
                <FormGroup type="FormGroup" title="Details">
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
                      // pattern: { value: /^\d+$/, message: 'Only numbers' }
                    }}
                  />
                </FormGroup>
                {/* <BigText /> */}
              </div>
              <FormGroup type="FormGroup" title="Triggers">
                {triggers.length === 1 ? (
                  <Add
                    formIgnore
                    onClick={() => {
                      setTriggers([
                        ...triggers,
                        { label: 'Date', name: 'date', options: ['', 'weeks', 'months'] }
                      ])
                    }}
                  />
                ) : null}
                {triggers.map(trigger => (
                  <Select {...trigger} />
                ))}
                {triggers.length === 2 && (
                  <Input
                    name="interval"
                    label="Interval"
                    rules={{
                      required: { value: true, message: 'Please complete Interval' }
                    }}
                  />
                )}
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
