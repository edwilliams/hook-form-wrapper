import { createContext, useState } from 'react'

export const FormContext = createContext({
  data: { ref: {}, values: {} },
  setData: () => {}
})

export const FormCtxProvider = ({ children }) => {
  const [state, setState] = useState({
    data: {
      // title: 'Summary',
      // sections: [
      //   {
      //     active: true,
      //     name: 'Details',
      //     fields: [
      //       {
      //         name: 'Name',
      //         value: 'wobble',
      //         errors: []
      //       },
      //       {
      //         name: 'Description',
      //         value: 'wibble'
      //         // errors: ['Please complete Description', 'Max length is 10']
      //       }
      //     ]
      //   }
      // ]
    },
    setData: data => {
      // NB better to use immer
      setState({ ...state, data })
    }
  })

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>
}
