/*Своя функция bind 
Реализуйте функцию `bind`.
Input: Object, arguments
Output: Function*/

//Bind - привязывает новый контекст к функции, а также 
//привязывает параметры которые мы ходим передать в эту функцию
//по умолчанию хранится все в прототипе
//call - тоже самое что и bind, только сразу вызывает функцию

Function.prototype.myBind = function (context, ...args) {
  return (...rest) => {
    return this.call(context, ...args.concat(rest)) 
  }
}

function log(...props) {
  console.log(this.name, this.age, ...props)
}

const obj = { name: 'Vitalii', age: 36 }

log.myBind(obj, 1, 2)()