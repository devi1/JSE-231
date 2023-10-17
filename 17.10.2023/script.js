// Хранение данных

// localStorage.setItem('count', 5); // setItem метод добавления данных в котором указан ключ
// console.log(localStorage.getItem('count')); // getItem метод получения данных в котором указан ключ
// localStorage.removeItem('count');  // removeItem метод удаления данных в котором указан ключ
// localStorage.setItem('num', 8);
// console.log(localStorage.getItem('num'));
// localStorage.clear();
// console.log(localStorage.getItem('count'));
// console.log(localStorage.getItem('num'));

// Главное отличие sessionStorage от localStorage это в том что sessionStorage работает до закрытия страницы(не относится к перезагрузке страницы) и работает только на одной странице

// sessionStorage.setItem('count', 7);
// console.log(sessionStorage.getItem('count'));




// ООП

// let user = {
//     name: 'Ivan',
//     age: 25,
//     city: 'Sofia'
// }

// console.log(user.name) // Ivan
// user.surname = 'Ivanov';
// console.log(user.surname) // Ivanov
// console.log(user) // Ivanov

// class MyClass{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     };
//     sayHi(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
//     sayAge(){
//         console.log(`My age is ${this.age}`)
//     }
// }

// let user = new MyClass('Ivan', 1234567890);
// user.sayHi();
// user.sayAge();
// console.log(user) // I

// let user2 = new MyClass('Andrey', 21);
// let user3 = new MyClass('Damir', 22);

class Animal{
    constructor(name, type, volume){
        this.name = name
        this.type = type
        this.volume = volume
    };

    spellName(){
        return this.name
    }
    spellType(){
        return this.type
    }
    spellVolume(){
        return this.volume
    }
}

class Dog extends Animal{

    constructor(name, type, volume, tailLength, agrressiveOrNot, age){
        super(name, type, volume);
        this.tailLength = tailLength
        this.agressiveOrNot = agrressiveOrNot
        this.age = age
    }

    voice(scream){
        return this.name + " is a dog " + scream
    }
}

// let dog1 = new Dog('Ivan', 'Dog', 10);
let dog1 = new Dog('Ivan', 'Dog', 10, 25, false, 13);

// console.log(dog1.voice("Woof!"));
// console.log(dog1.spellName());
// console.log(dog1.spellVolume());
console.log(dog1.tailLength);

// let dog = new Dog('Rambo', 'Mammal', dog1.volume);
// console.log(dog.voice("Woof!"));
// console.log(dog.spellName());
// console.log(dog.spellVolume());

// Task 
// Решить как минимум 5 задач с отправленного док файла. Первые 2 студента которые решили 7 задач получает 1 кристаллик в My stat