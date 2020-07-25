/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const result = []
  const path = [0]

  const dfs = (node) => {
    if (node === graph.length - 1) {
      result.push([...path])
      return
    }

    for (const nextNode of graph[node]) {
      path.push(nextNode)
      dfs(nextNode)
      path.pop()
    }
  }

  dfs(0)

  return result
}

module.exports = allPathsSourceTarget
