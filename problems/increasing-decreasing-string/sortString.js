const getMap = (s) => {
  const chars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
  ]
  const counts = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
  ]

  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0)
    counts[charCode - 97]++
  }

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === 0) {
      counts.splice(i, 1)
      chars.splice(i, 1)

      i--
    }
  }

  return {
    countMap: counts,
    charMap: chars
  }
}

const sortString = (s) => {
  const { countMap, charMap } = getMap(s)

  let result = ''
  let dir = true
  let i = 0
  do {
    result += charMap[i]
    countMap[i]--

    if (countMap[i] === 0) {
      countMap.splice(i, 1)
      charMap.splice(i, 1)

      if (dir === true) {
        i--
      }
    }

    if (dir === true) {
      i++
    } else {
      i--
    }

    if (i === charMap.length) {
      dir = false
      i--
    } else if (i === -1) {
      dir = true
      i++
    }
  } while (countMap.length > 0)

  return result
}

module.exports = sortString
