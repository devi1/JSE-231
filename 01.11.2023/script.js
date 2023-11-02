let x = ['Asd', 'Qwe', 'Zxc', 'Fgh']
let y = [12, 23, 34, 45]

let data = [{
    x: x,
    y: y,
    type: 'bar',
    orientation: 'v',
    marker: {color: 'rgba(0,255,255, 0.8)'}
}]

let layout = {title: "Just a bar"}

Plotly.newPlot("plot", data, layout);