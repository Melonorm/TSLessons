/*********************************************************************************************************************
 *      2.1 тип Boolean
 */
//   Тип Boolean представляет логическое значение true или false:

let isAlive = true;
let isEnabled: boolean = false;


/*********************************************************************************************************************
 *      2.2 тип Number
 */
//    Тип Number представляет собой числа, причём, как и в Js, все числа являются числами с плавающей точкой.
// TS поддерживает двоичную, восьмеричную, десятичную и шестнадцатиричную записи чисел:

let binary: number = 0b1010;
let octal: number = 0o744;
let decimal: number = 6;
let hex: number = 0xf00d;


/**********************************************************************************************************************
 *      2.3 тип String
 */
// String представляет строки. Как и в JavaScript, в TypeScript строки можно заключать в двойные, либо в одинарные кавычки:

let firsTName = "Vitaliy";
let  seconDName: string = 'Shvager';

/*
        Шаблоны строк:
      Если задать строку в косых кавычках (`),  в неё моэно встраивать различные выражения с помощью синтксиса ${ expr },
    где expr - выражение: (аналог printf() в Java)
 */
let vitFrstName: string ='Виталий';
let vitAge: number = 38;
let vitInfo: string = `Имя: ${vitFrstName}. Возоаст: ${vitAge} лет.`;
console.log(vitInfo);     //  Имя: Виталий. Возраст 38 лет.

// Косые кавычки также можно применять для установки многострочного текста:
let sentence : string = `Hello world!
GoodBye world!`

/*********************************************************************************************************************
 *          2.4   Null и undefined
 */
/*
    Null и undefined - специальные типы, которые могут выступать подтипами других типов. В этом плане null и undefined
    выступают как подтипы других типов и полезны преимущественно в каких-то операциях, где неизвестен результат - то ли
     это будет число или строка, то ли это будет null. В этом случае, чтобы избежать возможной ошибки, мы можем проверить
     значение на undefined или null.

   --  undefined: указывает, что значение не установлено
   --  null: указывает на неопределенное значение
 */

let someNUmber: number = undefined;
console.log(someNUmber);
someNUmber = null;
console.log(someNUmber);
someNUmber = 5;

/**********************************************************************************************************************
 *              2.5 Массивы  (Array)
 */
/*
        Массивы в TS являются строго типизированными. Основные их особенности аналогичны JSовским. В сравнении с Java,
     массивы функциональностью похожи на ArrayList.
 */
let tsArrayNumbers: number[] = [1, 2, 3, 5]
tsArrayNumbers.push(6);
console.log(tsArrayNumbers.length);   // 5

let tsArrayStrings: string[] = ["red", "blue", "green"];
console.log(tsArrayStrings[2]);  //  green

// Альтернативный вариант объявления массива:
let tsArrayStringsAlt: Array<string> = ['Tom', 'Bob', 'Mike']


/*********************************************************************************************************************
 *          2.6  Кортежи  (Tuple)
 */
//   Кортежи, как и массивы, предствляют собой набор элементов, для которых уже заранее известен тип:

// Определение кортежа. Кортеж состоит из 2х элементов: строки и числа
let userInfoTuple: [string, number];
// Инициализация кортежа:
userInfoTuple = ['Tom', 25];

// Переданные значения обязательно должны соответствовать типам по позиции:
// userInfoTuple = [25, 'Tom'];        // Ошибка!

// Использование кортежа:
console.log(userInfoTuple[0]); //  Tom
userInfoTuple[1] = 26;


/*********************************************************************************************************************
 *          2.7 Перечисления (Enum)
 **/
// enum в TS - предназначенн для описания набора числовых данных с помощью строковых констант
// определение
enum Season {Winter, Spring, Summer, Autumn};
// присваивание значения переменной
let currentSeason: Season = Season.Spring;
// вывод на экран числового значения (индекса)
console.log(`current season index is ${currentSeason}`);  //  1
// вывод на экран строкового значения
console.log(`current season name is ${Season[1]}`);  // Spring

// числовые значения элементов enum мщжно определять вручную:
enum Season2 {Winter = 6, Spring, Summer, Autumn};   // 6 7 8 9
enum Season3 {Winter = 5, Spring = 16, Summer = 10, Autumn = 20}; // 5 16 10 20


/*******************************************************************************************************************
 *          2.8  Any
 */
// Any описывает данные, тип которых может быть неизвестен на момент их инициализации
let someVar: any = 'Hello';
console.log(someVar); //  Hello    сейчас someVar - строка (string)
someVar = 20;
console.log(someVar); // 20   теперь someVar - число (number)

// в массивы типа any[] можно ложить любые типы данных:
let someAnyArray: any[] = [20, 'string', true, Object, 'и так далее....'];


/*********************************************************************************************************************
 *          2.9  Комплексные объекты
 **/
// Кроме переменных в TS можно также создавать и сложные объекты (полный аналог объектов в js)
let personTom = {name: 'Tom', age: 28};

// Вывод на эктан поля объекта:
console.log(personTom.name);
// или так:
console.log(personTom["name"]);

// Т.к. TS - строго типизированный язык, нужно инициализировать все поля объекта при его переинициализации:
// personTom = {name: "Alice"};  // ОШИБКА, т.к. компилятор ожидает 2 поля у объекта
