/**********************************************************************************************************************
 *                  7.1.  ОБЩИЕ СВЕДЕНИЯ
 **/
/*
        В TypeScript три модификатора:
         public - доступ отовсюду
         protected - доступ только из классов-наследников
         private - доступ только внутри класса
 */

/***********************************************************************************************************************
 *              7.2. Public
 */
/*
    В TS модификатор доступа public используется по-умолчанию.
    Доступ к полям / методам - полная аналогия с Java
*/
class ExamplePublic {
    exampleField1: string;         // модификатор по-умолчанию public
    public exampleField2: string;

    constructor(example1: string, example2: string) {
        this.exampleField1 = example1;
        this.exampleField2 = example2;
    }

    public exampleMethod() {
        console.log('Do something')
    }
}

let ex1: ExamplePublic = new ExamplePublic("пример 1", "пример2");
console.log(ex1.exampleField1);  // доступ к public полям есть отовсюду
ex1.exampleMethod();       // доступ к public методам есть отовсюду


/***********************************************************************************************************************
 *          7.3 Protected
 **/
/*
    Доступ к protected полям и методам осуществляется только внутри коасса и классов-наследников
    Полный аналог Java
*/
class ExampleProtected {
    protected exampleField: string

    constructor(exampleField: string) {
        this.exampleField = exampleField;
    }

    protected exampleMethod() {
        console.log("Do something");
    }
}

class Child extends ExampleProtected {
    constructor(exampleField: string) {
        super(exampleField);
    }

    public showParentField() {
        console.log(this.exampleField)   // есть доступ к полю, т.к. класс - наследник
    }
}

let ex2: ExampleProtected = new ExampleProtected("Пример");
// ex2.exampleMethod();    // нет доступа к protected методу вне класса или классов-наследников


/***********************************************************************************************************************
 *                 7.4.   Private
 **/
/*
    Доступ к приватнфм полям / методам есть только внутри класса.
    Имена приватных полей принято начинать с символа нижнего подчёркивания (_). Например: _name. Но это необязательно.
    Полный аналог Java
 */
class ExamplePrivate {
    private exampleField1: string
    private _exampleField2: string

    constructor(exampleField: string, _exampleField2: string) {
        this.exampleField1 = exampleField;
        this._exampleField2 = _exampleField2;
    }

    private exampleMethod() {
        console.log("Do something");
    }
}

let ex3: ExamplePrivate = new ExamplePrivate("Пример1", "Пример2");
// console.log(ex3.exampleField)  // Нет доступа к private полю вне класса


/***********************************************************************************************************************
 *              7.5. Определение свойств через конструктор
**/

//  Использование модификаторов в параметрах конструктора позволяет сократить написание кода. Например, следующий класс:
class User4 {
    private _name: string;
    public age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this.age = age
    }
}

// .... аналогичен следующему:
class User5 {
    constructor(private name: string, public age: number) {}
}
/*
       Используя модификаторы в параметрах конструктора, нам больше не надо явно создать свойства для этих параметров.
    Свойства создаются автоматически, называются они по имени параметров и имеют те же модификаторы, что и параметры.
 */
