const sortedIndex = require('lodash/sortedIndex')

const intervalMap = {
  minute: 60,
  hour: 3600,
  day: 86400
}

const TweetCounts = function () {
  this.times = []
  this.tweets = []
}

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function (tweetName, time) {
  const index = sortedIndex(this.times, time)
  this.times.splice(index, 0, time)
  this.tweets.splice(index, 0, tweetName)
}

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function (freq, tweetName, startTime, endTime) {
  const result = []
  const interval = intervalMap[freq]

  let start = startTime

  while (start <= endTime) {
    const end = Math.min(start + interval, endTime + 1)

    const startIndex = sortedIndex(this.times, start)
    const endIndex = sortedIndex(this.times, end)

    let count = 0
    for (let i = startIndex; i < endIndex; i++) {
      if (this.tweets[i] === tweetName) {
        count += 1
      }
    }

    result.push(count)

    start = end
  }

  return result
}

module.exports = TweetCounts
