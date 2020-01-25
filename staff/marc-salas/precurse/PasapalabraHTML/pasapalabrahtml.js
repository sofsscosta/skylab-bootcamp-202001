//variables globales
var questions = [
    { letter: "a", answer: ["abducir", 'arma','acordeon'], status: 0, question:["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    "CON LA A. Instrumento o máquina que sirve para atacar o defenderse.",
    "CON LA A. Instrumento musical de viento provisto de fuelle"]},
    { letter: "b", answer: ["bingo","billar","bollo"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    "CON LA B. Juego que consiste en impulsar con palos bolas sobre una mesa de paño verde ",
    "CON LA B. Masa esponjosa amasada con leche y huevos"]},
    { letter: "c", answer: ["churumbel","calamar","cacofonia"], status: 0, question: ["CON LA C. Niño, crío, bebé",
    "CON LA C. Molusco cefalópodo de cuerpo alargado y diez tentáculos",
    "CON LA C. Disonancia sonora en una frase"]},
    { letter: "d", answer: ["diarrea","defraudar","datil"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    "CON LA D. Eludir de manera fraudulenta el pago de impuestos",
    "CON LA D. Fruto comestible de la palmera datilera"]},
    { letter: "e", answer: ["ectoplasma","estanco","euro"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    "CON LA E. Establecimiento donde se venden ciertos productos cuya venta libre está prohibida",
    "CON LA E. Unidad monetaria de Europa"]},
    { letter: "f", answer: ["facil","filosofia","frodo"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    "CON LA F. Conjunto de reflexiones sobre la esencia, las causas y consecuencias del hombre y el universo",
    "CON LA F. Hobbit original de la Comarca que, junto a su amigo Sam, lanzan el anillo único al monte del destino"]},
    { letter: "g", answer: ["galaxia","grillo","giño"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    "CON LA G. Insecto saltador de color negro rojizo que produce un sonido agudo",
    "CON LA G. Movimiento que consiste en cerrar y abrir un ojo dejando el otro abierto"]},
    { letter: "h", answer: ["harakiri","hiperespacio","hongo"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento",
    "CON LA H. Espacio hipotético de más de tres dimensiones",
    "CON LA H. ser vivo que posee un talo para absorber los nutrientes del suelo, se reproduce por esporas y vive en lugares húmedos y con poca luz"]},
    { letter: "i", answer: ["iglesia","incesto","importante"], status: 0, question: ["CON LA I. Templo cristiano",
    "CON LA I. Relación sexual entre familiares consanguíneos, Lanister",
    "CON LA I. Que tiene gran valor, magnitud o influencia"]},
    { letter: "j", answer: ["jabali","jamon","juglar"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    "CON LA J. Pierna de cerdo cruda y curada",
    "CON LA J. Artista itinerante de la Edad Media"]},
    { letter: "k", answer: ["kamikaze","kiwi","kiwi"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria",
    "CON LA K. Fruto de piel marrón y peluda, con pulpa verde, dulce y jugosa",
    "CON LA K. Ave corredora de patas cortas y pico largo y curvo"]},
    { letter: "l", answer: ["licantropo","lechuga","levitar"], status: 0, question: ["CON LA L. Hombre lobo",
    "CON LA L. Hortaliza con hojas radicales blandas y comestibles",
    "CON LA L. Elevarse algo o alguien sin que tengan lugar agentes conocidos"]},
    { letter: "m", answer: ["misantropo","marc","mutar"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    "CON LA M. Fantastico y precioso programador a quien le debemos estas lineas de codigo",
    "CON LA M. Cambiar algo de un ser vivo o cosa"]},
    { letter: "n", answer: ["necedad","necedad","necedad"], status: 0, question: ["CON LA N. Demostración de poca inteligencia",
    "CON LA N. Vehículo espacial",
    "CON LA N. Planta pequeña de color verde azulado y hojas grandes. También se utiliza como sinonimo del miembro masculino"]},
    { letter: "ñ", answer: ["señal","cañon","caña"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    "CONTIENE LA Ñ. Arma de fuego de grandes dimensiones",
    "CONTIENE LA Ñ. Objeto o herramienta que se utiliza para pescar"]},
    { letter: "o", answer: ["orco","oeste","ofender"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    "CON LA O. Punto cardinal por donde se oculta el sol",
    "CON LA O. Despreciar o humillar mediante palabras o acciones"]},
    { letter: "p", answer: ["protoss","patrulla","pacto"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    "CON LA P. Grupo pequeño de soldados que vigilan y cuidan un lugar",
    "CON LA P. Acuerdo entre personas o entidades vinculante de lo pactado"]},
    { letter: "q", answer: ["queso","querella","queja"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    "CON LA Q. Acusación de un delito ante la justicia",
    "CON LA Q. Protesta que se hace ante una autoridad a causa de una disconformidad"]},
    { letter: "r", answer: ["raton","rebozar","relax"], status: 0, question: ["CON LA R. Roedor",
    "CON LA R. Cubrir con harina y huevo un alimento",
    "CON LA R. Relajamiento físico o psíquico al que se llega por medio de ejercicios adecuados"]},
    { letter: "s", answer: ["stackoverflow","sacrificio","salsa"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático",
    "CON LA S. Ofrenda que se le hace a un dios o al mismisimo Satanas",
    "CON LA S. Mezcla de varias sustancias para aderezar comidas"]},
    { letter: "t", answer: ["terminator","tequila","topo"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    "CON LA T. Bebida mejicana que se toma con sal y limón",
    "CON LA T. Persona que se introduce en una organización para espiar su funcionamiento"]},
    { letter: "u", answer: ["unamuno","universo","urologo"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    "CON LA U. Conjunto de todo lo que tiene existencia física",
    "CON LA U. Especialista médico en el aparato urinario"]},
    { letter: "v", answer: ["vikingos","vampiro","vago"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    "CON LA V. Ser imaginario en forma de hombre que se alimenta de la sangre de las personas",
    "CON LA V. Que tiene poca disposición para realizar un trabajo"]},
    { letter: "w", answer: ["sandwich","whisky","waterpolo"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    "CON LA W. Bebida alcohólica obtenida de la destilación de la cebada y otros cereales",
    "CON LA W. Deporte de pelota que se practica en una piscina entre dos equipos de veinte nadadores"]},
    { letter: "x", answer: ["botox","xilofono","xerografiar"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    "CON LA X. Instrumento de percusión formado por una serie de placas de madera que se golpea con macillas",
    "CON LA X. Imprimir por medio de la xerografía"]},
    { letter: "y", answer: ["peyote","yoyo","yoda"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    "CON LA Y. Juguete formado por dos discos unidos y un cordón",
    "CON LA Y. Jedi ancestro que enseña al joven Luck para derrotar a Darth Vader "]},
    { letter: "z", answer: ["zen","zorro","zumo"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    "CON LA Z. Mamífero canino carnívoro de tamaño mediano de hocico alargado y pelaje pardo rojizo",
    "CON LA Z. Líquido que se extrae de las frutas y vegetales mediante presión o cocción y se toma como alimento"]},
]
var posiciones = [{player: 'Jose', score: 30},
{player: 'Antonia', score: 25},
{player: 'julia', score: 36},
{player: 'jordi', score: 5}
];
var indicePreguntas = 0;
var aleatori = 0;
var nombre = "";
var c = 220;

