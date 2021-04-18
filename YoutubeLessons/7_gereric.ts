/**
 *   7. GENERIC типы
 **/

// есть 2 массива разных типов данных (number и string):
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfSrings: Array<string> = ['one', 'one', 'two', 'tree', 'five']


// Функция принимает в себя параметром массивы ЛЮБОГО ТИПА и возвращает тоже массив ЭТОГО ЖЕ ТИПА.
// "Т" в данном случае - обобщённый тип - Generic
function reverse<T>(array: T[]): T[] {
    return  array.reverse()
}

// теперь можно вызывать функцию с массивами разных типов даввых - вс будет работать корректно:
reverse(arrayOfNumbers)
reverse(arrayOfSrings)

