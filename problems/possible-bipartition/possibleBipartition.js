const getDfsFn = (lists, numGroupMap) => {
  const dfs = (num, group) => {
    if (numGroupMap.has(num)) {
      return numGroupMap.get(num) === group
    }

    numGroupMap.set(num, group)

    const dislikes = lists[num] || []
    for (let i = 0; i < dislikes.length; i++) {
      if (!dfs(dislikes[i], group ^ 1)) {
        return false
      }
    }

    return true
  }

  return dfs
}

const getDislikesLists = (dislikes) => {
  const lists = []

  for (let i = 0; i < dislikes.length; i++) {
    const [a, b] = dislikes[i]

    lists[a] = lists[a] || []
    lists[a].push(b)

    lists[b] = lists[b] || []
    lists[b].push(a)
  }

  return lists
}

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = function (N, dislikes) {
  const lists = getDislikesLists(dislikes)
  const numGroupMap = new Map()
  const dfs = getDfsFn(lists, numGroupMap)

  for (let i = 1; i <= N; i++) {
    if (!numGroupMap.has(i) && !dfs(i, 0)) {
      return false
    }
  }

  return true
}

module.exports = possibleBipartition
