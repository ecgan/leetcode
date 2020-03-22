/**
 * Get availability marking.
 * True means available for the family; false otherwise.
 * @param {number[][]} reservedSeats
 */
const getMark = (reservedSeats) => {
  const mark = {}

  for (let i = 0; i < reservedSeats.length; i++) {
    const [row, col] = reservedSeats[i]

    if (!mark[row]) {
      mark[row] = {
        left: true,
        center: true,
        right: true
      }
    }

    if (col === 2 || col === 3) {
      mark[row].left = false
    } else if (col === 4 || col === 5) {
      mark[row].left = false
      mark[row].center = false
    } else if (col === 6 || col === 7) {
      mark[row].center = false
      mark[row].right = false
    } else if (col === 8 || col === 9) {
      mark[row].right = false
    }
  }

  return mark
}

/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
const maxNumberOfFamilies = function (n, reservedSeats) {
  const mark = getMark(reservedSeats)
  const values = Object.values(mark)
  let count = n * 2
  for (let i = 0; i < values.length; i++) {
    const value = values[i]

    if (
      value.left === false &&
      value.center === false &&
      value.right === false
    ) {
      count -= 2
      continue
    }

    if (
      value.left === false &&
      value.center === true &&
      value.right === false
    ) {
      count -= 1
      continue
    }

    if (value.right === false) {
      count -= 1
      continue
    }

    if (value.left === false) {
      count -= 1
      continue
    }
  }

  return count
}

module.exports = maxNumberOfFamilies
