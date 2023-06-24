/*Напишите функцию, которая принимает отсортированный массив с числами и 
число. Необходимо вернуть индекс числа, если оно есть в массиве. 
Иначе вернуть `-1`.
Input: Number[], Number
Output: Number */

// Time: O(n)
//сложность обусловлена числом элементов
// function search(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// второй вариант, ускорение поиска
// Time: O(log(n))
//
function search(array, target) {
    let start = 0 //первый элемент массива
    let end = array.length - 1 //последний элемент массива

    //сравниваем искомый элемент с началом и концом массива
    //если искомое число больше конечного - значит его там НЕТ
    //если искомое число меньше начального - значит его там НЕТ
    if (target < array[start] || target > array[end]) { 
        return -1
    }
    //В каком секторе находится искомое число??
    //Для этого будем дробить массив на 2 половины, каждый раз!
    //После каждой итерации будем отсеивать пол массива
    while (true) {
        if (target === array[start]) {
            return start
        }

        if (target === array[end]) {
            return end
        }
        //Проверяем разницу между старт и энд 
        //(означает что между ними нет элементов)
        if (end - start <= 1) {
            return -1
        }

        //Делим пополам
        const middle = Math.floor((start + end) / 2)
        //Отсекаем ненужную половину, назначаем новый старт
        if (target > array[middle]) {
            start = middle + 1
        } else if (target < array[middle]) {
            end = middle - 1
        } else {
            return middle
        }
    }
}

console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
console.log(search([1, 3, 6, 13, 17], 12)) // -> -1