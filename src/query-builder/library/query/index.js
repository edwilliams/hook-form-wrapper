import { Utils as QbUtils } from 'react-awesome-query-builder'
import { processRuleFields, processLeafFields } from './process-fields'

const _getType = str =>
  str === 'multiselect'
    ? 'List'
    : str === 'number'
    ? 'Int'
    : str === 'boolean'
    ? 'Boolean'
    : str === 'datetime'
    ? 'DateTime'
    : 'String'

export const convertTreeToNodeLeaf = ({
  allOperators,
  convertValue,
  treeQuery = {}
}) => {
  const recurse = ({ children }) =>
    Object.entries(children)
      .map(val => val[1])
      .map(val => ({
        ...val,
        _type: _getType(val.properties.valueType?.[0])
      }))
      .map(({ _type, type, properties, children1 }) =>
        type === 'rule'
          ? {
              ...processRuleFields({
                type: _type,
                allOperators,
                convertValue,
                treeQuery,
                ...properties
              })
            }
          : {
              Operator: properties.conjunction.toLowerCase(),
              Operands: recurse({ children: children1 })
            }
      )

  return Object.keys(treeQuery.children1).length === 1
    ? recurse({ children: treeQuery.children1 })[0]
    : {
        Operator: treeQuery.properties?.conjunction
          ? treeQuery.properties.conjunction.toLowerCase()
          : 'and',
        Operands: recurse({ children: treeQuery.children1 })
      }
}

export const convertNodeLeafToTree = ({
  nodeLeafQuery = {},
  id = QbUtils.uuid()
}) => {
  const query = {
    id,
    type: 'group',
    children1: {}
  }

  if (nodeLeafQuery.Operator === 'or') {
    query.properties = { conjunction: 'OR' }
  }

  // nodeLeafQuery without Operands i.e. only one
  if (!nodeLeafQuery.Operands) {
    query.children1.obj1 = {
      type: 'rule',
      properties: processLeafFields({ ...nodeLeafQuery })
    }
  } else {
    // if an object has Operands, it's a group. Otherwise it's a rule
    nodeLeafQuery.Operands.forEach((op, a) => {
      // set level 1 children
      if (!op.Operands) {
        query.children1[`obj${a + 1}`] = {
          type: 'rule',
          properties: processLeafFields({ ...op })
        }
      } else {
        query.children1[`obj${a + 1}`] = {
          type: 'group',
          properties: {
            conjunction: op.Operator.toUpperCase()
          },
          children1: {}
        }
        // set level 2 children
        op.Operands.forEach((op, b) => {
          if (!op.Operands) {
            query.children1[`obj${a + 1}`].children1[`obj${a + 1 + b + 1}`] = {
              type: 'rule',
              properties: processLeafFields({ ...op })
            }
          } else {
            query.children1[`obj${a + 1}`].children1[`obj${a + 1 + b + 1}`] = {
              type: 'group',
              properties: {
                conjunction: op.Operator.toUpperCase()
              },
              children1: {}
            }
            // set level 3 children
            op.Operands.forEach((op, c) => {
              if (!op.Operands) {
                query.children1[`obj${a + 1}`].children1[
                  `obj${a + 1 + b + 1}`
                ].children1[`obj${a + 1 + b + 1 + c + 1}`] = {
                  type: 'rule',
                  properties: processLeafFields({ ...op })
                }
              } else {
                query.children1[`obj${a + 1}`].children1[
                  `obj${a + 1 + b + 1}`
                ].children1[`obj${a + 1 + b + 1 + c + 1}`] = {
                  type: 'group',
                  properties: {
                    conjunction: op.Operator.toUpperCase()
                  },
                  children1: {}
                }
                // set level 4 children
                op.Operands.forEach((op, d) => {
                  if (!op.Operands) {
                    query.children1[`obj${a + 1}`].children1[
                      `obj${a + 1 + b + 1}`
                    ].children1[`obj${a + 1 + b + 1 + c + 1}`].children1[
                      `obj${a + 1 + b + 1 + c + 1 + d + 1}`
                    ] = {
                      type: 'rule',
                      properties: processLeafFields({ ...op })
                    }
                  } else {
                    query.children1[`obj${a + 1}`].children1[
                      `obj${a + 1 + b + 1}`
                    ].children1[`obj${a + 1 + b + 1 + c + 1}`].children1[
                      `obj${a + 1 + b + 1 + c + 1 + d + 1}`
                    ] = {
                      type: 'group',
                      properties: {
                        conjunction: op.Operator.toUpperCase()
                      },
                      children1: {}
                    }
                    // set level 5 children
                    op.Operands.forEach((op, e) => {
                      if (!op.Operands) {
                        query.children1[`obj${a + 1}`].children1[
                          `obj${a + 1 + b + 1}`
                        ].children1[`obj${a + 1 + b + 1 + c + 1}`].children1[
                          `obj${a + 1 + b + 1 + c + 1 + d + 1}`
                        ].children1[
                          `obj${a + 1 + b + 1 + c + 1 + d + 1 + e + 1}`
                        ] = {
                          type: 'rule',
                          properties: processLeafFields({ ...op })
                        }
                      } else {
                        if (process.env.NODE_ENV !== 'test') {
                          console.warn('Query Builder: Max nesting 5 levels')
                        }
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  }

  return query
}
