const getNoZeroIntegers = (n) => {
  const str = n.toString()

  if (str.length === 1) {
    return [1, n - 1]
  }

  const arr = []
  let flag = false

  for (let i = str.length - 1; i >= 1; i--) {
    if (str[i] === '0') {
      arr.unshift('1')
      flag = true
    } else if (str[i] === '1') {
      arr.unshift('2')
      flag = true
    } else if (str[i] === '2' && flag === false) {
      arr.unshift('1')
    } else if (str[i] === '2' && flag === true) {
      arr.unshift('2')
    } else {
      arr.unshift('1')
      flag = false
    }
  }

  const val = parseInt(arr.join(''))

  return [val, n - val]
}

module.exports = getNoZeroIntegers
