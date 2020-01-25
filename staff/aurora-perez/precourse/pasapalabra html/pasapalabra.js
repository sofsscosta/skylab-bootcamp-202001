var questions = [
    [{ number: 0, letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { number: 0, letter: "a", answer: "aguacate", status: 0, question: "CON LA A. Fruto de color verde con piel rugosa y dura, con un hueso redondo en su interior que está muy de moda"},
    { number: 0, letter: "a", answer: "amanecer", status: 0, question: "CON LA A. Dicho de el momento del día en el que sale el sol"}
    ],
    [{ number: 1, letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { number: 1, letter: "b", answer: "buceo", status: 0, question: "CON LA B. Nadar bajo del agua"},
    { number: 1, letter: "b", answer: "boceto", status: 0, question: "CON LA B. Dibujo esquemático que hace un artista antes de empezar la obra para ver cómo quedaría"}
    ],
    [{ number: 2, letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { number: 2, letter: "c", answer: "cabezada", status: 0, question: "CON LA C. Echar una siesta o una..."},
    { number: 2, letter: "c", answer: "cobarde", status: 0, question: "CON LA C. Se dice de una persona con falta de valor"}
    ],
    [{ number: 3, letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { number: 3, letter: "d", answer: "diabetes", status: 0, question: "CON LA D. Enfermedad que se caracteriza por tener una concentración de azúcar en sangre mayor de lo normal"},
    { number: 3, letter: "d", answer: "duna", status: 0, question: "CON LA D. Pequeña montaña de arena que forma y mueve el viento en el desierto"}
    ],
    [{ number: 4, letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { number: 4, letter: "e", answer: "escorpion", status: 0, question: "CON LA E. Arácnido con patas delanteras con forma de pinza y con un aguijón venenoso"},
    { number: 4, letter: "e", answer: "escrutinio", status: 0, question: "CON LA E. Acción de revisar todos los votos emitidos en una votación."}
    ],
    [{ number: 5, letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { number: 5, letter: "f", answer: "fabada", status: 0, question: "CON LA F. Guiso típico de Asturias"},
    { number: 5, letter: "f", answer: "fotosintesis", status: 0, question: "CON LA F. Proceso químico por el cual las plantas obtienen su alimento"}
    ],
    [{ number: 6, letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { number: 6, letter: "g", answer: "girasol", status: 0, question: "CON LA G. Planta con una gran flor amarilla que gira siguiendo la luz del sol"},
    { number: 6, letter: "g", answer: "gondola", status: 0, question: "CON LA G. Embarcación pequeña y alargada típica de Venecia"}
    ],
    [{ number: 7, letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { number: 7, letter: "h", answer: "hachiko", status: 0, question: "CON LA H. Famoso perro japonés del que se hizo una película en la que actúa Richard Gere"},
    { number: 7, letter: "h", answer: "heroina", status: 0, question: "CON LA H. Droga derivada del opio"}
    ],
    [{ number: 8, letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { number: 8, letter: "i", answer: "infusion", status: 0, question: "CON LA I. Bebida caliente que se prepara con hierbas"},
    { number: 8, letter: "i", answer: "inocente", status: 0, question: "CON LA I. Se dice de persona que no tiene malas intenciones"}
    ],
    [{ number: 9, letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { number: 9, letter: "j", answer: "jueves", status: 0, question: "CON LA J. Nombre de revista cómica famosa española"},
    { number: 9, letter: "j", answer: "jazz", status: 0, question: "CON LA J. Género musical"}
    ],
    [{ number: 10, letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { number: 10, letter: "k", answer: "karaoke", status: 0, question: "CON LA K. El sábado noche tus amigos y tú acabasteis en un..."},
    { number: 10, letter: "k", answer: "kefir", status: 0, question: "CON LA K. Alimento parecido al queso con sabor agridulce"}
    ],
    [{ number: 11, letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { number: 11, letter: "l", answer: "larva", status: 0, question: "CON LA L. Insecto que acaba de salir del huevo"},
    { number: 11, letter: "l", answer: "locuaz", status: 0, question: "CON LA L. Se dice de una persona que habla mucho"}
    ],
    [{ number: 12, letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { number: 12, letter: "m", answer: "matasanos", status: 0, question: "CON LA M. Nombre despectivo de médico"},
    { number: 12, letter: "m", answer: "meandro", status: 0, question: "CON LA M. Curva que hace un río en su curso "}
    ],
    [{ number: 13, letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { number: 13, letter: "n", answer: "narrativa", status: 0, question: "CON LA N. Género literario que incluye la novela y el cuento"},
    { number: 13, letter: "n", answer: "neolitico", status: 0, question: "CON LA N. Periodo de la historia en el que aperece la agricultura y ganadería"}
    ],
    [{ number: 14, letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { number: 14, letter: "ñ", answer: "lasaña", status: 0, question: "CONTIENE LA Ñ. Comida favorita de Garfierld"},
    { number: 14, letter: "ñ", answer: "aliñar", status: 0, question: "CONTIENE LA Ñ. Acción de echar salsa o especias a una comida."}
    ],
    [{ number: 15, letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { number: 15, letter: "o", answer: "ocurrencia", status: 0, question: "CON LA O. Sinónimo de idea"},
    { number: 15, letter: "o", answer: "osado", status: 0, question: "CON LA O. Se dice de persona atrevida"}
    ],
    [{ number: 16, letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { number: 16, letter: "p", answer: "pacense", status: 0, question: "CON LA P. Gentilicio de badajoz"},
    { number: 16, letter: "p", answer: "paperas", status: 0, question: "CON LA P. Endermedad vírica caracterizada por un hinchazón en la parte posterior de la boca"}
    ],
    [{ number: 17, letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { number: 17, letter: "q", answer: "quebrantahuesos", status: 0, question: "CON LA Q. Ave de gran tamaño que se alimenta de animales muertos"},
    { number: 17, letter: "q", answer: "quimera", status: 0, question: "CON LA Q. Animal mitológico"}
    ],
    [{ number: 18, letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { number: 18, letter: "r", answer: "reveindicar", status: 0, question: "CON LA R. Pedir o exigir algo a lo que se cree tener derecho"},
    { number: 18, letter: "r", answer: "resaca", status: 0, question: "CON LA R. Lo que tienes los domingos"}
    ],
    [{ number: 19, letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { number: 19, letter: "s", answer: "seismo", status: 0, question: "CON LA S. Movimiento violento de la superficie de la Tierra"},
    { number: 19, letter: "s", answer: "sesenta", status: 0, question: "CON LA S. El movimiento hippie empezó en los años..."}
    ],
    [{ number: 20, letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { number: 20, letter: "t", answer: "tapon", status: 0, question: "CON LA T. Se dice de persona de pequeña estatura"},
    { number: 20, letter: "t", answer: "thor", status: 0, question: "CON LA T. Dios del trueno"}
    ],
    [{ number: 21, letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { number: 21, letter: "u", answer: "uranio", status: 0, question: "CON LA U. Metal pesado que se utiliza para producir energía nuclear"},
    { number: 21, letter: "u", answer: "ursula", status: 0, question: "CON LA U. Villana de la película La Sirenita"}
    ],
    [{ number: 22, letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { number: 22, letter: "v", answer: "valyrio", status: 0, question: "CON LA V. Aleación metálica de la saga de Juego de Tronos. "},
    { number: 22, letter: "v", answer: "vaticano", status: 0, question: "CON LA V. Ciudad donde reside la Santa Sede"}
    ],
    [{ number: 23, letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { number: 23, letter: "w", answer: "western", status: 0, question: "CON LA W. Género cinematográfico ambientado en el Viejo Oeste"},
    { number: 23, letter: "w", answer: "wasabi", status: 0, question: "CON LA W. Salsa verda picante japonesa"}
    ],
    [{ number: 24, letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { number: 24, letter: "x", answer: "vox", status: 0, question: "CONTIENE LA X. Partido político español de extrema derecha"},
    { number: 24, letter: "x", answer: "xenofobia", status: 0, question: "CON LA X. Odio hacia los extranjeros"}
    ],
    [{ number: 25, letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { number: 25, letter: "y", answer: "popeye", status: 0, question: "CONTIENE LA Y. Personaje de dibujos animados al que le encantan las espinacas"},
    { number: 25, letter: "y", answer: "yen", status: 0, question: "CON LA Y. Moneda de Japón"}
    ],
    [{ number: 26, letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    { number: 26, letter: "z", answer: "zangano", status: 0, question: "CON LA Z. Macho de la abeja"},
    { number: 26, letter: "z", answer: "zaragoza", status: 0, question: "CON LA Z. Capital de Aragon "}
    ]
];

var usuario= {nombre:"", score:0};
var ranking= [
    {nombre:"Antonio", score:24},
    {nombre:'Pepita', score: 13},
    {nombre:'Juan', score:5}
];

var puntos =0;
var contador=0; //contador para el primer rosco
var contador2=0; //contador para los roscos posteriores al primero
var contador3=0; //contador de aciertos/fallos para saber cuando es el final de toda la partida(todas preguntas contestadas)
var listaTurno;

var guardarDefinicion = document.getElementById("preguntas").textContent;
var definicion = document.getElementById("preguntas");
var respuesta=document.getElementById("respuesta");
var pasapalabra=document.getElementById("pasapalabra");
var temporizadorhtml = document.getElementById("tiempo");
var resetButton = document.getElementById("reset");

var listaPasapalabra=[];
var temporizador = 200;
var interruptor=false;
var timer_interval=undefined;

respuesta.addEventListener('submit', function (e) { //cuando pulsas enviar, te dice si esta bien, mal o has puesto pasapalabra
    e.preventDefault();
    var respuesta = document.getElementById("enviar").value;
    finalPartida();

    if (contador==questions.length){
            if(respuesta.toLowerCase()=='pasapalabra'){
                document.getElementById("aciertoofallo").innerHTML = "Pasapalabra! Siguiente...";
                contador2++;  
            } else if (respuesta.toLowerCase() == listaPasapalabra[contador2].answer){
                document.getElementById(listaPasapalabra[contador2].number).className = "letra acierto";
                document.getElementById("aciertoofallo").innerHTML = "Correcto! Sigue así!";
                listaPasapalabra.splice(contador2,1);
                contador3++;
                puntos++;
            } else if (respuesta.toLowerCase() !== listaPasapalabra[contador2].answer) {
                document.getElementById(listaPasapalabra[contador2].number).className = "letra fallo";
                document.getElementById("aciertoofallo").innerHTML = "Error! La respuesta correcta era: '" + listaPasapalabra[contador2].answer + "'.";
                listaPasapalabra.splice(contador2,1);
                contador3++;
            };
            score();
            finalPartida();
            if (contador2==listaPasapalabra.length && contador3!==questions.length) {
                contador2=0;
                partida(contador2)
            }else{
                partida(contador2)
            }
    }else{
        if (usuario.nombre == "") {
            usuario.nombre = document.getElementById("enviar").value;
            empezarTiempo();
            listaTurno= random();
            partida(contador);
        } else if(respuesta.toLowerCase()=="pasapalabra"){
            document.getElementById("aciertoofallo").innerHTML = "Pasapalabra! Siguiente...";
            listaPasapalabra.push({
                number: questions[contador][listaTurno[contador]].number,
                letter: questions[contador][listaTurno[contador]].letter,
                answer: questions[contador][listaTurno[contador]].answer,
                status: questions[contador][listaTurno[contador]].status,
                question: questions[contador][listaTurno[contador]].question
            })
            contador++;
        } else if (respuesta.toLowerCase() == questions[contador][listaTurno[contador]].answer){ 
            document.getElementById(contador).className = "letra acierto";
            document.getElementById("aciertoofallo").innerHTML = "Correcto! Sigue así!";
            contador++;
            puntos++;
            contador3++;
        } else if (respuesta.toLowerCase() !== questions[contador][listaTurno[contador]].answer){
            document.getElementById(contador).className = "letra fallo";
            document.getElementById("aciertoofallo").innerHTML = "Error! La respuesta correcta era: '" + questions[contador][listaTurno[contador]].answer + "'.";
            contador++;
            contador3++;
        };
        score();
        finalPartida();
    };

    

    if (contador == questions.length && interruptor===false) {
        interruptor=true;
        partida(contador2);
    } else if (contador<questions.length){
        partida(contador);
    };

});


function random (){ //lista de numeros random del 0 al 2, que seran la posicion de las 3 posibles preguntas por cada letra
    var listaRandom=[];
    for (var i=0; i < questions.length; i++){
        var num = Math.floor(Math.random()*3);
        listaRandom.push(num);
    };
    return listaRandom;
};


function partida (posicion) { //funcion que reinicia el textarea e imprime en pantalla la pregunta
    document.getElementById("enviar").value="";

    if (contador==questions.length){
        definicion.innerHTML=listaPasapalabra[posicion].question; 
    } else {
        definicion.innerHTML=questions[posicion][listaTurno[posicion]].question;
        
    };
};

function score (){ //funcion para mostrar puntos
    var puntuaje= puntos.toString();
    document.getElementById("puntos").innerHTML = puntuaje + " puntos";
};


pasapalabra.addEventListener('click', function(){
    document.getElementById("aciertoofallo").innerHTML = "Pasapalabra! Siguiente...";
    if (contador==questions.length) {
        contador2++;
        if (contador2==listaPasapalabra.length && contador3!==questions.length) {
            contador2=0;
            partida(contador2)
        } else {
            
            partida(contador2);
        }
        
    } else if (contador<questions.length){
            listaPasapalabra.push({
            number: questions[contador][listaTurno[contador]].number,
            letter: questions[contador][listaTurno[contador]].letter,
            answer: questions[contador][listaTurno[contador]].answer,
            status: questions[contador][listaTurno[contador]].status,
            question: questions[contador][listaTurno[contador]].question
        })
        contador++;
        partida(contador);
    };
})

function finalPartida(){
    if(contador3==questions.length || temporizador == 0){
        rankingFinal();
    };
};

function rankingFinal (){
    pararTiempo();
        usuario.score=puntos;
        var preguntasFalladas = (27-puntos).toString();
        var mostrarRanking=document.getElementById("preguntas");

        ranking.push(usuario);
        ranking.sort(function(a, b) {return b.score-a.score});

        mostrarRanking.innerHTML="Has acertado " + puntos.toString() + " preguntas y fallado "+preguntasFalladas+" preguntas."+ 
        "<br>Este es el ranking actual: <br>TOP-1: "+  ranking[0].nombre + ", con " + ranking[0].score + ' puntos<br>TOP-2: ' + 
        ranking[1].nombre + ', con ' + ranking[1].score + ' puntos<br>TOP-3: ' + ranking[2].nombre + ', con ' + ranking[2].score+
        ' puntos <br><br>Si quieres empezar de nuevo la partida, pulsa Reset';
    
};


function pararTiempo(){
    if (typeof timer_interval !== "undefined") {
        clearInterval(timer_interval)
    }
}

function empezarTiempo(){
    pararTiempo();
    timer_interval = setInterval(function() {
        if(temporizador > 0){
            temporizadorhtml.innerHTML = temporizador;
            temporizador--;  
        }else{
            pararTiempo();
            rankingFinal();
        }
    }, 1000)
}

function resetAll () { 
    pararTiempo();
    temporizador = 200;
    temporizadorhtml.innerHTML=temporizador;

    contador = 0;
    contador2 = 0;
    contador3 = 0;
    listaPasapalabra= [];
    listaTurno=[];
    puntos=0;
    usuario= {nombre:"", score:0};
    definicion.innerHTML=guardarDefinicion;
    document.getElementById("aciertoofallo").innerHTML = "¡Buena suerte!"

    for (var i=0;i<questions.length;i++) { debugger
        document.getElementById(i).className = "letra base";
    }

    document.getElementById("puntos").innerHTML=puntos.toString() + " puntos";
    document.getElementById("enviar").value="";
}

resetButton.addEventListener('click', function(){
    resetAll();
});