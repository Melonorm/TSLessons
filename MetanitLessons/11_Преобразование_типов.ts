class User14 {
    constructor(public name: string) {}
}

class Employee14 extends User14 {
    constructor(name: string, public company: string) {
        super(name);
    }
}

function getUserName(user: User14): string {
    return user.name;
}

function userFactory(name: string): User14 {
    return new Employee14("не установлено", name);
}

let alice14: Employee14 = new Employee14("Microsoft", "Alise");
let userName14: string = getUserName(alice14);
console.log(userName14);    // Alice

let tom14 = userFactory("Tom");
userName14 = getUserName(tom14);
console.log(userName14);   // Tom


/***********************************************************************************************************************
 *          11.1. Восходящее преобразование (Апкаст)
 **/
/*
        Аналогичен апкасту в Java.
        Неявное автоматиеское преодбазование.
        От общего типа (родитель) к более конкретному (наследник).
        "Видит" только поля и методы родителя

                _______________________
                |    Animal = new Cat  |
                ------------------------
 */
let alice14_1: User14 = new Employee14("Алиса 1", "TK")
console.log(alice14_1.name);
// console.log(alice14_1.company);  // "не видит, т.к. company - поле наследника



/***********************************************************************************************************************
 *          11.2. Нисходящее преобразование (Даункаст)
 */



