const sortBy = require('lodash/sortBy')
const sortedIndex = require('lodash/sortedIndex')

const getDateDiffInMinutes = (date1, date2) => {
  const diffMs = date2 - date1
  return Math.round(diffMs / 1000 / 60)
}

/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
const alertNames = function (keyName, keyTime) {
  const namesSet = new Set()

  const nameTimesMap = new Map()
  for (let i = 0; i < keyName.length; i++) {
    const name = keyName[i]
    const time = keyTime[i]

    const times = nameTimesMap.get(name) || []

    const idx = sortedIndex(times, time)
    times.splice(idx, 0, time)
    nameTimesMap.set(name, times)
  }

  for (const [name, times] of nameTimesMap.entries()) {
    const lastHour = []
    for (const time of times) {
      const [hour, min] = time.split(':')

      const date = new Date()
      date.setUTCHours(parseInt(hour), parseInt(min), 0, 0)

      while (
        lastHour[0] &&
        getDateDiffInMinutes(lastHour[0], date) > 60
      ) {
        lastHour.shift()
      }

      lastHour.push(date)

      if (lastHour.length >= 3) {
        namesSet.add(name)
      }
    }
  }

  const result = new Array(...namesSet)
  return sortBy(result)
}

module.exports = alertNames
