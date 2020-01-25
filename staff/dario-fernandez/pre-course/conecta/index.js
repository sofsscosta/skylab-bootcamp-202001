var columna1HTML = document.getElementById('columna1')
var columna2HTML = document.getElementById('columna2')
var columna3HTML = document.getElementById('columna3')
var columna4HTML = document.getElementById('columna4')
var columna5HTML = document.getElementById('columna5')
var columna6HTML = document.getElementById('columna6')
var columna7HTML = document.getElementById('columna7')
var tablero = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]]
var jugadorActivo = 'rojo'
var columnaActiva
var filaActiva

function encontrarFilaActiva() {
    let columnaJS = columnaActiva - 1
    let fila
    for(let i = 0; i < tablero[columnaJS].length; i++) {
        if(!tablero[columnaJS][i]){
            fila = i + 1
            break
        }
    }
    filaActiva = fila
}

function pintarCelda() {
    document.getElementById(`celda${columnaActiva}-${filaActiva}`).classList.add(`celda--${jugadorActivo}`)
    tablero[columnaActiva - 1][filaActiva - 1] = `${jugadorActivo}`
}

function cambiarJugadorActivo() {jugadorActivo === 'rojo' ? jugadorActivo = 'azul' : jugadorActivo = 'rojo'}

function columnaClickHandler() {
    columnaActiva = parseInt(this.id.match(/\d/)[0])
    encontrarFilaActiva()
    pintarCelda()
    comprobarVictoria(columnaActiva, filaActiva)
    setTimeout(cambiarJugadorActivo, 50)
}

function alertGanador() {
    alert(`Gana el jugador ${jugadorActivo}`)
}

function comprobarVertical(x, y) {
    
    if((tablero[x - 1][y - 2] === jugadorActivo) && (tablero[x - 1][y - 3] === jugadorActivo) && (tablero[x - 1][y - 4] === jugadorActivo)){
        setTimeout(alertGanador, 10)
    }

}

function comprobarHorizontal(x, y) {
    
}

function comprobarVictoria(x, y) {
    comprobarVertical(x, y)
    comprobarHorizontal(x, y)
    // comprobarDiagonal()
}

columna1HTML.addEventListener('click', columnaClickHandler)
columna2HTML.addEventListener('click', columnaClickHandler)
columna3HTML.addEventListener('click', columnaClickHandler)
columna4HTML.addEventListener('click', columnaClickHandler)
columna5HTML.addEventListener('click', columnaClickHandler)
columna6HTML.addEventListener('click', columnaClickHandler)
columna7HTML.addEventListener('click', columnaClickHandler)