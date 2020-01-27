var boton1 
var boton2
var boton3
var boton4
var boton5
var boton6
var boton7
var boton8
var boton9
var boton0
var botonComa
var botonAC
var botonSuma
var botonResta
var botonMult
var botonDiv
var botonIgual
var botonBorrar
var display
var pantalla = ''
var operacion = ''
var operando1 = ''
var operando2 = ''
var recienOperado = false

function crearBotonesJS(callback) {
    boton1 = document.getElementById('n1')
    boton2 = document.getElementById('n2')
    boton3 = document.getElementById('n3')
    boton4 = document.getElementById('n4')
    boton5 = document.getElementById('n5')
    boton6 = document.getElementById('n6')
    boton7 = document.getElementById('n7')
    boton8 = document.getElementById('n8')
    boton9 = document.getElementById('n9')
    boton0 = document.getElementById('n0')
    botonComa = document.getElementById('n,')
    botonAC = document.getElementById('AC')
    botonSuma = document.getElementById('suma')
    botonResta = document.getElementById('resta')
    botonMult = document.getElementById('mult')
    botonDiv = document.getElementById('div')
    botonIgual = document.getElementById('igual')
    botonBorrar = document.getElementById('flecha')
    display = document.getElementById('pantalla')

    if(typeof callback === 'function'){
        callback()
    }
}


function borrar() {
    if(recienOperado) {
        ac()
    }else {
        pantalla = pantalla.slice(0, (pantalla.length - 1))
        mostrarPantalla()
    }
}


function prepararSuma() {
    if(recienOperado) {
        recienOperado = false
    }
    operando1 = parseFloat(pantalla)
    operacion = botonSuma.innerHTML
    pantalla = '0'
    mostrarPantalla()
}


function prepararResta() {
    if(recienOperado) {
        recienOperado = false
    }
    operando1 = parseFloat(pantalla)
    operacion = botonResta.innerHTML
    pantalla = '0'
    mostrarPantalla()
}


function prepararMult() {
    if(recienOperado) {
        recienOperado = false
    }
    operando1 = parseFloat(pantalla)
    operacion = botonMult.innerHTML
    pantalla = '0'
    mostrarPantalla()
}


function prepararDiv() {
    if(recienOperado) {
        recienOperado = false
    }
    operando1 = parseFloat(pantalla)
    operacion = botonDiv.innerHTML
    pantalla = '0'
    mostrarPantalla()
}


function operar() {
    operando2 = parseFloat(pantalla)
    var resultado
    switch(operacion) {
        case '+' :
            resultado = parseFloat((operando1 + operando2).toFixed(3))
            break;
        case '-' :
            resultado = parseFloat((operando1 - operando2).toFixed(3))
            break;
        case 'x' :
            resultado = parseFloat((operando1 * operando2).toFixed(3))
            break;
        case '÷' :
            resultado = parseFloat((operando1 / operando2).toFixed(3))
            break;
    }
    pantalla = resultado.toString()
    mostrarPantalla()
    recienOperado = true
    operacion = ''
    operando1 = pantalla
    operando2 = ''
}


function mostrarPantalla() {
    if(pantalla.length <= 10) {
        display.innerHTML = pantalla
    }else {
        display.innerHTML = 'Err'
    }
}


function ac() {
    pantalla = '0'
    mostrarPantalla()
    hayComa = false
    operacion = ''
}


function mostrar1() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton1.innerHTML
    mostrarPantalla()

}

function mostrar2() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton2.innerHTML
    mostrarPantalla()
}

function mostrar3() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton3.innerHTML
    mostrarPantalla()
}

function mostrar4() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton4.innerHTML
    mostrarPantalla()
}

function mostrar5() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton5.innerHTML
    mostrarPantalla()
}

function mostrar6() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton6.innerHTML
    mostrarPantalla()
}

function mostrar7() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton7.innerHTML
    mostrarPantalla()
}

function mostrar8() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton8.innerHTML
    mostrarPantalla()
}

function mostrar9() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton9.innerHTML
    mostrarPantalla()
}

function mostrar0() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = '0'
    }else {
        pantalla += boton0.innerHTML
        mostrarPantalla()
    }
}
var hayComa = false

function mostrarComa() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(!hayComa){
        hayComa = true
        if(pantalla === ''){
            pantalla = '0' + botonComa.innerHTML
        }else {
            pantalla += '.'
        }
        mostrarPantalla()
    }
}

document.addEventListener('DOMContentLoaded', function(){
    crearBotonesJS(function(){
        botonBorrar.addEventListener('click', borrar)
        botonSuma.addEventListener('click', prepararSuma)
        botonResta.addEventListener('click', prepararResta)
        botonMult.addEventListener('click', prepararMult)
        botonDiv.addEventListener('click', prepararDiv)
        botonIgual.addEventListener('click', operar)
        botonAC.addEventListener('click', ac)
        boton1.addEventListener('click', mostrar1)
        boton2.addEventListener('click', mostrar2)
        boton3.addEventListener('click', mostrar3)
        boton4.addEventListener('click', mostrar4)
        boton5.addEventListener('click', mostrar5)
        boton6.addEventListener('click', mostrar6)
        boton7.addEventListener('click', mostrar7)
        boton8.addEventListener('click', mostrar8)
        boton9.addEventListener('click', mostrar9)
        boton0.addEventListener('click', mostrar0)
        botonComa.addEventListener('click', mostrarComa)
    })
})