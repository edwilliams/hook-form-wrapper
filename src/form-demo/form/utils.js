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

// NB errors here are an exact mirroring of errors as they appear in the form
// extra logic would be required to capture _all_ errors (via rules)
// and conditionally display them
export const getSummaryData = ({ title, ref, children, watch, errors }) => {
  const _errors = Object.entries(errors).map(err => ({
    name: err[0],
    desc: err[1].message,
    show: true
  }))

  return {
    title,
    ref,
    sections: [
      {
        active: true,
        name: 'todo: get from wrapping fieldset',
        fields: children.map(({ props }) => ({
          name: props.label,
          value: watch(props.name),
          errors: _errors.filter(({ name }) => name === props.name)
        }))
      }
    ]
  }
}
