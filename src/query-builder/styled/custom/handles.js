import styled from 'styled-components'

export const StyledQueryHandles = styled.div`
  .group-container {
    position: relative;
    padding-left: ${({ theme }) => theme.vars['padding-large-horizontal']};
  }

  .group-container:before,
  .group--children .group-container:before,
  .group--children .group-container .group--children .group-container:before,
  .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container:before,
  .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container:before {
    position: absolute;
    z-index: 1;
    content: '';
    left: 0;
    top: 0;
    width: 15px;
    height: 100%;
  }

  /* Level 1 */
  .group-container:before {
    background: rgb(250 220 115 / 70%);
  }

  /* Level 2 */
  .group--children .group-container:before {
    background: rgb(145 225 235 / 70%);
  }

  /* Level 3 */
  .group--children .group-container .group--children .group-container:before {
    background: rgb(240 135 135 / 70%);
  }

  /* Level 4 */
  .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container:before {
    background: rgb(195 210 115 / 70%);
  }

  /* Level 5 */
  .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container
    .group--children
    .group-container:before {
    background: rgb(160 120 200 / 70%);
  }

  /* change existing grey bars to single coloured thicker line*/

  .group--children > .group-or-rule-container > .group-or-rule:after {
    display: none;
  }

  .group--children > .group-or-rule-container > .group-or-rule::before,
  .group--children > .group-or-rule-container > .group-or-rule::after {
    border: none;
  }

  .group--children {
    padding-left: ${({ theme }) => theme.vars['padding-large-horizontal']};
  }

  .group--children > .group-or-rule-container > .rule.group-or-rule:before {
    left: -17px;
    width: 16px;
    height: 8px;
    border: none;
    top: calc(50% - 4px);
  }

  /* Level 1 */
  .group--children > .group-or-rule-container > .rule.group-or-rule:before {
    background: rgb(250 220 115 / 70%);
  }

  /* Level 2 */

  .group--children
    .group--children
    > .group-or-rule-container
    > .rule.group-or-rule:before {
    background: rgb(145 225 235 / 70%);
  }

  /* Level 3 */

  .group--children
    .group--children
    .group--children
    > .group-or-rule-container
    > .rule.group-or-rule:before {
    background: rgb(240 135 135 / 70%);
  }

  /* Level 4 */

  .group--children
    .group--children
    .group--children
    .group--children
    > .group-or-rule-container
    > .rule.group-or-rule:before {
    background: rgb(195 210 115 / 70%);
  }

  /* Level 5 */

  .group--children
    .group--children
    .group--children
    .group--children
    .group--children
    > .group-or-rule-container
    > .rule.group-or-rule:before {
    background: rgb(160 120 200 / 70%);
  }
`
