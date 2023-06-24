/*Напишите функцию, которая будет генерировать последовательность 
Фиббоначи длинны `n`, которую передали как аргумент.
Input: Number
Output: Number[] */

//Замыкание
//Кэширование - запомниаем предыдущий консоллог, 
//используем ранее вычисленные значения

const fibonacci = (function () {
  const seq = [1, 1]

  return function (n) {
    console.log('Called with', n)
    if (seq.length >= n) {
      console.log('No compute')
      return seq.slice(0, n)
    }

    while (seq.length < n) {
      const last = seq[seq.length - 1]
      const prev = seq[seq.length - 2]
      seq.push(last + prev)
      console.log('Pushed:', seq[seq.length - 1])
    }
    return seq
  }
})()
console.log(fibonacci(17)) //Called with 17
console.log(fibonacci(10)) //No compute
console.log(fibonacci(19)) //Pushed: 2584, Pushed: 4181
console.log(fibonacci(18)) //Pushed: 2584, Pushed: 4181

//------------------------------------------------------------------------
// function fibonacci(n) {
//   const sequence = [1, 1]

//   if (n < 2) {
//     return sequence.slice(0, n)
//   }

//   while (sequence.length < n) {
//     const last = sequence[sequence.length - 1]
//     const prev = sequence[sequence.length - 2]
//     sequence.push(last + prev)
//   }

//   return sequence
// }

// console.log(fibonacci(17)) // -> [1, 1, 2, 3, 5, 8, 13, 21]