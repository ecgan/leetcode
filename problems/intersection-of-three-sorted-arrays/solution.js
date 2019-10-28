const sortedIndex = require('lodash/sortedIndex')

const arraysIntersection = (arr1, arr2, arr3) => {
  const result = []
  let p1 = 0
  let p2 = 0
  let p3 = 0

  while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
      result.push(arr1[p1])
      p1++
      p2++
      p3++
    }

    if (arr1[p1] < arr2[p2] || arr1[p1] < arr3[p3]) {
      p1 = sortedIndex(arr1, Math.max(arr2[p2], arr3[p3]))
    }

    if (arr2[p2] < arr1[p1] || arr2[p2] < arr3[p3]) {
      p2 = sortedIndex(arr2, Math.max(arr1[p1], arr3[p3]))
    }

    if (arr3[p3] < arr2[p2] || arr3[p3] < arr1[p1]) {
      p3 = sortedIndex(arr3, Math.max(arr2[p2], arr1[p1]))
    }
  }

  return result
}

module.exports = arraysIntersection
