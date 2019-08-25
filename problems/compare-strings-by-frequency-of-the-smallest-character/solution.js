const sortBy = require('lodash/sortBy')
const sortedLastIndex = require('lodash/sortedLastIndex')

const f = (s) => {
  let character = s[0]
  let frequency = 1

  for (let i = 1; i < s.length; i++) {
    const c = s[i]

    if (c === character) {
      frequency += 1
    }

    if (c < character) {
      character = c
      frequency = 1
    }
  }

  return frequency
}

const getResult = (queriesFreqs, sortedWordsFreqs) => {
  const result = []
  for (let i = 0; i < queriesFreqs.length; i++) {
    const qf = queriesFreqs[i]
    const insertIndex = sortedLastIndex(sortedWordsFreqs, qf)
    const number = sortedWordsFreqs.length - insertIndex

    result.push(number)
  }

  return result
}

const numSmallerByFrequency = (queries, words) => {
  const wordsFreqs = words.map(w => f(w))
  const sortedWordsFreqs = sortBy(wordsFreqs)
  const queriesFreqs = queries.map(q => f(q))

  return getResult(queriesFreqs, sortedWordsFreqs)
}

module.exports = numSmallerByFrequency
