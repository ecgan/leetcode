/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = (pushed, popped) => {
  const stack = []

  while (pushed.length > 0) {
    const val = pushed.shift()
    stack.push(val)

    while (stack.length > 0 && stack[stack.length - 1] === popped[0]) {
      stack.pop()
      popped.shift()
    }
  }

  return popped.length === 0
}

module.exports = validateStackSequences
