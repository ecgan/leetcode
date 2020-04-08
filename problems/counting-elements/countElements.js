const getMap = (arr) => {
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    const count = map.get(num)
    if (!count) {
      map.set(num, 1)
    } else {
      map.set(num, count + 1)
    }
  }

  return map
}

const getCount = (map) => {
  let count = 0
  for (const [key, value] of map) {
    if (map.has(key + 1)) {
      count += value
    }
  }

  return count
}

/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = function (arr) {
  const map = getMap(arr)
  const count = getCount(map)

  return count
}

module.exports = countElements
