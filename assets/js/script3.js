
let color

document.addEventListener("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
        color='pink'
    } else if (event.key === "s" || event.key === "S") {
        color='orange'
    }else if (event.key === "d" || event.key === "D") {
        color='lightblue'
    }else if (event.key === "q" || event.key === "Q") {
        crearDiv('purple')
    }else if (event.key === "w" || event.key === "W") {
        crearDiv('gray')
    }else if (event.key === "e" || event.key === "E") {       
        crearDiv('brown')
    }
    colorDiv1(color)
});


function colorDiv1(color) {
    const div = document.querySelector('#key')
    div.style.backgroundColor=color
}

function crearDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
  }