document.getElementsByTagName('h1')[0].addEventListener('click', function(){
    alert("iep");
})

var boton = document.getElementsByTagName('button')[0]
boton.addEventListener('click', decirFrase)
var frase = ''

function numeroAleatorio() {
    return parseInt(Math.random() * 5)
}

function fraseAleatoria() {
    switch(numeroAleatorio()) {
        case 0:
            frase = 'La vida es maravillosa';
            break;
        case 1:
            frase = 'El amor está en todas las cosas';
            break;
        case 2:
            frase = 'Si amas a alguien, díselo';
            break;
        case 3:
            frase = 'Nada es imposible';
            break;
        case 4:
            frase = 'Paulo Coelho rules!'
    }
}

function decirFrase() {
    fraseAleatoria()
    alert(`${frase}`)
}