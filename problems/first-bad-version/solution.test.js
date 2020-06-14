const solution = require('./solution')

const getIsbadVersionFn = (v) => {
  let calls = 0

  const isBadVersion = (version) => {
    calls++
    return (version === v)
  }

  const getCalls = () => {
    return calls
  }

  return {
    isBadVersion,
    getCalls
  }
}

test('Example 1', () => {
  const n = 5
  const version = 4
  const { isBadVersion, getCalls } = getIsbadVersionFn(version)

  const resultFn = solution(isBadVersion)
  const result = resultFn(n)
  const calls = getCalls()

  expect(result).toBe(4)
  expect(calls).toBe(2)
})
