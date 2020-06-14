// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */
// const canConstruct = function (ransomNote, magazine) {
//   const magazineMap = {}

//   for (let i = 0; i < magazine.length; i++) {
//     const char = magazine[i]

//     if (!magazineMap[char]) {
//       magazineMap[char] = 1
//     } else {
//       magazineMap[char]++
//     }
//   }

//   for (let i = 0; i < ransomNote.length; i++) {
//     const char = ransomNote[i]

//     if (!magazineMap[char]) {
//       return false
//     }

//     magazineMap[char]--
//   }

//   return true
// }

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const letterCount = []

  for (let i = 0; i < magazine.length; i++) {
    const charCode = magazine.charCodeAt(i) - 97

    if (!letterCount[charCode]) {
      letterCount[charCode] = 1
    } else {
      letterCount[charCode]++
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const charCode = ransomNote.charCodeAt(i) - 97

    if (!letterCount[charCode]) {
      return false
    }

    letterCount[charCode]--
  }

  return true
}

module.exports = canConstruct
