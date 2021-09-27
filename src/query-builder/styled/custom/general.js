import styled from 'styled-components'

export const StyledQueryGeneral = styled.div`
  /* fonts and colours */
  .ant-input,
  .ant-input-number-input {
    color: ${({ colorOptions = [], theme }) =>
      colorOptions[10] || theme.layout.fore};
    font-size: ${({ theme }) => theme.vars['font-size-sm']};
  }

  /* fix: icon to right of input fields (e.g. search, chevron, etc) */
  .ant-select-selection-item .anticon {
    transform: translateY(-7px);
  }
  .ant-select-selection-item-remove .anticon.anticon-close {
    transform: translateY(0);
  }

  /* remove outlines from inputs */
  .ant-picker-input input,
  .ant-select-selection-search-input,
  .ant-input-number-input,
  .ant-input,
  .ant-select-selection-search-input:focus,
  .ant-input-number-input:focus {
    box-shadow: none !important;
  }

  .ant-input:focus,
  .ant-input-focused {
    border-color: rgba(0, 0, 0, 0);
  }

  /* Changing padding allows box colour to stretch full width */
  .group-or-rule-container {
    padding-right: 0;
  }

  .group-container .group {
    padding-right: ${({ theme }) => theme.vars['padding-small-horizontal']};
  }

  /* Stretch inputs to fill the Rule's container */
  .rule--body {
    display: flex;
  }

  .rule--field,
  .rule--operator,
  .rule--value {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .rule--field .ant-select,
  .rule--operator .ant-select,
  .rule--value .ant-input-number {
    width: 100% !important;
  }

  /* Input height */
  .ant-input {
    height: 32px;
  }

  /* Coloured container */
  .group-or-rule {
    border-top-right-radius: ${({ theme }) =>
      theme.vars['border-radius-large']};
    border-bottom-right-radius: ${({ theme }) =>
      theme.vars['border-radius-large']};
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .group-or-rule-container.rule-container .group-or-rule {
    border-bottom-left-radius: ${({ theme }) =>
      theme.vars['border-radius-large']};
    border-top-left-radius: ${({ theme }) => theme.vars['border-radius-large']};
  }
`
