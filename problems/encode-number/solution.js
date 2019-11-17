const dec2bin = (dec) => {
  return (dec >>> 0).toString(2)
}

const encode = (num) => {
  if (num === 0) {
    return ''
  }

  const binary = dec2bin(num + 1)

  return binary.slice(1)
}

module.exports = encode
