
//Cuestionario con 3 opciones variables

var questions = [
    [
    { letter: "a", answer: "abducir", matched: false, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien."},
    { letter: "a", answer: "anomalia", matched: false, question: "CON LA A. Cambio o desviación respecto de lo que es normal, regular, natural o previsible."},
    { letter: "a", answer: "agente", matched: false, question: "CON LA A. Persona que trabaja en una agencia prestando determinados servicios."},
    ],   
    [
    { letter: "b", answer: "biografia", matched: false, question: "CON LA B. Narración de la vida de una persona."},
    { letter: "b", answer: "bingo", matched: false, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso."},
    { letter: "b", answer: "bocado", matched: false, question: "CON LA B. Porción de comida que se toma de una sola vez, mordiendo lo que se come."},
    ],      
    [
    { letter: "c", answer: "crio", matched: false, question: "CON LA C. Niño, bebé."},
    { letter: "c", answer: "creatividad", matched: false, question: "CON LA C. Capacidad o facilidad para inventar o crear."},
    { letter: "c", answer: "calma", matched: false, question: "CON LA C. Tranquilidad, ausencia de agitación y de nervios en la forma de actuar."},
    ],
    [
    { letter: "d", answer: "diarrea", matched: false, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida."},
    { letter: "d", answer: "dinamita", matched: false, question: "CON LA D. Explosivo sólido formado por una mezcla de nitroglicerina y un material poroso."},
    { letter: "d", answer: "deambular", matched: false, question: "CON LA D. Ir de un lugar a otro sin un fin determinado."},
    ],
    [
    { letter: "e", answer: "ectoplasma", matched: false, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación."},
    { letter: "e", answer: "erradicar", matched: false, question: "CON LA E. Eliminar o suprimir una cosa de manera completa y definitiva, especialmente algo inmaterial que es negativo o perjudicial y afecta a muchas personas."},
    { letter: "e", answer: "estornudar", matched: false, question: "CON LA E. Expulsar de forma violenta y ruidosa por la nariz y la boca el aire de los pulmones en un movimiento involuntario y brusco del diafragma."},
    ],    
    [    
    { letter: "f", answer: "facil", matched: false, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad."},
    { letter: "f", answer: "forzar", matched: false, question: "CON LA F. Aplicar la fuerza física a una cosa para que deje de oponer resistencia y poder hacer algo."},
    { letter: "f", answer: "familia", matched: false, question: "CON LA F. Grupo de personas formado por una pareja (normalmente unida por lazos legales o religiosos), que convive y tiene un proyecto de vida en común, y sus hijos, cuando los tienen."},
    ],
    [
    { letter: "g", answer: "galaxia", matched: false, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas."},
    { letter: "g", answer: "granizo", matched: false, question: "CON LA G. Precipitación en forma de glóbulos de hielo que se originan en los cumulonimbos muy desarrollados y caen separados y con violencia sobre la superficie terrestre."},
    { letter: "g", answer: "guardar", matched: false, question: "CON LA G. Poner una cosa en un lugar para que no se pierda o para que se conserve en buen estado, o en el lugar en que le corresponde estar. "},
    ],
    [
    { letter: "h", answer: "harakiri", matched: false, question: "CON LA H. Suicidio ritual japonés por desentrañamiento."},
    { letter: "h", answer: "hectarea", matched: false, question: "CON LA H. Medida de superficie, de símbolo ha, que es igual a 100 áreas."},
    { letter: "h", answer: "herramienta", matched: false, question: "CON LA H. Instrumento, generalmente de hierro o acero, que sirve para hacer o reparar algo y que se usa con las manos."},
    ],
    [
    { letter: "i", answer: "iglesia", matched: false, question: "CON LA I. Templo cristiano."},
    { letter: "i", answer: "ignifugo", matched: false, question: "CON LA I. Que rechaza la combustión y protege contra el fuego."},
    { letter: "i", answer: "idea", matched: false, question: "CON LA I. Representación mental de algo, ya sea material o inmaterial, real o imaginario, concreto o abstracto, a la que se llega tras la observación de ciertos fenómenos, la asociación de varias representaciones mentales, la experiencia en distintos casos, etc."},
    ],
    [
    { letter: "j", answer: "jabali", matched: false, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba."},
    { letter: "j", answer: "joroba", matched: false, question: "CON LA J. Abultamiento o protuberancia que tienen en el lomo ciertos animales formado por acumulación de grasas."},
    { letter: "j", answer: "jirafa", matched: false, question: "CON LA J. Mamífero rumiante de unos 5 m de alto, pelaje amarillento repleto de manchas leonadas, cuello muy largo y esbelto, crin corta, cabeza pequeña, cuernos cortos cubiertos por la piel, hocico alargado, patas delgadas (más bajas las traseras) y cola larga; es veloz y resistente, y habita en la sabana africana, formando manadas."},
    ],
    [
    { letter: "k", answer: "kamikaze", matched: false, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria."},
    { letter: "k", answer: "kilometro", matched: false, question: "CON LA K. Medida de longitud, de símbolo km, que equivale a 1000 metros."},
    { letter: "k", answer: "koala", matched: false, question: "CON LA K. Mamífero marsupial de hasta 8cm de longitud, aspecto parecido a un osezno, con abundante pelo gris rojizo, orejas grandes y peludas, y cuatro patas prensiles y provistas de uñas afiladas; sus movimientos son muy lentos, es arborícola y vive en Australia."},
    ],
    [
    { letter: "l", answer: "licantropo", matched: false, question: "CON LA L. Hombre lobo."},
    { letter: "l", answer: "linea", matched: false, question: "CON LA L. Sucesión continua de puntos en el espacio."},
    { letter: "l", answer: "ludico", matched: false, question: "CON LA L. Del juego o relacionado con esta actividad."},
    ],
    [
    { letter: "m", answer: "misantropo", matched: false, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas."},
    { letter: "m", answer: "manija", matched: false, question: "CON LA M. Palanca pequeña que sirve para accionar la cerradura de una puerta o de una ventana."},
    { letter: "m", answer: "mueca", matched: false, question: "CON LA M. Gesto del rostro, en el que interviene la boca, que expresa un estado de ánimo."},
    ],
    [
    { letter: "n", answer: "necedad", matched: false, question: "CON LA N. Demostración de poca inteligencia."},
    { letter: "n", answer: "nulidad", matched: false, question: "CON LA N. Falta de valor, fuerza o efecto de una cosa por no estar hecha de acuerdo con las leyes."},
    { letter: "n", answer: "norma", matched: false, question: "CON LA N. Principio que se impone o se adopta para dirigir la conducta o la correcta realización de una acción o el correcto desarrollo de una actividad."},
    ],
    [
    { letter: "ñ", answer: "señal", matched: false, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "ñ", answer: "guiño", matched: false, question: "CONTIENE LA Ñ. Gesto que consiste en cerrar y abrir con rapidez un ojo dejando el otro abierto."},
    { letter: "ñ", answer: "señorita", matched: false, question: "CONTIENE LA Ñ. [persona] Que es muy refinado y de gustos muy remilgados."},
    ],
    [
    { letter: "o", answer: "orco", matched: false, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien."},
    { letter: "o", answer: "oracion", matched: false, question: "CON LA O. Conjunto de enunciados con que el creyente se dirige a Dios, a una divinidad, a un santo, etc., especialmente la que tiene una forma fija y establecida."},
    { letter: "o", answer: "operacion", matched: false, question: "CON LA O. Ejecución de una acción."},
    ],
    [
    { letter: "p", answer: "protoss", matched: false, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psiónicos del videojuego StarCraft."},
    { letter: "p", answer: "piedra", matched: false, question: "CON LA P. Materia mineral dura y de estructura compacta que constituye las rocas."},
    { letter: "p", answer: "proeza", matched: false, question: "CON LA P. Acción de gran esfuerzo y valor."},
    ],
    [
    { letter: "q", answer: "queso", matched: false, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche."},
    { letter: "q", answer: "quimica", matched: false, question: "CON LA Q. Ciencia que estudia la composición y las propiedades de la materia y de las transformaciones que esta experimenta sin que se alteren los elementos que la forman."},
    { letter: "q", answer: "querella", matched: false, question: "CON LA Q. Oposición o falta de armonía entre dos o más personas."},
    ],
    [
    { letter: "r", answer: "raton", matched: false, question: "CON LA R. Roedor macho."},
    { letter: "r", answer: "remordimiento", matched: false, question: "CON LA R. Sentimiento de culpabilidad que tiene una persona por algo que ha hecho y que la intranquiliza."},
    { letter: "r", answer: "realeza", matched: false, question: "CON LA R. Familia real o conjunto de ellas."},
    ],
    [
    { letter: "s", answer: "simetria", matched: false, question: "CON LA S. Correspondencia de posición, forma y tamaño, respecto a un punto, una línea o un plano, de los elementos de un conjunto o de dos o más conjuntos de elementos entre sí."},
    { letter: "s", answer: "solucion", matched: false, question: "CON LA S. Respuesta eficaz a un problema, duda o cuestión."},
    { letter: "s", answer: "salud", matched: false, question: "CON LA S. Estado en que un ser u organismo vivo no tiene ninguna lesión ni padece ninguna enfermedad y ejerce con normalidad todas sus funciones."},
    ],
    [
    { letter: "t", answer: "terminator", matched: false, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984."},
    { letter: "t", answer: "trabalenguas", matched: false, question: "CON LA T. Palabra o frase difícil de pronunciar, en especial la que se propone como juego."},
    { letter: "t", answer: "tiempo", matched: false, question: "CON LA T. Dimensión física que representa la sucesión de estados por los que pasa la materia."},
    ],
    [
    { letter: "u", answer: "unidad", matched: false, question: "CON LA U. Propiedad que tienen las cosas de no poder dividirse ni fragmentarse sin alterarse o destruirse."},
    { letter: "u", answer: "universo", matched: false, question: "CON LA U. Conjunto de todo lo que tiene existencia física, en la Tierra y fuera de ella."},
    { letter: "u", answer: "uva", matched: false, question: "CON LA U. Fruto de la vid, comestible, pequeño y de forma redonda u ovalada, piel muy fina y carne muy jugosa; nace junto a otros formando racimos."},
    ],
    [
    { letter: "v", answer: "vikingos", matched: false, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa."},
    { letter: "v", answer: "vestigio", matched: false, question: "CON LA V. Señal o huella que queda de algo o de alguien que ha pasado o que ha desaparecido."},
    { letter: "v", answer: "virus", matched: false, question: "CON LA V. Microorganismo compuesto de material genético protegido por un envoltorio proteico, que causa diversas enfermedades introduciéndose como parásito en una célula para reproducirse en ella."},
    ],
    [
    { letter: "w", answer: "sandwich", matched: false, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso."},
    { letter: "w", answer: "swing", matched: false, question: "CONTIENE LA W. Estilo de jazz popularizado en la década de 1930 y que se caracteriza por su ritmo vivo y flexible y por estar orientado al baile."},
    { letter: "w", answer: "web", matched: false, question: "CON LA W. Conjunto de información que se encuentra en una dirección determinada de internet."},
    ],
    [
    { letter: "x", answer: "botox", matched: false, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirugía estética."},
    { letter: "x", answer: "xenon", matched: false, question: "CON LA X. Elemento químico de número atómico 54, masa atómica 131,3 y símbolo Xe ; es un gas noble incoloro e inodoro, que está presente en la atmósfera en cantidades mínimas y se usa en ciertos mecanismos de iluminación."},
    { letter: "x", answer: "sexualidad", matched: false, question: "CONTIENE LA X. Conjunto de características físicas y psicólogicas propias de cada sexo."},
    ],
    [
    { letter: "y", answer: "peyote", matched: false, question: "CONTIENE LA Y. Pequeño cactus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos."},
    { letter: "y", answer: "yoga", matched: false, question: "CON LA Y. Doctrina filosófica hindú de los adeptos al brahmanismo que se basa en las prácticas ascéticas, el éxtasis, la contemplación y la inmovilidad absoluta, para llegar al estado de perfección espiritual y al estado beatífico."},
    { letter: "y", answer: "eyeccion", matched: false, question: "CONTIENE LA Y. Expulsión automática del asiento del piloto, con su ocupante, en los aviones militares y los prototipos de aviones muy rápidos."},
    ],
    [
    { letter: "z", answer: "zen", matched: false, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional."},
    { letter: "z", answer: "zoologia", matched: false, question: "CON LA Z. Ciencia que estudia los animales."},
    { letter: "z", answer: "azar", matched: false, question: "CONTIENE LA Z. Causa o fuerza que supuestamente determina que los hechos y circunstancias imprevisibles o no intencionados se desarrollen de una manera o de otra."},
    ],
];

//Variables acumuladoras

var contAciertos=0;
var contErrores=0;
var puntaje=0;
var ranking=[];

// Variables para conectar con HTML
var usuario = document.getElementById("user")
document.getElementById("user").focus();
usuario.value = user.value;

var preguntas = document.getElementById("displayPreg");

var respuestas = document.getElementById("displayResp");

var jugar = document.getElementById("jugar");
jugar.addEventListener("click", game);

var teclaOk = document.getElementById("ok");
teclaOk.addEventListener("click", sendResponse);
desactivaBoton(teclaOk);

var pasapalabra = document.getElementById("pasapalabra");
pasapalabra.addEventListener("click", sendResponse);
desactivaBoton(pasapalabra);

var aciertos = document.getElementById("aciertos");
aciertos.innerText = contAciertos;

var errores = document.getElementById("errores");
errores.innerText = contErrores;

var tiempo = document.getElementById("timer");

var parar = document.getElementById("parar");
parar.addEventListener("click", theEnd);
desactivaBoton(parar);

var resultados = document.getElementById("results");

var letras = document.getElementsByClassName("letra");

var respuesta;
var contadorPos= 0;

// El generador de cuestionario aleatorio. (selecciona uno de los 3 cuestionarios disponibles)
var randQuestions = [];

function randomQuestions() {
    
    for (var i=0; i<questions.length; i++) {
        var randomize = Math.floor(Math.random()*3);
        randQuestions.push(questions[i][randomize]);
        
    }
    
};

randomQuestions();

// Funcion Game para inciar el juego
function game() {

    if (usuario.value.length >1) {
        document.getElementById("displayResp").focus();
        contadorPos= 0;
        resultados.innerText= "";
        preguntas.innerText = (randQuestions[0].question);
        respuesta = "";
        desactivaBoton(jugar)
        timer();
        activaBoton(parar);
        activaBoton(pasapalabra);
        activaBoton(ok);
    }
};

// Funcion de control de preguntas y respuestas
function controlPregResp(){

    var letraRosco = document.getElementById(randQuestions[contadorPos].letter)

     if (randQuestions[contadorPos].matched === false) {
        respuesta = respuestas.value.toLowerCase();
        
        if (respuesta.length === 0 || respuesta === "pasapalabra" || respuesta === pasapalabra) {
            randQuestions[contadorPos].matched = false;
            letraRosco.style.background = "#f1c40f";
            
        } else if (respuesta === randQuestions[contadorPos].answer) {
            randQuestions[contadorPos].matched = true;
            letraRosco.style.background = "#2ecc71";
            puntaje++;
            contAciertos++;
            aciertos.innerText = contAciertos;
            
        } else if (respuesta !== randQuestions[contadorPos].answer) {
            randQuestions[contadorPos].matched = true;
            letraRosco.style.background = "#e74c3c";
            contErrores++;
            errores.innerText = contErrores;
        };
        
    };

};

// Funcion de las preguntas y su iteracion hasta que se complete el pasapalabras
function sendResponse(event){
    
    event.preventDefault();
    
    controlPregResp();

    if (contadorPos < randQuestions.length -1) {
        proxPreg();
    
    } else {

        contadorPos= -1;

        randQuestions = randQuestions.filter(function(element) {
            return element.matched === false;
        });

        proxPreg();
    };    

};    


// Funcion que pasa a la próxima pregunta verificando si he acertado/errado todas para terminar o debo de seguir
function proxPreg() {
    
    contadorPos++;
    
    var contadorGen = contAciertos+contErrores;
    
    if (contadorGen !== 27) {
        preguntas.innerText= "";
        respuesta.value= "";
        respuestas.value= "";
        preguntas.innerText = randQuestions[contadorPos].question;
        
    } else {
        preguntas.innerText= "";
        respuestas.value= "";
        theEnd2();
        
    };

};

// Función para finalizar sin completar el juego
function theEnd() {
        document.getElementById("user").focus();
        stopTimer();
        resetTotal();
        resultados.innerText=`Haz finalizado el juego!!,\nPor haber concluído el juego sin terminar no participas del ranking.\nPara recomenzar escribe tu nombre de usuario y da click en \"Jugar\". nuevamente.`;
    };
    
// Funcion del timer
function timer(){
    
    t=tiempo;
    
    crono=setInterval(function(){
            if(t.value!=0){
                t.value--;
            } else {
                stopTimer();
                resetTotal();
                resultados.innerText= `Lo Lamento pero el tiempo ha terminado!\nGAME OVER\n\Para reintentar escribe un nombre de usuario y da click a \"Jugar\"`;
            };
        
        }

    ,1000);
    
};
    
// Función para parar el timer y resetearlo
function stopTimer() {
    clearInterval(crono);
};

// Función para desactivar un boton
function desactivaBoton(id) {
    id.disabled=true;
};

// Función para activar un boton
function activaBoton(id) {
    id.disabled=false;
};

// Función para resetear valores a cero ante posible repeticion del juego (o para cuando NO completamos el juego)
function resetTotal() {
    
    activaBoton(jugar);
    desactivaBoton(teclaOk);
    desactivaBoton(pasapalabra);
    desactivaBoton(parar);
    tiempo.value= 250;
    usuario.value= "";
    preguntas.innerText= "";
    respuestas.value= "";
    contAciertos=0;
    aciertos.innerText = contAciertos;
    contErrores=0;
    errores.innerText = contErrores;
    puntaje=0;
    
    for (i in questions) {
        questions[i][0].matched = false; 
        questions[i][1].matched = false; 
        questions[i][2].matched = false;
        letras[i].style.background = "lightcyan";
    }
    randQuestions = [];
    randomQuestions();
    
};

// Función para finalizar con ranking al completar el juego
function theEnd2() {
    document.getElementById("user").focus();
    stopTimer();
    rank();
    resetTotal();

};

// Función para el ranking
function rank() {
    
    ranking.push({user: user.value, aciertos: contAciertos, erradas: contErrores, puntaje: puntaje});
    ranking.sort(function(a,b) {
        return (b.puntaje-a.puntaje);
    });
    
    resultados.innerHTML= "Ranking del Pasapalabra:"+"<br/>";
    
    for(var i in ranking) {
        resultados.innerHTML += "|N˚:"+i+" | "+"User:"+ranking[i].user+" | "+"Aci:"+ranking[i].aciertos+" | "+"Err:"+ranking[i].erradas+" | "+"Pts:"+ranking[i].puntaje+"|"+"<br/>";
    };
    
};
