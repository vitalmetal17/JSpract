/*Уникальность всех символов в строке
Напишите функцию, которая определяет уникальны ли все символы в строке. 
Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
Input: String
Output: Boolean */

// function isUnique(string) {

function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) !== i) {
            return false
        }
    }
    return true

    //     const chars = new Set()

    //     for (let i = 0; i < str.length; i++) {
    //         const current = str[i]

    //         if (chars.has(current)) {
    //             return false
    //         }

    //         chars.add(current)
    //     }
    //     // return true

    //     return new Set(str).size === str.length
    // }
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('123456777')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false