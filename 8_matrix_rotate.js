/*Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 
градусов по часовой стрелке.
Дополнительно: Напишите еще 2 функции, которые переворачивают 
матрицу на 180 и 270 градусов. 
[1, 2, 3]    [7, 4, 1]
[4, 5, 6] -> [8, 5, 2]  
[7, 8, 9]    [9, 6, 3]   
Input: Number[][]
Output: Number[][]*/

/*
0:0 0:1 0:2       0:2 1:2 2:2
1:0 1:1 1:2  =>   0:1 1:1 2:1
2:0 2:1 2:2       0:0 1:0 2:0
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate(source) {
  const newMatrix = source[0].map(() => [])

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[0].length; j++) {
      newMatrix[j][source.length - 1 - i] = source[i][j]
    }
  }

  return newMatrix
}
console.log(rotate(matrix))

//rotate180
function rotate180(source) {
  return rotate(rotate(source))
}
console.log(rotate180(matrix))

//rotate270
function rotate270(source) {
  return rotate180(rotate(source))
}
console.log(rotate270(matrix))

//rotate360
function rotate360(source) {
  return rotate270(rotate(source))
}
console.log(rotate360(matrix))



