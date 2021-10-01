import { createContext, useState } from 'react'
// import { produce } from 'immer'

export const FormContext = createContext({
  data: {},
  setData: () => {}
})

export const FormCtxProvider = ({ children }) => {
  const [state, setState] = useState({
    data: {},
    setData: data => {
      // setState(
      //   produce(draft => {
      //     // console.log(draft, x)
      //   })
      // )
      setState({ ...state, data })
    }
  })

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>
}
