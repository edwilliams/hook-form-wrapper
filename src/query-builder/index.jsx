import React from 'react'
import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'
import getConfig from './config'

import { convertTreeToNodeLeaf } from './library/query'
import { getImmutableTree } from './library/update'

import { GlobalAnt, ScopedAnt } from './styled/antd'
import { GlobalQueryBuilderStyles } from './styled/raqb'
// import { withStyles } from './styled/custom'

const QueryBuilder = ({
  readonly,
  disabled,
  metaPayload = [],
  immutableTree = null,
  operators = {},
  operatorsAllowed = {},
  convertValue = null,
  validations,
  onChange
}) => {
  const initialConfig = getConfig({
    readonly: readonly || disabled,
    meta: metaPayload,
    operators,
    operatorsAllowed,
    validations
  })

  const _query = {
    id: QbUtils.uuid(),
    type: 'group'
  }

  const initialQuery = QbUtils.checkTree(
    QbUtils.loadTree(_query),
    initialConfig
  )

  return (
    <>
      <GlobalAnt />
      <GlobalQueryBuilderStyles />
      <ScopedAnt>
        <div
          className={
            readonly || disabled ? 'query-builder-wrapper-disabled' : ''
          }
        >
          <Query
            {...initialConfig}
            value={immutableTree || initialQuery}
            onChange={immutableTree => {
              onChange({
                immutableTree,
                query: convertTreeToNodeLeaf({
                  allOperators: {
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
                  },
                  convertValue,
                  treeQuery: QbUtils.getTree(immutableTree)
                })
              })
            }}
            renderBuilder={props => (
              <div className="query-builder-container">
                <div className="query-builder qb-lite">
                  <Builder {...props} />
                </div>
              </div>
            )}
          />
        </div>
      </ScopedAnt>
    </>
  )
}

// eslint-disable-next-line
export default {
  Component: QueryBuilder, // withStyles(QueryBuilder),
  getImmutableTree
}
