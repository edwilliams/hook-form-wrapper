import styled from 'styled-components'

export const StyledQueryButtons = styled.div`
  .ant-btn {
    color: ${({ colorOptions = [], theme }) =>
      colorOptions[10] || theme.layout.fore};
    font-size: ${({ theme }) => theme.vars['font-size-sm']};
    border: 1px solid
      ${({ colorOptions = [], theme }) => colorOptions[12] || theme.layout.mid};
  }

  /* -------------------------------------- */
  /* Buttons: Add Rule / Add Group */
  /* -------------------------------------- */

  .ant-btn.action--ADD-RULE {
    margin-right: 5px;
  }

  /* Hide icons */
  .ant-btn > .anticon.anticon-plus-circle,
  .ant-btn > .anticon.anticon-plus,
  .group--header .ant-btn.action--DELETE {
    display: none;
  }

  /* Change colours */
  .ant-btn-primary:focus,
  .ant-btn-primary:hover,
  .ant-btn-primary {
    color: ${({ colorOptions = [], theme }) =>
      colorOptions[9] || theme.layout.back};
    border-color: ${({ colorOptions = [], theme }) =>
      colorOptions[1] || theme.layout.primary};
    background: ${({ colorOptions = [], theme }) =>
      colorOptions[1] || theme.layout.primary};
  }
  .ant-btn:focus,
  .ant-btn:hover {
    color: ${({ colorOptions = [], theme }) =>
      colorOptions[10] || theme.layout.fore};
    font-size: ${({ theme }) => theme.vars['font-size-sm']};
    border-color: ${({ colorOptions = [], theme }) =>
      colorOptions[1] || theme.layout.primary};
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    color: ${({ colorOptions = [], theme }) =>
      colorOptions[9] || theme.layout.back};
  }
  .ant-btn-primary:not(:first-child):not(:last-child) {
    border-right-color: ${({ colorOptions = [], theme }) =>
      colorOptions[1] || theme.layout.primary} !important;
    border-left-color: ${({ colorOptions = [], theme }) =>
      colorOptions[1] || theme.layout.primary} !important;
  }
  .ant-btn-group .ant-btn-primary:last-child:not(:first-child),
  .ant-btn-group .ant-btn-primary + .ant-btn-primary {
    border-left-color: ${({ colorOptions = [], theme }) =>
      colorOptions[1] || theme.layout.primary};
  }

  /* Always display buttons */
  .qb-lite .group--header:hover .group--header .group--drag-handler,
  .qb-lite .group--header:hover .group--header .group--actions,
  .qb-lite .group--header:not(:hover) .group--drag-handler,
  .qb-lite .group--header:not(:hover) .group--actions,
  .qb-lite .rule_group:not(:hover) .group--drag-handler,
  .qb-lite .rule_group:not(:hover) .group--actions {
    opacity: 1;
  }

  /* Add space to the left of the Trash Icon */
  .rule--header {
    margin-left: 10px;
  }

  /* Replace Trash Icon - using: https://www.svgbackgrounds.com/tools/svg-to-css/ */
  .rule .ant-btn.action--DELETE {
    background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='trash-alt' class='svg-inline--fa fa-trash-alt fa-w-14 sc-bdfBQB jNkemh' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='currentColor' d='M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3E%3C/path%3E%3C/svg%3E");
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-position-x: 4px;
    border: none;
  }

  /* Replace Chevron Icon */
  .ant-select-arrow {
    background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-down' class='svg-inline--fa fa-chevron-down fa-w-14 sc-bdfBQB jNkemh' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='currentColor' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' %3E%3C/path%3E%3C/svg%3E");
    width: 12px;
    height: 14px;
  }
  .ant-select-arrow svg {
    display: none;
  }

  .rule--header {
    width: 32px;
    height: 32px;
    overflow: hidden;
    border: 1px solid
      ${({ colorOptions = [], theme }) => colorOptions[12] || theme.layout.mid};
    padding: 4px;
    border-radius: ${({ theme }) => theme.vars['border-radius-large']};
  }

  .rule .ant-btn.action--DELETE svg {
    display: none;
  }
`
