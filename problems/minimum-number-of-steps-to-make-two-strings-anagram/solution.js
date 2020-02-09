const getMap = (str) => {
  const map = str.split('')
    .reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = 1
      } else {
        acc[val] += 1
      }

      return acc
    }, {})

  return map
}

const minSteps = (s, t) => {
  const base = getMap(s)
  const compare = getMap(t)

  let count = 0
  const keys = Object.keys(base)
  for (let i = 0; i < keys.length; i++) {
    const char = keys[i]

    if (!compare[char]) {
      count += base[char]
    } else {
      count += Math.max(0, base[char] - compare[char])
    }
  }

  return count
}

module.exports = minSteps
