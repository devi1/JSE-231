// let user = {
//     name: 'Ivan',
//     age: 25,
//     city: 'Sofia',
//     bool: true,
//     arr1: [1, 2, 3, 4, 5],
//     arr2: ["asdf", "asdf", "asdf", "asdf"]
// }

// console.log(JSON.stringify(user)); // Объект -> JSON
// console.log(JSON.parse(JSON.stringify(user))); // JSON -> Объект

// let user2 = '{"name""Ivan","age":25,"city":"Sofia", "bool":true,"arr1":[1,2,3,4,5],"arr2":["asd","asdf","asdf","asdf"]}'
// console.log(user2);
// let objectUser2 = JSON.parse(user2);

// let name = objectUser2.name;
// let age = objectUser2.age;
// let city = objectUser2.city;

// console.log(name);
// console.log(age);
// console.log(city);

let student = {
    sayHI(){
        alert("HI");
    },
    smthng: undefined,
    outofcore: null,
    user: {
        name: 'Ivan',
        sayBye(){
            alert("Bye");
        },
        wtf:undefined,
        age: 25,
        city: 'Sofia',
        bool: true,
        arr1: [1, 2, 3, 4, 5]
    }
}

console.log(student);
console.log(JSON.stringify(student));
console.log(JSON.parse(JSON.stringify(student)));