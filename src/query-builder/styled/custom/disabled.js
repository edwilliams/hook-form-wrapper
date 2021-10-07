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

  /* --------------------------- */
  /* Inputs */
  /* --------------------------- */

  .query-builder-wrapper-disabled .ant-input[disabled] {
    color: ${({ theme }) => theme.layout.fore};
    border-color: ${({ theme }) => theme.layout.mid} !important;
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
    background: ${({ theme }) => theme.layout.mid};
    color: #000000;
    border: none;
    border-radius: 5px;
    cursor: not-allowed;
  }

  /* --------------------------- */
  /* Selectors */
  /* --------------------------- */

  .query-builder-wrapper-disabled .ant-select-disabled .ant-select-selector {
    border-color: ${({ theme }) => theme.layout.mid} !important;
  }
`
