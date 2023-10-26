// Получение данных

// let url = "https://jsonplaceholder.typicode.com/posts;";

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

let fileInput = document.getElementById("picture");
let form = document.getElementById("form");

function handleSubmit(event){
    event.preventDefault();
    
    let formData = new FormData(form);

    for(let i = 0; i < fileInput.files.length; i++){
        let file = fileInput.files[i];
        formData.append("picture", file, file.name);
    }

    const url = "backend"
    fetch(url, {
        method: "POST",
        body: formData
    })
}

form.addEventListener("submit", handleSubmit);