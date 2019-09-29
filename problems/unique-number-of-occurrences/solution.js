const uniq = require('lodash/uniq')

const hasNoDuplicates = (arr) => {
  return uniq(arr).length === arr.length
}

const getValueMap = (arr) => {
  const valueMap = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i] + 1000

    if (valueMap[element]) {
      valueMap[element] += 1
    } else {
      valueMap[element] = 1
    }
  }

  return valueMap
}

const uniqueOccurrences = (arr) => {
  const valueMap = getValueMap(arr)

  const processedMap = valueMap.filter(Boolean)

  return hasNoDuplicates(processedMap)
}

module.exports = uniqueOccurrences
