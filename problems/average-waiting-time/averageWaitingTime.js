/**
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = (customers) => {
  const waitingTimes = []

  let curTime = 0
  for (let i = 0; i < customers.length; i++) {
    const [arrival, duration] = customers[i]

    curTime = Math.max(curTime, arrival) + duration
    waitingTimes.push(curTime - arrival)
  }

  const waitingTimesSum = waitingTimes.reduce((acc, cur) => acc + cur, 0)

  return waitingTimesSum / waitingTimes.length
}

module.exports = averageWaitingTime
