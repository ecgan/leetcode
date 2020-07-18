const validIPAddress = require('./validIPAddress')

test('Example 1', () => {
  const IP = '172.16.254.1'

  const result = validIPAddress(IP)

  expect(result).toBe('IPv4')
})

test('Example 2', () => {
  const IP = '2001:0db8:85a3:0:0:8A2E:0370:7334'

  const result = validIPAddress(IP)

  expect(result).toBe('IPv6')
})

test('Example 3', () => {
  const IP = '256.256.256.256'

  const result = validIPAddress(IP)

  expect(result).toBe('Neither')
})

test('Valid IPv4', () => {
  const IP = '172.16.254.1'

  const result = validIPAddress(IP)

  expect(result).toBe('IPv4')
})

test('Invalid IPv4 with leading zeros', () => {
  const IP = '172.16.254.01'

  const result = validIPAddress(IP)

  expect(result).toBe('Neither')
})

test('Valid IPv6', () => {
  const IP = '2001:0db8:85a3:0000:0000:8a2e:0370:7334'

  const result = validIPAddress(IP)

  expect(result).toBe('IPv6')
})

test('Valid IPv6 with omitted leading zeros and low-case characters', () => {
  const IP = '2001:db8:85a3:0:0:8A2E:0370:7334'

  const result = validIPAddress(IP)

  expect(result).toBe('IPv6')
})

test('Invalid IPv6 with two consecutive colons', () => {
  const IP = '2001:0db8:85a3::8A2E:0370:7334'

  const result = validIPAddress(IP)

  expect(result).toBe('Neither')
})

test('Invalid IPv6 with extra leading zeros', () => {
  const IP = '02001:0db8:85a3:0000:0000:8a2e:0370:7334'

  const result = validIPAddress(IP)

  expect(result).toBe('Neither')
})

test('IPv4 style that cannot be parsed to decimal should return Neither', () => {
  const IP = '1e1.4.5.6'

  const result = validIPAddress(IP)

  expect(result).toBe('Neither')
})

test('IPv6 style that cannot be parsed from hexadecimal to decimal should return Neither', () => {
  const IP = '20EE:FGb8:85a3:0:0:8A2E:0370:7334'

  const result = validIPAddress(IP)

  expect(result).toBe('Neither')
})

test('IPv6 style with "-" character should return Neither', () => {
  const IP = '1081:db8:85a3:01:-0:8A2E:0370:7334'

  const result = validIPAddress(IP)

  expect(result).toBe('Neither')
})

test('IPv6 style with number larger than FFFF should return Neither', () => {
  const IP = '1081:10000:db8:85a3:1:8A2E:0370:7334'

  const result = validIPAddress(IP)

  expect(result).toBe('Neither')
})
