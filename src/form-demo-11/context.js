import { createContext, useState } from 'react'

export const Context = createContext({
  data: { ref: {}, values: {} },
  setData: () => {}
})

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    data: {},
    setData: data => {
      // NB better to use immer
      setState({ ...state, data })
    }
  })

  return <Context.Provider value={state}>{children}</Context.Provider>
}
