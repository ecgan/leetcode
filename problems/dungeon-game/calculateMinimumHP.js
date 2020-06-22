const minHealth = 1

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = function (dungeon) {
  const rows = dungeon.length
  const cols = dungeon[0].length

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      const healthChange = dungeon[i][j]

      // special case: starting bottom right corner value,
      // the final health value must be at least 1.
      if (i === rows - 1 && j === cols - 1) {
        dungeon[i][j] = Math.max(minHealth, minHealth - healthChange)
        continue
      }

      const rightHealth = dungeon[i][j + 1] || Number.MAX_SAFE_INTEGER
      const downHealth = (dungeon[i + 1] && dungeon[i + 1][j]) || Number.MAX_SAFE_INTEGER

      dungeon[i][j] = Math.max(minHealth, Math.min(rightHealth, downHealth) - healthChange)
    }
  }

  return dungeon[0][0]
}

module.exports = calculateMinimumHP
