

pasapalabra();

// Función englobadora del Pasapalabra

function pasapalabra() {
        
    alert(`Bienvenido/a al PASAPALABRA de Skylab`)

    //Cuestionario con 3 opciones variables
    
    var questions = [
        { letter: "a", answer: "abducir", matched: false, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien."},
        { letter: "b", answer: "bocado", matched: false, question: "CON LA B. Porción de comida que se toma de una sola vez, mordiendo lo que se come."},
        { letter: "c", answer: "calma", matched: false, question: "CON LA C. Tranquilidad, ausencia de agitación y de nervios en la forma de actuar."},
        { letter: "d", answer: "dinamita", matched: false, question: "CON LA D. Explosivo sólido formado por una mezcla de nitroglicerina y un material poroso."},
        { letter: "e", answer: "estornudar", matched: false, question: "CON LA E. Expulsar de forma violenta y ruidosa por la nariz y la boca el aire de los pulmones en un movimiento involuntario y brusco del diafragma."},
        { letter: "f", answer: "familia", matched: false, question: "CON LA F. Grupo de personas formado por una pareja (normalmente unida por lazos legales o religiosos), que convive y tiene un proyecto de vida en común, y sus hijos, cuando los tienen."},
        { letter: "g", answer: "guardar", matched: false, question: "CON LA G. Poner una cosa en un lugar para que no se pierda o para que se conserve en buen estado, o en el lugar en que le corresponde estar. "},
        { letter: "h", answer: "herramienta", matched: false, question: "CON LA H. Instrumento, generalmente de hierro o acero, que sirve para hacer o reparar algo y que se usa con las manos."},
        { letter: "i", answer: "idea", matched: false, question: "CON LA I. Representación mental de algo, ya sea material o inmaterial, real o imaginario, concreto o abstracto, a la que se llega tras la observación de ciertos fenómenos, la asociación de varias representaciones mentales, la experiencia en distintos casos, etc."},
        { letter: "j", answer: "jirafa", matched: false, question: "CON LA J. Mamífero rumiante de unos 5 m de alto, pelaje amarillento repleto de manchas leonadas, cuello muy largo y esbelto, crin corta, cabeza pequeña, cuernos cortos cubiertos por la piel, hocico alargado, patas delgadas (más bajas las traseras) y cola larga; es veloz y resistente, y habita en la sabana africana, formando manadas."},
        { letter: "k", answer: "koala", matched: false, question: "CON LA K. Mamífero marsupial de hasta 8cm de longitud, aspecto parecido a un osezno, con abundante pelo gris rojizo, orejas grandes y peludas, y cuatro patas prensiles y provistas de uñas afiladas; sus movimientos son muy lentos, es arborícola y vive en Australia."},
        { letter: "l", answer: "ludico", matched: false, question: "CON LA L. Del juego o relacionado con esta actividad."},
        { letter: "m", answer: "mueca", matched: false, question: "CON LA M. Gesto del rostro, en el que interviene la boca, que expresa un estado de ánimo."},
        { letter: "n", answer: "norma", matched: false, question: "CON LA N. Principio que se impone o se adopta para dirigir la conducta o la correcta realización de una acción o el correcto desarrollo de una actividad."},
        { letter: "ñ", answer: "señorita", matched: false, question: "CONTIENE LA Ñ. [persona] Que es muy refinado y de gustos muy remilgados."},
        { letter: "o", answer: "operacion", matched: false, question: "CON LA O. Ejecución de una acción."},
        { letter: "p", answer: "proeza", matched: false, question: "CON LA P. Acción de gran esfuerzo y valor."},
        { letter: "q", answer: "querella", matched: false, question: "CON LA Q. Oposición o falta de armonía entre dos o más personas."},
        { letter: "r", answer: "realeza", matched: false, question: "CON LA R. Familia real o conjunto de ellas."},
        { letter: "s", answer: "salud", matched: false, question: "CON LA S. Estado en que un ser u organismo vivo no tiene ninguna lesión ni padece ninguna enfermedad y ejerce con normalidad todas sus funciones."},
        { letter: "t", answer: "tiempo", matched: false, question: "CON LA T. Dimensión física que representa la sucesión de estados por los que pasa la materia."},
        { letter: "u", answer: "uva", matched: false, question: "CON LA U. Fruto de la vid, comestible, pequeño y de forma redonda u ovalada, piel muy fina y carne muy jugosa; nace junto a otros formando racimos."},
        { letter: "v", answer: "virus", matched: false, question: "CON LA V. Microorganismo compuesto de material genético protegido por un envoltorio proteico, que causa diversas enfermedades introduciéndose como parásito en una célula para reproducirse en ella."},
        { letter: "w", answer: "web", matched: false, question: "CON LA W. Conjunto de información que se encuentra en una dirección determinada de internet."},
        { letter: "x", answer: "sexualidad", matched: false, question: "CONTIENE LA X. Conjunto de características físicas y psicólogicas propias de cada sexo."},
        { letter: "y", answer: "eyeccion", matched: false, question: "CONTIENE LA Y. Expulsión automática del asiento del piloto, con su ocupante, en los aviones militares y los prototipos de aviones muy rápidos."},
        { letter: "z", answer: "azar", matched: false, question: "CONTIENE LA Z. Causa o fuerza que supuestamente determina que los hechos y circunstancias imprevisibles o no intencionados se desarrollen de una manera o de otra."},
    ];
   
    //Variables acumuladoras
    
    var contAciertos=0;
    var contErrores=0;
    var puntaje=0;
    var ranking=[]; 

    // El inicio y pedido de user
    
    inputUser();
    
    var user;

    function inputUser() {
        user = prompt(`Por favor, escribe tu nombre de usuario para comenzar`);
        verify(user);
        
        function verify(data1) {
            
            if (data1 === "" || data1 === " " || data1 === null) {
                alert(`Por favor, ingresa un nombre de usuario válido`);
                inputUser();
                
            } else {
                alert(`Bienvenido/a ${user} al PASAPALABRA de Skylab`);
                
            };
        
        };
        
    };
    
    alert(`Te informamos ${user}, que comienzas con un puntaje total de 0 puntos.\n\nCuantas mas preguntas aciertes mayor será el puntaje al final del juego y por lo tanto, mejor posición obtendrás en el ranking.\n\nPara pasar palabra escribe \"pasapalabra\" y para terminar en cualquier momento, escribe \"end\".`);

    // Funcion de las preguntas y su iteracion hasta que se complete el pasapalabras

    preguntas();
    
    function preguntas() {
    
        for (var i=0; i<questions.length; i++) {
                
            if (questions[i].matched === false) {
                var respuesta = prompt(questions[i].question);

                if (respuesta === "pasapalabra") {
                    alert(`Ok, pasamos a la siguiente palabra!`);
                    console.log(`Ok, pasamos a la siguiente palabra!`);
                    
                } else if (respuesta === null) {
                    return theEnd();
                    
                } else if (respuesta === ''){
                    alert(`Por favor, escribe una respuesta válida, \"pasapalabra\" para pasar palabra, o \"end\" para terminar ahora.\n\n Pasamos a la siguiente pregunta...`);
                    console.log(`Por favor, escribe una respuesta válida, \"pasapalabra\" para pasar palabra, o \"end\" para terminar ahora.\n\n Pasamos a la siguiente pregunta...`);
                
                } else if (respuesta === questions[i].answer) {
                    questions[i].matched = true;
                    alert(`Muy Bien! Haz acertado!!!, sumas 1 punto.`);
                    console.log(`Muy Bien! Haz acertado!!!, sumas 1 punto.`);
                    puntaje++;
                    contAciertos++;
                    
                } else if (respuesta !== questions[i].answer) {
                    questions[i].matched = true;
                    alert(`Lo lamento pero tu respuesta es incorrecta!, no sumas punto.`);
                    console.log(`Lo lamento pero tu respuesta es incorrecta!, no sumas punto.`);
                    contErrores++;
                    
                };
                 
            };   
            
        };
        
        alert (`Muy bien ${user}!!.\n\nEn esta ronda has tenido ${contAciertos} aciertos y ${contErrores} fallos.`)
        console.log (`Muy bien ${user}!!.\n\nEn esta ronda has tenido ${contAciertos} aciertos y ${contErrores} fallos.`)
    
        var contadorGen = contAciertos+contErrores;
        
        if (contadorGen !== 27) {
            var continua = confirm(`Seguimos a por otra ronda de preguntas con las letras que quedan por responder?`)
        
            if (!continua) {
                theEnd();
            
            } else {
                preguntas();
            };
    
        } else {
            theEnd2()
        
        };
    }; 
    
    // Función para finalizar con saludo sin terminar
    function theEnd() {

        var exit1 = confirm(`Estas seguro de que quieres salir?`)

        if (exit1) {
            alert(`Haz decidido salir del juego,\n\nHaz acertado un total de ${contAciertos} veces, haz errado un total de ${contErrores} veces, y tu puntaje final es de ${puntaje} puntos.\n\nNo participaras de nuestro ranking por no haber llegado hasta el final.\n\nGracias por jugar y hasta la próxima!`);
            console.log(`Haz decidido salir del juego,\n\nHaz acertado un total de ${contAciertos} veces, haz errado un total de ${contErrores} veces, y tu puntaje final es de ${puntaje} puntos.\n\nNo participaras de nuestro ranking por no haber llegado hasta el final.\n\nGracias por jugar y hasta la próxima!`);
            reset();
            console.log(`Fin del juego`);
        };

    };

    // Función para finalizar con saludo al terminar
    function theEnd2() {
        alert(`Haz finalizado el juego!!,\n\nHaz acertado un total de ${contAciertos} veces, haz errado un total de ${contErrores} veces y tu puntaje final es de ${puntaje} puntos.`);
        console.log(`Haz finalizado el juego!!,\n\nHaz acertado un total de ${contAciertos} veces, haz errado un total de ${contErrores} veces y tu puntaje final es de ${puntaje} puntos.`);
        rank();
        newGame();
        
    };

    // Funcion para finalizar directo

    function theEnd3() {

        alert(`Gracias por jugar y hasta la próxima!`);
        console.log("Fin del Juego");
    };

    // Función para el ranking
    function rank() {
        
        ranking.push({user: user, aciertos: contAciertos, erradas: contErrores, puntaje: puntaje});
        ranking.sort(function(a,b) {
            return (b.puntaje-a.puntaje);
        });
        
        for(var i in ranking){
            console.log(`Tu posición en el Ranking del PASAPALABRA es:\nNro. ${i}, User: ${ranking[i].user}, Aciertos: ${ranking[i].aciertos}, Erradas: ${ranking[i].erradas}, Puntuaje Final: ${ranking[i].puntaje} puntos`);
        };
       
    };
    
    // Función para resetear valores a cero ante posible repeticion del juego
    function reset() {
        
        contAciertos=0;
        contErrores=0;
        puntaje=0;
        
        for (i in questions) {
            questions[i].matched = false; 
            
        }
        
    };
        
    // Función para re-comenzar
    function newGame() {
        exit = confirm("Quieres jugar otra partida con un nuevo cuestionario de preguntas?");
        
        if (exit) {
            reset();
            inputUser();
            alert(`Te informamos ${user}, que comienzas con un puntaje total de 0 puntos.\n\nCuantas mas preguntas aciertes mayor será el puntaje al final del juego y por lo tanto, mejor posición obtendrás en el ranking.\n\nPara pasar palabra escribe \"pasapalabra\" y para terminar en cualquier momento, escribe \"end\".`);
            preguntas();
        
        } else {
            theEnd3();
        }
    
    };
};