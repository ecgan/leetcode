// [1,2,3,4,5,6,7,8,9,10,11]
// 11
// 3
// [1,2,3,4,5]
// 5
// 1
// [6,3,null,7,4,null,null,null,2,null,1,null,5]
// 7
// 3

const leettree = require('../../utils/leettree')

test('With multiple same contiguous values', () => {
  const nums = [1, 2, 3, null, null, 4]

  const result = leettree.deserialize(nums)

  console.log('result: ', result)

  expect(result).toBe(13)
})
