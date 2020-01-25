//crear clase Rosco.
class Rosco
{
    constructor()
    {
        this.questions = 
        [
            { letter: "a", answer: ["abducir","arma", "abridor"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien","CON LA A. Instrumento o máquina que sirve para atacar o defenderse.","CON LA A. Instrumento usado para levantar las tapas de ciertas botellas."]},
            { letter: "b", answer: ["bingo","bañarse","barbaro"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso","CON LA B. Entrar en el agua para lavarse, para nadar o jugar.","CON LA B. Que es violento, cruel, salvaje."]},
            { letter: "c", answer: ["churumbel","cazadora","cantar"], status: 0, question: ["CON LA C. Niño, crío, bebé","CON LA C. Ropa de abrigo que cubre desde los hombros a la cintura.", "CON LA C. Emitir con la voz sonidos melodiosos."]},
            { letter: "d", answer: ["diarrea","debil","dialogo"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida","CON LA D. Que tiene poca fuerza, poco vigor o poca resistencia.","CON LA D. Conversación entre dos o más personas."]},
            { letter: "e", answer: ["ectoplasma","edificios","elegir"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación","CON LA E. Lugar que se usa para viviendas, oficinas, colegios, etc.","CON LA E. Escoger algo o a alguien."]},
            { letter: "f", answer: ["facil","futuro","fugar" ], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad","CON LA F. Tiempo que viene después.","CON LA F. Huir alguien de un lugar."]},
            { letter: "g", answer: ["galaxia","grua","granoso"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas","CON LA G. Máquina para levantar objetos pesados y moverlos de un lugar a otro.","CON LA G. En forma de granos."]},
            { letter: "h", answer: ["harakiri","hundir","higiene"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrenamiento","CON LA H. Ir abajo dentro del agua.","CON LA H. Limpieza del cuerpo y de los utensilios, viviendas, instalaciones, etc."]},
            { letter: "i", answer: ["iglesia","isla","interes"], status: 0, question: ["CON LA I. Templo cristiano","CON LA I. Territorio que está rodeado de agua por todas partes.","CON LA I. Esfuerzo y atención que se pone en algo."]},
            { letter: "j", answer: ["jabali","jugador","juego"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba","CON LA J. Persona que juega.","CON LA J. Objeto que sirve para que jueguen los niños."]},
            { letter: "k", answer: ["kamikaze","kilo","karate"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria","CON LA K. Medida para pesar (equivale a mil gramos).","CON LA K. Arte marcial de origen japonés que consiste en combatir con manos, puños, pies..."]},
            { letter: "l", answer: ["licantropo","lata","ligero"], status: 0, question: ["CON LA L. Hombre lobo","CON LA L. Envase de metal.","CON LA L. Que se mueve o actúa con rapidez, agilidad o facilidad."]},
            { letter: "m", answer: ["misantropo","manzana","mitades"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas","CON LA M. Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura.","CON LA M. Cada una de las dos partes iguales en que se divide algo."]},
            { letter: "n", answer: ["necedad","nunca","negro"], status: 0, question: ["CON LA N. Demostración de poca inteligencia","CON LA N. Ningún día o en ningún tiempo.","CON LA N. De color totalmente oscuro."]},
            { letter: "ñ", answer: ["señal","añorar","leña"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.","CONTIENE LA Ñ. Extrañar a alguien o a algo.","CONTIENE LA Ñ. Nombre atribuido a elementos que sirven para crear fuego."]},
            { letter: "o", answer: ["orco","oveja","oboe"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien","CON LA O. Animal doméstico que tiene el cuerpo cubierto de lana.","CON LA O. Instrumento musical de viento construido con madera."]},
            { letter: "p", answer: ["protoss","pasear","pajareria"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft","CON LA P. Andar por placer o para hacer ejercicio.","CON LA P. Tienda en la que se venden pájaros."]},
            { letter: "q", answer: ["queso","queso","quizas"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche","CON LA Q. Alimento sólido preparado con leche.","CON LA Q. Indica duda o la posibilidad de algo que se expresa."]},
            { letter: "r", answer: ["raton","resumen","risco"], status: 0, question: ["CON LA R. Roedor","CON LA R. Pocas palabras que  cuentan una historia más larga.","CON LA R. Terreno en pendiente."]},
            { letter: "s", answer: ["stackoverflow","sandalia","segundo"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático","CON LA S. Calzado que no tapa todo el pie.","CON LA S. Ir o estar detrás o después de alguien o algo."]},
            { letter: "t", answer: ["terminator","techo","talisman"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984","CON LA T. Parte de una habitación que está arriba.","CON LA T. Objeto, signo, etc., al que se atribuye virtudes sobrenaturales, poderes mágicos, etc."]},
            { letter: "u", answer: ["unamuno","urgente","unirse"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914","CON LA U. Que no puede esperar.","CON LA U. Consagrarse a alguien o algo."]},
            { letter: "v", answer: ["vikingos","veloz","violencia"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa","CON LA V. Que es muy rápido.","CON LA V. Tendencia o inclinación a hacer destrozos o armar escándalo."]},
            { letter: "w", answer: ["sandwich","lewis","wifi"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso","CONTIENE LA W. Corredor de velocidad apodado el hijo del viento.","CON LA W. Necesario para la conexion a internet."]},
            { letter: "x", answer: ["botox","extraño","saxofon"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética","CONTIENE LA X. Desconocido.","CONTIENE LA X. Instrumento de viento muy sexy."]},
            { letter: "y", answer: ["peyote","yegua","yate"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos","CON LA Y. Hembra del caballo.","CON LA Y. Barco de recreo, a motor o a vela, generalmente lujoso."]},
            { letter: "z", answer: ["zen","zarpar","zanjar"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional","CON LA Z. Empezar a navegar.","CON LA Z. Terminar un asunto, problema, discusión, etc."]},
        ]
    }
}

//creamos la clase para el Ranking.
class ObjetoRanking
{
    constructor(player,okQ)
    {
        this.name = player;
        this.aciertos = okQ;
    }
    getString()
    {
        var texto = this.name + " : " + this.aciertos + " respuestas correctas.";
        return texto;
    }
}


// Variables globales
var indiceLetraActual = 0;
var indiceOpcionLetraActual = 0;
var newRosco = null;
var aciertos = 0;
var errores = 0;
var circulos = [];
var contenidoName = "";
var intervalHandler = null; //variable de setInterval (temporizador)
var rankingResultado = [];


circulos = document.getElementsByTagName("li");
var boton1 = document.getElementById("nombre");
boton1.addEventListener("click",displayChange);

function displayChange() //para cambiar las pantallas
{
    var pantalla1 = document.getElementById("pantalla1");
    pantalla1.style.display = "none";
    var pantalla2 = document.getElementById("pantalla2");
    pantalla2.style.display = "block";
    variableName();
};

function variableName()  //para guardar la variable name
{
    var textoName = document.getElementById("name");
    contenidoName = textoName.value;
    textoName.value = "";
    var bienvenidaName = document.getElementById("username");
    bienvenidaName.textContent = contenidoName + "!!";
}
   

var boton2 = document.getElementById("nombre2");
boton2.addEventListener("click",displayChange2);

function displayChange2() //para cambiar las pantallas
{
    var bienvenidaName = document.getElementById("username");
    bienvenidaName.textContent = ""; //limpiamos variable name para próxima ronda
    var pantalla2 = document.getElementById("pantalla2");
    pantalla2.style.display = "none";
    //4 líneas de código para resetear estilo rosco a posición inicial.
    pantPregunta.style.background = "black";
    pantPregunta.style.color = "white";
    pantPregunta.style.fontSize = "20px";
    pantRespuesta.style.display = "block";
    var pantalla3 = document.getElementById("pantalla3");
    pantalla3.style.display = "block";

    empezar();    
};

function empezar()
{
    aciertos = 0;
    errores = 0;
    contadorMin = 5;
    contadorSeg = 0; //variables de marcadores a posición inicial

    newRosco = new Rosco(); //instanciamos Rosco.

    intervalHandler = setInterval(actualizarTemp, 1000); // Inicializamos temporizador

    indiceLetraActual = 0;
    indiceOpcionLetraActual = 0; //las dos variables de iteración

    preguntar();
}

function preguntar()
{ 
    //filtramos respuestas que no son pasapalabra=>han sido contestadas
    var newArr = newRosco.questions.filter((question)=> {return question.status !== 0});
    if (newArr.length === newRosco.questions.length)//si se cumple todas las preguntas habrán sido contestadas=> FIN DE ROSCO.
    {
        GameOver();
        desactivarTemp();
        return;
    }
    //índice de la siguiente pregunta que aun no hemos respondido  
    var letra = newRosco.questions[indiceLetraActual];
    //si nuestro i supera al array entramos para resetear.
    if (indiceLetraActual > newRosco.questions.length - 1)
    {
    indiceLetraActual = 0;
    indiceOpcionLetraActual = 0;
    letra = newRosco.questions[indiceLetraActual];
    }
    //buscar index aleatorio del array interno
    indiceOpcionLetraActual = Math.floor(Math.random() * 3 );        
    
    //los que sigan teniendo status 0 seguiran el bucle
    if (newRosco.questions[indiceLetraActual].status === 0)
    {
    //pregunta será seleccionada de forma aleatoria
    var pregunta = letra.question[indiceOpcionLetraActual]; 
    var pantPregunta = document.getElementById("pregunta");
    pantPregunta.textContent = pregunta;
    document.getElementById("respuesta").focus();//focus nos pone el cursor en el input de forma automática. "autofocus" es para cuando una página se carga.
    }
    else
    {
        indiceLetraActual++;
        preguntar();
    }
}

function respuestaIntroducida(respuesta)
{
    var letra = newRosco.questions[indiceLetraActual];
    if (respuesta.toLowerCase() === "pasapalabra")
    {
        newRosco.questions[indiceLetraActual].status = 0; 
    }
    else if (respuesta.toLowerCase() === letra.answer[indiceOpcionLetraActual])
    {
        newRosco.questions[indiceLetraActual].status = 1;
        aciertos += 1;
        
        document.getElementsByTagName("li")[indiceLetraActual].style.background = "green"; //cambiar estilo círculos
        
    }
    else 
    {
        newRosco.questions[indiceLetraActual].status = 2;
        errores +=1;

        //var circuloColor = document.getElementsByTagName("ul")[0];  no es necesario ya que solo tenemos una lista.
        document.getElementsByTagName("li")[indiceLetraActual].style.background = "red";//cambiar estilo circulos
    }
    indiceLetraActual++;
    preguntar();
}

function GameOver()
{
    cambioFinal();//cambio de estilo de pantalla y font-size final
    var gameOver = "Game Over!!!"
    var pantPregunta = document.getElementById("pregunta");
    pantPregunta.textContent = gameOver;
    setTimeout(displayChange3, 3000);//cambio de pantalla a ranking en 3 seg.
}

function cambioFinal()
{
    //cambiar el estilo de la pantalla de "game over"
    pantPregunta.style.background = "red";
    pantPregunta.style.color = "yellow";
    pantPregunta.style.fontSize = "60px";
    pantRespuesta.style.display = "none";
}

function actualizarDate()//reloj de hora actual y fecha.
{
    var fecha = new Date(); //creamos el objeto.
    //elementos js.
    var diaSemana = fecha.getDay(); //esto nos da un número => array.
    var dia = fecha.getDate();
    var mes = fecha.getMonth(); //esto nos da un número => array.
    var year = fecha.getFullYear();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    //elemtos del DOM
    var pDiaSemana = document.getElementById("diaS");
    var pDiaN = document.getElementById("diaN");
    var pMes = document.getElementById("mes");
    var pYear = document.getElementById("year");
    var pHoras = document.getElementById("horas");
    var pMinutos = document.getElementById("minutos");
    var pSegundos = document.getElementById("segundos");
    //hago la igualdad (elemetos del DOM les añado el código js)
    diaSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    pDiaSemana.textContent = diaSemana[2];
    pDiaN.textContent = dia;
    mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    pMes.textContent = mes[11];
    pYear.textContent = year;

    //añado "cero" a las unidades < 10
    if (horas <10) { horas = "0" + horas};
    if (minutos < 10) {minutos = "0" + minutos};
    if (segundos < 10) {segundos = "0" + segundos};
    pHoras.textContent = horas;
    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;    
}

actualizarDate();
setInterval(actualizarDate, 1000);


//temporizador
//variables del DOM. globales.
var minutero = document.getElementById("crM");
var segundero = document.getElementById("crS");
var contadorMin = 5;
var contadorSeg = 0;

var actualizarTemp = function()
{
    if (contadorSeg == 0 && contadorMin == 0)//si el temporizador llega a "cero"
    {
        desactivarTemp();
        segundero.textContent = "0" + "0";
        return;
    }
    
    
    if (contadorSeg === 0)//cuenta regresiva
    {
        contadorSeg = 59;
        contadorMin --;
        if (contadorMin <10)
        {
            contadorMin = "0"+ contadorMin;
        }
        minutero.textContent = contadorMin;
        if(contadorMin === 0)
        {
            contadorMin = 0;
        }
    }
    if (contadorSeg < 10)
    {
        contadorSeg = "0" + contadorSeg;
    }
    segundero.textContent = contadorSeg;
    contadorSeg --;
}

function desactivarTemp()//para parar temporizador
{
    clearInterval(intervalHandler);
}

var pantPregunta = document.getElementById("pregunta");
var pantRespuesta = document.getElementById("respuesta");
pantRespuesta.addEventListener("keypress",presionar);

//presionar() será la función que dará a "enter" el poder de ejecutar el evento;
function presionar(e)
{
    if (e.which === 13) //13 corresponde a key "enter"
    {
        mandarRespuesta(); //función que despues de enter ejecutará el código:
    }
}
function mandarRespuesta()
{
    var contenidoRespuesta = pantRespuesta.value; //atributo "value" por ser un input.
    respuestaIntroducida(contenidoRespuesta);
    pantRespuesta.value = "";//limpiamos el contenido
}




function displayChange3()
{
    newRosco = null; //limpiar rosco (no sería necesario porque con newRosco se sobreescribe pero no sería tecnicamente correcto)
    for (var i = 0; i<circulos.length; i++) //iterar cada circulo para darle estilo (blanco) inicial
    {
        if (circulos[i].className == "start-timer")//temporizador forma parte de los "circulos"
        {
            continue;//no le cambiamos el estilo
        }
        circulos[i].style.background = "white";//cambiamos estilo circulos
    }
    
    var pantalla3 = document.getElementById("pantalla3");
    pantalla3.style.display = "none";
    var pantalla4 = document.getElementById("pantalla4");
    pantalla4.style.display = "block";
    ranking();
}

function ranking()
{
    var newRanking = new ObjetoRanking(contenidoName,aciertos); //instanciamos objero ranking
    rankingResultado.push(newRanking);
        rankingResultado.sort((a,b)=>{return b.aciertos - a.aciertos});
        var textoRanking = "";

            for (var i = 0; i <rankingResultado.length; i++)
            {
                textoRanking += rankingResultado[i].getString() + "<br>";//HTML no reconoce "\n"
            }
    
    var elementoPuntuacion = document.getElementById("puntuacion");
    elementoPuntuacion.innerHTML = textoRanking ; //innerHTML no imprime <br>
}

var botonVolver = document.getElementById("boton-volver");
var botonVolver2 = document.getElementById("boton-volver2");
botonVolver.addEventListener("click",volverGame);
botonVolver2.addEventListener("click",out);

function volverGame()//volvemos al inicio
{
    var pantalla4 = document.getElementById("pantalla4");
    pantalla4.style.display = "none";
    var pantalla1 = document.getElementById("pantalla1");
    pantalla1.style.display = "block";
}

function out()
{
    return;
}

