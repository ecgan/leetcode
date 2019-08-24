const calculateTime = (keyboard, word) => {
  const map = {}
  for (let i = 0; i < keyboard.length; i++) {
    const char = keyboard[i]
    map[char] = i
  }

  let curPos = 0
  let time = 0
  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    const charPos = map[char]
    time += Math.abs(charPos - curPos)
    curPos = charPos
  }

  return time
}

module.exports = calculateTime
