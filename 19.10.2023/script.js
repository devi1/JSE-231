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

// let student = {
//     sayHI(){
//         alert("HI");
//     },
//     smthng: undefined,
//     outofcore: null,
//     user: {
//         name: 'Ivan',
//         sayBye(){
//             alert("Bye");
//         },
//         wtf:undefined,
//         age: 25,
//         city: 'Sofia',
//         bool: true,
//         arr1: [1, 2, 3, 4, 5]
//     }
// }

// console.log(student);
// console.log(JSON.stringify(student));
// console.log(JSON.parse(JSON.stringify(student)));
document.getElementById("load").addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    
    // 100-199 Информационные статусы
    // 200-299 Успешные статусы
    // 300-399 Статусы перенаправления
    // 400-499 Ошибки со стороны пользователей
    // 500-599 Ошибки со стороны сервера
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            displayInfo(data);
        }
    }
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
})

function displayInfo(data){
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let span = document.createElement("li");
        span.textContent = item.name;

        container.append(span);
    }
}

// Task
// Отобразитие данные(Username, City(Вложенное свойство объекта address), Name(Вложенное свойство объекта company))
// внутри списка ol > li. И добавьте стилей на свое усмотрение
// Доп задание. Отобразить это все в таблице, 3-х колонной. При успешном выполнений, первые 3 студента получат по 1 кристаллику