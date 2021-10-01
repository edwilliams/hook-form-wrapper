import React from 'react'

/*
e.g.
const data ={
  title: 'Summary',
  ref: {},
  sections: [
    {
      active: true,
      name: 'Details',
      fields: [
        {
          name: 'Name',
          value: 'wobble',
          errors: [{ desc: 'Please complete Name', show: false }]
        },
        {
          name: 'Description',
          value: 'wibble',
          errors: [
            { desc: 'Please complete Description', show: true },
            { desc: 'Description max length is 10', show: false }
          ]
        }
      ]
    }
  ]
}
*/

const mapRecursive = (children, callback) =>
  React.Children.map(children, child => {
    return child === null
      ? null
      : child.props.children
      ? [callback(child), mapRecursive(child.props.children, callback)]
      : callback(child)
  })

const _getFormGroups = ({ children }) => {
  const _children = []

  mapRecursive(children, obj => {
    _children.push(obj)
  })

  return _children.filter(child => child.props.type === 'FormGroup')
}

/*
NB errors here are an exact mirroring of errors as they appear in the form
extra logic would be required to capture _all_ errors (via rules)
and conditionally display them
-------------------
each section is a FormGroup
*/
export const getSummaryData = ({
  ref,
  children,
  watch,
  errors = {},
  onClickError
}) => {
  const _errors = Object.entries(errors).map(err => ({
    name: err[0],
    desc: err[1].message,
    show: true
  }))

  return {
    ref,
    sections: _getFormGroups({ children }).map(({ props }) => {
      const _children = props.children //.filter(React.isValidElement)
      const fields = React.Children.map(_children, child => {
        return {
          name: child?.props.name,
          label: child?.props.label,
          value: child?.props.name ? watch(child?.props.name) : '',
          errors: _errors.filter(({ name }) => name === child?.props.name),
          onClickError
        }
      })

      return {
        active: false,
        name: props.title,
        fields: fields.filter(({ name }) => !!name)
      }
    })
  }
}
