var questions = [
    [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "a", answer: "aguacate", status: 0, question: "CON LA A. Fruto de color verde con piel rugosa y dura, con un hueso redondo en su interior que está muy de moda"},
    { letter: "a", answer: "amanecer", status: 0, question: "CON LA A. Dicho de el momento del día en el que sale el sol"}
    ],
    [{ letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "b", answer: "buceo", status: 0, question: "CON LA B. Nadar bajo del agua"},
    { letter: "b", answer: "boceto", status: 0, question: "CON LA B. Dibujo esquemático que hace un artista antes de empezar la obra para ver cómo quedaría"}
    ],
    [{ letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "c", answer: "cabezada", status: 0, question: "CON LA C. Echar una siesta o una..."},
    { letter: "c", answer: "cobarde", status: 0, question: "CON LA C. Se dice de una persona con falta de valor"}
    ],
    [{ letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "d", answer: "diabetes", status: 0, question: "CON LA D. Enfermedad que se caracteriza por tener una concentración de azúcar en sangre mayor de lo normal"},
    { letter: "d", answer: "duna", status: 0, question: "CON LA D. Pequeña montaña de arena que forma y mueve el viento en el desierto"}
    ],
    [{ letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "e", answer: "escorpion", status: 0, question: "CON LA E. Arácnido con patas delanteras con forma de pinza y con un aguijón venenoso"},
    { letter: "e", answer: "escrutinio", status: 0, question: "CON LA E. Acción de revisar todos los votos emitidos en una votación."}
    ],
    [{ letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "f", answer: "fabada", status: 0, question: "CON LA F. Guiso típico de Asturias"},
    { letter: "f", answer: "fotosintesis", status: 0, question: "CON LA F. Proceso químico por el cual las plantas obtienen su alimento"}
    ],
    [{ letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "g", answer: "girasol", status: 0, question: "CON LA G. Planta con una gran flor amarilla que gira siguiendo la luz del sol"},
    { letter: "g", answer: "gondola", status: 0, question: "CON LA G. Embarcación pequeña y alargada típica de Venecia"}
    ],
    [{ letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "h", answer: "hachiko", status: 0, question: "CON LA H. Famoso perro japonés del que se hizo una película en la que actúa Richard Gere"},
    { letter: "h", answer: "heroina", status: 0, question: "CON LA H. Droga derivada del opio"}
    ],
    [{ letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "i", answer: "infusion", status: 0, question: "CON LA I. Bebida caliente que se prepara con hierbas"},
    { letter: "i", answer: "inocente", status: 0, question: "CON LA I. Se dice de persona que no tiene malas intenciones"}
    ],
    [{ letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "j", answer: "jueves", status: 0, question: "CON LA J. Nombre de revista cómica famosa española"},
    { letter: "j", answer: "jazz", status: 0, question: "CON LA J. Género musical"}
    ],
    [{ letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "k", answer: "karaoke", status: 0, question: "CON LA K. El sábado noche tus amigos y tú acabasteis en un..."},
    { letter: "k", answer: "kefir", status: 0, question: "CON LA K. Alimento parecido al queso con sabor agridulce"}
    ],
    [{ letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "l", answer: "larva", status: 0, question: "CON LA L. Insecto que acaba de salir del huevo"},
    { letter: "l", answer: "locuaz", status: 0, question: "CON LA L. Se dice de una persona que habla mucho"}
    ],
    [{ letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "m", answer: "matasanos", status: 0, question: "CON LA M. Nombre despectivo de médico"},
    { letter: "m", answer: "meandro", status: 0, question: "CON LA M. Curva que hace un río en su curso "}
    ],
    [{ letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "n", answer: "narrativa", status: 0, question: "CON LA N. Género literario que incluye la novela y el cuento"},
    { letter: "n", answer: "neolitico", status: 0, question: "CON LA N. Periodo de la historia en el que aperece la agricultura y ganadería"}
    ],
    [{ letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "ñ", answer: "lasaña", status: 0, question: "CONTIENE LA Ñ. Comida favorita de Garfierld"},
    { letter: "ñ", answer: "aliñar", status: 0, question: "CONTIENE LA Ñ. Acción de echar salsa o especias a una comida."}
    ],
    [{ letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "o", answer: "ocurrencia", status: 0, question: "CON LA O. Sinónimo de idea"},
    { letter: "o", answer: "osado", status: 0, question: "CON LA O. Se dice de persona atrevida"}
    ],
    [{ letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "p", answer: "pacense", status: 0, question: "CON LA P. Gentilicio de badajoz"},
    { letter: "p", answer: "paperas", status: 0, question: "CON LA P. Endermedad vírica caracterizada por un hinchazón en la parte posterior de la boca"}
    ],
    [{ letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "q", answer: "quebrantahuesos", status: 0, question: "CON LA Q. Ave de gran tamaño que se alimenta de animales muertos"},
    { letter: "q", answer: "quimera", status: 0, question: "CON LA Q. Animal mitológico"}
    ],
    [{ letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "r", answer: "reveindicar", status: 0, question: "CON LA R. Pedir o exigir algo a lo que se cree tener derecho"},
    { letter: "r", answer: "resaca", status: 0, question: "CON LA R. Lo que tienes los domingos"}
    ],
    [{ letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "s", answer: "seismo", status: 0, question: "CON LA S. Movimiento violento de la superficie de la Tierra"},
    { letter: "s", answer: "sesenta", status: 0, question: "CON LA S. El movimiento hippie empezó en los años..."}
    ],
    [{ letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "t", answer: "tapon", status: 0, question: "CON LA T. Se dice de persona de pequeña estatura"},
    { letter: "t", answer: "thor", status: 0, question: "CON LA T. Dios del trueno"}
    ],
    [{ letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "u", answer: "uranio", status: 0, question: "CON LA U. Metal pesado que se utiliza para producir energía nuclear"},
    { letter: "u", answer: "ursula", status: 0, question: "CON LA U. Villana de la película La Sirenita"}
    ],
    [{ letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "v", answer: "valyrio", status: 0, question: "CON LA V. Aleación metálica de la saga de Juego de Tronos. "},
    { letter: "v", answer: "vaticano", status: 0, question: "CON LA V. Ciudad donde reside la Santa Sede"}
    ],
    [{ letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "w", answer: "western", status: 0, question: "CON LA W. Género cinematográfico ambientado en el Viejo Oeste"},
    { letter: "w", answer: "wasabi", status: 0, question: "CON LA W. Salsa verda picante japonesa"}
    ],
    [{ letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "x", answer: "vox", status: 0, question: "CONTIENE LA X. Partido político español de extrema derecha"},
    { letter: "x", answer: "xenofobia", status: 0, question: "CON LA X. Odio hacia los extranjeros"}
    ],
    [{ letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "y", answer: "popeye", status: 0, question: "CONTIENE LA Y. Personaje de dibujos animados al que le encantan las espinacas"},
    { letter: "y", answer: "yen", status: 0, question: "CON LA Y. Moneda de Japón"}
    ],
    [{ letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    { letter: "z", answer: "zangano", status: 0, question: "CON LA Z. Macho de la abeja"},
    { letter: "z", answer: "zaragoza", status: 0, question: "CON LA Z. Capital de Aragon "}
    ]
];

