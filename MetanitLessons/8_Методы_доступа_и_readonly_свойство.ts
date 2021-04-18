/***********************************************************************************************************************
 *          8.1.   Геттеры и сеттеры
 */
/*
        Методы доспута - полный аналог геттеров и сеттеров в Java.
        Методы доступа определяются как обычные методы, только перед ними ставятся ключевые слова get/set. Set-метод
     контроллирует установку значения, а get-метод возвращает значение.
 */
class User6 {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
let mike:User6 = new User6();
mike.name = "Майк";     // отрабатывает сеттер
console.log(mike.name);  // отрабатывает геттер


/***********************************************************************************************************************
 *          8.2.    Readonly-свойство
 **/
/*
        Ключевое слово readonly позволяет определить свойства, которые доступны только для чтения. Можно установить его
     значение только в конструкторе класса. Вместе с readonly свойством можно задавать модификатор доступа.
 */
class User7 {
    public readonly id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
let userTom: User7 = new User7(1, "Tom");
console.log(userTom.id, userTom.name);
// userTom.id = 2;       // Ошибка, т.к. id только для чтения


/*
    Этот класс с подобным определением свойств можно сократить следующим образом:
 */
class User8 {
    name: string;

    constructor(readonly id: number, name: string) {
        this.name = name;
    }
}
