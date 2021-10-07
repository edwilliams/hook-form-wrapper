import styled from 'styled-components'

export const StyledQueryHeader = styled.div`
  .group--header {
    margin: 0;
    padding: 0;
    position: relative;
    top: ${({ theme }) => theme.mixin.sizer(-0.5)};
    margin-bottom: ${({ theme }) => theme.mixin.sizer(-0.5)};

    &.one--child > .group--conjunctions > .ant-btn-group {
      display: none;
    }

    > .group--conjunctions {
      position: relative;
      left: calc(-1px - ${({ theme }) => theme.spacer});
      border-radius: 0 0 4px 0;
      min-height: 33px;
      border-right: 1px solid ${({ theme }) => theme.layout.mid};
      border-bottom: 1px solid ${({ theme }) => theme.layout.mid};

      .ant-btn-group {
        padding: ${({ theme }) => theme.mixin.sizer(0.5)};
        padding-left: 0;
        margin: 0;
        left: 0;
        right: 0;
        top: 0;

        .ant-btn {
          border-radius: 4px 0 0 4px !important;

          &:first-child {
            display: none;
          }
        }

        .ant-btn-primary {
          border-color: ${({ theme }) => theme.layout.primary} !important;
        }

        .ant-btn:last-child {
          border-radius: 0 4px 4px 0 !important;
        }
      }

      .qb-drag-handler {
        position: absolute;
        left: 0;
        top: 6px;
        opacity: 1 !important;
        margin: 2px ${({ theme }) => theme.spacer} 0 0;

        svg {
          fill: ${({ theme }) => theme.layout.fore};
          transform: scaleX(0.8);
        }
      }
    }

    > .group--actions {
      opacity: 1 !important;

      .ant-btn-group {
        .ant-btn + .ant-btn {
          margin-left: ${({ theme }) => theme.spacer};
        }

        .action--ADD-RULE,
        .action--ADD-GROUP {
          height: 25px;

          .anticon {
            display: none;

            & + span {
              margin: 0;
            }
          }
        }
      }
    }
  }

  .group .group .group--header {
    .group--conjunctions {
      padding-left: ${({ theme }) => theme.mixin.sizer(3)};
    }

    .ant-btn-group {
      padding-top: ${({ theme }) => theme.mixin.sizer(0.5)};
    }

    .group--conjunctions {
      top: 0;
    }
  }
`
