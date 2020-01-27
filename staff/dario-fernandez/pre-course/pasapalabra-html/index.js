var ROSCO = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}
]




var PREJUEGO = {
    pantalla: document.getElementById('prejuego'),
    cajaTextoNombre: document.getElementById('input-nombre'),
    formularioPrejuego: document.getElementById('formulario-prejuego'),
    nombreJugador: 'Anónimo',
    mostrarPrejuego() {
        this.pantalla.classList.remove('prejuego-container--oculto')
        this.pantalla.classList.add('prejuego-container--visible')
    },
    ocultarPrejuego() {
        this.pantalla.classList.remove('prejuego-container--visible')
        this.pantalla.classList.add('prejuego-container--oculto')
    },
    eventosOn() {
        this.formularioPrejuego.addEventListener('submit', this.finPrejuego)
    },
    eventosOff() {
        this.formularioPrejuego.removeEventListener('submit', this.finPrejuego)
    },
    capturarNombre() {
        this.nombreJugador = this.cajaTextoNombre.value
        this.cajaTextoNombre.value = ''
    },
    nuevoPrejuego() {
        this.mostrarPrejuego()
        this.eventosOn()
        this.cajaTextoNombre.focus()
    },
    finPrejuego() {
        PREJUEGO.capturarNombre()
        PREJUEGO.eventosOff()
        PREJUEGO.ocultarPrejuego()
        JUEGO.nuevoJuego()
    }
}


var JUEGO = {
    pantalla: document.getElementById('juego'),
    botonAceptar: document.getElementById('boton_aceptar'),
    botonPasapalabra: document.getElementById('boton_pasapalabra'),
    cajaTexto: document.getElementById('respuesta_texto'),
    preguntaHTML: document.getElementById('pregunta'),
    respuestaForm: document.getElementById('respuesta'),
    temporizadorHTML: document.getElementById('temporizador'),
    letrasRestantes: ROSCO.length,
    segundosRestantes: 180,
    aciertos: 0,
    fallos: 0,
    i: 0,
    mostrarJuego() {
        this.pantalla.classList.remove('juego-container--oculto')
        this.pantalla.classList.add('juego-container--visible')
    },
    ocultarJuego() {
        this.pantalla.classList.remove('juego-container--visible')
        this.pantalla.classList.add('juego-container--oculto')
    },
    eventosOn(){
        this.respuestaForm.addEventListener('submit', this.turnoLetra)
        this.botonPasapalabra.addEventListener('click', this.pasapalabra)
    },
    eventosOff(){
        this.respuestaForm.removeEventListener('submit', this.turnoLetra)
        this.botonPasapalabra.removeEventListener('click', this.pasapalabra)
    },
    pintarPregunta() {
        this.cajaTexto.focus()
        var letraHTML = document.getElementById(ROSCO[this.i].letter)  
        if(this.letrasRestantes){
            if(!ROSCO[this.i].status){
            letraHTML.classList.add('rosco__letra--focus')
            this.preguntaHTML.innerHTML = ROSCO[this.i].question
            } else {
                this.i++
                this.pintarPregunta()
            }
        }
    },
    comprobarRespuesta() {
        var letraHTML = document.getElementById(ROSCO[this.i].letter)     
        this.respuesta = this.cajaTexto.value.toLowerCase()
        if(this.respuesta === 'pasapalabra') {
            letraHTML.classList.remove('rosco__letra--focus')
        } else if(this.respuesta === ROSCO[this.i].answer) {
            this.aciertos++
            this.letrasRestantes--
            letraHTML.classList.remove('rosco__letra--focus')
            letraHTML.classList.add('rosco__letra--acertada')
            ROSCO[this.i].status = 1
        } else {
            this.fallos++
            this.letrasRestantes--
            letraHTML.classList.remove('rosco__letra--focus')
            letraHTML.classList.add('rosco__letra--fallada')
            ROSCO[this.i].status = 1
        }
        this.i++
        this.cajaTexto.value = ''
     },
     reiniciarRosco() {
        if(this.i >= ROSCO.length){
            this.i = 0
        }
    },
    turnoLetra() {
        if(JUEGO.letrasRestantes){
            JUEGO.comprobarRespuesta()
            if(!JUEGO.letrasRestantes){
                JUEGO.finJuego()
            } else {
                JUEGO.reiniciarRosco()
                JUEGO.pintarPregunta()
            }      
        }
    },
    pasapalabra() {
        JUEGO.cajaTexto.value = 'pasapalabra'
        JUEGO.turnoLetra()
    },
    temporizador() {
        if(JUEGO.letrasRestantes) {
            if(JUEGO.segundosRestantes >= 0) {
                    JUEGO.temporizadorHTML.innerHTML = JUEGO.segundosRestantes
                    JUEGO.segundosRestantes--
                    setTimeout(JUEGO.temporizador, 1000)       
            } else {
                JUEGO.finJuego()
            }
        }
    },
    nuevoJuego() {
        this.mostrarJuego()
        this.pintarPregunta()
        this.eventosOn()
        this.cajaTexto.focus()
        this.temporizador()
    },
    finJuego(){
        JUEGO.ocultarJuego()
        JUEGO.eventosOff()
        this.cajaTexto.value = ''
        POSTJUEGO.nuevoPostjuego()
    }
}



var POSTJUEGO = {
    rankingHTML: document.getElementById('ranking'),
    ranking: [],
    record: [],
    pantalla: document.getElementById('postjuego'),
    puntuacionHTML: document.getElementById('puntuacion'),
    botonNuevaPartida: document.getElementById('nueva-partida'),
    mostrarPostjuego() {
        this.pantalla.classList.remove('postjuego-container--oculto')
        this.pantalla.classList.add('postjuego-container--visible')
    },
    ocultarPostjuego() {
        this.pantalla.classList.remove('postjuego-container--visible')
        this.pantalla.classList.add('postjuego-container--oculto')
    },
    eventosOn() {
        this.botonNuevaPartida.addEventListener('click', this.finPostjuego)
    },
    eventosOff() {
        this.botonNuevaPartida.removeEventListener('click', this.finPostjuego)
    },
    resetRosco() {
        for(var i = 0; i < ROSCO.length; i++) {
            ROSCO[i].status = 0
        }
    },
    resetRoscoHTML() {
        for(var i = 0; i < ROSCO.length; i++) {
            document.getElementById(ROSCO[i].letter).classList.remove('rosco__letra--acertada')
            document.getElementById(ROSCO[i].letter).classList.remove('rosco__letra--fallada')
            document.getElementById(ROSCO[i].letter).classList.remove('rosco__letra--focus')
        }
    },
    resetVariables() {
        JUEGO.letrasRestantes = ROSCO.length
        JUEGO.segundosRestantes = 100
        JUEGO.aciertos = 0
        JUEGO.fallos = 0
        JUEGO.i = 0
    },
    mostrarPuntuacion() {
        this.puntuacionHTML.innerHTML = `${JUEGO.aciertos} aciertos<br>${JUEGO.fallos} fallos<br>${100 - JUEGO.segundosRestantes} segundos`
    },
    resetJuego() {
        this.resetRosco()
        this.resetRoscoHTML()
        this.resetVariables()
    },
    nuevoPostjuego() {
        this.mostrarPostjuego()
        this.eventosOn()
        this.mostrarPuntuacion()
    },
    finPostjuego() {
        POSTJUEGO.resetJuego()
        POSTJUEGO.eventosOff()
        POSTJUEGO.ocultarPostjuego()
        PREJUEGO.nuevoPrejuego()
    },
}

PREJUEGO.nuevoPrejuego()