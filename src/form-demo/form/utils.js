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
  React.Children.map(children, child =>
    child.props.children
      ? [callback(child), mapRecursive(child.props.children, callback)]
      : callback(child)
  )

const _getFormGroups = ({ children }) => {
  const _children = []

  mapRecursive(children, obj => {
    _children.push(obj)
  })

  // todo: we are only returning FormGroups, but we should also
  // only be returning FormGroups with element containing a name prop
  // i.e. currently errant elements will render a bullet point in the summary
  return _children.filter(child => child.props.type === 'FormGroup')
}

/*
NB errors here are an exact mirroring of errors as they appear in the form
extra logic would be required to capture _all_ errors (via rules)
and conditionally display them
-------------------
each section is a FormGroup
*/
export const getSummaryData = ({ title, ref, children, watch, errors = {}, onClickError }) => {
  const _errors = Object.entries(errors).map(err => ({
    name: err[0],
    desc: err[1].message,
    show: true
  }))

  return {
    title,
    ref,
    sections: _getFormGroups({ children }).map(({ props }) => ({
      active: false,
      name: props.title,
      fields: React.Children.map(props.children, ({ props }) => ({
        name: props.name,
        label: props.label,
        value: props.name ? watch(props.name) : '',
        errors: _errors.filter(({ name }) => name === props.name),
        onClickError
      }))
    }))
  }
}
