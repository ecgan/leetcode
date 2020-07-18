const findItinerary = require('./findItinerary')

test('Example 1', () => {
  const tickets = [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']]

  const result = findItinerary(tickets)

  expect(result).toStrictEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC'])
})

test('Example 2', () => {
  const tickets = [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']]

  const result = findItinerary(tickets)

  expect(result).toStrictEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'])
})

test('JFK->NRT first instead of JFK->KUL', () => {
  const tickets = [['JFK', 'KUL'], ['JFK', 'NRT'], ['NRT', 'JFK']]

  const result = findItinerary(tickets)

  expect(result).toStrictEqual(['JFK', 'NRT', 'JFK', 'KUL'])
})
