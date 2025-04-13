function divNegro(selector) {
    const elemento =document.querySelector(selector)
    elemento.style.backgroundColor= 'Black'
}

const div = document.querySelector('#item1')
div.addEventListener('click', function () {
     divNegro('#item1')
})

const div2 = document.querySelector('#item2')
div2.addEventListener('click', function () {
     divNegro('#item2')
})

const div3 = document.querySelector('#item3')
div3.addEventListener('click', function () {
     divNegro('#item3')
})

const div4 = document.querySelector('#item4')
div4.addEventListener('click', function () {
     divNegro('#item4')
})