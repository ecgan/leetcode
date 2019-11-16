const minimumSwap = (s1, s2) => {
  if (s1 === s2) {
    return 0
  }

  let countY1 = 0
  let countY2 = 0
  let matchingY = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === 'y') {
      countY1 += 1
    }

    if (s2[i] === 'y') {
      countY2 += 1
    }

    if (s1[i] === 'y' && s2[i] === 'y') {
      matchingY += 1
    }
  }

  if ((countY1 + countY2) % 2 === 1) {
    return -1
  }

  const remainY1 = countY1 - matchingY
  const remainY2 = countY2 - matchingY

  let result = Math.floor(remainY1 / 2) + Math.floor(remainY2 / 2)
  if (remainY1 % 2 === 1) {
    result += 2
  }

  return result
}

module.exports = minimumSwap
