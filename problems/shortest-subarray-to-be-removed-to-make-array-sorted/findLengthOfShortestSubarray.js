/**
 * @param {number[]} arr
 * @return {number}
 */
const findLengthOfShortestSubarray = function (arr) {
  const head = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < head[head.length - 1]) {
      break
    }

    head.push(arr[i])
  }

  if (head.length === arr.length) {
    return 0
  }

  const tail = [arr[arr.length - 1]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[arr.length - 1 - i] > tail[0]) {
      break
    }

    tail.unshift(arr[arr.length - 1 - i])
  }

  const tempHead = [...head]
  const tempTail = [...tail]

  while (tempHead[tempHead.length - 1] > tail[0]) {
    tempHead.pop()
  }

  while (tempTail[0] < head[head.length - 1]) {
    tempTail.shift()
  }

  return Math.min(
    arr.length - head.length,
    arr.length - tail.length,
    arr.length - (tempHead.length + tail.length),
    arr.length - (tempTail.length + head.length)
  )
}

module.exports = findLengthOfShortestSubarray
