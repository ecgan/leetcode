const getMap = (keyboard) => {
  const map = {}

  for (let i = 0; i < keyboard.length; i++) {
    const char = keyboard[i]
    map[char] = i
  }

  return map
}

const getTime = (map, word) => {
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

const calculateTime = (keyboard, word) => {
  const map = getMap(keyboard)

  return getTime(map, word)
}

module.exports = calculateTime
