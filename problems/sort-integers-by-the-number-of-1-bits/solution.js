const sortByBits = (arr) => {
  const newArr = arr.map(el => {
    const bin = el.toString(2)
    const count1 = bin.split('').reduce((acc, cur) => {
      if (cur === '1') {
        return acc + 1
      }

      return acc
    }, 0)

    return {
      num: el,
      count1: count1
    }
  })

  newArr.sort((a, b) => {
    if (a.count1 < b.count1) {
      return -1
    }

    if (a.count1 > b.count1) {
      return 1
    }

    if (a.num < b.num) {
      return -1
    }

    if (a.num > b.num) {
      return 1
    }

    return 0
  })

  return newArr.map(el => el.num)
}

module.exports = sortByBits
