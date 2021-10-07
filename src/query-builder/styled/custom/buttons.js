import styled from 'styled-components'

export const StyledQueryButtons = styled.div`
  .ant-btn {
    background-color: ${({ theme }) => theme.layout.back};
    border-radius: 4px !important;
    border: 1px solid ${({ theme }) => theme.layout.mid};
    color: ${({ theme }) => theme.layout.primary};
    font-size: 12px;
    line-height: 1.3em;
    min-width: auto;
    padding: ${({ theme }) =>
      `${theme.mixin.sizer(0.5)} ${theme.mixin.sizer(3)}`} !important;
    box-shadow: none;
    height: auto;
    opacity: 1 !important;
    display: inline-block;
    width: auto !important;
    transition: none;

    &.ant-btn-primary {
      color: ${({ theme }) => theme.layout.back};
      background-color: ${({ theme }) => theme.layout.primary};
      border-color: ${({ theme }) => theme.layout.primary};
    }

    &.ant-btn-primary:hover,
    &:hover {
      background-color: ${({ theme }) => theme.layout.hover};
      color: ${({ theme }) => theme.layout.back};
      border-color: ${({ theme }) => theme.layout.hover} !important;
      border-right-width: 0 !important;
    }

    &.action--DELETE {
      padding: ${({ theme }) => theme.spacer} !important;
      color: ${({ theme }) => theme.layout.fore};

      &:hover {
        color: ${({ theme }) => theme.layout.back};
        border-width: 1px !important;
      }
    }
  }

  .group--header .group--actions .ant-btn-group .action--DELETE {
    display: none;
  }

  .ant-btn-group button.ant-btn.ant-btn-primary,
  .ant-btn-group button.ant-btn.ant-btn-default {
    &:hover {
      border-right-width: 1px !important;
    }
  }
`
