export const isDate = val => {
  const possDate = new Date(val)
  return possDate instanceof Date && !isNaN(possDate.valueOf())
}

const removeSecondsFromISO = str => {
  const arr = str.split('T')
  const date = arr[0]
  const time = arr[1].substring(0, 5)
  return `${date}T${time}:00.000Z`
}

export const getISO = str =>
  isDate(str) ? removeSecondsFromISO(new Date(str).toISOString()) : str
