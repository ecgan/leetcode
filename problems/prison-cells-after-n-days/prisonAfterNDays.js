/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
const prisonAfterNDays = function (cells, N) {
  let result = cells

  for (let n = (N - 1) % 14 + 1; n > 0; n--) {
    const newCells = new Array(8).fill(0)

    for (let i = 1; i < 7; i++) {
      newCells[i] = (result[i - 1] === result[i + 1])
        ? 1
        : 0
    }

    result = newCells
  }

  return result
}

module.exports = prisonAfterNDays
