import React from 'react'
import FormDemoOne from './form-demo-01'
import FormDemoTwo from './form-demo-02'

function App() {
  return (
    <>
      {/* without for summary */}
      <FormDemoOne />
      <hr />
      {/* with for summary */}
      <FormDemoTwo />
    </>
  )
}

export default App
