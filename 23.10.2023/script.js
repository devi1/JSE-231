// function changeData(){
//     let xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             document.getElementById("container").innerHTML = this.responseText;
//         }
//     }
    
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     xhr.send();
// }

// function loadData(){
//     let xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             loadDoc(this);
//         }
//     }
    
//     xhr.open('GET', 'catalog.xml');
//     xhr.send();
// }

// function loadDoc(xml){
//     let xmlDoc = xml.responseXML;
//     let items = xmlDoc.getElementsByTagName("CD");
//     let table = "<tr><th>Title</th><th>Artist</th></tr>"
//     for (let i = 0; i < items.length; i++) {
//         table += "<tr><td>" + 
//         items[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td><td>" + 
//         items[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td></tr>"
//     }
//     document.getElementById("tableXML").innerHTML = table;
// }

// let loc = document.getElementById("location");

// function getLocation(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         loc.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position){
//     console.log(position);
//     loc.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
// }

const myApiKey = "9b4203ae7f4f5315de68885f745dbe0d";
const city = "Almaty";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}`;
// const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${myApiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {console.log(`Temperature in city: ${city}: ${(data.main.temp - 273.15).toFixed(1)}ºC`)})
// fetch(url).then(response => response).then(data => {console.log(data)})

