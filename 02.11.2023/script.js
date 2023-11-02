///// Potly ///////

// // Bars

// let x = ['Asd', 'Qwe', 'Zxc', 'Fgh'] //Значения по оси Х
// let y = [12, 23, 34, 45]  //Значения по оси У

// let data = [{  // Данные нашего графика
//     x: x, // прекедаем значения Х
//     y: y, // передаем значения У
//     type: 'scatter', // Указываем тип нашего графика 
//     orientation: 'h', // Указываем направление(вертикальный или горизонтальный)
//     marker: {color: 'rgba(0,255,255, 0.8)'} // указываем цветовую схему графика
// }]

// let layout = {title: "Just a bar"}  // Название графика

// Plotly.newPlot("plot", data, layout); // Передаем все переменные и их значения в бибилотеку plotly


// Pie Chart

// var data = [{ // Данные нашей круговой диаграммы
//     values: [12, 87, 198], // Их значения(они автоматом конвертируются в проценты)
//     labels: ['Residential', 'Non-Residential', 'Utility'], // Название и их значения
//     hole: .9, // задаем значение отверстия от круга, в процентах
//     type: 'pie' // Тип графика
//   }];
  
//   var layout = { // размерность графика
//     height: 300,
//     width: 600
//   };
  
//   Plotly.newPlot('plot', data, layout); // Передаем все переменные и их значения в бибилотеку plotly
  


/////// ChartJs /////////

// let x = ['Asd', 'Qwe', 'Zxc', 'Fgh'] //Значения по оси Х
// let y = [12, 23, 34, 45]  //Значения по оси У
// let colors = ['red', 'green', 'blue', 'Teal']

// new Chart('charts', {
//     type: 'doughnut',
//     data: {
//         labels: x,
//         datasets: [{
//             backgroundColor: colors, 
//             data: y
//         }]
//     },
//     options: {
//         legend: {display: false},
//         title:{
//             display: true,
//             text: "Bars"
//         }
//     }
// })

// Линенйыный график

// let xy = [
//     {x:100, y:30},
//     {x:120, y:90},
//     {x:130, y:180},
//     {x:140, y:300},
//     {x:150, y:218},
//     {x:160, y:200}
// ]

// new Chart('charts', {
//     type: 'scatter',
//     data: {
//         // labels: x,
//         datasets: [{
//             pointRadius: 4,
//             pointBackgroundColor: 'teal',
//             data: xy
//         }]
//     },
//     options: {
//         legend: {display: false},
//         scales:{
//             xAxes: [{ticks: {min:100, max: 160}}],
//             yAxes: [{ticks: {min:30, max: 300}}]
//         },
//         title:{
//             display: true,
//             text: "Bars"
//         }
//     }
// })

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Данные загрузить
function drawChart(){

let data = google.visualization.arrayToDataTable([
    ['x', 'y'],
    ['Asd', 12],
    ['qwe', 43],
    ['zxc', 88]
])

let options = {
    title: 'Bars'
}

let chart = new google.visualization.BarChart(document.getElementById('plot'));
chart.draw(data, options);
}