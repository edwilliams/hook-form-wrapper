import { useCallback } from 'react'

export const useValidationResolver = validationSchema =>
  useCallback(
    async data => ({
      values: await validationSchema.validate(data, {
        abortEarly: false
      }),
      errors: {}
    }),
    [validationSchema]
  )
