var questions = [
    { letter: "a", answer: ["abducir", "antibiotico", "arma"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Sustancia producida por hongos y bacterias que impide el crecimiento de los microorganismos patógenos", "CON LA A. Instrumento o máquina que sirve para defenderse"]},
    { letter: "b", answer: ["bingo", "barometro", "bayo"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Aparato para medir la presión atmosférica", "CON LA B. Apellido del músico valenciano que fue figura clave en la ruta del bakalao durante la década del 1990"]},
    { letter: "c", answer: ["cranston", "cation", "caracol"], status: 0, question: ["CON LA C. Apellido del actor que da vida a Walter White en la serie 'Breaking Bad'", "CON LA C. Ión con carga positiva", "CON LA C. Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse"]},
    { letter: "d", answer: ["diarrea", "darwin", "dormir"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D. Escribió sobre el origen de las especies", "CON LA D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios"]},
    { letter: "e", answer: ["ectoplasma", "elemento", "entrecot"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. Sustancia pura que no se puede descomponer en otras más sencillas", "CON LA E. Trozo de carne sacado de entre costilla y costilla de la res"]},
    { letter: "f", answer: ["facil", "fosil", "fargo"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. Forma de vida del pasado que se encuentra en las rocas", "CON LA F. Película estadounidense de 1996 escrita, producida y dirigida por los hermanos Coen"]},
    { letter: "g", answer: ["galaxia", "griezmann", "gallo"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Apellido del futbolista francés que jugó en la Real Sociedad en la temporada 2010/2011", "CON LA G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar"]},
    { letter: "h", answer: ["harakiri", "hidrogeno", "hepatitis"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Elemento químico de número atómico 1", "CON LA H. Infección del hígado"]},
    { letter: "i", answer: ["iglesia", "intensidad", "inapetencia"], status: 0, question: ["CON LA I. Templo cristiano", "CON LA I. Una de las siete magnitudes fundamentales, cuya unidad es el Amperio", "CON LA I. Falta de gana de comer"]},
    { letter: "j", answer: ["jabali", "jilguero", "jardineria"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J. Ave cantora que se puede criar en cautividad", "CON LA J. Arte y oficio del jardinero"]},
    { letter: "k", answer: ["kamikaze", "kepler", "kimono"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Apellido del conocido astrónomo alemán que descubrió las leyes sobre el movimiento de los planetas", "CON LA K. Vestido tradicional japonés"]},
    { letter: "l", answer: ["licantropo", "leucipo", "lobera"], status: 0, question: ["CON LA L. Hombre lobo", "CON LA L. Filósofo griego que, junto con Demócrito, habló de la existencia del átomo", "CON LA L. Guarida de lobos"]},
    { letter: "m", answer: ["misantropo", "marmol", "mentira"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Roca que se utiliza en la construcción", "CON LA M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída"]},
    { letter: "n", answer: ["necedad", "nucleo", "nairobi"], status: 0, question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Compartimento celular donde se encuentra almacenada la información genética", "CON LA N. Capital de Kenia"]},
    { letter: "ñ", answer: ["señal", "bañera", "morriña"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CONTIENE LA Ñ. Lugar donde Arquímedes descubrió la ley que lleva su nombre", "CONTIENE LA Ñ. Sentimiento de tristeza. Melancolía que se siente cuando se está lejos de la tierra en la que se nace."]},
    { letter: "o", answer: ["orco", "oro", "oliver"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Elemento químico cuyo símbolo es Au", "CON LA O. Nombre del protagonista de la segunda novela del autor inglés Charles Dickens"]},
    { letter: "p", answer: ["providence", "priorizar", "pedrerol"], status: 0, question: ["CON LA P. Capital del estado americano de Rhode Island", "CON LA P. Anteponer una cosa a la otra", "CON LA P. Apellido del periodista deportivo catalán que presenta el programa de televisión 'El chiringuito de jugones'"]},
    { letter: "q", answer: ["queso", "quimica", "quito"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CON LA Q. Ciencia que estudia las transformaciones de la materia", "CON LA Q. Capital de Ecuador"]},
    { letter: "r", answer: ["raton", "ribosoma", "repulsiva"], status: 0, question: ["CON LA R. Roedor", "CON LA R. Orgánulo citoplasmático donde se sintetizan proteinas", "CON LA R. Tipo de fuerza que aparece al aproximarse dos cargas del mismo signo"]},
    { letter: "s", answer: ["surinam", "salinger", "susurrar"], status: 0, question: ["CON LA S. País que colinda con el océano Atlántico al norte, con Guayana Francesa al este, con Guyana al oeste y con Brasil al sur", "CON LA S. Apellido del escritor estadounidense que escribió la novela 'El guardián entre el centeno'", "CON LA S. Hablar en voz muy baja"]},
    { letter: "t", answer: ["terminator", "topacio", "tolstoi"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Piedra preciosa y mineral presente en la escala de Mosh", "CON LA T. Apellido del autor de la novela 'Ana Karenina'"]},
    { letter: "u", answer: ["unamuno", "urticante", "ubeda"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U. Dícese de la sustancia que provoca picor", "CON LA U. Municipio de la provincia de Jaén"]},
    { letter: "v", answer: ["vikingos", "valle", "vendimia"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Depresión entre dos montañas", "CON LA V. Recolección o cosecha de las uvas"]},
    { letter: "w", answer: ["sandwich", "twitter", "bungalow"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CONTIENE LA W. Red social que tiene como logo un pájaro azul", "CONTIENE LA W. Casa de reducidas dimensiones, construida generalmente en zonas turísticas"]},
    { letter: "x", answer: ["botox", "exegesis", "coxis"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CONTIENE LA X. Explicación o interpretación particularmente de los libros de la Biblia", "CONTIENE LA X. Hueso formado por la unión de las vértebras inferiores de la columna vertebral"]},
    { letter: "y", answer: ["peyote", "cayena", "moncayo"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "CONTIENE LA Y. Condimento alimenticio originario de Centro México que se utiliza para sazonar", "CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico"]},
    { letter: "z", answer: ["zen", "zoologo", "zapata"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. Biólogo especialista en animales", "CON LA Z. Apellido de uno de los líderes más importantes de la Revolución Mexicana"]},
];

var aciertos = 0; //Indicador de aciertos en la partida
var fallos = 0; //Indicador de fallos en la partida
var players = []; //Array en el que iremos introduciendo a los jugadores
var contadorPartida = 0; //Contador de la partida que incrementará +1 cada vez que se empiece una partida nueva
var aleatorio = 0;
var timeInitial = 240; //Tiempo inicial de la partida

//Función que aplica el método focus
var getFocus = function(name){
    document.getElementById(name).focus();
}
getFocus("username");

//Evento que nos permite validar nuestro nombre en el campo usuario apretando la tecla Enter
document.getElementById("username").onkeypress = function(event){
    if(event.keycode === 13 || event.which === 13){
        event.preventDefault();
        userButton();
    }
};

//Al clicar el botón principal guardaremos el nombre del jugador y pasaremos a la siguiente pantalla
document.getElementById("botonEmpezar").addEventListener("click", userButton);

function userButton(){
    var playerObjeto = {};
    playerObjeto.nombre = document.inicioJuego.username.value;
    players.push(playerObjeto);
    document.getElementById("initial").style.display = "none";
    document.getElementById("instructions").style.display = "inline";
}
//Evento que inicia la partida al clicar el botón de empezar
document.getElementById("start").addEventListener("click", startGame);
function startGame(){
    document.getElementById("instructions").style.display = "none";
    document.getElementById("game").style.display = "inline";
    getFocus("answerText");
    rosco();
    startTimer();    
}

//Función que ejecuta el carrusel de preguntas
var index = 0;
function rosco(){
    if(index < questions.length){
        if(questions[index].status === 0){
            aleatorio = Math.floor(Math.random() * 3) + 0;
            document.getElementById("questionText").innerHTML = questions[index].question[aleatorio];
        } else if (aciertos + fallos === questions.length){
            endGame();
        } else if (questions[index].status !== 0){
            index++;
            rosco();
        }
    } else if (index >= questions.length){
        var pregVacia = noAnswer();
        if (pregVacia === true){
            index = 0;
            rosco();
        } else {
            endGame();
        }  
    }
}

//Función para comprobar si hay preguntas que no se hayan contestado
function noAnswer(){
    var noRespuesta = true;
    questions.forEach(pregunta => {
        return pregunta.status === 0 ? noRespuesta = true : null;
    });
    return noRespuesta;
}

//Función para limpiar el campo de texto
function clearText(){
    document.roscogame.question.value = "";
}

//Función que comprueba si las respuestas son correctas o incorrectas
document.getElementById("botonVerify").addEventListener("click", verify);
function verify(){
    if (document.roscogame.question.value.toLowerCase() === questions[index].answer[aleatorio]){
        aciertos++;
        document.getElementById("contador").innerHTML = aciertos;
        questions[index].status = 1;//Cuando la pregunta se acierte o se falle el valor de "status" se cambiará a 1. De esta manera nos aseguramos que cuando realice la segunda ronda de preguntas no nos vuelva a preguntar las que ya hemos contestado.
        document.getElementById(index).style.backgroundColor = "green";
        clearText();
        getFocus("answerText");
        index++;
        rosco();
    } else if (document.roscogame.question.value.toLowerCase() !== questions[index].answer[aleatorio] && document.roscogame.question.value.toLowerCase() !== "pasapalabra" && document.roscogame.question.value.toLowerCase() !== null && document.roscogame.question.value.toLowerCase() !== "end"){
        fallos++;
        questions[index].status = 1;
        document.getElementById(index).style.backgroundColor = "red";
        clearText();
        getFocus("answerText");
        index++;
        rosco();
    } else if (document.roscogame.question.value.toLowerCase() === "pasapalabra"){
        index++;
        clearText();
        getFocus("answerText");
        rosco();
    } else if (document.roscogame.question.value.toLowerCase() === "end"){
        endGame();
    }
}

//Evento que nos permite validar las respuestas apretando el botón Enter
document.getElementById("answerText").onkeypress = function(event){
    if(event.keycode === 13 || event.which === 13){
        event.preventDefault();
        verify();
    }
};

//Función que es llamada cuando la partida ha finalizado. Se registran los aciertos y los fallos y se para el crono
function endGame(){
    document.getElementById("game").style.display = "none";
    document.getElementById("end").style.display = "inline";
    document.getElementById("botonFin").style.display = "inline";
    players[contadorPartida].aciertos = aciertos;
    players[contadorPartida].fallos = fallos;
    clearTimerInterval();
    showResult();
}

//Se muestran los resultados al jugador antes de mostrar el ranking global
function showResult(){
   document.getElementById("playername").innerHTML = players[contadorPartida].nombre;
   document.getElementById("playeraciertos").innerHTML = players[contadorPartida].aciertos;
   document.getElementById("playerfallos").innerHTML = players[contadorPartida].fallos; 
}

//Función para ordenar por aciertos los elementos del array de jugadores. El orden será decreciente, de mayor a menor.
function ranking(){
    players.sort(function (a, b){
        return b.aciertos - a.aciertos;
    });
    for (var i in players){
        document.getElementById("posicion").innerHTML += " JUGADOR: " + players[i].nombre + " ACIERTOS: " + players[i].aciertos + " FALLOS: " + players[i].fallos + "<br/>";
    };
};

//Mostramos el ranking global al jugador
document.getElementById("botonFin").addEventListener("click", rankingPage);
function rankingPage(){
    document.getElementById("end").style.display = "none";
    ranking();
    document.getElementById("ranking").style.display = "inline"; 
}

//Función que reinicia todos los marcadores al empezar una partida nueva
document.getElementById("botonReset").addEventListener("click", newGame);
function newGame(){
    aciertos = 0;
    fallos = 0;
    contadorPartida++;
    index = 0;
    newStatus();
    changeColors();
    timeInitial = 240;
    document.getElementById("time").innerHTML = "240";
    document.getElementById("contador").innerHTML = "0";
    document.getElementById("playername").innerText = "";
    document.getElementById("playeraciertos").innerText = "";
    document.getElementById("playerfallos").innerText = "";
    document.getElementById("posicion").innerText ="";
    document.inicioJuego.username.value = "";
    document.getElementById("initial").style.display = "inline";
    getFocus("username");
    document.getElementById("ranking").style.display = "none";
}

//Función para restaurar los valores de la propiedad "status" a cero
//Llamaremos a esta función cada vez que se inicie una nueva partida
function newStatus(){
    for (var i = 0; i < questions.length; i++){
        questions[i].status = 0;
    }
    return questions;
};

//Cambiamos los colores de las letras del rosco a su color inicial
function changeColors(){
    for (var i = 0; i < questions.length; i++){
        document.getElementById(i).style.backgroundColor = "blue";
    }
}

//Función para activar el cronómetro
var timeInterval = undefined;
function clearTimerInterval(){
    if (typeof timeInterval !== "undefined") {
        clearInterval(timeInterval)
    }
}

function startTimer(){
    clearTimerInterval();
    timeInterval = setInterval(function() {
        if(timeInitial >= 0){
            document.getElementById("time").innerHTML = timeInitial;
            timeInitial--;
            setTimeout(timerNumber, 1000);
        }else{
            clearTimerInterval();
            endGame();
        }
    }, 1000)
}
