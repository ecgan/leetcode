/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = function (s, shift) {
  const arr = s.split('')

  for (let i = 0; i < shift.length; i++) {
    const [direction, amount] = shift[i]

    const idx = (direction === 0)
      ? amount
      : arr.length - amount

    const deleted = arr.splice(idx)
    arr.unshift(...deleted)
  }

  return arr.join('')
}

module.exports = stringShift
