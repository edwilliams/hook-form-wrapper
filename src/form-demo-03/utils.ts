const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const validateAsync = async () => {
  await wait(1000)
  return false
}
