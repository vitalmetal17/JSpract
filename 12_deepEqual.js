/*### Deep Equal
Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих 
параметра
Inputs: Any, Any
Output: Boolean */

function deepEqual(a, b) {
    //Сравнение NaN (Not a number)
    //Но тип у NaN - number
    //Если написать в консоле NaN === NaN => false
    //Поэтому прописываем 
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true
    }
    //Проверка на тип
    //Если типы разные то false
    if (typeof a !== typeof b) {
        return false
    }
    //Проверка значений
    if (typeof a !== 'object' || a === null || b === null) {
        return a === b
    }
    //Проработка объектов
    //Сравниваем количество ключей
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false
    }
    //Проработка вложенных значений (ключей)
    for (const key of Object.keys(a)) {
        if (!deepEqual(a[key], b[key])) {
            return false
        }
    }
    return true
}

const source = { a: 1, b: { c: 1 } }
const test1 = { a: 1, b: { c: 1 } }
const test2 = { a: 1, b: { c: 2 } }

console.log(deepEqual(source, test1)) // -> true
console.log(deepEqual(source, test2)) // -> false
console.log(deepEqual(NaN, NaN)) // -> true
console.log(deepEqual('test', 'test!')) // -> false
console.log(deepEqual()) // -> true