// Получение данных

// let url = "https://jsonplaceholder.typicode.com/users;";
// console.log(fetch(url));

// fetch(url, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json; charset=utf-8"
//     }
// }).then((response) => response.json()).then((data) => {console.log(data)});

// fetch(url).catch(() => {console.log("Error")})

// const contoroller = new AbortController();

// function fecthData(){
//     return fetch(url).then((response) => response.json()).catch((e) => {console.log(e)})
// }

// fecthData()


// contoroller.abort();


// Отпарвка данных

// let fileInput = document.getElementById("picture");
// let form = document.getElementById("form");

// function handleSubmit(event){
//     event.preventDefault();
    
//     let formData = new FormData(form);

//     for(let i = 0; i < fileInput.files.length; i++){
//         let file = fileInput.files[i];
//         formData.append("picture", file, file.name);
//     }

//     const url = "https://console.firebase.google.com/u/0/project/back-50cca/database/back-50cca-default-rtdb/data/~2F"
//     fetch(url, {
//         method: "POST",
//         body: formData
//     })
// }

// form.addEventListener("submit", handleSubmit);


// Загрузка данных

let url = "https://i.imgur.com/C5QXZ7u.mp4";

fetch(url).then(async (response) => {
    let cnt = 0;

    const reader = response.body.getReader();

    const contentLength = parseInt(response.headers.get("content-length"), 10);

    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            console.log("Done 100%");
            break;
        }

        cnt += Math.ceil(contentLength / value.length);

        console.log(`Recieved ${cnt}%`);
    }

})