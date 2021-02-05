/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const stack = []
  const parts = path.split('/')

  for (const part of parts) {
    if (part === '..') {
      stack.pop()
    } else if (part !== '' && part !== '.') {
      stack.push(part)
    }
  }

  return '/' + stack.join('/')
}

module.exports = simplifyPath