// al pulsar la entrada de texto se elimina el valor para poder escrivir mas rapido
const l = document.getElementById('jugador');
l.onclick = function() {borrado(l)};
const j = document.getElementById('respuesta');
j.onclick = function() {borrado(j)};
// al pulsar el boton de continuar entramos en el juego i empieza la cuenta atras
const continuarId = document.getElementById('next');
continuarId.onclick = function(){continuar()}
continuarId.onmousedown = function(){pulsar(continuarId)}
continuarId.onmouseup = function(){soltar(continuarId)}
// Al pulsar el boton de responder el programa validara si la respuesta es correcta o no
const confirmarId = document.getElementById('confirmarRespuesta');
confirmarId.onclick = function(){validacion()}
confirmarId.onmousedown = function(){pulsar(confirmarId)}
confirmarId.onmouseup = function(){soltar(confirmarId)}
// Al pulsar pasapalabra el juego pasara a la siguiente preguna manteniendo esa sin responder
const pasapalabraId = document.getElementById('pasapalabraRespuesta');
pasapalabraId.onclick = function(){pregunta()}
pasapalabraId.onmousedown = function(){pulsar(pasapalabraId)}
pasapalabraId.onmouseup = function(){soltar(pasapalabraId)}
// Al pulsar nuevo juego este ará un reset de todo (menos el ranking) para poder jugar otra vez 
const resetId = document.getElementById('botonReset');
resetId.onclick = function(){reset()}
resetId.onmousedown = function(){pulsar(resetId)}
resetId.onmouseup = function(){soltar(resetId)}

