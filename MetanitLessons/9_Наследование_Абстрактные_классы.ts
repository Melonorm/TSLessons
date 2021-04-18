/**
 *              9.1.  Наследование. Основные понятия.
 **/
/*
        Парадигма наследования в TS полностью идентична наследованию в Java.
        Объявление класса-наследника идёт через ключевое слово extends.
        Класс-наследник перенимает весь функционал - поля и методы роительского класса. Класс-наследник также может
     определить свои пол и методы.
 */
class User9 {            // родительский класс
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getInfo(): void {
        console.log("Имя: " + this.name);
    }
}

class Employee9 extends User9 {  // класс-наследник
    company: string;        // поле принадлежит классу-наследнику

    work() {
        console.log(this.name, " работает в ", this.company) // поле name также принадлежит классу-наследнику
    }
}
let employeeSam: Employee9 = new Employee9("Cэм"); // родительский конструктор используется наследником
employeeSam.company = "ТопКлад";
employeeSam.work()


/**
 *                  9.2.  Переопределение конструктора
 */
/*
        Если подкласс определяет свой конструктор, то в нем должен быть вызван конструктор базового класса с помощью
    ключевого слова super.
        С помощью ключевого слова super подкласс может обратиться к функционалу базового класса. В данном случае идет
    обращение к конструктору класса User, который устанавливает значение свойства name: super(userName):
 */
class User10 {
    name: string
    constructor(name: string) {
        this.name = name;
    }
}

class Employee10 extends User10 {
    company: string;

    constructor(name: string, company: string) {
        super(name);
        this.company = company;
    }
}
/*
       Даже если базовый класс не определяет явным образом никакого конструктора, в производном классе при определении
    конструктора все равно надо вызывать конструктор базового класса - в этом случае это будет вызов конструктора по
    умолчанию с помощью super():
 */
class User11 {
    name: string;
}

class Employee11 extends User11 {
    company: string;

    constructor(name: string, company: string) {
        super();     // вызов конструктора базового класса
        this.name = name;
        this.company = company;
    }
}


/**
 *          9.3.   Переопределение методов
 */
/*
        Переопределение методов в TS аналогично переопределению методов в Java.
        С помощью ключевого слова super можно в переопределённом методе вызывать базовую версию метода.
 */
class User12 {
    constructor(protected name: string) {}

    protected getInfo() {    // родительский метод
        console.log(`Юзер ${this.name}`)
    }
}

class Employee12 extends User12 {
    constructor(name: string, protected company: string) {
        super(name);
    }

    getInfo() {
        super.getInfo();   // вызывается родительская версия метода
        console.log(`Работает в ${this.company}`)
    }
}
let mel12: Employee12 = new Employee12("Mel", "TK")
mel12.getInfo();


/**
 *              9.4. Абстрактные классы
 **/
/*
        Абстрактные классы TS полностью идентичны абстрактным классам Java.
      - Определяется через ключевое слово abstract;
      - Нельзя создавать своих объектов;
      - Могут иметь абстрактные методы (без реализации);
      - Абстрактные методы также определяются через ключевое слово abstract
      - Если класс имеет хоть один абстрактный метод, то этот класс абстрактный;
      - Абстрактные методы обязательно должны реализовываться в классах-аследниках;
 */
abstract class Figure {  // абстрактный класс
    protected name: string

    abstract getArea(): void;   // абстрактный метод
}
class Rectangle extends Figure { // класс наследуется от абстрактного

    constructor(name: string, public width: number, public height: number) {
        super();
        this.name = name;
    }

    getArea(): void {   // реализовывается абстрактный метод
        let square = this.width * this.height;
        console.log(`Фигура: ${this.name}. Площадь: ${square}`);
    }
}
// let figure: Figure = new Figure();  // ОШИБКА! Нельзя создать объект абстрактного класса
let rectangle: Rectangle = new Rectangle("Прямоугольник", 5, 10);
rectangle.getArea();
