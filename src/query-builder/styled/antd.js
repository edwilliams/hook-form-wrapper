import styled, { createGlobalStyle, css } from 'styled-components'
import core from '../../../node_modules/antd/lib/style/index.css'
import button from '../../../node_modules/antd/lib/button/style/index.css'
import input from '../../../node_modules/antd/lib/input/style/index.css'
import inputNumber from '../../../node_modules/antd/lib/input-number/style/index.css'
import switchCss from '../../../node_modules/antd/lib/switch/style/index.css'
import select from '../../../node_modules/antd/lib/select/style/index.css'
import datePicker from '../../../node_modules/antd/lib/date-picker/style/index.css'
import timePicker from '../../../node_modules/antd/lib/time-picker/style/index.css'

export const ScopedAnt = styled.div`
  ${css`
    ${core}
    ${button}
    ${input}
    ${inputNumber}
    ${switchCss}
  `}
`

export const GlobalAnt = createGlobalStyle(({ theme }) => {
  return css`
    .query-builder-container .query-builder {
      margin: 0;
    }

    ${datePicker}
    ${timePicker}
    ${select}
    .ant-select-item,
    .ant-select-selection-item,
    .ant-select-item-option {
      color: #333e50;
      font-size: 12px;
    }

    /* DatePicker - remove inherited styles */
    .ant-picker-time-panel-cell:before,
    .ant-picker-ok:before,
    .ant-picker-now:before {
      display: none;
    }
    .ant-picker-ok button {
      line-height: initial;
      letter-spacing: initial;
      min-width: initial;
    }

    .ant-picker-time-panel-column {
      overflow-x: hidden;
    }

    /* Hiding popover - not visible in cmp-forms but visible in app-settings */
    .ant-popover,
    .widget--valuesrc {
      display: none !important;
    }
  `
})
