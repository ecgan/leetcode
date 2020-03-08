const generateTheString = (n) => {
  let result = ''
  let count = n

  if (n % 2 === 0) {
    result += 'a'
    count--
  }

  for (let i = 0; i < count; i++) {
    result += 'b'
  }

  return result
}

module.exports = generateTheString
