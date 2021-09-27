import { useState } from 'react'
import { Button, Input, QueryBuilderWrapped } from './components'
import { Form, FormGroup } from './form/form'
import { FormSummary } from './form/summary'
import { FormCtxProvider } from './form/context'
// import BigText from './big-text'

import {
  // validateWithBool
  validateWithQuery
} from './utils'

// techdebt - using FormGroup prop to identify component
// NB FormGroup children must be wrapped (e.g. <Button/>)
export default function App() {
  // storing data to demo form
  const [data, setData] = useState()

  // storing query to pass into validation
  const [query, setQuery] = useState({
    Operator: null,
    Attribute: null,
    Value: null
  })

  const [showQueryBuilder, setShowQueryBuilder] = useState(false)

  const [immutableTree, setImmutableTree] = useState(QueryBuilderWrapped.getImmutableTree())

  const smartSummary = true

  return (
    <FormCtxProvider>
      <div className="">
        <div className="flex justify-around">
          <div className="w-3/4 px-4">
            <Form title="Summary" showSubmit={!smartSummary} onSubmit={data => setData(data)}>
              <div>
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
              </div>

              <FormGroup type="FormGroup" title="Query Builder">
                {!showQueryBuilder ? (
                  <Button
                    formIgnore
                    onClick={() => setShowQueryBuilder(true)}
                    text="Add Query Builder"
                  />
                ) : null}

                <br />
                <br />

                {showQueryBuilder ? (
                  <QueryBuilderWrapped.Component
                    name="qb"
                    label="Query Builder"
                    query={query}
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
                    immutableTree={immutableTree}
                    onChange={({ query, immutableTree }) => {
                      setQuery(query)
                      setImmutableTree(immutableTree)
                    }}
                    validations={{
                      String: val => val.length < 5
                    }}
                    rules={{
                      validate: validateWithQuery({ query, message: 'Please complete a query' })
                      // validate: validateWithBool({
                      //   bool:
                      //     query !== undefined &&
                      //     typeof query === 'object' &&
                      //     query.Operator !== null &&
                      //     query.Attribute !== null,
                      //   message: 'Please complete a query'
                      // })
                    }}
                  />
                ) : null}
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
          <code>{JSON.stringify(data)}</code>
        </div>
      </div>
    </FormCtxProvider>
  )
}
