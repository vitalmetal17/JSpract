/**Напишите функцию, которая принимает 2 строки. Верните `true` если строки 
являются перевернутым вариантом друг друга (см. пример). Иначе 
верните `false`.
Input: String, String
Output: Boolean */

function isStringRotated(source, test) {
  // if (source.length !== test.length) { //проверка1
  //   return false
  // }
  // for (let i = 0; i < source.length; i++) {
  //   const rotate = source.slice(i, source.length) + source.slice(0, i)
  //   if (rotate === test) {
  //     return true
  //   }
  // }
  //return false

  
  //второй вариант решения(складываем введенную строку и анализируем на 
  //совпадения)

  return source.length === test.length && (source + source).includes(test) 
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false