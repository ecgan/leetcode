const sortedIndex = require('lodash/sortedIndex')

const searchInsert = (nums, target) => {
  return sortedIndex(nums, target)
}

module.exports = searchInsert
