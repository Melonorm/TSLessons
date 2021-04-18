/**
 *      6. GUARDS
 **/

// Guards - вспомогательные конструкции (операторы) в TypeScript, позволяющие работать с типами данных

/*--------------------------------------------------------------------------------------------------------------------
6.1     Оператор typeof
 */

// оператор typeof проверяет строковое представление типа переменной
function strip(x: number | string) { // x или number или string
    if (typeof x === 'number') {    // если тип переменной равен "nimber"....
        return x.toFixed(2) // использовать метод, характерный для number переменных.
    }                              // если тип переменной равен "string"...
    return x.trim()                // ... использоваь метод, характерный для типов string
}

/*---------------------------------------------------------------------------------------------------------------------
6.2     Оператор instanceof
 */

// C помощью оператора instanceof можно проверить принадлежность какого-либо объекта к определённому классу

class MyResponse {
    header = 'response heather'
    result = 'response result'
}

class MyError {
    heather = 'error heather'
    message = 'error message'
}

// функция обрабатывает или Response или Error (принимает аргументом любой из этих типов)
function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {  // если аргумент instanceof класса MyResponse...
        return {
            info: res.header + res.result  // ... вернём объект с полем info со значениями полей класса MyResponse
        }
    }
    else {                                     // иначе....
        return {
            info: res.heather + res.message   // ... вернуть объект с полем info со значениями полей класса MyError
        }
    }
}

/*--------------------------------------------------------------------------------------------------------------------
6.3     Типы данных с фиксированными значениями
 */

// например, есть специальный тип, принимающий в себя парпаметры либо 'success' либо 'danger' либо 'warning'
type AlertType = 'success' | 'danger' | 'warning'

// функция принимает в параметром тип AlertType
function setAlertType(type: AlertType) {
    // ......
}
// в функцию пожно преедавать только указанные значения
setAlertType('success')
setAlertType('warning')
// другие значения будут ошибкой
// setAlertType('another')

