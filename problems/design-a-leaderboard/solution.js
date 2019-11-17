const sortBy = require('lodash/sortBy')

var Leaderboard = function Leaderboard () {
  this.playerScore = {}
}

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  if (!(playerId in this.playerScore)) {
    this.playerScore[playerId] = score
  } else {
    this.playerScore[playerId] += score
  }
}

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  const values = Object.values(this.playerScore)
  const sorted = sortBy(values)

  let result = 0
  for (let i = sorted.length - K; i < sorted.length; i++) {
    result += sorted[i]
  }

  return result
}

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  this.playerScore[playerId] = 0
}

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

module.exports = Leaderboard
