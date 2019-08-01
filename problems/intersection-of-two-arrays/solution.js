const toSets = (nums1, nums2) => {
  if (nums1.length <= nums2.length) {
    return {
      shortSet: new Set(nums1),
      longSet: new Set(nums2)
    }
  }

  return {
    shortSet: new Set(nums2),
    longSet: new Set(nums1)
  }
}

const intersection = (nums1, nums2) => {
  const { shortSet, longSet } = toSets(nums1, nums2)

  const result = []
  for (const num of shortSet) {
    if (longSet.has(num)) {
      result.push(num)
    }
  }

  return result
}

module.exports = intersection
