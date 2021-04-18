/***********************************************************************************************************************
 *                  10.1. Интерфейсы объектов
 **/
/*
        Интерфейс определяет свойства и методы, которые объект должен реализовать.
      - Сам интерфейс определяется ключевым словом interface;
      - Объект, реализующий интерфейс, должен реализовать все поля (кроме необязательных) и методы интерфейса;
      - Необзательное поле можно не реализовывать. Оно помечается вопросительным знаком (?) после имени поля;
      - В интерфейсах могут определяться readonly поля - должны инициализироваться при создании объекта;
      - Методы в интерфейса определяются без реализации;
      - Объект должен реализовать метод интерфейса с тем же набором параметров и тем же типом выходного результата;
 */
interface IUser {  // определение интерфейса
    id: number;          // обязательное поле
    name: string;
    company?: string;    // необязательное поле интерфейса
    readonly age: number;  // поле "только для чтения" интерфейса

    getFullName(surname: string): string;  // метод интерфейса
}

let iEmployee: IUser = {   // объект iEmployee реализует интерфейс IUser
    id: 1,
    name: "Alice",
    age: 27,                   // это поле нужно обязательно инициализировать. Пеменять его в дальнейшем нельзя
    company: "Google",        // необязательное поле (можно было не определять)

    getFullName(surname: string): string {  // метод обязателен для реализации
        return this.name + " " + surname;
    }
}

// iEmployee.age = 50;  // ОШИБКА! Нельзя изменить readonly поле
let employeeFullName = iEmployee.getFullName("Selegneva");
console.log(employeeFullName);  // Alice Selegneva


/***********************************************************************************************************************
 *              10.2.  Интерфейсы классов
 */
/*
        Интерфейс классов - полный аналог интерфейсов в Java.
      - Для реализации классом интерфейса используется ключевое слово implements;
      - Класс одновременно может реализовывать несколько интерфейсов;
      - Класс обязан определить все поля и методы интерфейса (кроме необязательных полей)
      - Объект является как объектом класса, так и объектом интерфейса;
      - Интерфейсы могут наседоваться один от другого через ключевое слово extends. Класс, реализующий интерфейс-наследник,
       также должен определить поля и методы интерфейса-родителя;
 */
class User13 implements IUser {
    id: number;
    name: string;
    readonly age: number;
    company: string;

    constructor(id: number, name: string, age: number, company: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.company = company;
    }

    getFullName(surname: string): string {
        return `${this.name} ${surname}`;
    }
}
// объект может принадлежать....
let user13_1: User13 = new User13(1, "Вася", 17, "Google");  // ... классу
let user13_2: IUser = new User13(2, "Петя", 18, "GazProm");  // ... интерфейсу


/***********************************************************************************************************************
 *              10.3. Интерфейсы методов
 **/
/*
        Интерфейсы функций содержат определение типа функции. Затем они должны быть реализованы объектом, который
      представляет функцию данного типа:
 */
interface FullNAmeBuilder {  // интерфейс FullNameBuilder содержит лишь сигнатуру функции.
    (name: string, surname: string): string;
}

// переменная simpleBuilder имеет тип FullNameBuilder и поэтому должна представлять функцию с данной сигнатурой
let simpleFullnameBuilder: FullNAmeBuilder = function (name: string, surname: string): string {
    return `Mr. ${name} ${surname}`;
}

let fullName = simpleFullnameBuilder("Виталий", "Швагер");
console.log(fullName);   // Mr. Виталий Швагер


/***********************************************************************************************************************
 *                  10.4.  Интерфейсы массивов
 **/
/*
          Интерфейсы массивов описывают объекты, к которым можно обращаться по индексу, как, например, к массивам.
 */

//    Интерфейс StringArray содержит сигнатуру массива. Эта сигнатура указывает, что объект, который реализует StringArray,
//  может индексироваться с помощью чисел (объекта типа number). И, кроме того, данный объект должен хранить объекты
//  типа string:
interface StringArray {
    [index: number]: string;
}

let phonesArray: StringArray;
phonesArray = ["Xiaomi Mi8", "HTC 10", "HP Elite x3"];

let myPhone = phonesArray[0];
console.log(myPhone);    //  Xiaomi Mi8

// Для индексации также можно использовать тип string.
interface Dictionary {
    [index: string]: string
}

var colors: Dictionary = {};
colors["red"] = "#ff0000";   // #ff0000
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";

console.log(colors['red']);


/***********************************************************************************************************************
 *          10.5. Гибридные интерфейсы
 */
/*
      Интерфейсы могут сочетать различные стили, могут применяться сразу как к определению объекта, так и к определению
    функции:
       TODO: Народ пишет, что это один в один с перегрузкой в C++ и С#. Проверить.
 */
interface PersonInfo {
    (name: string, surname: string): void;

    fullName: string;
    password: string;

    authenticate(): void;
}

function personBuilder(): PersonInfo {
    let person = <PersonInfo>function (name: string, surname: string): void {
        person.fullName = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(person.fullName + " входит в систему с паролем " + person.password);
    };
    return person;
}

let tom1 = personBuilder();
tom1("Tom", "Simpson");
tom1.password = "qwerty";
tom1.authenticate();

/*
        Тип функции, определяемый в таком гибридном интерфейсе, как правило, выступает в роли конструктора объекта. В
     данном случае такой конструктор имеет тип (name: string, surname: string):void;.

        А функция, которая представляет данный интерфейс (в данном случае - функция personBuilder), реализует эту
     функцию конструктора, и также может использовать другие свойства и методы, которые были определены в интерфейсе.
 */
