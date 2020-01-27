//Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma letra, se podrían hacer tres preguntas diferentes.

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

var usuario= {nombre:"", score:0};


var ranking= [
    {nombre:"Antonio", score:24},
    {nombre:'Pepita', score: 13},
    {nombre:'Juan', score:5}
];

var puntos =0;
var contador=0;
var pregPasapalabra=[];
var contador2=0

function pasapalabra() {
    var nombre= prompt("Introduce tu nombre:");

    alert('Bienvenido '+ nombre +' a nuestro Pasapalabra SKylab edition! Este es el ranking actual: \n TOP-1: ' +  ranking[0].nombre + ', con ' + 
    ranking[0].score + ' puntos\n TOP-2: ' + ranking[1].nombre + ', con ' + ranking[1].score + ' puntos\n TOP-3: ' + ranking[2].nombre + ', con ' + ranking[2].score+' puntos');

    usuario.nombre=nombre;
    alert('Comencemos con al Pasapalabra! Aquí vamos con la primera pregunta...');


    if (contador !== questions.length) {
        rosco();
    } else {
        rankingReal();
    };
};

function rosco(){
    for (var i=0; i<questions.length;i++){
        var temp = Math.floor(Math.random()*3);
        var preguntaRandom = questions[i][temp];
        if (preguntaRandom.status === 1) { 
            continue;
        } else if (preguntaRandom.status === 0) { 
            var respuesta = prompt ('La pregunta es '+preguntaRandom.question+'.').toLowerCase() 
            if(respuesta===preguntaRandom.answer){
                alert ('Correcto! Tienes 1 punto más!');
                puntos++;
                contador++;
                questions[i][0].status=1;
                questions[i][1].status=1;
                questions[i][2].status=1;
            } else if (respuesta==='pasapalabra'){
                pregPasapalabra.push(preguntaRandom);
                contador++;
                continue;
            } else if (respuesta==='end'){
                END();
                return
            } else if (respuesta!==preguntaRandom.answer) {
                alert('No es correcto! La respuesta correcta es: '+preguntaRandom.answer)
                contador++;
                questions[i][0].status=1;
                questions[i][1].status=1;
                questions[i][2].status=1;
            };
        };
    
    };
    
    function rosco2 () {
        for (var i=0; i<pregPasapalabra.length; i++){
            if (pregPasapalabra[i].status === 1) { 
                    continue;
            } else if (pregPasapalabra[i].status === 0) { 
                    var respuesta2=prompt ('La pregunta es '+pregPasapalabra[i].question+'.').toLowerCase()
                    if(respuesta2===pregPasapalabra[i].answer){
                        alert ('Correcto! Tienes 1 punto más!');
                        puntos++;
                        contador2++
                        pregPasapalabra[i].status=1;
                    } else if (respuesta2==='pasapalabra'){
                        pregPasapalabra[i].status=0;
                        continue;
                    } else if (respuesta2==='end'){
                        end();
                        return
                    } else if (respuesta2!==pregPasapalabra[i].answer) {
                        alert('No es correcto! La respuesta correcta es: '+pregPasapalabra[i].answer)
                        pregPasapalabra[i].status=1;
                        contador2++
                    };
                };
                if (contador2===pregPasapalabra.length){
                    rankingReal();
                    return;
                }
                    
        };
    };

    if (contador===27 && pregPasapalabra.length===0){
        rankingReal();
    } else if (contador===27 && pregPasapalabra.length>0){
        rosco2();
    }

};

function rankingReal(){
    usuario.score=puntos;
    var preguntasFalladas = 27-puntos;

    alert ('Has acertado '+puntos+' preguntas y fallado '+preguntasFalladas+' preguntas.');
    ranking.push(usuario);

    ranking.sort(function(a, b) {return b.score-a.score});
    alert ('Este es el ranking actual: \n TOP-1: ' +  ranking[0].nombre + ', con ' + 
    ranking[0].score + ' puntos\n TOP-2: ' + ranking[1].nombre + ', con ' + ranking[1].score + ' puntos\n TOP-3: ' + ranking[2].nombre + ', con ' + ranking[2].score+' puntos')

    alert('Hasta pronto!')

};

function end (){
    alert('Ha finalizado el juego. Ha acertado '+puntos+' preguntas. Esperamos verte pronto!')
    return
};

pasapalabra()