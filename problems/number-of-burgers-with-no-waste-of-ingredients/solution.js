const numOfBurgers = (tomatoSlices, cheeseSlices) => {
  if (tomatoSlices < (cheeseSlices * 2)) return []
  if (tomatoSlices % 2 === 1) return []
  if (tomatoSlices === 0 && cheeseSlices === 0) return [0, 0]

  const jumbo = (tomatoSlices - (2 * cheeseSlices)) / 2
  const small = cheeseSlices - jumbo

  return [jumbo, small]
}

module.exports = numOfBurgers
