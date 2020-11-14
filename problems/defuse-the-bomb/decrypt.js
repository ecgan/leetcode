/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
  const result = new Array(code.length).fill(0)

  if (k === 0) {
    return result
  }

  const absK = Math.abs(k)

  let sumK = 0
  for (let i = 0; i < absK; i++) {
    sumK += code[i]
  }

  let resultIdx = (k > 0)
    ? code.length - 1
    : absK

  result[resultIdx] = sumK

  for (let i = 0; i < result.length - 1; i++) {
    const tailCode = code[i]
    const headCode = (i + absK < code.length)
      ? code[i + absK]
      : code[i + absK - code.length]

    sumK = sumK - tailCode + headCode

    resultIdx = (resultIdx + 1 < code.length)
      ? resultIdx + 1
      : resultIdx + 1 - code.length

    result[resultIdx] = sumK
  }

  return result
}

module.exports = decrypt
