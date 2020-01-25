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
//Declaramos las variables globales
var aciertos = 0; //Indicador de aciertos en la partida
var fallos = 0; //Indicador de fallos en la partida
var players = []; //Array en el que iremos introduciendo a los jugadores
var contadorPartida = 0; //Contador de la partida que incrementará +1 cada vez que se empiece una partida nueva

//Declaramos la función global pasapalabra() en la que incluimos el resto de funciones
var pasapalabra = function(){

//Número aleatorio entre el 0 y el 2 que nos servirá para que el programa elija aleatoriamente una de las tres preguntas que hay por cada letra
//El número aleatorio cambiará cada vez que iniciemos una partida nueva y llamemos a la funcion global pasapalabra()
var aleatorio = Math.floor(Math.random() * 3); 

//Función que ejecuta el carrusel de preguntas
var rosco = function(){
    for (var i = 0; i < questions.length; i++){
        if (questions[i].status === 0){//El programa únicamente formulará las preguntas de los elementos que tengan el valor de "status" igual a 0
            var preguntas = prompt(questions[i].question[aleatorio]);
            if (preguntas != null){
                preguntas = preguntas.toLowerCase();
            }
            if (preguntas === questions[i].answer[aleatorio]){
                alert ("¡¡ CORRECTO !!");
                aciertos++;
                questions[i].status = 1;//Cuando la pregunta se acierte o se falle el valor de "status" se cambiará a 1. De esta manera nos aseguramos que cuando realice la segunda ronda de preguntas no nos vuelva a preguntar las que ya hemos contestado.
            }
            if (preguntas !== questions[i].answer[aleatorio] && preguntas !== "pasapalabra" && preguntas !== null && preguntas !== "end"){
                alert ("Respuesta INCORRECTA. La respuesta correcta es... " + questions[i].answer[aleatorio].toUpperCase());
                fallos++;
                questions[i].status = 1;
            }
            if (preguntas === "end"){
                alert ("Has decidido terminar la partida sin opción a entrar en el RANKING. \nHas conseguido un total de " + aciertos + " aciertos y " + fallos + " fallos.");
                players.splice(players.length - 1, 1);//Si el jugador introduce el input 'END' el juego finaliza. Le mostramos los fallos y los aciertos, y eliminamos su nombre en el array de jugadores
                contadorPartida--;
                return abandonar();
            }
            if (preguntas === null){
                return abandonar();
            }
        }
    }
    if (aciertos + fallos !== questions.length){
        rosco();
    } else if (aciertos + fallos === questions.length){
        alert ("FIN DE LA PARTIDA \nHas completado el rosco con un total de " + aciertos + " aciertos y " + fallos + " fallos.");
        players[contadorPartida].aciertos = aciertos;
        players[contadorPartida].fallos = fallos;
        alert ("Te mostramos el RANKING actual");
        alert (JSON.stringify(ranking()));
        newGame();
    }
};

var abandonar = function(){
    var salir = confirm ("¿Deseas abandonar el juego?");
        if (salir === true){
            alert ("Gracias por jugar a PASAPALABRA. \n¡ Esperamos volver a verte pronto !");
        } else if (salir === false){
            newGame();
        }
        return;
};

var newPlayer = function(){
    var playerObjeto = {};
    var saludo = prompt ("Bienvenido a PASAPALABRA. Introduce tu nombre");
    if (saludo === null){
        abandonar();
    } else {
        alert ("Hola " + saludo + "\nA continuación te mostraremos una breve explicación del juego");
        playerObjeto.nombre = saludo;
        players.push(playerObjeto);
        alert ("INSTRUCCIONES \nEl juego consiste en responder a todas las palabras del rosco intentando conseguir el máximo de aciertos posibles. \nEs IMPORTANTE tener en cuenta que las palabras que escribas NO deben llevar tilde (aunque originalmente la palabra se acentue). \nSi no estás seguro de alguna respuesta y prefieres pasar a la siguiente pregunta tan sólo debes escribir 'PASAPALABRA'. \nUna vez finalices la primera ronda de preguntas se te preguntarán todas aquellas en las que hayas escrito 'PASAPALABRA'. \nPuedes pasar palabra tantas veces como quieras, pero ten en cuenta que el juego no finalizará hasta que las hayas respondido todas. \nPuedes terminar la partida en cualquier momento escribiendo 'END', y se te mostrará el número de aciertos y fallos pero no podrás registrar tus logros en el RANKING. \nAl finalizar cada partida se te mostrará el RANKING global de puntos. \n\n¡ MUCHA SUERTE EN TU PARTIDA Y... A POR EL BOTE!");
        rosco();
    }
    return;
};

//Función para ordenar por aciertos los elementos del array de jugadores. El orden será decreciente, de mayor a menor.
var ranking = function(){
    players.sort(function (a, b){
        return b.aciertos - a.aciertos;
    });
    return players;
};

//En la función newGame() reiniciamos todos los marcadores para empezar una nueva partida
//Si el usuario no quiere jugar de nuevo se le despide
var newGame = function(){
    var nuevoJuego = confirm ("¿Deseas volver a jugar de nuevo?");
    if (nuevoJuego === true){
        aciertos = 0;
        fallos = 0;
        contadorPartida++;
        newStatus();
        pasapalabra();
    } else if (nuevoJuego === false){
        alert ("Muchas gracias por jugar a PASAPALABRA. ¡ Esperamos volver a verte pronto !");
    }
    return;
}

//Función para restaurar los valores de la propiedad "status" a cero
//Llamaremos a esta función cada vez que se inicie una nueva partida
var newStatus = function(){
    for (var i = 0; i < questions.length; i++){
        questions[i].status = 0;
    }
    return questions;
};
newPlayer();
};
pasapalabra();