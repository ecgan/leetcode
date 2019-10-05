const sortBy = require('lodash/sortBy')
const sortedIndex = require('lodash/sortedIndex')

const sortedIntersect = (nums1, nums2) => {
  const result = []
  let p1 = 0
  let p2 = 0

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      result.push(nums1[p1])
      p1++
      p2++
    }

    if (nums1[p1] > nums2[p2]) {
      p2 = sortedIndex(nums2, nums1[p1])
    }

    if (nums1[p1] < nums2[p2]) {
      p1 = sortedIndex(nums1, nums2[p2])
    }
  }

  return result
}

const intersect = (nums1, nums2) => {
  const sortedNums1 = sortBy(nums1)
  const sortedNums2 = sortBy(nums2)

  return sortedIntersect(sortedNums1, sortedNums2)
}

module.exports = intersect
