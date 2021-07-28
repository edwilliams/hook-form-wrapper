import { createContext, useState } from 'react'

export const FormContext = createContext({
  data: {},
  setData: () => {}
})

export const FormCtxProvider = ({ children }) => {
  const [state, setState] = useState({
    data: {},
    setData: data => {
      // NB better to use immer
      setState({ ...state, data })
    }
  })

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>
}
