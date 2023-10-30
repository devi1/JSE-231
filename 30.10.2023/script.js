// function sum(...arr){
//     let sum = 0;
//     console.log(arr);
//     for(let i of arr){
//         sum+=i;
//     }
//     return sum;
// }
// let user = {
//     name: 'user',
//     surname: 'surname'
// }

// let js = {
//     name: 'user',
//     surname: 'surname'
// }

// let str = 'qwertyuiop'
// let result = [...str]
// console.log(result)

// console.log(sum(user, js))

//$selector.action

// $('div').hide();
// * - Все
// .class - выбирает определенный класс
// #id - выбирает определенный id
// div - выбирает теги div
// div.class - выбирает тег div с названным классом

// $(document).ready(function() {          // при готовности документа
    // $('a').click(function(){
    //     $(this).hide();
    // })
    // $('p').mouseleave(function(){
    //     $(this).hide();
    // })
    // $('input').focus(function(){
    //     $(this).css('background-color', 'red');
    // });
    // $('input').blur(function(){
    //     $(this).css('background-color', 'green');
    // });
//     $('p').on({
//         click: function(){
//             $(this).css('background-color', 'lime');
//         },
//         dblclick: function(){
//             $(this).css('background-color', 'lemon');
//         },
//         mouseenter: function(){
//             $(this).css('background-color', 'ruby');
//         },
//         mouseleave: function(){
//             $(this).css('background-color', 'teal');
//         }
//     })
// })

// click - одинарный клик мыши
// dblclick - одинарный клик мыши
// mouseenter - если курсор заходит за границы элементы
// mouseleave - если курсор выходит за границы элементы
// hover - при наведений на элемент
// mousedown - при (первом щелчке мыши) начала нажатия мыши
// mouseup - при (втором щелчке мыши) уонец нажатия мыши
// focus - при фокусировке на определенном элементе
// blur - при рассеивании фокуса

// $(document).ready(function() {
//     // $('input').on({
//     //     click: function(){
//     //         // $('p').hide();
//     //         // $('div').fadeIn(3000);
//     //     },
//     //     dblclick: function(){
//     //         // $('p').show();
//     //         // $('div').fadeOut(8000);
//     //     }
//     // })
//     $('input').click(function(){
//         // $('p').toggle();
//         // $('div').fadeToggle(5000);
//         $('div').fadeTo("slow", 0.5);
//     })
// });

// .text() - возвращает текст элемента
// .html() - html структуру элемента
//.val() - возвращает значение формы

$(document).ready(function(){
    $('button').click(function(){
        $('#text').html("<button>FGCHVJKLHGFCXFJVKILKGJVIUOPGCHF </button>");
        $('#text').text("jajjdjaj");
    });
    // $('button').click(function(){
    //     $('input').val("Asd");
    // });
})