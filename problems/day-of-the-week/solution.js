const days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

const dayOfTheWeek = (day, month, year) => {
  const date = new Date()
  date.setUTCFullYear(year)
  date.setUTCMonth(month - 1)
  date.setUTCDate(day)

  return days[date.getUTCDay()]
}

module.exports = dayOfTheWeek
