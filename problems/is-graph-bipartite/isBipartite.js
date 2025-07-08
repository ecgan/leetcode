const isBipartite = (graph) => {
  const color = new Map()

  const dfs = (idx) => {
    for (const nextNode of graph[idx]) {
      if (color.has(nextNode)) {
        if (color.get(nextNode) === color.get(idx)) {
          return false
        }
      } else {
        color.set(nextNode, 1 - (color.get(idx)))
        if (!dfs(nextNode)) {
          return false
        }
      }
    }

    return true
  }

  for (let i = 0; i < graph.length; i++) {
    if (!color.has(i)) {
      color.set(i, 0)

      if (!dfs(i)) {
        return false
      }
    }
  }

  return true
}

module.exports = isBipartite
