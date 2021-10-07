import { Utils as QbUtils } from 'react-awesome-query-builder'

import { convertNodeLeafToTree } from '../query'
import { addMetaToQuery } from '../meta'

export const getAllOperators = (operators = {}) => {
  return {
    equal: 'equal',
    not_equal: 'not_equal',
    in: 'in',
    not_in: 'not_in',
    greater: 'greater',
    greater_or_equal: 'greater_or_equal',
    less: 'less',
    less_or_equal: 'less_or_equal',
    is_null: 'is_null',
    is_not_null: 'is_not_null',
    like: 'like',
    not_like: 'not_like',
    begins_with: 'begins_with',
    ends_with: 'ends_with',
    ...operators
  }
}

// todo: write tests for this component
export const getImmutableTree = ({ operators = {}, query, meta } = {}) => {
  const __query = addMetaToQuery({ query, meta })
  const _query = convertNodeLeafToTree({
    id: QbUtils.uuid(),
    nodeLeafQuery: __query,
    allOperators: getAllOperators(operators)
  })
  return QbUtils.loadTree(_query)
}
