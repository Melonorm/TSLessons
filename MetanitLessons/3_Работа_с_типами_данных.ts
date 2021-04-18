/**********************************************************************************************************************
 *              3.1  Объединения (union)
 **/
/*
        Объединения (union) позволяют определить переменную, которая может хранить значение двух или более типов. Типы,
    которые может принимать переменная, разделяются прямой чертой (|)
 */
let someUnion: number | string;  // переменная может иметь тип либо number либо string
someUnion = 11;
console.log(someUnion);   // 11
someUnion = "одинадцать";
console.log(someUnion);  // одинадцать


/**********************************************************************************************************************
 *          3.2   Проверка типа (оператор typeof)
 */
/*
        С помощью оператора typeof можно проверить тип переменной. Это может быть необходимо, когда мы хотим выполнить
      некоторые операции с переменной, но нам неизвестен ее точный тип (например, переменная представляет тип any).
      Данная функциональность еще называется type guards или защита типа:
 */
let anySum: any;    // переменная может быть любого типа
anySum = 1200;

if (typeof anySum === "number") {    // перед арифметическим действием нужно проверить, являетяс ли anySum числом
    let result = anySum / 2;
    console.log(result);
}
else {
    console.log('Invalid operation!');
}
/*
         Оператор typeof возвращает тип значения. Например, выражение typeof sum в данном случае возращает "number",
     так как переменная sum представляет число.
 */


/**********************************************************************************************************************
 *          3.3 Псевдонимы типов (type)
 */
// TypeScript позволяет определять псевдонимы типов с помощью ключевого слова type:
type stringOrNumberType = string | number;
let someTypeSum: stringOrNumberType = 36.6;
if (typeof someTypeSum === "number") {
    console.log(someTypeSum / 6);
}
// Далее можно применять псевдоним аналогично типу данных


/**********************************************************************************************************************
 *          3.4  Приведение типов
 */
/*
        Type assertion представляет модель преобразования значения переменной к определенному типу. Обычно в некоторых
     ситуациях одна переменная может представлять какой-то широкий тип, например, any, который по факту допускает
     значения различных типов. Однако при этом нам надо использовать переменную как значение строго определенного типа.
     И в этом случае мы можем привести к этому типу.
 */
//    Есть две формы приведения. Первая форма заключается в использовании угловых скобок:
let someAnyValue1: any = "Hello world!";
let someAnyStrLength1: number = (<string>someAnyValue1).length;
console.log(someAnyStrLength1);   // 12

let someUnionValue1: string | number = "Hello World again!";
let someUnionStrLength1: number = (<string>someUnionValue1).length;
console.log(someUnionStrLength1);   // 18

// Вторая форма заключается в применении оператора as:
let someAnyValue2: any = "Hello world!";
let someAnyStrLength2: number = (someAnyValue2 as string).length;
console.log(someAnyStrLength2);  // 12

let someUnionValue2: string | number = "Hello World again!";
let someUnionStrLength2: number = (someUnionValue2 as string).length;
console.log(someUnionStrLength2);    // 18





