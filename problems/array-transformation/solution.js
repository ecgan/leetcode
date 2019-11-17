const transformArray = (arr) => {
  if (arr.length <= 2) {
    return arr
  }

  const result = arr.slice()
  let changed
  let init

  do {
    changed = false
    init = result.slice()

    for (let i = 1; i < init.length - 1; i++) {
      const element = init[i]
      const left = init[i - 1]
      const right = init[i + 1]

      if (element > left && element > right) {
        result[i] = element - 1
        changed = true
      } else if (element < left && element < right) {
        result[i] = element + 1
        changed = true
      }
    }
  } while (changed)

  return result
}

module.exports = transformArray
