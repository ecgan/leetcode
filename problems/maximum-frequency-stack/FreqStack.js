const FreqStack = function () {
  this.numFreqMap = new Map()
  this.freqStackMap = new Map()
  this.maxFreq = 0
}

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
  const freq = (this.numFreqMap.get(x) || 0) + 1
  this.numFreqMap.set(x, freq)

  this.maxFreq = Math.max(this.maxFreq, freq)

  const stack = this.freqStackMap.get(freq) || []
  stack.push(x)
  this.freqStackMap.set(freq, stack)
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const stack = this.freqStackMap.get(this.maxFreq)
  const num = stack.pop()

  this.numFreqMap.set(num, this.numFreqMap.get(num) - 1)

  if (stack.length === 0) {
    this.maxFreq--
  }

  return num
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

module.exports = FreqStack
