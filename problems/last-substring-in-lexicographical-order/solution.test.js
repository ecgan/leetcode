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

test('xbylisvborylklftlkcioajuxwdhahdgezvyjbgaznzayfwsaumeccpfwamfzmkinezzwobllyxktqeibfoupcpptncggrdqbkji', () => {
  const s = 'xbylisvborylklftlkcioajuxwdhahdgezvyjbgaznzayfwsaumeccpfwamfzmkinezzwobllyxktqeibfoupcpptncggrdqbkji'

  const result = lastSubstring(s)

  expect(result).toBe('zzwobllyxktqeibfoupcpptncggrdqbkji')
})
