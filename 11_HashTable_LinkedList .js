/*### Очередь с О(1) сложностью операций

Создайте очередь, в которой будут реализованы операции на добавление элементов 
в конец очереди, удаление первого элемента и вычисление размера очереди с 
сложностью алгоритма `О(1)` . */


//Структуры данных (Set, Map, HashTable, LinkedList)

//Первый вариант
//LinkedList (каждый элемент имеет указатель на следующий объект

class LinkedList {
    #length = 0
    #head
    #tail

    addToTail(value) {
        const node = {
            value,
            next: null
        }

        if (this.#length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail = node
        }
        this.#length++
    }

    removeFromHead() {
        if (this.#length === 0) {
            return
        }

        const value = this.head.value

        this.head = this.head.next
        this.#length--
        return value
    }

    size() {
        return this.#length
    }
}


class Queue extends LinkedList {
    constructor() {
        super()

        this.enqueue = this.addToTail
        this.dequeue = this.removeFromHead
    }

    get size() {
        return super.size() //обращаемся к родительскому методу size
    }
}
const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue() //получаем 2

console.log(queue.size) //3



//---------------------------------------------------------------------
//    Второй вариант //Базовый HashTable
//     class Queue {
//     #storage = {}
//     #last = 0
//     #first = 0

//     enqueue(item) {
//         this.#storage[this.#last] = item
//         this.#last++
//     }

//     dequeue() {
//         if (this.size === 0) {
//             return
//         }
//         const value = this.#storage[this.#first]
//         delete this.#storage[this.#first]
//         this.#first++
//         return value
//     }

//     get size() {
//         return this.#last - this.#first
//     }
// }
// const table = new Queue()

// table.enqueue(1)
// table.enqueue(2)
// table.enqueue(42)

// table.dequeue(2)

// console.log(table.size) //2
