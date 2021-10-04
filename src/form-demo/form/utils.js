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
export const getSummarySections = ({
  children,
  watch,
  errors = {},
  queryBuilderErrors = {},
  onClickError
}) => {
  const _errors = Object.entries(errors).map(err => ({
    name: err[0],
    desc: err[1].message,
    show: true
  }))

  const _queryBuilderErrors = Object.entries(queryBuilderErrors).map(err => ({
    name: err[0],
    desc: err[1].message,
    show: true
  }))

  // techdebt: form elements must be children - not grandchildren - of FormGroup
  return _getFormGroups({ children }).map(({ props }) => {
    const _children = React.Children.toArray(props.children).filter(
      ({ props }) => props.name
    )

    const fields = React.Children.map(_children, ({ props }) => {
      return {
        name: props.name,
        label: props.label,
        value: props.name ? watch(props.name) : '',
        errors:
          props.formElementType === 'query-builder'
            ? _queryBuilderErrors.filter(({ name }) => name === props.name)
            : _errors.filter(({ name }) => name === props.name),
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
