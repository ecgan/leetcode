const floodFill = require('./floodFill')

test('Example 1', () => {
  const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ]
  const sr = 1
  const sc = 1
  const newColor = 2

  const result = floodFill(image, sr, sc, newColor)

  expect(result).toStrictEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1]
  ])
})

test('new color is the same as start color', () => {
  const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ]
  const sr = 1
  const sc = 1
  const newColor = 1

  const result = floodFill(image, sr, sc, newColor)

  expect(result).toStrictEqual([
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ])
})

test('change whole image', () => {
  const image = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ]
  const sr = 1
  const sc = 1
  const newColor = 2

  const result = floodFill(image, sr, sc, newColor)

  expect(result).toStrictEqual([
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
  ])
})
