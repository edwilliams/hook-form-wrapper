import React from 'react'

// colorOptions based on array in following order
// 1 primary
// 2 secondary
// 3 highlight
// 4 danger
// 5 warning
// 6 success
// 7 hover
// 8 selected
// 9 back
// 10 fore
// 11 light
// 12 mid
// 13 dark
// 14 disabled
// 15 active
// 16 focus

import { StyledQueryGeneral } from './general'
import { StyledQueryBackgrounds } from './backgrounds'
import { StyledQueryHandles } from './handles'
import { StyledQueryButtons } from './buttons'
import { StyledQueryConjunctions } from './conjunctions'
import { StyledQueryTrash } from './trash'
import { StyledQueryDisabled } from './disabled'

export const withStyles = Comp => props => {
  return (
    <>
      <StyledQueryGeneral>
        <StyledQueryBackgrounds>
          <StyledQueryHandles>
            <StyledQueryButtons>
              <StyledQueryConjunctions>
                <StyledQueryTrash>
                  <StyledQueryDisabled>
                    <Comp {...props} />
                  </StyledQueryDisabled>
                </StyledQueryTrash>
              </StyledQueryConjunctions>
            </StyledQueryButtons>
          </StyledQueryHandles>
        </StyledQueryBackgrounds>
      </StyledQueryGeneral>
    </>
  )
}
