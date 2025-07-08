/**
 * @param {number[]} nums
 * @return {number}
 */
const findCommonResponse = function (responses) {
  const responseCountMap = {}
  let mostCommonCount = 0
  const mostCommonResponses = new Set()

  for (const dayResponses of responses) {
    const uniqueDayResponses = [...new Set(dayResponses)]

    for (const uniqueDayResponse of uniqueDayResponses) {
      responseCountMap[uniqueDayResponse] = responseCountMap[uniqueDayResponse]
        ? responseCountMap[uniqueDayResponse] + 1
        : 1

      const count = responseCountMap[uniqueDayResponse]
      if (count > mostCommonCount) {
        mostCommonCount = count
        mostCommonResponses.clear()
      }

      if (count === mostCommonCount) {
        mostCommonResponses.add(uniqueDayResponse)
      }
    }
  }

  return [...mostCommonResponses].sort()[0]
}

module.exports = findCommonResponse
