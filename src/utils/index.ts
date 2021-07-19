const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

type Props = {
  message: string
}

export const validateAsync =
  ({ message }: Props) =>
  async () => {
    await wait(1000)
    return false || message
  }

export const validateSync =
  ({ message }: Props) =>
  () => {
    return false || message
  }
