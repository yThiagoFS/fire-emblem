

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 30 * i)
    })
}

var titulo = document.getElementById('historia-espadachim')
typeWrite(titulo);

function typeWrite2(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 50 * i)
    })
}

const titulo2 = document.getElementById('titulo2')
typeWrite2(titulo2);




function typeWrite3(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 50 * i)
    })
}

const titulo3 = document.getElementById('titulo3')
typeWrite3(titulo3);