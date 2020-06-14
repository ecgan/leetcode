/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
  const numBin = num.toString(2)
  const maskBin = '1'.repeat(numBin.length)
  const mask = parseInt(maskBin, 2)

  return num ^ mask
}

module.exports = findComplement
