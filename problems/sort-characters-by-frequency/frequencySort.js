const getCharFrequencyMap = (s) => {
  const map = new Map()

  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  return map
}

const getRepeatedCharArray = (map) => {
  const arr = []
  for (const [char, frequency] of map.entries()) {
    arr.push(char.repeat(frequency))
  }

  arr.sort((a, b) => b.length - a.length)

  return arr
}

/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
  const map = getCharFrequencyMap(s)
  const arr = getRepeatedCharArray(map)

  return arr.join('')
}

module.exports = frequencySort
