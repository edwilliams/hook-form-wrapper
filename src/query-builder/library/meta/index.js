export const convertMetaToFields = ({
  meta,
  validations = {},
  formMeta,
  onError
}) => {
  const fields = {}

  meta.forEach(({ DisplayName, Type, Attribute, Values }) => {
    if (Type === 'List') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'multiselect',
        valueSources: ['value'],
        fieldSettings: {
          listValues: Values.map(({ Value }) => Value),
          validateValue: val => {
            const hasValidation = val && typeof validations.List === 'function'
            if (hasValidation) {
              const isValid = validations.List(val)
              if (!isValid)
                onError({
                  formMeta,
                  displayName: DisplayName,
                  type: 'multiselect',
                  value: val
                })
              return isValid
            } else {
              return true
            }
          }
        }
      }
    } else if (Type === 'Int' || Type === 'Decimal') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'number',
        valueSources: ['value'],
        preferWidgets: ['number'],
        fieldSettings: {
          validateValue: val => {
            const hasValidation = val && typeof validations.Int === 'function'
            if (hasValidation) {
              const isValid = validations.Int(val)
              if (!isValid)
                onError({
                  formMeta,
                  displayName: DisplayName,
                  type: 'number',
                  value: val
                })
              return isValid
            } else {
              return true
            }
          }
        }
      }
    } else if (Type === 'Boolean') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'boolean',
        operators: ['equal'],
        valueSources: ['value'],
        fieldSettings: {
          validateValue: val => {
            const hasValidation =
              val && typeof validations.Boolean === 'function'
            if (hasValidation) {
              const isValid = validations.Boolean(val)
              if (!isValid)
                onError({
                  formMeta,
                  displayName: DisplayName,
                  type: 'boolean',
                  value: val
                })
              return isValid
            } else {
              return true
            }
          }
        }
      }
    } else if (Type === 'DateTime') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'datetime',
        fieldSettings: {
          validateValue: val => {
            const hasValidation =
              val && typeof validations.DateTime === 'function'
            if (hasValidation) {
              const isValid = validations.DateTime(val)
              if (!isValid)
                onError({
                  formMeta,
                  displayName: DisplayName,
                  type: 'datetime',
                  value: val
                })
              return isValid
            } else {
              return true
            }
          }
        }
      }
      // default is String
    } else {
      fields[Attribute] = {
        label: DisplayName,
        type: 'text',
        fieldSettings: {
          validateValue: val => {
            const hasValidation =
              val && typeof validations.String === 'function'
            if (hasValidation) {
              const isValid = validations.String(val)
              if (!isValid)
                onError({
                  formMeta,
                  displayName: DisplayName,
                  type: 'text',
                  value: val
                })
              return isValid
            } else {
              return true
            }
          }
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
    : Type === 'List'
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
