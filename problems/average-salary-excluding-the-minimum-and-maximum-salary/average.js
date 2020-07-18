/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
  let max = Number.MIN_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER
  let sum = 0

  for (let i = 0; i < salary.length; i++) {
    sum += salary[i]
    max = Math.max(max, salary[i])
    min = Math.min(min, salary[i])
  }

  const average = (sum - max - min) / (salary.length - 2)

  return average
}

module.exports = average
