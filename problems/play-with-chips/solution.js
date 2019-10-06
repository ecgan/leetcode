const minCostToMoveChips = (chips) => {
  let odd = 0
  let even = 0

  for (let i = 0; i < chips.length; i++) {
    (chips[i] % 2 === 0)
      ? even++
      : odd++
  }

  return Math.min(odd, even)
}

module.exports = minCostToMoveChips
