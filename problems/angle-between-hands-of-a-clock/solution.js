const angleClock = (hour, minutes) => {
  const minuteAngle = 6 * minutes
  const hourAngle = ((hour === 12) ? 0 : hour * 30) + (minutes / 60 * 30)

  const angleDiff = Math.abs(hourAngle - minuteAngle)

  return (angleDiff < 180) ? angleDiff : 360 - angleDiff
}

module.exports = angleClock
