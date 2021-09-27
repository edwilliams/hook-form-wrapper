export const validateWithQuery =
  ({ query, message }) =>
  () => {
    const hasQuery =
      query !== undefined &&
      typeof query === 'object' &&
      query.Operator !== null &&
      query.Attribute !== null
    return hasQuery || message
  }

export const validateWithBool =
  ({ bool, message }) =>
  () => {
    return bool || message
  }
