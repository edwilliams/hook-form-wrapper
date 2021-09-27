import styled from 'styled-components'

export const StyledQueryTrash = styled.div`
  /* Always show  */
  .qb-lite .rule:hover .rule .widget--valuesrc,
  .qb-lite .rule:hover .rule .rule--drag-handler,
  .qb-lite .rule:hover .rule .rule--header,
  .qb-lite .rule:not(:hover) .widget--valuesrc,
  .qb-lite .rule:not(:hover) .rule--drag-handler,
  .qb-lite .rule:not(:hover) .rule--header {
    opacity: 1;
  }

  .ant-btn.action--DELETE {
    border: 1px solid
      ${({ colorOptions = [], theme }) => colorOptions[12] || theme.layout.mid};
    background: white;
    width: 32px;
    height: 32px;
  }

  .ant-btn.action--DELETE svg path {
    fill: black;
  }
`
