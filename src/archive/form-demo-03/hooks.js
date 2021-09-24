import { useCallback } from 'react'

// NB library limitation - it appears errors come out one at a time per input
export const useValidationResolver = validationSchema =>
  useCallback(
    async data => {
      const values = await validationSchema.validate(data, {
        abortEarly: false
      })
      // NB object must contain values and errors, but only returns values
      return {
        values,
        errors: {}
      }
    },
    [validationSchema]
  )
