const replaceChar = (string, index, char) => {
  const sub1 = string.substring(0, index)
  const sub2 = string.substring(index + 1)
  return sub1 + char + sub2
}

const binaryIncrement = (s) => {
  let result = s

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === '1') {
      result = replaceChar(result, i, '0')

      if (i === 0) {
        result = '1' + result
        break
      }
    } else {
      result = replaceChar(result, i, '1')
      break
    }
  }

  return result
}

const binaryDivideByTwo = (s) => {
  return s.substring(0, s.length - 1)
}

/**
 * @param {string} s
 * @return {number}
 */
const numSteps = function (s) {
  let count = 0

  while (s !== '1') {
    const last = s[s.length - 1]

    if (last === '0') {
      s = binaryDivideByTwo(s)
    } else {
      s = binaryIncrement(s)
    }

    count++
  }

  return count
}

module.exports = numSteps
