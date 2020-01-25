var questions = [
    [{ letter: "a", answer: "abducir", status: 0, answered: false, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "a", answer: "aguacate", status: 0, answered: false, question: "CON LA A. Fruto de color verde con piel rugosa y dura, con un hueso redondo en su interior que está muy de moda"},
    { letter: "a", answer: "amanecer", status: 0, answered: false, question: "CON LA A. Dicho de el momento del día en el que sale el sol"}
    ],
    [{ letter: "b", answer: "bingo", status: 0, answered: false, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "b", answer: "buceo", status: 0, answered: false, question: "CON LA B. Nadar bajo del agua"},
    { letter: "b", answer: "boceto", status: 0, answered: false, question: "CON LA B. Dibujo esquemático que hace un artista antes de empezar la obra para ver cómo quedaría"}
    ],
    [{ letter: "c", answer: "churumbel", status: 0, answered: false, question: "CON LA C. Niño, crío, bebé"},
    { letter: "c", answer: "cabezada", status: 0, answered: false, question: "CON LA C. Echar una siesta o una..."},
    { letter: "c", answer: "cobarde", status: 0, answered: false, question: "CON LA C. Se dice de una persona con falta de valor"}
    ],
    [{ letter: "d", answer: "diarrea", status: 0, answered: false, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "d", answer: "diabetes", status: 0, answered: false, question: "CON LA D. Enfermedad que se caracteriza por tener una concentración de azúcar en sangre mayor de lo normal"},
    { letter: "d", answer: "duna", status: 0, answered: false, question: "CON LA D. Pequeña montaña de arena que forma y mueve el viento en el desierto"}
    ],
    [{ letter: "e", answer: "ectoplasma", status: 0, answered: false, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "e", answer: "escorpion", status: 0, answered: false, question: "CON LA E. Arácnido con patas delanteras con forma de pinza y con un aguijón venenoso"},
    { letter: "e", answer: "escrutinio", status: 0, answered: false, question: "CON LA E. Acción de revisar todos los votos emitidos en una votación."}
    ],
    [{ letter: "f", answer: "facil", status: 0, answered: false, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "f", answer: "fabada", status: 0, answered: false, question: "CON LA F. Guiso típico de Asturias"},
    { letter: "f", answer: "fotosintesis", status: 0, answered: false, question: "CON LA F. Proceso químico por el cual las plantas obtienen su alimento"}
    ],
    [{ letter: "g", answer: "galaxia", status: 0, answered: false, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "g", answer: "girasol", status: 0, answered: false, question: "CON LA G. Planta con una gran flor amarilla que gira siguiendo la luz del sol"},
    { letter: "g", answer: "gondola", status: 0, answered: false, question: "CON LA G. Embarcación pequeña y alargada típica de Venecia"}
    ],
    [{ letter: "h", answer: "harakiri", status: 0, answered: false, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "h", answer: "hachiko", status: 0, answered: false, question: "CON LA H. Famoso perro japonés del que se hizo una película en la que actúa Richard Gere"},
    { letter: "h", answer: "heroina", status: 0, answered: false, question: "CON LA H. Droga derivada del opio"}
    ],
    [{ letter: "i", answer: "iglesia", status: 0, answered: false, question: "CON LA I. Templo cristiano"},
    { letter: "i", answer: "infusion", status: 0, answered: false, question: "CON LA I. Bebida caliente que se prepara con hierbas"},
    { letter: "i", answer: "inocente", status: 0, answered: false, question: "CON LA I. Se dice de persona que no tiene malas intenciones"}
    ],
    [{ letter: "j", answer: "jabali", status: 0, answered: false, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "j", answer: "jueves", status: 0, answered: false, question: "CON LA J. Nombre de revista cómica famosa española"},
    { letter: "j", answer: "jazz", status: 0, answered: false, question: "CON LA J. Género musical"}
    ],
    [{ letter: "k", answer: "kamikaze", status: 0, answered: false, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "k", answer: "karaoke", status: 0, answered: false, question: "CON LA K. El sábado noche tus amigos y tú acabasteis en un..."},
    { letter: "k", answer: "kefir", status: 0, answered: false, question: "CON LA K. Alimento parecido al yogur con sabor agridulce"}
    ],
    [{ letter: "l", answer: "licantropo", status: 0, answered: false, question: "CON LA L. Hombre lobo"},
    { letter: "l", answer: "larva", status: 0, answered: false, question: "CON LA L. Insecto que acaba de salir del huevo"},
    { letter: "l", answer: "locuaz", status: 0, answered: false, question: "CON LA L. Se dice de una persona que habla mucho"}
    ],
    [{ letter: "m", answer: "misantropo", status: 0, answered: false, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "m", answer: "matasanos", status: 0, answered: false, question: "CON LA M. Nombre despectivo de médico"},
    { letter: "m", answer: "meandro", status: 0, answered: false, question: "CON LA M. Curva que hace un río en su curso "}
    ],
    [{ letter: "n", answer: "necedad", status: 0, answered: false, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "n", answer: "narrativa", status: 0, answered: false, question: "CON LA N. Género literario que incluye la novela y el cuento"},
    { letter: "n", answer: "neolitico", status: 0, answered: false, question: "CON LA N. Periodo de la historia en el que aperece la agricultura y ganadería"}
    ],
    [{ letter: "ñ", answer: "señal", status: 0, answered: false, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "ñ", answer: "lasaña", status: 0, answered: false, question: "CONTIENE LA Ñ. Comida favorita de Garfierld"},
    { letter: "ñ", answer: "aliñar", status: 0, answered: false, question: "CONTIENE LA Ñ. Acción de echar salsa o especias a una comida."}
    ],
    [{ letter: "o", answer: "orco", status: 0, answered: false, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "o", answer: "ocurrencia", status: 0, answered: false, question: "CON LA O. Sinónimo de idea"},
    { letter: "o", answer: "osado", status: 0, answered: false, question: "CON LA O. Se dice de persona atrevida"}
    ],
    [{ letter: "p", answer: "protoss", status: 0, answered: false, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "p", answer: "pacense", status: 0, answered: false, question: "CON LA P. Gentilicio de badajoz"},
    { letter: "p", answer: "paperas", status: 0, answered: false, question: "CON LA P. Endermedad vírica caracterizada por un hinchazón en la parte posterior de la boca"}
    ],
    [{ letter: "q", answer: "queso", status: 0, answered: false, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "q", answer: "quebrantahuesos", answered: false, status: 0, question: "CON LA Q. Ave de gran tamaño que se alimenta de animales muertos"},
    { letter: "q", answer: "quimera", status: 0, answered: false, question: "CON LA Q. Animal mitológico"}
    ],
    [{ letter: "r", answer: "raton", status: 0, answered: false, question: "CON LA R. Roedor"},
    { letter: "r", answer: "reveindicar", status: 0, answered: false, question: "CON LA R. Pedir o exigir algo a lo que se cree tener derecho"},
    { letter: "r", answer: "resaca", status: 0, answered: false, question: "CON LA R. Lo que tienes después de una noche de fiesta."}
    ],
    [{ letter: "s", answer: "stackoverflow", status: 0, answered: false, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "s", answer: "seismo", status: 0, answered: false, question: "CON LA S. Movimiento violento de la superficie de la Tierra"},
    { letter: "s", answer: "sesenta", status: 0, answered: false, question: "CON LA S. El movimiento hippie empezó en los años..."}
    ],
    [{ letter: "t", answer: "terminator", status: 0, answered: false, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "t", answer: "tapon", status: 0, answered: false, question: "CON LA T. Se dice de persona de pequeña estatura"},
    { letter: "t", answer: "thor", status: 0, answered: false, question: "CON LA T. Dios del trueno"}
    ],
    [{ letter: "u", answer: "unamuno", status: 0, answered: false, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "u", answer: "uranio", status: 0, answered: false, question: "CON LA U. Metal pesado que se utiliza para producir energía nuclear"},
    { letter: "u", answer: "ursula", status: 0, answered: false, question: "CON LA U. Villana de la película La Sirenita"}
    ],
    [{ letter: "v", answer: "vikingos", status: 0, answered: false, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "v", answer: "valyrio", status: 0, answered: false, question: "CON LA V. Aleación metálica de la saga de Juego de Tronos. "},
    { letter: "v", answer: "vaticano", status: 0, answered: false, question: "CON LA V. Ciudad donde reside la Santa Sede"}
    ],
    [{ letter: "w", answer: "sandwich", status: 0, answered: false, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "w", answer: "western", status: 0, answered: false, question: "CON LA W. Género cinematográfico ambientado en el Viejo Oeste"},
    { letter: "w", answer: "wasabi", status: 0, answered: false, question: "CON LA W. Salsa verda picante japonesa"}
    ],
    [{ letter: "x", answer: "botox", status: 0, answered: false, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "x", answer: "vox", status: 0, answered: false, question: "CONTIENE LA X. Partido político español de extrema derecha"},
    { letter: "x", answer: "xenofobia", status: 0, answered: false, question: "CON LA X. Odio hacia los extranjeros"}
    ],
    [{ letter: "y", answer: "peyote", status: 0, answered: false, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "y", answer: "popeye", status: 0, answered: false, question: "CONTIENE LA Y. Personaje de dibujos animados al que le encantan las espinacas"},
    { letter: "y", answer: "yen", status: 0, answered: false, question: "CON LA Y. Moneda de Japón"}
    ],
    [{ letter: "z", answer: "zen", status: 0, answered: false, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    { letter: "z", answer: "zangano", status: 0, answered: false, question: "CON LA Z. Macho de la abeja"},
    { letter: "z", answer: "zaragoza", status: 0, answered: false, question: "CON LA Z. Capital de Aragon "}
    ]
];

// Variables para recoger elementos HTML:


// 1. Pagina inicial:

var showUser = document.getElementById('username');
var userNew = document.getElementById('newUser');
var username
var start = document.getElementById('start');
var firstPage = document.getElementsByClassName('first')
var page1 = Array.from(firstPage)


// 2. Segunda pagina:

var answer = document.getElementById('input');
var secondPage = document.getElementsByClassName('second');
var page2 = Array.from(secondPage);
var questionPlace = document.getElementById('questionParagraph');
var letter = document.getElementById('letter');
var timer = document.getElementById('time');
var p = document.getElementById('questionParagraph');
var rightAnswer = document.getElementById('cierto');
var wrongAnswer = document.getElementById('errado');
var notAnswer = document.getElementsByClassName('notanswer');
var hide = Array.from(notAnswer);
var submit = document.getElementById('submit');
var goBackButton = document.getElementById('goBack');
var ciertas = document.getElementById('rightCounter');
var erradas = document.getElementById('wrongCounter');
var ciertas2 = document.getElementById('rightCounter2');
var erradas2 = document.getElementById('wrongCounter2');
var getPasapalabra = document.getElementById('pasapalabra');
var getEnd = document.getElementById('finish');


// 3. Tercera pagina:

var thirdPage = document.getElementsByClassName('third');
var page3 = Array.from(thirdPage);
var hidden = document.getElementById('')
var givenUp = document.getElementById('giveup');
var ranking = document.getElementById('rankingButton');
var rankingFin = document.getElementById('rankingHide');
var classShow = document.getElementsByClassName('show');
var showArray = Array.from(classShow);
var classRanking = document.getElementsByClassName('ranking');
var rankingArray = Array.from(classRanking);
var firstPlace = document.getElementById('winner')
var firstScore = document.getElementById('winnerPoints')
var secondPlace = document.getElementById('runnerUp')
var secondScore =document.getElementById('secondPoints')
var thirdPlace = document.getElementById('third')
var thirdScore = document.getElementById('thirdPoints')
var backButton = document.getElementById('backButton')
var replay1 = document.getElementById('replayButton')
var replay2 = document.getElementById('replayButton2')
var getLetters = document.getElementsByClassName('letter');
var allLetters = Array.from(getLetters);

//___________________________


//Variables generales:

var counter = 0     // Para saber en que pregunta estamos.
var right           // Numero de preguntas correctas.
var timeElapsed     // Al final no lo he utilizado pero lo deje quedarse porque, porque no?
var user


// Variables secundárias:

var questionsArray = [] // El array para el set de preguntas del momento.
var time                // Almazena setInterval que cuenta el tiempo.
var organizedUsers = [] // Organizados por resultados.
var allScores = []      // Resultados organizados.


// Variables para testear:

var whereLast               // Almazena donde fue el ultimo sitio que se estuvo. Se utiliza en startDisplay()
var isAnswered = true    // Para saber se la pregunta fue respondida.


// Función generadora para definir un nuevo utilizador:

function User(name, score, time) {
    this.name = name;
    this.score = score;
    this.time = time ;
}

//Crear los utilizadores que entran en el ranking por default:

var youWish = new User ('YOU WISH', 27, 60);
var wonderWoman = new User ('WONDERWOMAN', 10, 100);
var mrIncredible = new User ('MR INCREDIBLE', 5, 118);


// Array con los jugadores hasta ahora:

var allUsers = [youWish, wonderWoman, mrIncredible];

//___________________________


// Variables con funciones:

var get = { 
                                                      
    set: function () { 

        for (var i of questions) {

            //Generar un numero random para coger la pregunta cada vez.

            var randomNum = Math.floor(Math.random() * 3)

            // Cuando todas las preguntas de questions ya fueran utilizadas, *

            if(i[0].status && i[1].status && i[2].status) { 
                for (var i of questions) {
                    for (var x of i) {
                        x.status = 0; // * las reiniciamos.
                    }
                }
                i=questions[0];
            }

            // Si la pregunta no está respondida, la añadimos al set actual.

            if (!i[randomNum].status && !questionsArray.includes(i[randomNum])) {   
                questionsArray.push(i[randomNum]);
                i[randomNum].status = 1;
            }

            // Si ya fue respondida, coger otra numero random hasta que salga una que no habia sido.

            else if(i[randomNum].status){
                do {randomNum = Math.floor(Math.random() * 3)} while (i[randomNum].status)
                questionsArray.push(i[randomNum]);
                i[randomNum].status = 1;
            } 
        }
    },

    user: function () {

        // Si hay un usuário con el nombre introducido:

        if (allUsers.filter(user => (user.name === username)).pop() !== undefined) {
            for (var k in allUsers) {

                // Se le actualizamos el score:

                (allUsers[k].name === username) ? (allUsers[k].score = parseFloat(ciertas.innerText)) : ''
            }
        }

         // Si no hay ningun usuário con el nombre introducido, no añadimos directamente a allUsers.

        else {
            right = parseFloat(ciertas.innerText);
            user = new User(username, right, timeElapsed);
            allUsers.push(new User(username, right, timeElapsed));
        }
    },

    time: function () {

        time = setInterval(each, 1000)

        function each () {
            
            if (timer.innerHTML == 0) {   // Quando termina el tiempo:
                clearInterval(time)
                get.timeUp()}
            if (1 <= timer.innerHTML && timer.innerHTML <= 21) {   // Para que los numeros se queden rojos después de 20:
                timer.style.color = "rgb(223, 103, 103)"
                timer.innerHTML = timer.innerHTML - 1}
            if (timer.innerHTML >= 21) {timer.innerHTML = timer.innerHTML - 1}  // Para que se muestre 1 seg menos a cada seg que pasa:
            if (whereLast === 'end') {      // Para terminar el tiempo cuando se clica en 'end':
                timer.innerHTML = 200
                return clearInterval(time)}
            
            
            }
    },

    answer: function (n) {

        whereLast = 'answer'

        // Para eliminar el estilo de la letra siendo selecionada:

        var whichLetter = questionsArray[n].letter;
        var letterSelected = document.getElementById(whichLetter);
        letterSelected.classList.remove("beingSelected")

        // Para esconder los elementos presentes cuando se hace la pregunta:

        for (var j in hide) {hide[j].style.display = "none"}

        // Para mostrar los elementos de cierto o errado:

        if (answer.value.toLowerCase() === questionsArray[n].answer) {
            return show.right(n) }
        if (answer.value.toLowerCase() !== questionsArray[n].answer) { 
            return show.wrong(n) }
    },

    // Verifica si se han repasado todas las letras:

    verifyEnd: function () {

        if (counter===questionsArray.length) {
            counter = 0
            whereLast = 'ranking'
        }
    },

    // Si termina el tiempo:

    timeUp: function () {

        // Quita el display de cierto o errado:

        rightAnswer.style.display="none"
        wrongAnswer.style.display="none"

        whereLast = 'end';
        startDisplay();
        givenUp.innerText='El tiempo terminó!'
    },

    // Para si se desiste:

    end: function () {
        ranking.style.display = 'none';
        rankingFin.style.display = 'block';
        givenUp.innerText='Has desistido!';
    },

    ranking: function () {

        (whereLast === 'ranking') ? get.user() : ''
    
        // Se extraen todos los resultados de los jugadores y se los organiza del mayor hasta el menor:
    
        for (var user of allUsers) {allScores.push(user.score)}
        allScores.sort(function(a,b) {return b-a})
    
        // Se organizan los jugadores de acuerdo con su resultado correspondiente:
    
        for (var i in allScores) {organizedUsers.push(allUsers.filter (function(someone) {return someone.score === allScores[i]} ).pop() ) }

        // Ahora para mostrar lo que se hizo en el front-end:

        firstPlace.innerText = organizedUsers[0].name;
        secondPlace.innerText = organizedUsers[1].name;
        thirdPlace.innerText = organizedUsers[2].name;

        firstScore.innerText = organizedUsers[0].score;
        secondScore.innerText = organizedUsers[1].score;
        thirdScore.innerText = organizedUsers[2].score;

        allScores = [];
        organizedUsers = [];
    },

    replay: function () {

        // Para que, al clicar en teclas, no se continue a registrar respuestas: 

        document.removeEventListener('keypress', check)

        // Se reinicia todo:

        questionsArray = [];
        timer.innerHTML = 200;
        ciertas.innerText = 0;
        erradas.innerText = 0;
        for (var w of questions) {
            for (var y of w) {
                y.answered = false;
            }
        }
        for (var l of allLetters) {
            l.classList.remove('correct')
            l.classList.remove('incorrect')
            l.classList.remove('beingSelected')
        }
        counter = 0

        whereLast = 'startAgain'
        username = newUser.value;
        if (username !== '') {
        startDisplay()
        getConditions()} 
        
    }
}

//___________________________

// Para mostrar al usuário:

var show = {

    letter: function (n) {
        letter.innerHTML = questionsArray[n].letter
    },

    letterSelected: function (n) {

        var whichLetter = questionsArray[n].letter

        var letterSelected = document.getElementById(whichLetter);
        letterSelected.classList.add("beingSelected");
    },

    question: function (n) {
        questionPlace.innerHTML = questionsArray[n].question;
    },

    right: function (n) {

        questionsArray[n].answered = true;

        // Para adicionar el estilo de correcto:

        var whichLetter = questionsArray[n].letter;
        var letterSelected = document.getElementById(whichLetter);
        letterSelected.classList.add("correct");

        rightCounter.innerHTML = parseFloat(rightCounter.innerHTML)+1

        rightAnswer.style.display="block"
        return p.innerHTML=""
    },

    wrong: function (n) {

        questionsArray[n].answered = true;

        // Para adicionar el estilo de errado:

        var whichLetter = questionsArray[n].letter;
        var letterSelected = document.getElementById(whichLetter);
        letterSelected.classList.add("incorrect");

        wrongCounter.innerHTML = parseFloat(wrongCounter.innerHTML)+1

        wrongAnswer.style.display="block"
        return p.innerHTML = `La respuesta correcta era: ${questionsArray[n].answer}`
    },

    clearWrongRight: function (n) {

        // Para limpiar los estilos de cierto o errado:

        if (answer.value.toLowerCase() === questionsArray[n].answer) {rightAnswer.style.display="none"}
        else {wrongAnswer.style.display="none"}
    },

    pasapalabra: function (n) {

        n = counter;
        whereLast = 'answer'

        // Para quitar el estilo de pregunta a ser selecionada:

        var whichLetter = questionsArray[n].letter;
        var letterSelected = document.getElementById(whichLetter);
        letterSelected.classList.remove("beingSelected")

        // Para esconder los elementos de cuando se hace la pregunta:

        for (var j in hide) {hide[j].style.display = "none"}

    },
}
//___________________________



// START PAGE FLOW

// Funciones para los cliques:



// Para que no se submeta el form inicial al clicar en enter.

userNew.addEventListener('keydown', prevent)

function prevent (event) {
    if (event.key === 'Enter') {event.preventDefault()}
}


// Para empezar el juego al clicar en 'Venga, vamonos!'

start.addEventListener('click', startHere)

function startHere () {

    clearInterval(time);
    get.time();
    userNew.removeEventListener('keydown', prevent)
    document.addEventListener('keypress', check)
    whereLast = 'start'
    username = newUser.value;
    if (username !== '') {
        startDisplay()
        getConditions()}

}


// Funciones de keypress con Enter y Space:

document.addEventListener('keypress', check)

function check (event) {

    if (event.key === 'Enter' && isAnswered === true) {return a(n)}  // Para submeter respuesta:
    else if (event.key === 'Enter' && isAnswered === false) {return b(n)}    // Para volver atrás:
    else if (event.keyCode === 32 && isAnswered === true) {     // Para hacer pasapalabra al clicar en Space:
        event.preventDefault();
        return c(n)}
}


// Para submeter cada respuesta, clicando en 'ok':

submit.addEventListener('click', function (n) { return a(n) } )
                
function a (n) { 

    isAnswered = false;
    n = counter;

    return get.answer(n) 
}


// Para volver atrás después de saber si estaba cierto o errado:

goBackButton.addEventListener('click', function (n) { return b(n) } )

function b (n) {

    isAnswered = true;
    n = counter;
    show.clearWrongRight(n);
    startDisplay()
    answer.value = ''
    counter+=1;
    get.verifyEnd();
    return pasapalabra()
}


// Para hacer pasapalabra clicando en el botón:

getPasapalabra.addEventListener('click', function (n) { return c(n) } )

function c (n) {

    n = counter;
    show.pasapalabra(n);
    startDisplay();
    answer.value = '';
    counter+=1;
    get.verifyEnd();
    return pasapalabra()
}


// Para desistir:

getEnd.addEventListener('click', function (n) {return d(n)})

function d (n) {
    timeElapsed = 200 - timer.innerText
    whereLast = 'end';
    startDisplay();
    get.end();
}


// Para mostrar el ranking:

ranking.addEventListener('click', e)

function e () {
    whereLast = 'ranking';
    startDisplay();
    get.ranking();
}

// Para mostrar el ranking cuando se desiste:

rankingFin.addEventListener('click', e2)

function e2 () {
    whereLast = 'ranking';
    startDisplay();
    whereLast = 'noRanking'; // Cambia eso de la función e() para que, en get.ranking(), no entre en el ranking.
    get.ranking();
}


// Para volver al resultado antes de ranking.

backButton.addEventListener('click', f)

function f () {
    timeElapsed = 200 - timer.innerText
    whereLast = 'backToEnd';
    startDisplay();
}

// Para los dos botones de replay:

replay1.addEventListener('click', g)
replay2.addEventListener('click', g)

function g () {
    clearInterval(time);
    get.replay();
}


//___________________________

// Funciones principales:




// Para los diferentes displays:

function startDisplay () { 

    if (whereLast === 'start') {                                    // Display para empezar el juego
        for (var i in page1) { page1[i].style.display="none" }
        for (var i in page2) { page2[i].style.display="block" }
        answer.style.display = 'block'

    }
    else if (whereLast === 'answer') {                              // Volver atrás con una nueva letra
        for (var i in hide) { hide[i].style.display = "block" }

    }
    else if (whereLast === 'end') {                                 // Mostrador del fin de juego
        for (var i in page2) { page2[i].style.display="none" }
        for (var i in page3) { page3[i].style.display="block" }
        rankingFin.style.display = 'none'   // Para que no se muestre el mouseover que avisa que no has entrado en el ranking
        ranking.style.display = 'block';    
        ciertas2.innerText = ciertas.innerText  // Para que se muestre el numero de preguntas ciertas y erradas en el texto final
        erradas2.innerText = erradas.innerText
        document.removeEventListener('keypress', check); // Para que no funcione más el enter o el space
        clearInterval(time);
    }
    else if (whereLast === 'ranking') {                             // Para mostrar el ranking
        for (var i in showArray) { showArray[i].style.display="none" }
        for (var i in rankingArray) { rankingArray[i].style.display="block" }
    }
    else if (whereLast === 'backToEnd') {                           // Volver para el mostrador del fin de juego
        for (var i in rankingArray) { rankingArray[i].style.display="none" }
        for (var i in showArray) { showArray[i].style.display="block" }
    }
    else if (whereLast === 'startAgain') {                          // Replay
        for (var i in page3) { page3[i].style.display="none" }
        for (var i in page1) { page1[i].style.display="block" }
        counter = 0;
        givenUp.innerText = "Hemos llegado al final!"
        for (var i in rankingArray) { rankingArray[i].style.display="none" }
        for (var i in showArray) { showArray[i].style.display="block" }
    }
    
}


// Función principal:


function pasapalabra () {

    var n = counter;

    if (!questionsArray[n].answered) {

        show.letter(n)
        show.question(n);
        show.letterSelected(n);
    }

    else if (questionsArray[n].answered) {

        // Si todas las preguntas fueran ya respondidas:

        if (questionsArray.filter (i => i.answered === false).length === 0) {
            timeElapsed = 200 - timer.innerText;
            whereLast = 'end';
            return startDisplay()
            }

    // Si no:

    counter +=1
    get.verifyEnd()
    return pasapalabra()}
}


// Define el set de preguntas, empeza a contar el tiempo y empeza el pasapalabra

function getConditions () {

    showUser.innerHTML = newUser.value; //Mostra el nombre del usuario
    questionsArray = [];
    get.set();
    pasapalabra();
}