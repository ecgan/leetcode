/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let left = 0
  let right = height.length - 1
  let area = 0

  while (left < right) {
    const w = right - left
    const h = Math.min(height[left], height[right])
    area = Math.max(area, w * h)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return area
}

module.exports = maxArea
