
function pintarDiv( color='green') {
    const ele = document.getElementById("ele1")
    ele.style.backgroundColor=color
}

const div = document.querySelector('#ele1')
div.addEventListener('click', function () {
    pintarDiv()
})