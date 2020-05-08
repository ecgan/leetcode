const displayTable = require('./displayTable')

test('Example 1', () => {
  const orders = [
    ['David', '3', 'Ceviche'],
    ['Corina', '10', 'Beef Burrito'],
    ['David', '3', 'Fried Chicken'],
    ['Carla', '5', 'Water'],
    ['Carla', '5', 'Ceviche'],
    ['Rous', '3', 'Ceviche']
  ]

  const result = displayTable(orders)

  expect(result).toStrictEqual([
    ['Table', 'Beef Burrito', 'Ceviche', 'Fried Chicken', 'Water'],
    ['3', '0', '2', '1', '0'],
    ['5', '0', '1', '0', '1'],
    ['10', '1', '0', '0', '0']
  ])
})

test('Example 2', () => {
  const orders = [
    ['James', '12', 'Fried Chicken'],
    ['Ratesh', '12', 'Fried Chicken'],
    ['Amadeus', '12', 'Fried Chicken'],
    ['Adam', '1', 'Canadian Waffles'],
    ['Brianna', '1', 'Canadian Waffles']
  ]

  const result = displayTable(orders)

  expect(result).toStrictEqual([
    ['Table', 'Canadian Waffles', 'Fried Chicken'],
    ['1', '2', '0'],
    ['12', '0', '3']
  ])
})

test('Example 3', () => {
  const orders = [
    ['Laura', '2', 'Bean Burrito'],
    ['Jhon', '2', 'Beef Burrito'],
    ['Melissa', '2', 'Soda']
  ]

  const result = displayTable(orders)

  expect(result).toStrictEqual([
    ['Table', 'Bean Burrito', 'Beef Burrito', 'Soda'],
    ['2', '1', '1', '1']
  ])
})

test('sort by table number', () => {
  const orders = [
    ['Laura', '10', 'Soda'],
    ['Jhon', '1', 'Soda'],
    ['Melissa', '100', 'Soda']
  ]

  const result = displayTable(orders)

  expect(result).toStrictEqual([
    ['Table', 'Soda'],
    ['1', '1'],
    ['10', '1'],
    ['100', '1']
  ])
})