var allUsers = [
    {name: 'SARA', score: 25},
    {name: 'EL MAYOR GANADOR DE LA HISTORIA', score: 27}
]

var userInfo = {name: '', score: 0}

var rightanswers = 0

var wrongAnswers = 0

var testEnd = 0             // Variable para testear si ha llegado el final de la ronda. Se añade 1 por cada pregunta respondida.

var whichQuestion = 0       // Variable que genera un numero entre 0, 1 y 2, correspondente al índice de las preguntas de la ronda.

var indexesUsed = []        // Variable que almacena todos los índices de grupos de preguntas usados hasta el momento.

var answer

var userAnswers = {

    correct: function () {
        alert(`CORRECTO!`)
        rightanswers++
    },
    answerPasapalabra: function () {
        alert('PASAPALABRA!')
    },
    wrong: function (i, option) {
        alert(`ERRADO!`)
        wrongAnswers++
        show.answer(i, option)
    }
}

var show = {

    question: function (num, option) {answer = prompt(`La pregunta es: 
${questions[num][option].question}`)},

    answer: function (i, option) {alert(`La respuesta correcta era:
${questions[i][option].answer}`)},

    randomQuestion: function () {return whichQuestion = Math.floor(Math.random() * 3)},


    // A cada pregunta respondida se añada 1 a la variable testEnd. Cuando es igual a questions.length, la ronda termina (ver linea 275):

    isEnd: function(index) {    
        for (var i in questions) { 
                if (questions[i][index].status === 1) { return testEnd += 1 }
        }
    },

    showScore: function () { 
        confirm (`Y... Llegamos al final del juego! Tuveste ${rightanswers} respuestas correctas y ${wrongAnswers} erradas`)
        if (confirm) ranking();
        else console.log('tchau!')}
}


alert('Bienvenidoooooooooooos.....')
alert('A más una ronda de.............')
alert('PASAPALABRA!!!!!')

welcome()

function welcome () {

   var userName = prompt ('Eres uno de los afortunados participantes de hoy! Como te llamas?')
  
    if (userName === '') {
        alert('Por favor introduz tu nombre, no queremos dejar los espectadores esperando en eso silencio incómodo!')
        welcome()}

    else if (userName === null) { alert('Okay, eso fue un encuentro corto! Bbye!')}
    else {  userInfo.name = userName.toUpperCase()
            alert(`Yeah! Empecemos, ${userInfo.name}!
Aquí estan las reglas del nuestro juego:
    
Será apresentada una pregunta para cada letra del alfabeto. Para cada respuesta correcta, se te añade un punto a tu puntuación. Si no sabes la respuesta, puedes escribir 'pasapalabra' o clicar en 'ok'. En el final de todas las letras, repetiremos las preguntas que no has respondido.
Puedes cancelar o escribir 'End' para terminar el juego a cualquier momento, pero no entrarás en el ranking.
Tenemos 3 sets de preguntas, después de eso no habrán preguntas nuevas.
Después de terminar, serás posicionado en nuestro ranking de top 3!
    
Venga, vamonos!`)

        pasapalabra()
    }

}

