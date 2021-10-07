import styled from 'styled-components'

export const StyledQueryGeneral = styled.div`
  /* fonts and colors */
  .ant-input,
  .ant-input-number-input {
    color: ${({ theme }) => theme.layout.fore};
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

  /* Changing padding allows box color to stretch full width */
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

  .rule--value {
    margin-right: ${({ theme }) => theme.spacer};

    > .rule--widget,
    > .rule--widget,
    > .rule--widget,
    > .rule--widgey {
      width: 100%;

      > .widget--widget {
        width: 100%;
      }
    }

    .rule--widget--DATETIME,
    .rule--widget--MULTISELECT {
      > .widget--widget {
        > .ant-picker,
        > .ant-select {
          width: 100% !important;
        }
      }
    }
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

  .group--children {
    padding: 0;
    margin: ${({ theme }) => `${theme.spacer} 0 0`};
  }

  .rule-container {
    padding: 0;
    margin-bottom: ${({ theme }) => theme.spacer};

    .rule {
      padding: ${({ theme }) =>
        `${theme.mixin.sizer(0.5)} ${theme.spacer} ${theme.mixin.sizer(
          0.5
        )} ${theme.mixin.sizer(3)}`};
      position: relative;
      border: 1px solid ${({ theme }) => theme.layout.mid};
      border-left: 1px solid ${({ theme }) => theme.layout.mid} !important;
      border-radius: 4px;

      &::after {
        display: none;
      }

      &::before {
        width: calc(2px + ${({ theme }) => theme.spacer}) !important;
        height: ${({ theme }) => theme.mixin.sizer(0.5)} !important;
        border: 1px solid ${({ theme }) => theme.layout.mid} !important;
        border-left-width: 0 !important;
        border-right-width: 0 !important;
        left: calc(-2px - ${({ theme }) => theme.spacer}) !important;
        top: 50% !important;
        margin-top: ${({ theme }) => theme.mixin.sizer(-0.5)} !important;
        box-sizing: content-box !important;
        border-radius: 0 !important;
      }
    }

    .rule--drag-handler {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      opacity: 1 !important;
      width: 14px;
      background-color: ${({ theme }) => theme.layout.light};
      border-right: 1px solid ${({ theme }) => theme.layout.mid};
      border-radius: 4px 0 0 4px;

      svg {
        fill: ${({ theme }) => theme.layout.fore};
      }
    }

    .rule--header {
      opacity: 1 !important;
    }
  }

  .group-container {
    padding: 0 0 0 ${({ theme }) => theme.spacer};
    border: 1px solid ${({ theme }) => theme.layout.mid};
    border-radius: 4px;

    .group {
      position: relative;
      border: none !important;
      border-radius: unset;
      padding: ${({ theme }) =>
        `${theme.mixin.sizer(0.5)} ${theme.spacer} ${theme.spacer}`};

      &::before {
        content: '' !important;
        width: ${({ theme }) => theme.spacer} !important;
        position: absolute;
        left: -${({ theme }) => theme.spacer} !important;
        top: 0 !important;
        bottom: 0 !important;
        height: auto !important;
        border-right: 1px solid ${({ theme }) => theme.layout.mid} !important;
        border-left: none !important;
        border-top: none !important;
        border-bottom: none !important;
        border-radius: 4px 0 0 4px;
      }

      .group {
        &::after {
          content: '';
          display: inline-block !important;
          width: calc(2px + ${({ theme }) => theme.spacer}) !important;
          height: ${({ theme }) => theme.mixin.sizer(0.5)} !important;
          border: 1px solid ${({ theme }) => theme.layout.mid} !important;
          border-left-width: 0 !important;
          border-right-width: 0 !important;
          left: calc(-2px - ${({ theme }) => theme.mixin.sizer(2)}) !important;
          top: 50% !important;
          margin-top: ${({ theme }) => theme.mixin.sizer(-0.5)} !important;
          box-sizing: content-box !important;
          border-radius: 0 !important;
        }
      }
    }
  }
`
