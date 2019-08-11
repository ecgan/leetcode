const accDays = {
  1: 0,
  2: 31,
  3: 59,
  4: 90,
  5: 120,
  6: 151,
  7: 181,
  8: 212,
  9: 243,
  10: 273,
  11: 304,
  12: 334
}

const dayOfYear = (date) => {
  const [strYYYY, strMM, strDD] = date.split('-')

  const yyyy = parseInt(strYYYY)
  const dd = parseInt(strDD)
  const mm = parseInt(strMM)

  const isLeapYear = (
    (yyyy % 100 === 0 && yyyy % 400 === 0) ||
    (yyyy % 100 !== 0 && yyyy % 4 === 0)
  )

  const extraDay = (isLeapYear && mm >= 3) ? 1 : 0

  const result = accDays[mm] + dd + extraDay

  return result
}

module.exports = dayOfYear
