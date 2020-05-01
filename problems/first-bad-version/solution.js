/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1
    let right = n

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2)

      const isMidBad = isBadVersion(mid)
      if (isMidBad) {
        right = mid
      } else {
        left = mid + 1
      }
    }

    return left
  }
}

module.exports = solution
