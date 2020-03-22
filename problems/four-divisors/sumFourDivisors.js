/**
 * @param {number[]} nums
 * @return {number}
 */
const sumFourDivisors = function (nums) {
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    let divSum = 0
    let divCount = 0
    const sqrt = Math.floor(Math.sqrt(num))

    for (let j = sqrt; j >= 1; j--) {
      if (num % j === 0) {
        const div1 = num / j
        divSum += div1
        divCount++

        const div2 = num / div1
        if (div2 !== div1) {
          divSum += div2
          divCount++
        }
      }
    }

    if (divCount === 4) {
      sum += divSum
    }
  }

  return sum
}

module.exports = sumFourDivisors
