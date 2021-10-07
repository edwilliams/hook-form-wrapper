import React, { createContext, useState } from 'react'
import { produce } from 'immer'

export const Context = createContext({
  data: {},
  setData: () => {}
})

export const CtxProvider = ({ children }) => {
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
      ],
      queryBuilderErrors: {}
    },
    setData: ({ key, val }) => {
      setState(
        produce(draft => {
          draft.data[key] = val
        })
      )
    }
  })

  return <Context.Provider value={state}>{children}</Context.Provider>
}
