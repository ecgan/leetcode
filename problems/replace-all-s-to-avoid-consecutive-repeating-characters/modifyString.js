const convertChar = (arr, i) => {
  if (arr[i] !== '?') {
    return arr[i]
  }

  if (arr[i - 1] !== 'a' && arr[i + 1] !== 'a') {
    return 'a'
  }

  if (arr[i - 1] !== 'b' && arr[i + 1] !== 'b') {
    return 'b'
  }

  return 'c'
}

/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function (s) {
  const arr = s.split('')

  for (let i = 0; i < s.length; i++) {
    arr[i] = convertChar(arr, i)
  }

  return arr.join('')
}

module.exports = modifyString
