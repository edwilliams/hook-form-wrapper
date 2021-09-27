import styled from 'styled-components'

export const StyledQueryBackgrounds = styled.div`
  .group-or-rule-container {
    background: white;
    border-radius: ${({ theme }) => theme.vars['border-radius-large']};
  }

  /* Level 1 */
  .group-container .group {
    background: rgb(250 220 115 / 30%);
  }

  /* Level 2 */
  .group--children .group-container .group {
    background: rgb(145 225 235 / 30%);
  }

  /* Level 3 */
  .group--children .group-container .group--children .group-container .group {
    background: rgb(240 135 135 / 30%);
  }

  /* Level 4 */
  .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container
    .group {
    background: rgb(195 210 115 / 30%);
  }

  /* Level 5 */
  .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container
    .group {
    background: rgb(160 120 200 / 30%);
  }
  .rule-container:not(.rule-with-error) {
    .rule.group-or-rule,
    .group {
      border-left: none;
      border-right: 1px solid
        ${({ colorOptions = [], theme }) =>
          colorOptions[12] || theme.layout.mid};
      border-top: 1px solid
        ${({ colorOptions = [], theme }) =>
          colorOptions[12] || theme.layout.mid};
      border-bottom: 1px solid
        ${({ colorOptions = [], theme }) =>
          colorOptions[12] || theme.layout.mid};
    }
  }
  .rule-with-error {
    .rule--error {
      display: none;
    }
  }
`
