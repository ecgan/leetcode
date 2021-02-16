/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = (S) => {
  const arrayS = S.split('')
  const result = []

  const backtrack = (arr, idx) => {
    if (idx === arr.length) {
      result.push(arr.join(''))
      return
    }

    arr[idx] = arr[idx].toLowerCase()
    backtrack(arr, idx + 1)

    if (!(arr[idx] >= '0' && arr[idx] <= '9')) {
      arr[idx] = arr[idx].toUpperCase()
      backtrack(arr, idx + 1)
    }
  }

  backtrack(arrayS, 0)

  return result
}

module.exports = letterCasePermutation
