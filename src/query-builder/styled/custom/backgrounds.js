import styled from 'styled-components'

export const StyledQueryBackgrounds = styled.div`
  // Color Shade

  .query-builder-wrapper-disabled {
    .group {
      background-image: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 100%
      );

      &::before,
      .group--conjunctions,
      .group::after,
      .rule::before {
        background-image: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.8) 0%,
          rgba(255, 255, 255, 0.8) 100%
        );
      }
    }
  }

  .group {
    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );

    &::before,
    .group--conjunctions,
    .group::after,
    .rule::before {
      background-image: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 100%
      );
    }
  }

  // Colors
  .group {
    &,
    &::before,
    .group--conjunctions,
    .rule::before {
      background-color: ${({ colorOptions, theme }) =>
        colorOptions.one ? theme.visual[colorOptions.one] : theme.visual.mould};
    }

    .group {
      &,
      &::before,
      .group--conjunctions,
      .rule::before {
        background-color: ${({ colorOptions, theme }) =>
          colorOptions.two
            ? theme.visual[colorOptions.two]
            : theme.visual.lime};
      }

      .group {
        &,
        &::before,
        .group--conjunctions,
        .rule::before {
          background-color: ${({ colorOptions, theme }) =>
            colorOptions.three
              ? theme.visual[colorOptions.three]
              : theme.visual.fig};
        }

        .group {
          &,
          &::before,
          .group--conjunctions,
          .rule::before {
            background-color: ${({ colorOptions, theme }) =>
              colorOptions.four
                ? theme.visual[colorOptions.four]
                : theme.visual.sloe};
          }

          .group {
            &,
            &::before,
            .group--conjunctions,
            .rule::before {
              background-color: ${({ colorOptions, theme }) =>
                colorOptions.five
                  ? theme.visual[colorOptions.five]
                  : theme.visual.banana};
            }
          }
        }
      }
    }
  }

  .group {
    .group {
      &::after {
        background-color: ${({ colorOptions, theme }) =>
          colorOptions.one
            ? theme.visual[colorOptions.one]
            : theme.visual.mould};
      }

      .group {
        &::after {
          background-color: ${({ colorOptions, theme }) =>
            colorOptions.two
              ? theme.visual[colorOptions.two]
              : theme.visual.lime};
        }

        .group {
          &::after {
            background-color: ${({ colorOptions, theme }) =>
              colorOptions.three
                ? theme.visual[colorOptions.three]
                : theme.visual.fig};
          }

          .group {
            &::after {
              background-color: ${({ colorOptions, theme }) =>
                colorOptions.four
                  ? theme.visual[colorOptions.four]
                  : theme.visual.sloe};
            }

            .group {
              &::after {
                background-color: ${({ colorOptions, theme }) =>
                  colorOptions.five
                    ? theme.visual[colorOptions.five]
                    : theme.visual.banana};
              }
            }
          }
        }
      }
    }
  }

  .rule-container:not(.rule-with-error) {
    .rule.group-or-rule,
    .group {
      border-left: none;
      border-right: 1px solid ${({ theme }) => theme.layout.mid};
      border-top: 1px solid ${({ theme }) => theme.layout.mid};
      border-bottom: 1px solid ${({ theme }) => theme.layout.mid};
    }
  }
  .rule-with-error {
    .rule--error {
      display: none;
    }
    .rule {
      outline: 1px solid red;
    }
  }
`
