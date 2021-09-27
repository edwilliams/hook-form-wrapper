import styled from 'styled-components'

export const StyledQueryConjunctions = styled.div`
  .qb-lite
    .group--header:hover
    .group--header
    .group--conjunctions
    .ant-btn:not(.ant-btn-primary),
  .qb-lite .group--header:hover .group--header .rule_group_ext--drag-handler,
  .qb-lite
    .group--header:not(:hover)
    .group--conjunctions
    .ant-btn:not(.ant-btn-primary),
  .qb-lite .group--header:not(:hover) .rule_group_ext--drag-handler,
  .qb-lite
    .rule_group:not(:hover)
    .group--conjunctions
    .ant-btn:not(.ant-btn-primary),
  .qb-lite .rule_group:not(:hover) .rule_group_ext--drag-handler {
    width: auto;
    padding: 3px 10px;
    overflow: initial;
    opacity: 1;
  }

  /* Hide "Not" */
  .group--header .group--conjunctions .ant-btn:first-child {
    display: none;
  }

  /* As above, when dragged */
  .qb-lite.qb-dragging .group--conjunctions .ant-btn:not(.ant-btn-primary),
  .qb-lite.qb-dragging .rule_group_ext--drag-handler {
    width: auto !important;
    padding: 3px 10px !important;
    overflow: initial !important;
    opacity: 1 !important;
  }

  /* Conjunctions dropdown wrapped in box, same colour as handle */
  .group--conjunctions .ant-btn-group {
    padding: 10px 10px 10px 12px;
    position: relative;
    top: -11px;
    left: -10px;
    margin-bottom: -10px;
    border-bottom-right-radius: ${({ theme }) =>
      theme.vars['border-radius-large']};
  }

  .group--children .group--conjunctions .ant-btn-group {
    left: -12px;
  }

  .group--conjunctions .ant-btn-group[disabled] {
    display: none;
  }

  /* Level 1 */
  .group--conjunctions > .ant-btn-group {
    background: rgb(250 220 115 / 70%);
  }

  /* Level 2 */
  .group--children .group--conjunctions .ant-btn-group {
    background: rgb(145 225 235 / 70%);
  }

  /* Level 3 */
  .group--children .group--children .group--conjunctions .ant-btn-group {
    background: rgb(240 135 135 / 70%);
  }

  /* Level 4 */
  .group--children
    .group--children
    .group--children
    .group--conjunctions
    .ant-btn-group {
    background: rgb(195 210 115 / 70%);
  }

  /* Level 5 */
  .group--children
    .group--children
    .group--children
    .group--children
    .group--conjunctions
    .ant-btn-group {
    background: rgb(160 120 200 / 70%);
  }

  /* Level 5 - hide Add Group button */
  .group--children
    .group--children
    .group--children
    .group--children
    .group--actions
    .ant-btn-group
    .ant-btn.action--ADD-GROUP {
    display: none;
  }

  /* Switch drag handle and conjunctions */
  .group--children .group--conjunctions {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin-left: -34px;
    position: relative;
    z-index: 1;
  }
  .group--drag-handler {
    transform: translate(5px, -5px);
  }
`
