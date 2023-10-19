let user = {
    name: 'Ivan',
    age: 25,
    city: 'Sofia'
}

console.log(JSON.stringify(user)); // Объект -> JSON
console.log(JSON.parse(JSON.stringify(user))); // JSON -> Объект

let user2 = '{"name":"Ivan","age":25,"city":"Sofia"}'
console.log(user2);
let objectUser2 = JSON.parse(user2);

let name = objectUser2.name;
let age = objectUser2.age;
let city = objectUser2.city;


console.log(name);
console.log(age);
console.log(city);