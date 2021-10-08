import React, { useState } from 'react'
import Form, { CtxProvider, Summary, Group, Input, QueryBuilder } from './index'

// const Button = ({ text, onClick }) => {
//   return (
//     <button
//       onClick={e => {
//         e.preventDefault() // prevent form submission
//         onClick()
//       }}
//     >
//       {text}
//     </button>
//   )
// }

const Demo = () => {
  const [demo, setDemo] = useState()

  // const [showQueryBuilder, setShowQueryBuilder] = useState(false)

  const smartSummary = true

  return (
    <CtxProvider>
      <Form title="Summary" showSubmit={!smartSummary} onSubmit={setDemo}>
        <Group type="FormGroup" title="Details">
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
        </Group>

        <Group type="FormGroup" title="Queries">
          <QueryBuilder.Component
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
            immutableTree={QueryBuilder.getImmutableTree()}
            validations={{
              String: val => val.length < 5
            }}
          />
        </Group>
      </Form>

      {smartSummary ? (
        <Summary className="border p-4" />
      ) : (
        <Summary className="border p-4">
          <p>hello</p>
        </Summary>
      )}

      <br />
      <br />

      <code
        style={{
          background: 'black',
          color: 'white',
          display: 'block',
          padding: '10px'
        }}
      >
        {JSON.stringify(demo)}
      </code>
    </CtxProvider>
  )
}

export default Demo
