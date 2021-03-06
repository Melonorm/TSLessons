/**
 *   8. ВСПОМОГАТЕЛЬНЫЕ ОПЕРАТОРЫ
 **/

/*
8.1     Оператор keyof
 */

interface Person {
    name: string
    age: number
}

// используя интерфейс Person,  можно создать отдельный тип, который будет состоять из ключей этого интерфейса
type PersonKeys = keyof Person  // 'name' | 'age'
// теперь на выходе в типе PersonKeys могут находиться следующие значения: 'name' и 'age'
let key: PersonKeys = 'name'
key = 'age'
// другие знаяения в переменной типа PersonKeys находиться не могут:
// key = 'job'

/*---------------------------------------------------------------------------------------------------------------------
8.2     Exclude и Pick. Создание новых типов на основе существующих
 */

// Допустим, есть специальный тип User, в котором указаны некоторые метаданные плюс обычные данные (например, при работе
// с ОРМ Mongoose)
type User = {
    _id: number
    name: string
    email: string
    createAt: Date
}

// допустим, мы хотим воспользоваться данным типом и создать новый тип, но не включающий в себя некоторые поля
// (например, _id и createdAt)... Это можно сделать 2мя способами:

//           СПОСОБ 1: с помощью Exclude
// в <> указывается, что должны пройтись по полям типа User и исключить поля '_id' и 'createdAt'
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>  // 'name' | 'email'

let user1: UserKeysNoMeta1 = 'name'
// user1 = '_id'

//            СПОСОБ 2: с помощью ключевого слова Pick
// в <> указывается по какому интерфейсу проходимся и поля, которые будут в новом типе
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

//let user2: UserKeysNoMeta2 = 'name'      //  TODO чёт ошибку выдаёт. Разобраться

