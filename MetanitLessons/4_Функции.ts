/**********************************************************************************************************************
 *          4.1 Определение и вызов функции
 */

// Определение функции:
function add1(x: number, y: number): number {
    return x + y;
}

// вызов функции:
let result1 = add1(5, 7);
console.log(result1);    // 12

// Можно определить функцию, как переменную:
let add2 = function (x: number, y: number) {
    return x + y;
};
let result2 = add2(7, 5);


/*********************************************************************************************************************
 *          4.2 Параметры функции
 */
/*
            Необязательные параметры

       В TS неоторые параметры можно объявить как необязательные. Они должны:
     а. Помечены вопросительным знаком (их имена);
     б. Прописываться после обязательных параметров;
     в. В теле функции наличие необязательного параметра и соответствующие действия проверяются условными операторами.
 */
function getName1(firstName: string, secondName?: string): string {
    if (secondName) {
        return firstName + " " + secondName;
    }
    else {
        return firstName;
    }
}
let name1: string = getName1("Ваня", "Кузнецов");
console.log(name1);    // Ваня Кузнецов
let name2: string = getName1("Иван");
console.log(name2);   // Иван

/*
                Значения параметров по-умолчанию
      В параметры можно передать значение по-умолчанию, и если для такого параметра не передаётся значение, он использует
    значение о-умолчанию
 */
function getName2(firstName: string, secondName: string = "Швагер") {
    console.log(`Имя: ${firstName}. Фамиля: ${secondName}`);
}

getName2("Виталий");           // Виталий Швагер
getName2("Иван", "Иванов");    // Иван Иванов

// В качестве значения в параметры можно передать результат работы другой функции:
function getDefaultLastName1(): string {
    return "Швагер";
}

function getName3(firstName: string, secondName: string = getDefaultLastName1()): string {
    return firstName + " " + secondName;
}

let name3: string = getName3("Дарья");
console.log(name3);     // Дарья Швагер

/*
                      Неопределённый набор параметров  (var args)
       Если необходимо, чтобы функция принимала набор однотипных параметров, то используется знак многоточия, после
     которого идет массив:
 */
function addNumbers(...numbers: number[]):number {
    let result: number = 0;
    numbers.forEach(num => result += num);
    return result;
}
let num1 = addNumbers(1, 2, 3);
console.log(num1);          // 6
let num2 = addNumbers(10, 20, 30, 40, 50);
console.log(num2);          // 150


/**********************************************************************************************************************
 *             4.3 Пергрузка функций
 */
/*
     Перегрузки функций в TS - возможность определить несколько версий функции, которые будут иметь одно и то же имя,
   но разные типы параметров или разное количество параметров.
    Для перегрузки:
   1. Опеределяются все версии функции, которые не будут иметь никакой логики.
   2. Определяется версия функции с общей сигнатурой, которая подходит под все ранее определенные варианты. И в этой
    общей версии уже определяется конкретная логика функции.
 */
function add3(x: string, y: string): string;
function add3(x: number, y: number): number;
function add3(x: any, y: any): any {
    return x + y;
}
let resultNumber: number = add3(5, 3);
console.log(resultNumber);    // 8
let resultString: string = add3("5", "3");
console.log(resultString);   // 53
