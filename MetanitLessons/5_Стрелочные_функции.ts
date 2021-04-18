/*
        Стрелочные функции - аналог лямбда-выражений в Java с некоторыми ньюансами.
        Представляют собой выражение типа (параметры) => тело_функции
 */
// пример стрелочной функции
let sum1 = (x: number, y: number) => x + y;
console.log(sum1(3, 5));    // 8

// Что аналогично обычной функции вида:
let sum2 = function (x: number, y: number): number {
    return x + y;
}
console.log(sum2(4, 6));   // 10

// тип параметров можно опускать:
let sum3 = (x, y) => x + y;
console.log(sum3(2, 3));   // 5

// если стрелочная функция не требует параметров, то передаются пустые скобки:
let helloFunc = () => "Hello World!";
console.log(helloFunc());    // Hello World!

// если передаётся только один параметр, скобки можно опусить:
let squareFunc = x => x * x;
console.log(squareFunc(5));     // 25

// если тело функции представляет собой множество выражений, все выражения заключаются в фигурные скобки ({}):
let sumOfSquares = (x: number, y: number) => {
    const squareX = x * x;
    const squareY = y * y;
    return squareX + squareY;
}
console.log(sumOfSquares(2, 3));   // 13

// Стрелочную функцию можно передавать в функцию вместо параметра, который представляет собою функцию:
function mathOp(x: number, y: number, operation : (a: number, b: number) => number): number {
    let result = operation(x, y);
    return result;
}
console.log(mathOp(10, 20, (x, y) => x + y));  // 30
console.log(mathOp(10, 20, (x, y) => x * y));  // 200

