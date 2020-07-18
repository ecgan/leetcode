const isIPv4 = (IP) => {
  const groups = IP.split('.')

  if (groups.length !== 4) {
    return false
  }

  const nums = groups.map(g => parseInt(g))

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 || nums[i] > 255) {
      return false
    }

    if (groups[i] !== nums[i].toString()) {
      return false
    }
  }

  return true
}

const isIPv6 = (IP) => {
  const groups = IP.split(':')

  if (groups.length !== 8) {
    return false
  }

  const nums = groups.map(g => parseInt(g, 16))

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 || nums[i] > 65535) {
      return false
    }

    const paddedGroup = groups[i].padStart(4, '0').toUpperCase()
    const paddedNum = nums[i].toString(16).padStart(4, '0').toUpperCase()
    if (paddedGroup !== paddedNum) {
      return false
    }
  }

  return true
}

/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function (IP) {
  return (
    (isIPv4(IP) && 'IPv4') ||
    (isIPv6(IP) && 'IPv6') ||
    'Neither'
  )
}

module.exports = validIPAddress
