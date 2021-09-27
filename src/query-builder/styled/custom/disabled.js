import styled from 'styled-components'

export const StyledQueryDisabled = styled.div`
  /* --------------------------- */
  /* Hiding Trash, Add Rule / Group Btns and Grab icons */
  /* --------------------------- */

  .query-builder-wrapper-disabled .rule--header,
  .query-builder-wrapper-disabled
    .query-builder-wrapper-disabled
    .qb-drag-handler,
  .query-builder-wrapper-disabled .group--actions {
    display: none;
  }

  /* --------------------------- */
  /* Extend Inputs to fill space */
  /* --------------------------- */

  .query-builder-wrapper-disabled .widget--widget {
    width: 100%;
  }
  .query-builder-wrapper-disabled .rule--widget {
    width: calc(100% - 10px);
  }

  .query-builder-wrapper-disabled
    .group--children
    .group--conjunctions
    .ant-btn-group {
    left: 9px;
    padding-left: 25px;
  }

  /* --------------------------- */
  /* Inputs */
  /* --------------------------- */

  .query-builder-wrapper-disabled .ant-input[disabled] {
    color: ${({ colorOptions = [], theme }) =>
      colorOptions[10] || theme.layout.fore};
    border-color: ${({ colorOptions = [], theme }) =>
      colorOptions[12] || theme.layout.mid} !important;
  }

  /* --------------------------- */
  /* Backgrounds - from 30% to 15% */
  /* --------------------------- */

  /* Level 1 */
  .query-builder-wrapper-disabled .group-container .group {
    background: rgb(250 220 115 / 15%);
  }

  /* Level 2 */
  .query-builder-wrapper-disabled .group--children .group-container .group {
    background: rgb(145 225 235 / 15%);
  }

  /* Level 3 */
  .query-builder-wrapper-disabled
    .group--children
    .group-container
    .group--children
    .group-container
    .group {
    background: rgb(240 135 135 / 15%);
  }

  /* Level 4 */
  .query-builder-wrapper-disabled
    .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container
    .group {
    background: rgb(195 210 115 / 15%);
  }

  /* Level 5 */
  .query-builder-wrapper-disabled
    .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container
    .group {
    background: rgb(160 120 200 / 15%);
  }

  /* --------------------------- */
  /* Handles - from 70% to 30% */
  /* --------------------------- */

  /* Level 1 */
  .query-builder-wrapper-disabled .group-container:before {
    background: rgb(250 220 115 / 30%);
  }

  /* Level 2 */
  .query-builder-wrapper-disabled .group--children .group-container:before {
    background: rgb(145 225 235 / 30%);
  }

  /* Level 3 */
  .query-builder-wrapper-disabled
    .group--children
    .group-container
    .group--children
    .group-container:before {
    background: rgb(240 135 135 / 30%);
  }

  /* Level 4 */
  .query-builder-wrapper-disabled
    .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container:before {
    background: rgb(195 210 115 / 30%);
  }

  /* Level 5 */
  .query-builder-wrapper-disabled
    .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container:before {
    background: rgb(160 120 200 / 30%);
  }

  /* Level 1 */
  .query-builder-wrapper-disabled
    .group--children
    > .group-or-rule-container
    > .rule.group-or-rule:before {
    background: rgb(250 220 115 / 30%);
  }

  /* Level 2 */

  .query-builder-wrapper-disabled
    .group--children
    .group--children
    > .group-or-rule-container
    > .rule.group-or-rule:before {
    background: rgb(145 225 235 / 30%);
  }

  /* Level 3 */

  .query-builder-wrapper-disabled
    .group--children
    .group--children
    .group--children
    > .group-or-rule-container
    > .rule.group-or-rule:before {
    background: rgb(240 135 135 / 30%);
  }

  /* Level 4 */

  .query-builder-wrapper-disabled
    .group--children
    .group--children
    .group--children
    .group--children
    > .group-or-rule-container
    > .rule.group-or-rule:before {
    background: rgb(195 210 115 / 30%);
  }

  /* Level 5 */

  .query-builder-wrapper-disabled
    .group--children
    .group--children
    .group--children
    .group--children
    .group--children
    > .group-or-rule-container
    > .rule.group-or-rule:before {
    background: rgb(160 120 200 / 30%);
  }

  /* --------------------------- */
  /* Conjunctions - from 70% to 30% */
  /* --------------------------- */

  /* Level 1 */
  .query-builder-wrapper-disabled .group--conjunctions > .ant-btn-group {
    background: rgb(250 220 115 / 30%);
  }

  /* Level 2 */
  .query-builder-wrapper-disabled
    .group--children
    .group--conjunctions
    .ant-btn-group {
    background: rgb(145 225 235 / 30%);
  }

  /* Level 3 */
  .query-builder-wrapper-disabled
    .group--children
    .group--children
    .group--conjunctions
    .ant-btn-group {
    background: rgb(240 135 135 / 30%);
  }

  /* Level 4 */
  .query-builder-wrapper-disabled
    .group--children
    .group--children
    .group--children
    .group--conjunctions
    .ant-btn-group {
    background: rgb(195 210 115 / 30%);
  }

  /* Level 5 */
  .query-builder-wrapper-disabled
    .group--children
    .group--children
    .group--children
    .group--children
    .group--conjunctions
    .ant-btn-group {
    background: rgb(160 120 200 / 30%);
  }

  /* --------------------------- */
  /* Buttons */
  /* --------------------------- */

  .query-builder-wrapper-disabled .group--conjunctions .ant-btn-group .ant-btn {
    display: none;
  }
  .query-builder-wrapper-disabled
    .group--conjunctions
    .ant-btn-group
    .ant-btn.ant-btn-primary {
    display: block;
    background: ${({ colorOptions = [], theme }) =>
      colorOptions[12] || theme.layout.mid};
    color: #000000;
    border: none;
    border-radius: 5px;
    cursor: not-allowed;
  }

  /* --------------------------- */
  /* Selectors */
  /* --------------------------- */

  .query-builder-wrapper-disabled .ant-select-disabled .ant-select-selector {
    border-color: ${({ colorOptions = [], theme }) =>
      colorOptions[12] || theme.layout.mid} !important;
  }
`
