const ParkingSystem = require('./ParkingSystem')

test('Example 1', () => {
  const parkingSystem = new ParkingSystem(1, 1, 0)

  expect(parkingSystem.addCar(1)).toBe(true)
  expect(parkingSystem.addCar(2)).toBe(true)
  expect(parkingSystem.addCar(3)).toBe(false)
  expect(parkingSystem.addCar(1)).toBe(false)
})

test('Adding big car til no more space', () => {
  const parkingSystem = new ParkingSystem(2, 0, 0)

  expect(parkingSystem.addCar(1)).toBe(true)
  expect(parkingSystem.addCar(1)).toBe(true)
  expect(parkingSystem.addCar(1)).toBe(false)
})

test('Adding medium car til no more space', () => {
  const parkingSystem = new ParkingSystem(0, 2, 0)

  expect(parkingSystem.addCar(2)).toBe(true)
  expect(parkingSystem.addCar(2)).toBe(true)
  expect(parkingSystem.addCar(2)).toBe(false)
})

test('Adding small car til no more space', () => {
  const parkingSystem = new ParkingSystem(0, 0, 2)

  expect(parkingSystem.addCar(3)).toBe(true)
  expect(parkingSystem.addCar(3)).toBe(true)
  expect(parkingSystem.addCar(3)).toBe(false)
})
