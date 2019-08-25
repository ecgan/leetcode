const lastSubstring = require('./solution-reduce-slow')

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
