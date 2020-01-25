var questions = [
    { number:  1, letter: "a", answer: ["abducir","agenda","arma"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer","CON LA A. Instrumento o máquina que sirve para atacar o defenderse"]},
    { number:  2, letter: "b", answer: ["bingo","bonanza","bañarse"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso","CON LA B. Prosperidad","CON LA B. Entrar en el agua para lavarse, para nadar o jugar"]},
    { number:  3, letter: "c", answer: ["churumbel","caracol","cazadora"], status: 0, question: ["CON LA C. Niño, crío, bebé","CON LA C. Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse","CON LA C. Ropa de abrigo que cubre desde los hombros a la cintura"]},
    { number:  4, letter: "d", answer: ["diarrea","dormir","débil"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida","CON LA D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios","CON LA D. Que tiene poca fuerza, poco vigor o poca resistencia"]},
    { number:  5, letter: "e", answer: ["ectoplasma","entrecot","edificio"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación","CON LA E. Trozo de carne sacado de entre costilla y costilla de la res","CON LA E. Lugar que se usa para viviendas, oficinas, colegios, etc"]},
    { number:  6, letter: "f", answer: ["fácil","farhadi","futuro"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad","CON LA F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017","CON LA F. Tiempo que viene después"]},
    { number:  7, letter: "g", answer: ["galaxia","gorgorito","grúa"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas","CON LA G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar","CON LA G. Máquina para levantar objetos pesados y moverlos de un lugar a otro"]},
    { number:  8, letter: "h", answer: ["harakiri","hidroavión","hundir"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento","CON LA H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua","CON LA H. Ir abajo dentro del agua"]},
    { number:  9, letter: "i", answer: ["iglesia","inapetencia","isla"], status: 0, question: ["CON LA I. Templo cristiano","CON LA I. Falta de gana de comer","CON LA I. Territorio que está rodeado de agua por todas partes"]},
    { number:  10, letter: "j", answer: ["jabalí","jardinería","jugador"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba","CON LA J. Arte y oficio del jardinero","CON LA J. Persona que juega"]},
    { number:  11, letter: "k", answer: ["kamikaze","kilo","katana"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria","CON LA K. Magnitud de peso también usada en el abecedario de aviación","CON LA K. Espada samurái de origen japonés"]},
    { number:  12, letter: "l", answer: ["licántropo","lobera","lata"], status: 0, question: ["CON LA L. Hombre lobo","CON LA L. Guarida de lobos","CON LA L. Envase de metal"]},
    { number:  13, letter: "m", answer: ["misántropo","mentira","manzana"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas","CON LA M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída","CON LA M. Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura"]},
    { number:  14, letter: "n", answer: ["necedad","nativo","nunca"], status: 0, question: ["CON LA N. Demostración de poca inteligencia","CON LA N. Se aplica al que ha nacido en el lugar de que se trata","CON LA N. Ningún día o en ningún tiempo"]},
    { number:  15, letter: "ñ", answer: ["señal","hogaño","españa"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.","CONTIENE LA Ñ. De tiempo que indica en esta época diferencia de antaño en época inferior","CONTIENE LA Ñ. Estado autonómico de la península ibérica cuya capital es Madrid"]},
    { number:  16, letter: "o", answer: ["orco","órgano","oveja"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien","CON LA O. De las partes del pulpo, animal o vegetal que ejercen una función","CON LA O. Animal doméstico que tiene el cuerpo cubierto de lana"]},
    { number:  17, letter: "p", answer: ["protoss","plotino","pasear"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft","CON LA P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría","CON LA P. Andar por placer o para hacer ejercicio"]},
    { number:  18, letter: "q", answer: ["queso","chisquero","queso"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche","CONTIENE LA Q. Encendedor antiguo de bolsillo","CON LA Q. Alimento sólido preparado con leche"]},
    { number:  19, letter: "r", answer: ["ratón","ráfaga","resumen"], status: 0, question: ["CON LA R. Roedor","CON LA R. Viento fuerte, resentido y de corta duración","CON LA R. Pocas palabras que  cuentan una historia más larga"]},
    { number:  20, letter: "s", answer: ["stackoverflow","simple","sandalia"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático","CON LA S. Se aplica a lo que no tiene complicación","CON LA S. Calzado que no tapa todo el pie"]},
    { number:  21, letter: "t", answer: ["terminator","trece","techo"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984","CON LA T. Número cardinal equivalente a 10 + 3","CON LA T. Parte de una habitación que está arriba"]},
    { number:  22, letter: "u", answer: ["unamuno","uderzo","urgente"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914","CON LA U. Apellido del dibujante y guionista francés autor de la serie Asterix","CON LA U. Que no puede esperar"]},
    { number:  23, letter: "v", answer: ["vikingos","verde","veloz"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa","CON LA V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda","CON LA V. Que es muy rápido"]},
    { number:  24, letter: "w", answer: ["sandwich","wakanda","wonder"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso","CON LA W. Tierra natal del personaje de la saga de Marvel llamado Black Panther","CON LA W. Apellido del cantante de nombre artístico Stevie viral por su clásico Superstition"]},
    { number:  25, letter: "x", answer: ["botox","exérgesis","execrable"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética","CONTIENE LA X. Explicación o interpretación particularmente de los libros de la Biblia","CONTIENE LA X. Deleznable, repudiable o digno de condena"]},
    { number:  26, letter: "y", answer: ["peyote","moncayo","yegua"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos","CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico","CON LA Y. Hembra del caballo"]},
    { number:  27, letter: "z", answer: ["zen","zoodiacal","zarpar"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional","CON LA Z. Perteneciente o relativo al zoodíaco","CON LA Z. Empezar a navegar"]},
];

var rankingEndGame = [
    {name: "Obama", score: 20},
    {name: "Ralph", score: 9},
    {name: "Donald Trump", score: 5}
];

var answerCheck = document.getElementById("answercheck");
var main = document.getElementById("mainbutton");
var score = document.getElementById("points");
var defText = document.getElementById("definitions");
var letters = document.getElementById("letters");
var check = document.getElementById('submit');
var stop = document.getElementById("stop");
var audioSuccess = document.getElementById("audiosuccess");
var audioFailure = document.getElementById("audiofailure");
var time = document.getElementById("timer");
var passtheword = document.getElementById("passtheword");
var count = 0;
var reCount = 0;
var scoreTracker = 0;
var randomQuestions;
var timerTracker = 200;
var answerTracker = 0;
var remainingQuestions = [];
var timer_interval = undefined;
//--------------------------------------------------------------------------
//Función de ránking final
function endGame() {
    var ranking = document.getElementById("ranking");
    var span = document.getElementById("close");
    var scoreText = document.getElementById("scoretext");
    var topOne = document.getElementById("topone");
    var topTwo = document.getElementById("toptwo");
    var topThree = document.getElementById("topthree");

    scoreText.innerHTML += scoreTracker.toString() + "puntos.";

    if (scoreTracker > rankingEndGame[0].score) {
        rankingEndGame[2] = rankingEndGame[1];
        rankingEndGame[1] = rankingEndGame[0];
        rankingEndGame[0] = {name: "Tu puntuación", score: scoreTracker.toString()};

    } else if (scoreTracker > rankingEndGame[1].score) {
        rankingEndGame[2] = rankingEndGame[1];
        rankingEndGame[1] = {name: "Tu puntuación", score: scoreTracker.toString()};
        
    } else if (scoreTracker > rankingEndGame[2].score) {
        rankingEndGame[2] = {name: "Tu puntuación", score: scoreTracker.toString()};
    };


    topOne.innerHTML += rankingEndGame[0].name + ", con " + rankingEndGame[0].score + " puntos.";
    topTwo.innerHTML += rankingEndGame[1].name + ", con " + rankingEndGame[1].score + " puntos.";
    topThree.innerHTML += rankingEndGame[2].name + ", con " + rankingEndGame[2].score + " puntos.";

    ranking.style.display = "block";
    span.onclick = function() {
        ranking.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


}

//Función para resetear los parámetros
function resetAll () {
    for (var i=1; i<questions.length;i++) {
        document.getElementById(i).className = "letter default";
    };
    count = 0;
    scoreTracker = 0;
    randomQuestions;
    answerTracker = 0;
    remainingQuestions = [];
    timerTracker = 200;
    questions.forEach(function(value) {
        value.status = 0;
    });
    answerCheck.innerHTML = "¡Buena suerte!";
    rankingEndGame = [
        {name: "Obama", score: 20},
        {name: "Ralph", score: 9},
        {name: "Donald Trump", score: 5}
    ];
};

function stopTimer(){
    if (typeof timer_interval !== "undefined") {
        clearInterval(timer_interval)
    }
}

function startTimer(){
    stopTimer();
    timer_interval = setInterval(function() {
        if(timerTracker > 0){
            time.innerHTML = timerTracker;
            timerTracker--;  
        }else{
            stopTimer();
            endGame();
        }
    }, 1000)
}

//Función para obtener un rosco random
function getRandomQuestion() {
    var arr = [];
    for (var i=0; i<questions.length; i++) {
        arr.push(Math.floor(Math.random() * 3));
    }
    return arr;
};

//Función para empezar la partida
main.addEventListener("click", function(e) { 
    stopTimer();
    resetAll(); 
    randomQuestions = getRandomQuestion();
    startTimer();
    game(count);
        
})

//Función para mostrar las preguntas
function game(pos) {
    score.innerHTML = scoreTracker;
    if (count === questions.length) {
        defText.innerHTML = remainingQuestions[pos].question;
    } else {
        defText.innerHTML = questions[pos].question[randomQuestions[pos]];
    }

}

//Función para determinar si una respuesta es correcta o incorrecta
check.addEventListener('submit', function(e){ 
    sendEnd();
    e.preventDefault()
    var userAnswer = document.getElementById("answer").value.toLowerCase();
    if (count === questions.length) {
        if (userAnswer.toLowerCase() == "pasapalabra" || remainingQuestions[reCount].status !== 0) {
            answerCheck.innerHTML = "Has pasado palabra, continuemos...";
            reCount++;
        } else if (userAnswer.toLowerCase() == remainingQuestions[reCount].answer.toLowerCase()) {
            playSuccess();
            answerCheck.innerHTML = "¡Correcto! ¡Ganas +1 punto!";
            questions[remainingQuestions[reCount].id].status = 1;
            remainingQuestions[reCount].status = 1;
            answerTracker++;
            scoreTracker++;
            document.getElementById((remainingQuestions[reCount].number)).className = "letter item--success";
            remainingQuestions.splice(remainingQuestions.indexOf(remainingQuestions[reCount]), 1);
        } else {
            playFailure();
            answerCheck.innerHTML = `No es correcto... la respuesta es: ${remainingQuestions[reCount].answer}.`;
            questions[remainingQuestions[reCount].id].status = 2;
            remainingQuestions[reCount].status = 2;
            answerTracker++;
            document.getElementById((remainingQuestions[reCount].number)).className = "letter item--failure";
            remainingQuestions.splice(remainingQuestions.indexOf(remainingQuestions[reCount]), 1);
        }

        if (reCount === remainingQuestions.length && answerTracker !== questions.length) {
            reCount = 0;
        }
        
    } else {
        if (userAnswer.toLowerCase() == "pasapalabra") {
            remainingQuestions.push({
                number: questions[count].number,
                letter : questions[count].letter, 
                answer: questions[count].answer[randomQuestions[count]],
                status: 0,
                question: questions[count].question[randomQuestions[count]],
                id: count
            });
            answerCheck.innerHTML = "Has pasado palabra, continuemos...";
            count++;
            
        } else if (userAnswer.toLowerCase() == questions[count].answer[randomQuestions[count]].toLowerCase()) {
            playSuccess();
            answerCheck.innerHTML = "¡Correcto! ¡Ganas +1 punto!";
            questions[count].status = 1;
            answerTracker++;
            scoreTracker++;
            document.getElementById((questions[count].number)).className = "letter item--success";
            count++;
    
        } else {
            playFailure();
            answerCheck.innerHTML = `No es correcto... la respuesta es: ${questions[count].answer[randomQuestions[count]]}.`;
            questions[count].status = 2;
            answerTracker++;
            document.getElementById((questions[count].number)).className = "letter item--failure";
            count++;
        }
    }

    document.getElementById('answer').value = '';
    sendEnd();

    if (count === questions.length) {
        if (reCount === remainingQuestions.length && answerTracker !== questions.length) {
            reCount = 0;
        }

        game(reCount);
    } else if (count !== questions.length) {
        game(count);
    }

    

})

//Sonido de acierto
function playSuccess() {
    audioSuccess.play();
}

//Sonido de fallo
function playFailure() {
    audioFailure.play();
}

//Función para el pasapalabra
passtheword.addEventListener("click", function() {
    remainingQuestions.push({
        number: questions[count].number,
        letter : questions[count].letter, 
        answer: questions[count].answer[randomQuestions[count]],
        status: 0,
        question: questions[count].question[randomQuestions[count]],
        id: count
    });
    answerCheck.innerHTML = "Has pasado palabra, continuemos...";
    count++;
    game(count);
})


//Función para enviar al endgame
function sendEnd () {
    if (timerTracker === 0 || answerTracker === questions.length) {
        endGame();
    }
}