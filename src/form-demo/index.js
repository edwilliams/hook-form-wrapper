import { useState } from 'react'
import { Button, Input, QueryBuilderWrapped } from './components'
import { Form, FormGroup } from './form/form'
import { FormSummary } from './form/summary'
import { FormCtxProvider } from './form/context'
// import BigText from './big-text'

// techdebt - using FormGroup prop to identify component
// NB FormGroup children must be wrapped (e.g. <Button/>)
export default function App() {
  // storing data to demo form
  const [demo, setDemo] = useState()

  const [showQueryBuilder, setShowQueryBuilder] = useState(false)

  const smartSummary = true

  return (
    <FormCtxProvider>
      <div className="">
        <div className="flex justify-around">
          <div className="w-3/4 px-4">
            <Form title="Summary" showSubmit={!smartSummary} onSubmit={setDemo}>
              <FormGroup type="FormGroup" title="Details">
                <Input
                  name="name"
                  label="Name"
                  rules={{
                    required: {
                      value: true,
                      message: 'Please complete Name'
                    }
                  }}
                />
                <Input
                  name="description"
                  label="Description"
                  rules={{
                    required: {
                      value: true,
                      message: 'Please complete Description'
                    },
                    maxLength: { value: 5, message: 'Max length is 5' }
                    // pattern: { value: /^\d+$/, message: 'Only numbers' }
                  }}
                />
              </FormGroup>

              {/* <BigText /> */}

              <FormGroup type="FormGroup" title="Queries">
                {!showQueryBuilder ? (
                  <Button
                    formIgnore
                    onClick={() => setShowQueryBuilder(true)}
                    text="Add Query Builder"
                  />
                ) : null}

                <br />
                <br />

                <QueryBuilderWrapped.Component
                  formElementType="query-builder"
                  name="qb-one"
                  label="Query Builder One"
                  metaPayload={[
                    {
                      Id: 1,
                      DisplayName: 'Device AD Site Name',
                      Type: 'String',
                      Attribute: 'Fizz.String'
                    },
                    {
                      Id: 2,
                      DisplayName: 'Foo - Number',
                      Type: 'Int',
                      Attribute: 'Foo.Int'
                    }
                  ]}
                  immutableTree={QueryBuilderWrapped.getImmutableTree()}
                  validations={{
                    String: val => val.length < 5
                  }}
                />

                <QueryBuilderWrapped.Component
                  formElementType="query-builder"
                  name="qb-two"
                  label="Query Builder Two"
                  metaPayload={[
                    {
                      Id: 1,
                      DisplayName: 'Device AD Site Name',
                      Type: 'String',
                      Attribute: 'Fizz.String'
                    },
                    {
                      Id: 2,
                      DisplayName: 'Foo - Number',
                      Type: 'Int',
                      Attribute: 'Foo.Int'
                    }
                  ]}
                  immutableTree={QueryBuilderWrapped.getImmutableTree()}
                  validations={{
                    String: val => val.length < 5
                  }}
                />
              </FormGroup>
            </Form>
          </div>

          <div className="w-1/4 px-4">
            {smartSummary ? (
              <FormSummary className="border p-4" />
            ) : (
              <FormSummary className="border p-4">
                <p>hello</p>
              </FormSummary>
            )}
          </div>
        </div>
        <div className="mt-4">
          <code>{JSON.stringify(demo)}</code>
        </div>
      </div>
    </FormCtxProvider>
  )
}
