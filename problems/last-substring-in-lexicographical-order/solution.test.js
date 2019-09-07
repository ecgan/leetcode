const lastSubstring = require('./solution')

test('Example 1', () => {
  const s = 'abab'

  const result = lastSubstring(s)

  expect(result).toBe('bab')
})

test('Example 2', () => {
  const s = 'leetcode'

  const result = lastSubstring(s)

  expect(result).toBe('tcode')
})

test('aaab should return b', () => {
  const s = 'aaab'

  const result = lastSubstring(s)

  expect(result).toBe('b')
})

test('zzpzzq should return zzq', () => {
  const s = 'zzpzzq'

  const result = lastSubstring(s)

  expect(result).toBe('zzq')
})

test('zzpzzo should return zzpzzo', () => {
  const s = 'zzpzzo'

  const result = lastSubstring(s)

  expect(result).toBe('zzpzzo')
})

test('xbylisvborylklftlkcioajuxwdhahdgezvyjbgaznzayfwsaumeccpfwamfzmkinezzwobllyxktqeibfoupcpptncggrdqbkji', () => {
  const s = 'xbylisvborylklftlkcioajuxwdhahdgezvyjbgaznzayfwsaumeccpfwamfzmkinezzwobllyxktqeibfoupcpptncggrdqbkji'

  const result = lastSubstring(s)

  expect(result).toBe('zzwobllyxktqeibfoupcpptncggrdqbkji')
})

test('nnnhnnndnnni should return nnni', () => {
  const s = 'nnnhnnndnnni'

  const result = lastSubstring(s)

  expect(result).toBe('nnni')
})

test('nnnhnnninnndnnnj should return nnnj', () => {
  const s = 'nnnhnnninnndnnnj'

  const result = lastSubstring(s)

  expect(result).toBe('nnnj')
})

test('nnnhnnnjnnndnnni should return nnnjnnndnnni', () => {
  const s = 'nnnhnnnjnnndnnni'

  const result = lastSubstring(s)

  expect(result).toBe('nnnjnnndnnni')
})

test('ggghhhccchhhiii should return hhhiii', () => {
  const s = 'ggghhhccchhhfff'

  const result = lastSubstring(s)

  expect(result).toBe('hhhfff')
})
