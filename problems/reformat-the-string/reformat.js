/**
 * Separate s into digits and letters array.
 * The longer array will be returned as the first element.
 * @param {*} s
 */
const separate = (s) => {
  const letters = []
  const digits = []

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i)

    if (charCode >= 48 && charCode <= 57) {
      digits.push(s[i])
    } else {
      letters.push(s[i])
    }
  }

  return (digits.length >= letters.length)
    ? [digits, letters]
    : [letters, digits]
}

/**
 * @param {string} s
 * @return {string}
 */
const reformat = function (s) {
  const [long, short] = separate(s)

  if (long.length - short.length >= 2) {
    return ''
  }

  const arr = []
  while (long.length > 0) {
    arr.push(long.shift())

    if (short.length > 0) {
      arr.push(short.shift())
    }
  }

  return arr.join('')
}

module.exports = reformat
