/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
const brokenCalc = (X, Y) => {
  let count = 0

  while (Y !== X) {
    Y = (Y > X && Y % 2 === 0)
      ? Y / 2
      : Y + 1

    count++
  }

  return count
}

module.exports = brokenCalc
