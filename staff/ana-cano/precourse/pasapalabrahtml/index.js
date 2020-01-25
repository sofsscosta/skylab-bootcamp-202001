// Variables globales

var duracionJuego = 160;
var indiceRosco = 0;
var aciertos = 0;
var fallos = 0;
var jugador = "";
var contador = 25;
var timer;
var rankings = [];
var rCorrecto = "¡Respuesta correcta!";
var rIncorrecto = "¡Respuesta incorrecta!";
var rPasapalabra = "¡Pasapalabra, luego te volveremos a mostrar la pregunta";
var maths = Math.round(Math.random() * 2);
var existePasapalabra = false;
var yesOrNot = "¿Podrías indicar YES o NO?";
var partida = 1;

// Status: 0 - Default - 1 - Correcto - 3 - Pasapalabra

var rosco = [
    { letter: "a", answer: ["ABDUCIR", "ABRIDOR", "ARMA"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Instrumento usado para levantar las tapas de ciertas botellas", "CON LA A. Instrumento o máquina que sirve para atacar o defenderse."] },
    { letter: "b", answer: ["BINGO", "BRUTO", "BUCEAR"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Que es violento, cruel o salvaje", "CON LA B. Entrar en el agua para lavarse, para nadar o jugar"] },
    { letter: "c", answer: ["CHURUMBEL", "CANTAR", "CAZADORA"], status: 0, question: ["CON LA C. Niño, crío, bebé", "CON LA C. Emitir con la voz sonidos melodiosos.", "CON LA C. Ropa de abrigo que cubre desde los hombros a la cintura."] },
    { letter: "d", answer: ["DORMIR", "DIARREA", "DEVOTO"], status: 0, question: ["CON LA D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios.", "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D. Dedicado con fervor a obras de piedad y religión"] },
    { letter: "e", answer: ["ENTRECOT", "ECTOPLASMA", "ENTERA"], status: 0, question: ["CON LA E. Trozo de carne sacado de entre costilla y costilla de la res", "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas"] },
    { letter: "f", answer: ["FARHADI", "FACIL", "FORESTAL"], status: 0, question: ["CON LA F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017.", "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos."] },
    { letter: "g", answer: ["GORGORITO", "GALAXIA", "GORIGORI"], status: 0, question: ["CON LA G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar", "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Coloquialmente, canto fúnebre co nque se acompañan los entierros"] },
    { letter: "h", answer: ["HIDROAVIÓN", "HARAKIRI", "HOMBRERAS"], status: 0, question: ["CON LA H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua.", "CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros"] },
    { letter: "i", answer: ["INAPETENCIA", "IGLESIA", "INTUIR"], status: 0, question: ["CON LA I.Falta de gana de comer", "CON LA I. Templo cristiano", "CON LA I. Percibir íntima e instantáneamente una idea o verdad, tal como si se la tuviera a la vista."] },
    { letter: "j", answer: ["JARDINERÍA", "JABALÍ", "JORNADA"], status: 0, question: ["CON LA J. Arte y oficio del jardinero", "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J. Tiempo de duración del trabajo diario."] },
    { letter: "l", answer: ["LOBERA", "LICÁNTROPO", "LÉRMONTOV"], status: 0, question: ["CON LA L. Guarida de lobos", "CON LA L. Hombre lobo", "CON LA L. Apellido del poeta ruso autor de la obra 'la muerte del poeta' de 1837"] },
    { letter: "m", answer: ["MENTIRA", "MISÁNTROPO", "MENOR"], status: 0, question: ["CON LA maths. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída.", "CON LA maths. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "Se dice de una persona qeu no ha alcanzado la mayoría de edad"] },
    { letter: "n", answer: ["NATIVO", "NECEDAD", "NINFA"], status: 0, question: ["CON LA N. Se aplica al que ha nacido en el lugar de que se trata", "CON LA N. Demostración de poca inteligencia", "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selva."] },
    { letter: "ene", answer: ["HOGAÑO", "DAÑADO", "BAÑADO"], status: 0, question: ["CON LA Ñ. De tiempo que indica en esta época diferencia de antaño en época inferior.", "CON LA Ñ. En mal estado", "CON LA Ñ. Submergido en agua"] },
    { letter: "o", answer: ["ÓRGANO", "ORCO", "ORDENANZA OFICIAL"], status: 0, question: ["CON LA O. De las partes del pulpo, animal o vegetal que ejercen una función .", "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "Con la O. Empleado que en ciertas oficinas desempeña funciones subalternas"] },
    { letter: "p", answer: ["PLOTINO", "PROTOSS", "PASADO"], status: 0, question: ["CON LA P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría.", "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "Anterioridad de algo respecto de otra cosa, en tiempo o en orden"] },
    { letter: "q", answer: ["CHISQUERO", "QUESO", "BRÁNQUIAS"], status: 0, question: ["CON LA Q.Encendedor antiguo de bolsillo ", "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CONTIENE LA Q. Órgano respiratorio de los peces, formado por láminas o filamentos"] },
    { letter: "r", answer: ["RÁFAGA", "RATÓN", "RENARD, CHARLES"], status: 0, question: ["CON LA R. Viento fuerte, resentido y de corta duración.", "CON LA R. Roedor.", "Apellido del ingeniero francés que construyó el dirigible militar La France."] },
    { letter: "s", answer: ["SIMPLE", "STACKOVERFLOW", "SARDANAS"], status: 0, question: ["CON LA S. Se aplica a lo que no tiene complicación.", "CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S.Danza popular catalana"] },
    { letter: "t", answer: ["TRECE", "TERMINATOR", "TRAGAPERRAS"], status: 0, question: ["CON LA T. Número cardinal equivalente a 10 + 3", "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas."] },
    { letter: "u", answer: ["UDERZO", "UNAMUNO", "USURPAR"], status: 0, question: ["CON LA U. Apellido del dibujante y guionista francés autor de la serie Asterix.", "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U. Atribuirse y usar un cargo o título ajeno como si fueran propios"] },
    { letter: "v", answer: ["VERDE", "VIKINGOS", "VIVIENDA"], status: 0, question: ["CON LA V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda", "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas."] },
    { letter: "x", answer: ["EXÉRGESIS", "BÓTOX", "OXFORD"], status: 0, question: ["CONTIENE LA X. Explicación o interpretación particularmente de los libros de la Biblia", "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "Ciudad inglesa cuya universidad compite cada año en una popular regata contra la universidad de Cambridge."] },
    { letter: "y", answer: ["MONCAYO", "PEYOTE", "LEGULEYO"], status: 0, question: ["CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico.", "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente."] },
    { letter: "z", answer: ["ZOODIACAL", "ZEN", "ZARANDEAR"], status: 0, question: ["CON LA Z. Perteneciente o relativo al zoodíaco.", "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso raciona", " CON LA Z. Movimiento repetido y violento de un lado a otro"] }
];

//Elementos DOM

    var wrapperGame = document.getElementsByClassName('wrapperJuego')[0];
    var contadorJuego = document.getElementsByClassName('contador')[0];
    var preguntaJuego = document.getElementsByClassName('question')[0];
    var respuestaJuego = document.getElementsByClassName('answer')[0];
    var tipo = document.getElementsByClassName("tipo")[0];
    var pelotita = document.getElementById(rosco[indiceRosco].letter);
    var button = document.getElementById("start");
    var resume = document.getElementById("resume");
    var circles = document.getElementsByClassName("circleLetter");
    var correct = document.getElementsByClassName("correct")[0];
    var incorrect = document.getElementsByClassName("incorrect")[0];


// Preguntas Random

    function preguntaRandomM(){
        return maths = Math.round(Math.random() * 2);
    }


// Inicializamos la cuenta atras del juego, variable: duracionJuego para modificar el tiempo

    function initContadorJuego() {
    contadorJuego.innerHTML = duracionJuego;
        if (duracionJuego == 0){
            finDelJuego();
        } else {
            duracionJuego-=1;
            timer = setTimeout("initContadorJuego()",1000);
        }
    }


// Si finaliza el tiempo o da a END

    function finDelJuego() {
     tipo.textContent = "Yes or no, por favor";
     window.clearTimeout(timer);
     preguntaJuego.innerHTML = "¿Quieres volver a jugar? YES OR NO";
     respuestaJuego.onkeypress = function(e) {
        // Volvemos a jugar
        if(e.keyCode === 13 && respuestaJuego.value.toUpperCase() === 'YES') {
            var ranking = {};
            ranking.jugador = jugador;
            ranking.partidas = partida;
            ranking.acertadas = aciertos;
            ranking.falladas = fallos;
            ranking.puntuacion = aciertos * 10;
            rankings.push(ranking);
            tipo.textContent="";

            for(var i =0; i<rosco.length; i++){
                rosco[i].status = 0;
                circles[i].style.backgroundColor = "blue";
            }
            resume.innerHTML = '';
            respuestaJuego.value = "";
            partida++;
            volverAJugar();
        
        // Terminamos la partida
        } else if (e.keyCode === 13 && respuestaJuego.value.toUpperCase() === 'NO') {
            var ranking = {};
            ranking.jugador = jugador;
            ranking.partidas = partida;
            ranking.acertadas = aciertos;
            ranking.falladas = fallos;
            ranking.puntuacion = aciertos*10;
            rankings.push(ranking);
            tipo.textContent="";

            for(var i =0; i<rosco.length; i++){
                rosco[i].status = 0;
                circles[i].style.backgroundColor = "blue";
            }


            respuestaJuego.value="";
            preguntaJuego.textContent="";
            respuestaJuego.style.display = 'none';

            for(var i = 0; i<rankings.length; i++){
                var text =`EL RANKING QUEDA:  ${rankings[i].jugador.toUpperCase()} PARTIDA:  ${i} ACIERTOS:  ${rankings[i].acertadas}  FALLOS: ${rankings[i].falladas}  PUNTUACIÓN: ${rankings[i].puntuacion}`
                var text_wrapper = document.createElement('p');
                text_wrapper.appendChild(document.createTextNode(text));
                resume.appendChild(text_wrapper);
            }
            rankings=[];
            button.style.display = 'block';
            correct.style.display = 'none';
            incorrect.style.display = 'none';


        } else if (e.keyCode === 13 && respuestaJuego.value.toUpperCase() !== 'NO' || e.keyCode === 13 && respuestaJuego.value.toUpperCase() !== 'YES') {
            preguntaJuego.innerHTML = yesOrNot;
            tipo.textContent="Yes or no, por favor";
            respuestaJuego.value ="";
            finDelJuego();
        }
      }
    }



//Índice rosco

    function actualizarIndiceRosco(){
        indiceRosco++
    }

//Número random para escoger pregunta

    function mostrarPrimeraPreguntita(){
        preguntaJuego.innerHTML = rosco[0].question[maths];
    }

    function mostrarSiguientePregunta(){
        if (rosco[indiceRosco].status === 2 || rosco[indiceRosco].status === 1){
            if (indiceRosco === 24 && existePasapalabra === false){
                finDelJuego();
            } else {
                actualizarIndiceRosco();
            mostrarSiguientePregunta();
            }
        }
        else{
            preguntaJuego.innerHTML = rosco[indiceRosco].question[maths];
        }

    }

    function tipoPasapalabra(){
        document.getElementById(rosco[indiceRosco].letter).querySelector('.circleLetter').style.background ="orange";
        existePasapalabra = true;
        rosco[indiceRosco].status = 3;
        tipo.innerHTML = rPasapalabra;
        respuestaJuego.value='';
    }

    function tipoCorrecto(){
        document.getElementById(rosco[indiceRosco].letter).querySelector('.circleLetter').style.background ="green";
        rosco[indiceRosco].status = 1;
        tipo.innerHTML = rCorrecto;
        aciertos++;
        counterScore();
        respuestaJuego.value = '';
    }

    function tipoIncorrecto(){
        rosco[indiceRosco].status = 2;
        document.getElementById(rosco[indiceRosco].letter).querySelector('.circleLetter').style.background ="red";
        tipo.innerHTML = rIncorrecto;
        fallos++;
        counterScore();
        respuestaJuego.value = ''
    }

    function tipoRespuesta(){
      respuestaJuego.onkeypress = function(e) {
        if(e.keyCode === 13 && indiceRosco != 24) {
            console.log('no es 24')
            if(respuestaJuego.value.toUpperCase() === 'END'){
            finDelJuego();
            } else if(respuestaJuego.value.trim().toUpperCase() === 'PASAPALABRA'){
              tipoPasapalabra();
              actualizarIndiceRosco();
              mostrarSiguientePregunta();
            } else if (respuestaJuego.value.toUpperCase() === rosco[indiceRosco].answer[maths]){
                tipoCorrecto();
                actualizarIndiceRosco();
                mostrarSiguientePregunta();
            } else {
                tipoIncorrecto();
                actualizarIndiceRosco();
                mostrarSiguientePregunta();
            }
        } else if (e.keyCode === 13 && indiceRosco == 24){
            if(respuestaJuego.value.toUpperCase() === 'END'){
            finDelJuego();
            } else if(respuestaJuego.value.trim().toUpperCase() === 'PASAPALABRA'){
             tipoPasapalabra();
              vueltaRosco();
              mostrarSiguientePregunta();

            } else if (respuestaJuego.value.toUpperCase() === rosco[indiceRosco].answer[maths]){
                tipoCorrecto();
                actualizarIndiceRosco();
                mostrarSiguientePregunta();
                if(existePasapalabra === true){
                vueltaRosco();
                existePalabra=false;
                mostrarSiguientePregunta()}
                else if (existePasapalabra === false){
                    finDelJuego()
                }
            } else {
                 tipoIncorrecto()
                if(existePasapalabra === true){
                vueltaRosco();
                existePasapalabra=false;
                mostrarSiguientePregunta();
            } else if (existePasapalabra === false){
                finDelJuego();
            }
        }
      }
    }
  }


function counterScore() {
    document.getElementById("aciertos").value = aciertos;
    document.getElementById("fallos").value = fallos;
}

//Dar otra vuelta al rosco
function vueltaRosco(){
    indiceRosco = 0;
}

// Iniciamos Pasapalabra preguntando nombre...
function bienvenida(){
preguntaJuego.innerHTML ="Bienvenido a Pasapalabra. ¿Cómo te llamas?";
button.style.display = 'none';
correct.style.display = 'none';
incorrect.style.display = 'none';
respuestaJuego.onkeypress = function(e) {
    if(e.keyCode == 13) {
    button.style.display = 'block';
    jugador = respuestaJuego.value;
    respuestaJuego.value = "";
    respuestaJuego.style.display = 'none';
    correct.style.display = 'none';
    incorrect.style.display = 'none';
    console.log(correct);
    preguntaJuego.innerHTML =  "Hola "+ jugador + " en cuanto presiones al botón START inicializaremos el juego. Tienes un total de 160 segundos para completar el juego y ganar el bote";
    }
}
}


// Volver a jugar

function volverAJugar(){
    preguntaJuego.innerHTML ="En cuanto presiones el botón de START el timer iniciará y el rosco estará listo";
    button.style.display = 'block';
    respuestaJuego.style.display = 'none';
    correct.style.display = 'none';
    incorrect.style.display = 'none';
}

// Programar boton start
button.addEventListener("click", function(){
    respuestaJuego.style.display = 'block';
    correct.style.display = 'block';
    incorrect.style.display = 'block';
    maths = Math.round(Math.random() * 2);
    vueltaRosco();
    aciertos = 0;
    fallos = 0;
    duracionJuego = 160;
    resume.innerHTML="";
    counterScore();
    respuestaJuego.value = "";
    initContadorJuego();
    mostrarPrimeraPreguntita();
    tipoRespuesta();
    button.style.display = 'none';
})


bienvenida();