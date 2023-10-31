// $(document).ready(function() {
//     $('#empty').click(function(){
//         // $('p').append('<button>Hello there</button>') // append - добовляет в конец
//         // $('p').prepend('<button>Hello there</button>') // append - добовляет в начало
//         // $('p').before('Hello') // before - добаляет элемент перед тегом(селектором)
//         // $('p').after('world') // after - добавляет элемент после тега(селектор)
//         $('p').remove('.halo, .green'); // удаляет элементы с определенным классом
//         // $('div').empty(); // удаляет все дочерние элементы указанного селектора
//     })

//     // $('#append').click(function () {
//     //     $('div').append('<p>This paragraph was appended after Empty method</p>')
//     // })
// })

$(document).ready(function () {
    // $('#empty').click(function () {
    //     $('p, a, h1').addClass('hidden');
    // })
    // $('#append').click(function () {
    //     $('p, a, h1').removeClass('hidden');
    // })
    // $('#empty').click(function () {
    //     $('p, a, h1').toggleClass('hidden');
    // })

    // $('input').click(function () {
    //     $('#divs').load('texasdt.txt', function(responseTxt, status, xhr) {
    //         if(status === 'success') {
    //             console.log('Success!', responseTxt)
    //         }
    //         else if (status === 'error') {
    //             console.log('Error!', responseTxt)
    //         }
    //     })
    // })
    $('input').click(function () {
        $.get('https://jsonplaceholder.typicode.com/users', function(data, status){
            console.log(`Data ${data} \n ${status}`)
        })
    })
})