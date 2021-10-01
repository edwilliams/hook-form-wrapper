import { createContext, useState } from 'react'
import { produce } from 'immer'

export const FormContext = createContext({
  data: {},
  setData: () => {}
})

export const FormCtxProvider = ({ children }) => {
  const [state, setState] = useState({
    data: {
      ref: {},
      title: '',
      sections: [
        // {
        //   active: false,
        //   name: 'FormGroup Title',
        //   fields: [
        //     {
        //       name: 'form-component',
        //       label: 'Form Component',
        //       value: '',
        //       errors: []
        //     }
        //   ]
        // }
      ]
    },
    setData: ({ key, val }) => {
      setState(
        produce(draft => {
          draft.data[key] = val
        })
      )
    }
  })

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>
}
