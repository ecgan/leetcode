const TweetCounts = require('./solution')

test('Example 1', () => {
  const tweetCounts = new TweetCounts()
  tweetCounts.recordTweet('tweet3', 0)
  tweetCounts.recordTweet('tweet3', 60)
  tweetCounts.recordTweet('tweet3', 10) // All tweets correspond to "tweet3" with recorded times at 0, 10 and 60.

  const count1 = tweetCounts.getTweetCountsPerFrequency('minute', 'tweet3', 0, 59) // return [2]. The frequency is per minute (60 seconds), so there is one interval of time: 1) [0, 60> - > 2 tweets.
  expect(count1).toStrictEqual([2])

  const count2 = tweetCounts.getTweetCountsPerFrequency('minute', 'tweet3', 0, 60) // return [2, 1]. The frequency is per minute (60 seconds), so there are two intervals of time: 1) [0, 60> - > 2 tweets, and 2) [60,61> - > 1 tweet.
  expect(count2).toStrictEqual([2, 1])

  tweetCounts.recordTweet('tweet3', 120) // All tweets correspond to "tweet3" with recorded times at 0, 10, 60 and 120.

  const count3 = tweetCounts.getTweetCountsPerFrequency('hour', 'tweet3', 0, 210) // return [4]. The frequency is per hour (3600 seconds), so there is one interval of time: 1) [0, 211> - > 4 tweets.
  expect(count3).toStrictEqual([4])
})

test('different tweets', () => {
  const tweetCounts = new TweetCounts()
  tweetCounts.recordTweet('tweet0', 99)
  tweetCounts.recordTweet('tweet1', 80)
  tweetCounts.recordTweet('tweet2', 29)
  tweetCounts.recordTweet('tweet3', 81)
  tweetCounts.recordTweet('tweet4', 56)

  const count1 = tweetCounts.getTweetCountsPerFrequency('day', 'tweet4', 56, 2667)
  expect(count1).toStrictEqual([1])
})
