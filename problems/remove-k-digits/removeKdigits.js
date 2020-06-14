/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
  const arr = []
  let count = 0

  for (let i = 0; i < num.length; i++) {
    const digit = parseInt(num[i])

    while (
      arr[arr.length - 1] > digit &&
      count < k
    ) {
      arr.pop()
      count++
    }

    arr.push(digit)
  }

  arr.splice(arr.length - (k - count))

  while (arr[0] === 0) {
    arr.shift()
  }

  if (arr.length === 0) {
    return '0'
  }

  return arr.join('')
}

module.exports = removeKdigits