// funcion que )inicia el juego al pulsar el boton continuar
function continuar() {
    nombre = document.getElementById("jugador").value;
    pasePantalla("pre","juego")
    rtime();
    tiempo();
    indicePreguntas = 0;
    pregunta();
}
// Funcion que muestra la pregunta por pantalla y a la vez busca las preguntas que no han sido respondidas
function pregunta(){
    textChange("respuesta","Pasapalabra");
    if (indicePreguntas <= 26){
        if (questions[indicePreguntas].status === 0){
            aleatori = Math.floor(Math.random() * 3) + 0;
            document.getElementById("pregunta").innerHTML = questions[indicePreguntas].question[aleatori]
            indicePreguntas = indicePreguntas + 1;
        }else if (questions[indicePreguntas].status !== 0){
            indicePreguntas = indicePreguntas + 1;
            pregunta();
        }
    }else if (indicePreguntas > 26){
        var preguntaVacia = noResp();
        if(preguntaVacia === true){
        indicePreguntas = 0;
        pregunta()
        }else{
            end();
        }
    }
}
// Funcion que valida si la respuesta es correcta o no, modifica el estatus de esta y modifica el color del circulo
function validacion(){
    var respuesta = document.getElementById("respuesta").value; 
    var respuestaminus = respuesta.toLowerCase();
    var indiceactual = indicePreguntas -1; 
        if (respuestaminus === questions[indiceactual].answer[aleatori] && respuestaminus !== 'pasapalabra' && respuestaminus !== 'end' ){
            sonido('mario-bros vida.mp3')
            questions[indiceactual].status = 1;
            document.getElementById(questions[indiceactual].letter).style.background = "#37c90a";
            pregunta();
        } else if (respuestaminus !== questions[indiceactual].answer[aleatori] && respuestaminus !== 'pasapalabra' && respuestaminus !== 'end' ){
            sonido('cartoon048.mp3')
            questions[indiceactual].status = 2;
            document.getElementById(questions[indiceactual].letter).style.background = "#fa2f0b";
            pregunta();
        } else if (respuestaminus !== questions[indiceactual].answer[aleatori] && respuestaminus === 'pasapalabra' && respuestaminus !== 'end'){
            pregunta();
        };
}
// Funcion que busca, una vez recorrido todo el objeto de questions, si hay alguna pregunta sin respoder
function noResp(){
    var a = false;
    questions.forEach(element => element.status === 0 ? a = true  :  null); 
    return a;
}
// Funcion que da paso al final del juego
function end(){
    sonido('kirby-victory.mp3');
    pasePantalla("juego","rank")
    var puntos = puntuacion();
    ranking(nombre,puntos);
    crearTabla();
}
// Funcion que, una vez acabado el rosco, puntua segun el estado de cada objeto
function puntuacion(){
    var a = 0;
    questions.forEach(element => element.status === 1 ? a = a + 2  :  a = a - 1); 
    return a;
}
// Funcion para pasar de una pantalla a otra 
function pasePantalla(hid,vis){
    document.getElementById(hid).style.visibility = "hidden";
    document.getElementById(vis).style.visibility = "visible";
}
// Funcion para crear la tabla de ranking
function crearTabla(){
    var body = document.getElementById("idtabla");
    var tabla = document.createElement("table");
    var tablaBody = document.createElement("tbody");
    for (var i=0; i < posiciones.length; i++){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(i+1 + " " + posiciones[i].player + " " + posiciones[i].score)
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        tablaBody.appendChild(hilera);
        tabla.appendChild(tablaBody);
        body.appendChild(tabla);
        tabla.setAttribute("width", "100%");   
    } 
}
// Ranking
function ranking(name, pnts){
    posiciones.push({player: name, score: pnts });
    posiciones.sort(function (a, b) {
   if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  });
  return posiciones;
}
// Al pulsar el boton juego nuevo se ará un reset de todo (menos del ranking) para poder jugar otra vez
function reset(){
    questions.forEach(element => element.status !== 0 ? element.status = 0  :  null); 
    colorAzul();
    eliminarTabla();
    textChange("jugador",'name');
    pasePantalla("rank","pre");  
}
// Ponemos todos lo circulos con letras de color azul
function colorAzul(){
    for (var i = 0; i < 27; i++){
        document.getElementById(questions[i].letter).style.background = "hsl(219, 79%, 55%)"; 
    }
}
// Funcion que elimina la tabla de ranking
function eliminarTabla(){
    document.getElementById("idtabla").innerHTML = "";
}
// Funcion de borrado para quando hacemos click en el input de text
function borrado(id){
    id.value = "";
}
// Funcion que modifica el valor de un element segun su id
function textChange(id,a){
    document.getElementById(id).value = a;
}
// Funcion de reseteo del timer
function rtime(){
    c = 220;
}
// Funcion temporizador
function tiempo(){    
    var myVar = setInterval(myTimer, 1000);
    function myTimer() {
        if (c != 0){
            document.getElementById("time").innerHTML = c;
            c = c - 1;
        } else if(c === 0){
            end();
            rtime();
        }
        return 0;
    }
    return 0;
}
// Funcion que reproduce un archivo
function sonido(a){
    var reproducir = new Audio();
    reproducir.src = a;
    reproducir.play();
}
function pulsar(id){
    id.style.backgroundColor = 'hsl(219, 84%, 24%)';
}
function soltar(id){
    id.style.backgroundColor = 'hsl(219, 79%, 55%)';
}