function pasapalabra() { 

    // En el caso de haber terminado los 3 sets de preguntas:

    if (indexesUsed.length === 3) {alert('Has repasado todas las preguntas que tenemos!')   
                                    return ranking()}

    // 
    
    isNumber()

    function isNumber() {

        if (testEnd === 0) {        // Si es la primera pregunta o si se han respuesto todas las preguntas de un cierto índice de preguntas, genera otro número entre 0 y 2 para nuevo set de preguntas.
            
            show.randomQuestion()   // Rellena la variable whichQuestion con el índice de las nuevas preguntas.
            
            while (indexesUsed.length>0 && indexesUsed.includes(whichQuestion)) {   // Mientras no haya sido la primera ronda y caso el índice generado haya sido ya utilizado, genera un indice nuevo.
                
                show.randomQuestion()
            }
        indexesUsed.push(whichQuestion)     // Se pushean los índices utilizados para ese array.
        }

    }

    for (var i in questions) { 

        // Si la pregunta no fue respondida aún:

        if (questions[i][whichQuestion].status === 0) {     

        show.question(i, whichQuestion)

        // Clicando en cancel o escribindo 'end', termina la ronda.

        if (answer === null || answer.toUpperCase() === 'END') {    
            return alert(`Has desistido! Que pena! 
Tuveste ${rightanswers} preguntas correctas y ${wrongAnswers} erradas.
Esperamos verte pronto en ese juego de.... PASAPALABRA!!`) && rightanswers === 0} 


        // Si la respuesta es correcta:
    
        else if (answer.toLowerCase() === questions[i][whichQuestion].answer) {
            userAnswers.correct()
            for (var index in questions[i]) { 
                questions[i][index].status = 1      // Para señalar que la pregunta está respondida.
                }
            }
            
        // Si se hace pasapalabra:

        else if (answer.toUpperCase() === '' || answer.toUpperCase() === 'PASAPALABRA'){
            userAnswers.answerPasapalabra(i) }


        // Si la respuesta está errada:
            
        else if (answer.toLowerCase() !== questions[i][whichQuestion].answer && answer.toUpperCase() !== 'END' || answer !== '') { 
            userAnswers.wrong(i, whichQuestion)
            for (var index in questions[i]) {
                questions[i][index].status = 1      // Para señalar que la pregunta está respondida.
                }
            }

        }
    }

    // Para averiguar si todas las preguntas están respondidas:

    show.isEnd(whichQuestion)

        if (testEnd !== questions.length) {     // Si no, se repite la función.
            return pasapalabra()}

        else if (testEnd === questions.length) {    // Si sí, se hace reset a todo y se muestra el ranking.
            testEnd = 0
            allUsers.push(userInfo)
            for (var i in questions) {
                    for (var index in questions[i]) {
                        questions[i][index].status = 0
                    }
                }

            return show.showScore()}
        
}


function ranking() {

    var organizedUsers =[]

    var allScores = []

    userInfo.score = rightanswers


    // Se extraen todos los resultados de los jugadores y se los organiza del mayor hasta el menor:

    for (var user of allUsers) {allScores.push(user.score)}

    allScores.sort(function(a,b) {return b-a})


    // Se organizan los jugadores de acuerdo con su resultado correspondiente:

    for (var i in allScores) {organizedUsers.push(allUsers.filter (function(someone) {return someone.score === allScores[i]} ).pop() ) }

    var isNewGame = prompt(`Aquí está el nuestro ranking hasta ahora!
    
1º lugar: ${organizedUsers[0].name} con ${organizedUsers[0].score} letras acertadas
2º lugar: ${organizedUsers[1].name} con ${organizedUsers[1].score} letras acertadas
3º lugar: ${organizedUsers[2].name} con ${organizedUsers[2].score} letras acertadas

Si quieres volver a participar en el nuestro maravilloso juego, aprovecha ahora! Podrás entrar en la proxima ronda sin ir a concurso ;)
Si lo quieres, prime S.
Si ha llegado tu tiempo de irte, prime N.`)

    rightanswers = 0

    wrongAnswers = 0

    allUsers[allUsers.length - 1].score = 0

    if (isNewGame === null ||isNewGame.toUpperCase() === 'N') { alert ('Fue un placer tenerte con nosostros! Esperamos verte pronto en ese juego de.....\
     PASAPALABRA!')}    

    else if (isNewGame.toUpperCase() === 'S') { pasapalabra()}

}