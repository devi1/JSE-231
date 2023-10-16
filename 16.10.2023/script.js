//Функция удаления

let close = document.getElementsByClassName('close');

//Создание, добавление нового элемента

function newElement(){
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.append(t);
    if (inputValue == ""){
        alert('Введите значение');
    }
    else{
        document.getElementById('myUl').append(li);
    }
    document.getElementById('myInput').value = '';

    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className ='close';
    span.append(txt);
    li.append(span);

    for (let i =0; i < close.length; i++){
        close[i].onclick = function(){
            this.parentElement.style.display = 'none';
        }
    }
}

// Зачеркивание списка при клике на него

let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false)