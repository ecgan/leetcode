/**
 * Scan the orders and return an object with map and foodNames.
 * map is an object with key being the table number, and value being the count for each food name.
 * foodNames is a sorted array of food names with no duplicates.
 *
 * @param {*} orders
 */
const scanOrders = (orders) => {
  const map = {}
  const foodNamesSet = new Set()

  for (let i = 0; i < orders.length; i++) {
    const [, tableNumber, foodItem] = orders[i]

    if (!map[tableNumber]) {
      map[tableNumber] = {}
    }

    if (!map[tableNumber][foodItem]) {
      map[tableNumber][foodItem] = 1
    } else {
      map[tableNumber][foodItem]++
    }

    foodNamesSet.add(foodItem)
  }

  const names = [...foodNamesSet]
  names.sort()

  return { map, foodNames: names }
}

/**
 * Return an array of data rows.
 * The columns are based on the columns in headerRow.
 *
 * @param {*} headerRow
 * @param {*} map
 */
const getDataRows = (headerRow, map) => {
  const tableItems = Object.entries(map)
  const rows = []
  for (let i = 0; i < tableItems.length; i++) {
    const row = []
    const [tableNumber, items] = tableItems[i]

    row.push(tableNumber)

    for (let j = 1; j < headerRow.length; j++) {
      const foodName = headerRow[j]

      if (!items[foodName]) {
        row.push('0')
      } else {
        row.push(items[foodName].toString())
      }
    }

    rows.push(row)
  }

  return rows
}

/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
const displayTable = function (orders) {
  const { map, foodNames } = scanOrders(orders)
  const headerRow = ['Table', ...foodNames]
  const dataRows = getDataRows(headerRow, map)

  const result = [headerRow, ...dataRows]

  return result
}

module.exports = displayTable
