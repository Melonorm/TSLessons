/**
 * 4.   Функции
 **/

/*
4.1     Объявление функции
 */

function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(string: string): string {
    return string.trim().toUpperCase()
}

/*
4.2    Перегрузка функции
 */

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {   // если не передавались аргументы (если НЕ а И НЕ в)
        return {x: undefined, y: undefined}
    }
    if (a && !b) {    // если передавался только один параметр а (если а И НЕ в)
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b} // если передавались 2 аргумента
}

console.log('Без параметров: ', position())
console.log('Один параметр: ', position(42))
console.log('Два параметра: ', position(10, 15))