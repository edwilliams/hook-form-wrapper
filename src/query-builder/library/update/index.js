import { Utils as QbUtils } from 'react-awesome-query-builder'

import { convertNodeLeafToTree } from '../query'
import { addMetaToQuery } from '../meta'

// todo: write tests for this component
export const getImmutableTree = ({ query, meta } = {}) => {
  const __query = addMetaToQuery({ query, meta })
  const _query = convertNodeLeafToTree({
    id: QbUtils.uuid(),
    nodeLeafQuery: __query
  })
  return QbUtils.loadTree(_query)
}
