/*Напишите функцию, которая принимает строку и возвращает новую, в 
которой все дублирующиеся символы будут удалены.
Input: String
Output: String */

function removeDupes(str) {
  const chars = {}
  const res = []

  for (let i = 0; i < str.length; i++) {
    if (!chars[str[i]]) {
      chars[str[i]] = true
      res.push(str[i])
    }
  }

  return res.join('')

  // return Array.from(new Set(str)).join('')
}

console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'