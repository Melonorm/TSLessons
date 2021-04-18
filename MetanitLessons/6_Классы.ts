/**
 *          6.1  Определение класса
 **/
/*
        Класс в TS представляет шаблон для создания объектов и инкапсулирует свойства (поля) и функциональность (методы),
     которые должен иметь объект. Класс определяет состояние и поведение, которыми должен обладать объект.
 */
class User1 {    // определение класса
    id: number;   // поле класса
    name: string;  // поле класса

    getInfo(): string {     // метод класса
        return `id: ${this.id}. Name: ${this.name}`;
    }
}

// создание объекта класса:
let tom: User1 = new User1();
tom.id = 1;
tom.name = "Tom";
console.log(tom.getInfo())   // id: 1. Name: Tom


/***********************************************************************************************************************
 *          6.2   Конструкторы класса
 **/
 //   Конструкторы выполняют начальную инициализацию объекта. Определяются с помощью ключевого слова constructor.
class User2 {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getInfo() {
        return `id: ${this.id}. Name: ${this.name}`;
    }
}

let tom2: User2 = new User2(2, "Tom2");
console.log(tom2.getInfo());    // id: 2. Name: Tom2

/*
        В отлиции от Java, в TS КОНСТРУКТОР МОЖЕТ БЫТЬ ТОЛЬКО ОДИН! Создание разных версий объектов в TS решается
    определением необязательных полей в конструкторе - ставится знак вопроса (?) после имени необязательного поля
 */
class User3 {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age?: number) {
        this.id = id;
        this.name = name;
        this.age = age
    }

    getInfo() {
        if (this.age) {
            return `Id: ${this.id}. Name: ${this.name}. Age: ${this.age}`;
        }
        else {
            return `Id: ${this.id}. Name: ${this.name}.`;
        }
    }
}

let tom3: User3 = new User3(3, "Tom3", 35);
console.log(tom3.getInfo())    // Id: 3. Name: Tom3. Age: 35

let tom4: User3 = new User3(4, "Tom4")
console.log(tom4.getInfo());    // Id: 4. Name: Tom4.


/**********************************************************************************************************************
 *          6.3   Статические свойства и функции
 */
// Статические свойства и функции (поля и методы) в TS - полный аналог статических полей и методов в Java
class Operations1 {
    static pi: number = 3.14;

    static getSquare(radius: number) {
        return Operations1.pi * radius * radius;
    }
}

let result3 = Operations1.getSquare(30);
console.log(`Площадь круга с радиусом 30 равна ${result3}`);   // Площадь круга с радиусом 30 равна 2826
let result4  = Operations1.pi * 30 * 30;
console.log(result4)    // 2826

