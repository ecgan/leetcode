const getKeyFromString = (str) => {
  const arr = new Array(26).fill(0)

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i) - 97
    arr[code]++
  }

  return arr.join('-')
}

const getGroupMap = (strs) => {
  const map = new Map()

  for (const str of strs) {
    const key = getKeyFromString(str)

    if (!map.has(key)) {
      map.set(key, [str])
    } else {
      map.get(key).push(str)
    }
  }

  return map
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = getGroupMap(strs)
  const result = []

  for (const value of map.values()) {
    result.push(value)
  }

  return result
}

module.exports = groupAnagrams
