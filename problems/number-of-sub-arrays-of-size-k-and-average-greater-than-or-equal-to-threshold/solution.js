const numOfSubarrays = (arr, k, threshold) => {
  let count = 0

  let total = 0
  for (let i = 0; i < arr.length; i++) {
    if (i < k - 1) {
      total += arr[i]
      continue
    }

    if (i === k - 1) {
      total += arr[i]
      const average = total / k
      if (average >= threshold) {
        count += 1
      }
      continue
    }

    total += arr[i]
    total -= arr[i - k]
    const average = total / k
    if (average >= threshold) {
      count += 1
    }
  }

  return count
}

module.exports = numOfSubarrays
