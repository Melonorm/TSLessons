/**
 * 5.   КЛАССЫ
 **/

/*--------------------------------------------------------------------------------------------------------------
  5.1  Создание класса. Синтаксис.
 */

class TypeScript {
    readonly version: string         // readonly поле класса (перезаписать можно только в конструкторе)
    versionNumber: number

    constructor(version: string) {  // конструктор класса
        this.version = version
    }

    info(name: string): string {   // метод класса
//        return '[${name}]: Typescript version is ${this.version}'
        return  '[' + name + ']: TypeScript version is ' + this.version
    }
}

/*-------------------------------------------------------------------------------------------------------------------
5.2     Создание экземпляра класса
 */

const typeScript = new TypeScript('ТайпСкрипт')


/*-------------------------------------------------------------------------------------------------------------------
5.3   Компактная запись класса
 */

//          "Обычный" вариант
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(model: string) {
//         this.model = model
//     }
// }

//      Компактный вариант (полностью аналогичен обычному)
class Car {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) {}
}

/*---------------------------------------------------------------------------------------------------------------------
5.4     Модификаторы доступа
 */
class Animal {
    protected voice: string  // pritected - видимость в пределах класса и классов-наследников
    public color: string    // public - видимость полная
    age: number             // по умолчанию, все поля / методы без модификатора - public
    private name: string    // private - видимость только в пределах класса

    private walk() {    // для методов модификаторы такие же, как  для полей
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
// cat.voice   // для экземпляа класса-наследника protected поле уже не видно.
cat.setVoice('мурр')
console.log(cat.color)

/*--------------------------------------------------------------------------------------------------------------------
5.5     Абстрактные классы
 */

// от абстрактных классов можно (и нужно) наследоваться но они ни во что не компилируются
abstract class Component {
    abstract render(): void // абстрактные методы - методы без реализации
    abstract info(): string // их нужно переопределять в классах-наследниках
}

// Классы-наследники обязаны переопределять и реализовывать абстрактные методы родительких классов
class AppComponent extends Component {
    render() {
        console.log('Component on render.')
    }

    info(): string {
        return 'This is info';
    }
}




