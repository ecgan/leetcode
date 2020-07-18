/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function (numCourses, prerequisites) {
  const fromToLists = []
  const coursePrerequisitesCounts = new Array(numCourses).fill(0)

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prerequisite] = prerequisites[i]
    fromToLists[prerequisite] = fromToLists[prerequisite] || []
    fromToLists[prerequisite].push(course)

    coursePrerequisitesCounts[course]++
  }

  // coursesQueue contains the courses that we will take.
  const coursesQueue = []

  // put the courses with zero prerequisites into the queue.
  for (let i = 0; i < numCourses; i++) {
    if (coursePrerequisitesCounts[i] === 0) {
      coursesQueue.push(i)
    }
  }

  // start finishing the courses in the queue,
  // and check for the next courses that we can take.
  // if the prerequisite count for the next course becomes 0,
  // put the next course into the queue.
  const finished = []
  while (coursesQueue.length > 0) {
    const course = coursesQueue.shift()
    finished.push(course)

    const toCourses = fromToLists[course] || []
    for (const toCourse of toCourses) {
      coursePrerequisitesCounts[toCourse]--

      if (coursePrerequisitesCounts[toCourse] === 0) {
        coursesQueue.push(toCourse)
      }
    }
  }

  if (finished.length < numCourses) {
    return []
  }

  return finished
}

module.exports = findOrder
