const cleanOpenParentheses = (arr) => {
  let closeCount = 0
  let i = arr.length - 1

  while (i >= 0) {
    const char = arr[i]

    if (char === '(') {
      if (closeCount === 0) {
        arr.splice(i, 1)
      }

      closeCount = Math.max(0, closeCount - 1)
    } else if (char === ')') {
      closeCount++
    }

    i--
  }
}

const cleanCloseParentheses = (arr) => {
  let openCount = 0
  let i = 0

  while (i < arr.length) {
    const char = arr[i]

    if (char === ')') {
      if (openCount === 0) {
        arr.splice(i, 1)
        i--
      }

      openCount = Math.max(0, openCount - 1)
    } else if (char === '(') {
      openCount++
    }

    i++
  }
}

/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
  const arr = s.split('')
  cleanCloseParentheses(arr)
  cleanOpenParentheses(arr)

  return arr.join('')
}

module.exports = minRemoveToMakeValid
