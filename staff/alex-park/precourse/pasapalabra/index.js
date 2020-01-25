  
var questions = [
    { letter: "a", answer: ["abducir","agenda","arma"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer","CON LA A. Instrumento o máquina que sirve para atacar o defenderse"]},
    { letter: "b", answer: ["bingo","bonanza","bañarse"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso","CON LA B. Prosperidad","CON LA B. Entrar en el agua para lavarse, para nadar o jugar"]},
    { letter: "c", answer: ["churumbel","caracol","cazadora"], status: 0, question: ["CON LA C. Niño, crío, bebé","CON LA C. Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse","CON LA C. Ropa de abrigo que cubre desde los hombros a la cintura"]},
    { letter: "d", answer: ["diarrea","dormir","débil"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida","CON LA D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios","CON LA D. Que tiene poca fuerza, poco vigor o poca resistencia"]},
    { letter: "e", answer: ["ectoplasma","entrecot","edificio"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación","CON LA E. Trozo de carne sacado de entre costilla y costilla de la res","CON LA E. Lugar que se usa para viviendas, oficinas, colegios, etc"]},
    { letter: "f", answer: ["fácil","farhadi","futuro"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad","CON LA F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017","CON LA F. Tiempo que viene después"]},
    { letter: "g", answer: ["galaxia","gorgorito","grúa"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas","CON LA G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar","CON LA G. Máquina para levantar objetos pesados y moverlos de un lugar a otro"]},
    { letter: "h", answer: ["harakiri","hidroavión","hundir"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento","CON LA H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua","CON LA H. Ir abajo dentro del agua"]},
    { letter: "i", answer: ["iglesia","inapetencia","isla"], status: 0, question: ["CON LA I. Templo cristiano","CON LA I. Falta de gana de comer","CON LA I. Territorio que está rodeado de agua por todas partes"]},
    { letter: "j", answer: ["jabalí","jardinería","jugador"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba","CON LA J. Arte y oficio del jardinero","CON LA J. Persona que juega"]},
    { letter: "k", answer: ["kamikaze","kilo","katana"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria","CON LA K. Magnitud de peso también usada en el abecedario de aviación","CON LA K. Espada samurái de origen japonés"]},
    { letter: "l", answer: ["licántropo","lobera","lata"], status: 0, question: ["CON LA L. Hombre lobo","CON LA L. Guarida de lobos","CON LA L. Envase de metal"]},
    { letter: "m", answer: ["misántropo","mentira","manzana"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas","CON LA M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída","CON LA M. Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura"]},
    { letter: "n", answer: ["necedad","nativo","nunca"], status: 0, question: ["CON LA N. Demostración de poca inteligencia","CON LA N. Se aplica al que ha nacido en el lugar de que se trata","CON LA N. Ningún día o en ningún tiempo"]},
    { letter: "ñ", answer: ["señal","hogaño","españa"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.","CONTIENE LA Ñ. De tiempo que indica en esta época diferencia de antaño en época inferior","CONTIENE LA Ñ. Estado autonómico de la península ibérica cuya capital es Madrid"]},
    { letter: "o", answer: ["orco","órgano","oveja"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien","CON LA O. De las partes del pulpo, animal o vegetal que ejercen una función","CON LA O. Animal doméstico que tiene el cuerpo cubierto de lana"]},
    { letter: "p", answer: ["protoss","plotino","pasear"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft","CON LA P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría","CON LA P. Andar por placer o para hacer ejercicio"]},
    { letter: "q", answer: ["queso","chisquero","queso"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche","CONTIENE LA Q. Encendedor antiguo de bolsillo","CON LA Q. Alimento sólido preparado con leche"]},
    { letter: "r", answer: ["ratón","ráfaga","resumen"], status: 0, question: ["CON LA R. Roedor","CON LA R. Viento fuerte, resentido y de corta duración","CON LA R. Pocas palabras que  cuentan una historia más larga"]},
    { letter: "s", answer: ["stackoverflow","simple","sandalia"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático","CON LA S. Se aplica a lo que no tiene complicación","CON LA S. Calzado que no tapa todo el pie"]},
    { letter: "t", answer: ["terminator","trece","techo"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984","CON LA T. Número cardinal equivalente a 10 + 3","CON LA T. Parte de una habitación que está arriba"]},
    { letter: "u", answer: ["unamuno","uderzo","urgente"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914","CON LA U. Apellido del dibujante y guionista francés autor de la serie Asterix","CON LA U. Que no puede esperar"]},
    { letter: "v", answer: ["vikingos","verde","veloz"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa","CON LA V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda","CON LA V. Que es muy rápido"]},
    { letter: "w", answer: ["sandwich","wakanda","wonder"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso","CON LA W. Tierra natal de Black Panther","CON LA W. Apellido del cantante de nombre artístico Stevie viral por su clásico Superstition"]},
    { letter: "x", answer: ["botox","exérgesis","execrable"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética","CONTIENE LA X. Explicación o interpretación particularmente de los libros de la Biblia","CONTIENE LA X. Deleznable, repudiable o digno de condena"]},
    { letter: "y", answer: ["peyote","moncayo","yegua"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos","CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico","CON LA Y. Hembra del caballo"]},
    { letter: "z", answer: ["zen","zoodiacal","zarpar"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional","CON LA Z. Perteneciente o relativo al zoodíaco","CON LA Z. Empezar a navegar"]},
];

var score = 0;
var statusCounter = 0;
var nameTracker;
var ranking = [
    {name: "Obama", score: 20},
    {name: "Ralph", score: 9},
    {name: "Donald Trump", score: 5}
];
var temp;
var endTracker = false;

function pasapalabra () {
    var name = prompt("¡Bienvenido a Pasapalabra! Por favor, indícanos tu nombre:");
    nameTracker = {name: name, score: 0};
    var starter = confirm("Muy buenas, " + name + ", a continuación se te mostrará el actual Top 3 de jugadores:\n\n1º " + ranking[0].name + ": " + 
    ranking[0].score + " puntos\n2º " + ranking[1].name + ": " + ranking[1].score + " puntos\n3º " + ranking[2].name + ": " + ranking[2].score +
    " puntos\n\nCuando estés preparad@ dale a 'Aceptar' y ¡que empiece el juego!");

    if (starter === false) {
        alert("Has tirado la toalla sin ni siquiera intentarlo :^(");
        return;
    };

    if (statusCounter !== questions.length) {
        rosco();
    } else {
        results();
    };
};

function rosco () {
    temp = Math.floor(Math.random() * 3);
    for (let i=0; i<questions.length; i++) {
        if (questions[i].status === 1) {
            continue;
        } else if (questions[i].status === 0) {
            var letterQuestion = prompt(questions[i].question[temp]);
            if (letterQuestion.toLowerCase() === "END".toLowerCase()) {
                end();
                endTracker = true;
                break;
            } else if (letterQuestion.toLowerCase() === "pasapalabra".toLowerCase()) {
                continue;
            } else if (letterQuestion.toLowerCase() !== questions[i].answer[temp].toLowerCase()) {
                alert(`No es correcto! Qué pena...\n\nLa respuesta correcta era: ${questions[i].answer[temp]}.`)
                questions[i].status = 1;
                statusCounter++;

            } else if (letterQuestion.toLowerCase() === questions[i].answer[temp].toLowerCase()) {
                alert("Correcto! Obtienes +1 puntos.")
                questions[i].status = 1;
                statusCounter++;
                score++;
            };
        };
    };

    if (statusCounter !== questions.length && endTracker === false) {
        rosco();
    } else if (statusCounter === questions.length && endTracker === false) {
        results();
    };
};
    

function results () {
    nameTracker.score = score;
    if (nameTracker.score > ranking[0].score) {
        ranking[2] = ranking[1];
        ranking[1] = ranking[0];
        ranking[0] = nameTracker;

    } else if (nameTracker.score > ranking[1].score) {
        ranking[2] = ranking[1];
        ranking[1] = nameTracker;
        
    } else if (nameTracker.score > ranking[2].score) {
        ranking[2] = nameTracker;
    };

    if (score === questions.length) {
        alert("ROSCO COMPLETADO! Felicidades!! Eres millonari@!!");
        return;

    } else if (score !== questions.length) {
        var mistakes = (questions.length - score);
        alert(`¡Fin de la partida!\n\nTu puntuación final ha sido de: ¡${score} puntos!\n\nEl total de fallos ha sido: ${mistakes}.`);
        alert("Ránking actual:\n\n1º " + ranking[0].name + ": " + ranking[0].score + " puntos\n2º " + ranking[1].name + 
        ": " + ranking[1].score + " puntos\n3º " + ranking[2].name + ": " + ranking[2].score + " puntos");
    };

    var nextGame = confirm("Si deseas empezar una nueva partida, pulsa 'Aceptar':");
    if (nextGame === false) {
        alert("¡Gracias por participar! ¡Hasta la próxima! :^D")
        return;
    } else {
        score = 0;
        statusCounter = 0;
        nameTracker;
        temp;
        questions.forEach(function(reset) {
            reset.status = 0;
        });
        pasapalabra();
    };
};

function end () {
    nameTracker.score = score;
    var mistakes = (questions.length - score);
    alert(`¡Te retiraste de la partida!\n\nTu puntuación final ha sido de: ¡${score} puntos!\n\nEl total de fallos ha sido: ${mistakes}.`);
    alert("Lamentablemente al retirarte de la partida no podrás entrar en el ránking, independientemente de tu puntuación. ¡Lástima!");
    return;
};

pasapalabra();