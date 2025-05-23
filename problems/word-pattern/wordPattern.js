const wordPattern = (pattern, s) => {
  const letterWordMap = new Map()
  const wordLetterMap = new Map()
  const words = s.split(' ')

  if (pattern.length !== words.length) {
    return false
  }

  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i]
    const word = words[i]

    if (!letterWordMap.has(letter)) {
      letterWordMap.set(letter, word)
    }

    const mappedWord = letterWordMap.get(letter)
    if (mappedWord !== word) {
      return false
    }

    if (!wordLetterMap.has(word)) {
      wordLetterMap.set(word, letter)
    }

    const mappedLetter = wordLetterMap.get(word)
    if (mappedLetter !== letter) {
      return false
    }
  }

  return true
}

module.exports = wordPattern
