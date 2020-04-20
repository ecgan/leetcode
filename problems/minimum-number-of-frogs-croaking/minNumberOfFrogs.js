class Counter {
  constructor () {
    this.c = 0
    this.r = 0
    this.o = 0
    this.a = 0

    this.num = 0
  }

  process (char) {
    if (char === 'k') {
      this.c--
      this.r--
      this.o--
      this.a--
    } else {
      this[char]++
    }

    this.num = Math.max(this.num, this.c)
  }

  isValid () {
    const { c, r, o, a } = this

    return (
      c >= r &&
      r >= o &&
      o >= a
    )
  }

  isFinish () {
    const { c, r, o, a } = this

    return (
      c === 0 &&
      r === 0 &&
      o === 0 &&
      a === 0
    )
  }
}

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
const minNumberOfFrogs = function (croakOfFrogs) {
  const counter = new Counter()

  for (let i = 0; i < croakOfFrogs.length; i++) {
    const char = croakOfFrogs[i]
    counter.process(char)

    if (!counter.isValid()) {
      return -1
    }
  }

  if (!counter.isFinish()) {
    return -1
  }

  return counter.num
}

module.exports = minNumberOfFrogs
