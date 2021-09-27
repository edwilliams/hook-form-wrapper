export const convertMetaToFields = ({ meta, validations = {} }) => {
  const fields = {}

  meta.forEach(({ DisplayName, Type, Attribute, Values }) => {
    if (Type === 'list') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'multiselect',
        valueSources: ['value'],
        fieldSettings: {
          listValues: Values.map(({ Value }) => Value),
          validateValue: val =>
            val && typeof validations.list === 'function' ? validations.list(val) : true
        }
      }
    } else if (Type === 'Int' || Type === 'Decimal') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'number',
        valueSources: ['value'],
        preferWidgets: ['number'],
        fieldSettings: {
          validateValue: val =>
            val && typeof validations.Int === 'function' ? validations.Int(val) : true
        }
      }
    } else if (Type === 'Boolean') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'boolean',
        operators: ['equal'],
        valueSources: ['value'],
        fieldSettings: {
          validateValue: val =>
            val && typeof validations.Boolean === 'function' ? validations.Boolean(val) : true
        }
      }
    } else if (Type === 'DateTime') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'datetime',
        fieldSettings: {
          validateValue: val =>
            val && typeof validations.DateTime === 'function' ? validations.DateTime(val) : true
        }
      }
      // default is String
    } else {
      fields[Attribute] = {
        label: DisplayName,
        type: 'text',
        fieldSettings: {
          validateValue: val =>
            val && typeof validations.String === 'function' ? validations.String(val) : true
        }
      }
    }
  })

  return fields
}

const getType = ({ meta, attribute }) => {
  const { Type } = meta.find(obj => obj.Attribute === attribute) || {}
  return Type === 'DateTime'
    ? 'datetime'
    : Type === 'Int' || Type === 'Decimal'
    ? 'number'
    : Type === 'Boolean'
    ? 'boolean'
    : Type === 'String'
    ? 'text'
    : Type === 'list'
    ? 'multiselect'
    : 'text'
}

export const addMetaToQuery = ({ meta, query }) => {
  const isLeafProperty = ({ key, val }) => {
    return (
      !(key === 'Operator' && val === 'and') &&
      !(key === 'Operands' && Array.isArray(val)) &&
      typeof val !== 'object'
    )
  }

  const addTypeRecursive = obj => {
    for (let key in obj) {
      if (!!obj[key] && typeof obj[key] == 'object') {
        if (isLeafProperty({ key, val: obj[key] })) {
          if (key === 'Attribute') {
            const type = getType({ meta, attribute: obj[key] })
            obj._type = type
          }
        }
        addTypeRecursive(obj[key])
      } else {
        if (isLeafProperty({ key, val: obj[key] })) {
          if (key === 'Attribute') {
            const type = getType({ meta, attribute: obj[key] })
            obj._type = type
          }
        }
      }
    }
  }

  addTypeRecursive(query)

  return query
}
