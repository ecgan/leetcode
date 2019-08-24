const lastSubstring = (s) => {
  const result = [...s].reduceRight((acc, cur, idx) => {
    const currentString = s.slice(idx)

    if (currentString > acc) {
      return currentString
    }

    return acc
  }, '')

  return result
}

module.exports = lastSubstring
