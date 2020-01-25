var BOMBO = {
    numeros: [],
    bola: 0,
    llenar() {
        for(i = 1; i <= 99; i++) {
            this.numeros.push(i)
        }
    },
    vaciar() {
        this.numeros.splice(0, this.numeros.length)
    },
    sacarBola() {
        var numeroAleatorio = parseInt(Math.random() * this.numeros.length)
        this.bola = this.numeros[numeroAleatorio]
        var indexRemover = this.numeros.indexOf(this.bola)
        this.numeros.splice(indexRemover, 1)
        return this.bola
    },
    mostrarBola() {
        console.log(`Y el número es el... ¡${this.bola}!`)
    }
}

var CARTON = {
    numeros: [],
    aciertosLinea1: 0,
    aciertosLinea2: 0,
    aciertosLinea3: 0,
    linea: false,
    generar() {
        BOMBO.vaciar()
        BOMBO.llenar()
        var bola
        for(i = 0; i < 15; i++){
            bola = BOMBO.sacarBola()
            this.numeros.push(bola)
        }
        BOMBO.vaciar()
        BOMBO.llenar()
    },
    dibujar() {
        console.log(`
        ${this.numeros[0]}  ${this.numeros[1]}  ${this.numeros[2]}  ${this.numeros[3]}  ${this.numeros[4]}

        ${this.numeros[5]}  ${this.numeros[6]}  ${this.numeros[7]}  ${this.numeros[8]}  ${this.numeros[9]}

        ${this.numeros[10]}  ${this.numeros[11]}  ${this.numeros[12]}  ${this.numeros[13]}  ${this.numeros[14]}
        `)
    },
    nuevo() {
        this.generar()
        console.log('Este es el cartón con el que vas a jugar. ¡Mucha suerte!')
        this.dibujar()
    }
}

var JUGADOR =  {
    nombre: prompt('Bienvenido al Bingo. ¿Cómo te llamas?'),
    turnos: 0,
    aciertos: 0,
    acierto: false,
    iniciar() {
        this.saludar()
        CARTON.nuevo()
        var empezar = window.confirm('¿Estás listo?')
        if(empezar) {
            this.turno()
        } else {
            alert('Vaya... Recarga la página cuando estés listo.')
        }
        // console.log('Escribe confirm() para pasar al siguiente turno.')
    },
    saludar() {
        console.log(`Hola, ${this.nombre}.`)
    },
    checkNumero(num) {
        for(i = 0; i < CARTON.numeros.length; i++) {
            if(num === CARTON.numeros[i]) {
                this.acierto = true
                this.aciertos++
                break
            }
        }
        if(this.acierto) {
            var posicion = CARTON.numeros.indexOf(num)
            if(posicion < 5) {
                CARTON.aciertosLinea1++
            }else if(posicion < 10) {
                CARTON.aciertosLinea2++
            }else {
                CARTON.aciertosLinea3++
            }
            CARTON.numeros[posicion] = 'X'
        }
    },
    turno() {
        var numeroDelTurno = BOMBO.sacarBola()
        BOMBO.mostrarBola()
        this.checkNumero(numeroDelTurno)
        if(this.acierto) {
            console.log('¡Lo tienes!')
            CARTON.dibujar()
            this.turnos++
            this.checkLinea()
            this.checkBingo()
            this.acierto = false
            if(this.aciertos < 15) {
                var continuar = window.confirm('¡Enhorabuena! Tienes este número. ¿Vamos a por la siguiente bola?')
                if(continuar) {
                    JUGADOR.turno()
                } else {
                    alert('Vaya... Recarga la página cuando estés listo para volver a empezar.')
                }
            }
        }else {
            this.turnos++
            var continuar = window.confirm('¡Ohhhhh...! No tienes este número. ¿Vamos a por la siguiente bola?')
                if(continuar) {
                    JUGADOR.turno()
                } else {
                    alert('Vaya... Recarga la página cuando estés listo para volver a empezar.')
                }
        }
    },
    checkLinea() {
        if(!CARTON.linea) {
            if(CARTON.aciertosLinea1 === 5 || CARTON.aciertosLinea2 === 5 || CARTON.aciertosLinea3 === 5 ) {
                CARTON.linea = true
                console.log('¡LINEA!')
            }
        }
    },
    checkBingo() {
        if(this.aciertos === 15) {
            console.log('¡BINGO! Has ganado')
            console.log(`Te ha tomado ${this.turnos} turnos conseguir el bingo`)
        }
    }
    
}

JUGADOR.iniciar()