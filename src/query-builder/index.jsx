import React from 'react'
import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'
import getConfig from './config'

import { convertTreeToNodeLeaf } from './library/query'
import { getAllOperators, getImmutableTree } from './library/update'

import { GlobalAnt, ScopedAnt } from './styled/antd'
import { GlobalQueryBuilderStyles } from './styled/raqb'
import { withStyles } from './styled/custom'

const noop = () => {}

const QueryBuilder = ({
  readonly,
  disabled,
  metaPayload = [],
  immutableTree = null,
  operators = {},
  operatorsAllowed = {},
  convertValue = null,
  validations,
  formMeta,
  onChange = noop,
  onError = noop
}) => {
  const initialConfig = getConfig({
    readonly: readonly || disabled,
    meta: metaPayload,
    operators,
    operatorsAllowed,
    validations,
    formMeta,
    onError
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
                  allOperators: getAllOperators(operators),
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

export default {
  Component: withStyles(QueryBuilder),
  getImmutableTree
}
