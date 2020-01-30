const invalid = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

const toHexspeak = (num) => {
  const hex = parseInt(num).toString(16).toUpperCase().split('')

  const result = []
  for (let i = 0; i < hex.length; i++) {
    const char = hex[i]

    if (invalid.includes(char)) {
      return 'ERROR'
    }

    if (char === '0') {
      result.push('O')
      continue
    }

    if (char === '1') {
      result.push('I')
      continue
    }

    result.push(char)
  }

  return result.join('')
}

module.exports = toHexspeak
