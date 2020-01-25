var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    
];

//contadores y variables globales
var indicePregunta = 0;
var aciertos = 0;
var errores = 0;
var finalizar = false;
var res;
var totalTime = 180;
var nombre;
var player = document.getElementById('player');
//elementos li donde se alojan las letras
var letras = document.getElementsByTagName('li');
//
//funcion cuentra atras
function cuentaAtras(){
    document.getElementById('time').innerHTML = totalTime;
    if(totalTime==0){
        finDelJuego();
    }else{
        totalTime-=1;
        setTimeout("cuentaAtras()",1000);
        comprobarTiempo();
    }    
}
//function para pintar de rojo cuando el tiempo a partir de 10 segundos
function comprobarTiempo(){
    if(totalTime < 10){
        document.getElementById('time').style.color = 'red';
    }
}

//función que mostrará la pregunta determinada a partir de la segunda
//con la condición de que no esté contestada
function mostrarPregunta(){
    indicePregunta++;
    
    //resetear el indice si ha llegado al numero total de preguntas
    reiniciarIndice();
    //recorrer de uno en uno mientras el estado sea diferente de 0
    //que significa que esta contestada
    while(questions[indicePregunta].status !== 0){
        indicePregunta++;
        //reinicio para poder repetir la acción.
        reiniciarIndice();
    }
    //pintar la pregunta
    document.getElementById('question').innerHTML = questions[indicePregunta].question;
    //foco en la letra siguiente
    letras[indicePregunta].classList.add('letra-foco');
}
//funcion para resetar el valor del indice
function reiniciarIndice(){
    if(indicePregunta >= 27){
        indicePregunta = 0;
    }
}

function limpiarRespuesta(){
    document.getElementById('respuesta').value = '';
    document.getElementById('respuesta').focus();
}

//función que maneja la respuesta del usuario
function responder(){
    res = document.getElementById('respuesta').value;
    switch(res){
        case questions[indicePregunta].answer:
            questions[indicePregunta].status = 1;
            aciertos++;
            limpiarRespuesta();
            document.getElementById('n-aciertos').innerHTML = aciertos;
            //añadir estilo a letra acertada
            letras[indicePregunta].classList.add('letra-acierto');
            //eliminar el foco de la anterior letra
            letras[indicePregunta].classList.remove('letra-foco');
            break;
        case 'pasapalabra':
            pasapalabra();
            break;
        default:
            questions[indicePregunta].status = 1;
            errores++;
            limpiarRespuesta();
            document.getElementById('n-errores').innerHTML = errores;
            //añadir estilo a letra fallada
            letras[indicePregunta].classList.add('letra-error');
            letras[indicePregunta].classList.remove('letra-foco');
            break;
    }
    if(!comprobar()){
        mostrarPregunta();
    }else{
        finDelJuego();
    }
}

//funcion para pasar palabra manteniendo estado sin responder
function pasapalabra(){
    letras[indicePregunta].classList.remove('letra-foco');
    mostrarPregunta();
}
//funcion para comprobar el estado de la pregunta
function comprobar(){
    var i;
    for(i=0;i<questions.length;i++){
        if(questions[i].status === 0){
            return false;
        }
    }
    return true;
}

//evento al hacer click en enviar la respuesta
var submit = document.getElementById('submit');
submit.addEventListener('click',function(e){
    e.preventDefault();
    responder();
});
//evento pasapalabra
var pasar = document.getElementById('pasapalabra');
pasar.addEventListener('click',function(){
    pasapalabra();
});
//funcion para iniciar la partida;
function iniciar(){
    document.getElementById('pregunta').innerHTML = questions[0].question;
}

//iniciar partida
var init = document.getElementById('iniciar');
init.addEventListener('click',function(){
    document.getElementById('instrucciones').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
});
//login saludo
var loginForm = document.getElementById('login');
loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    nombre = document.getElementById('login-nombre').value;
    alert('¡Suerte con el juego '+ nombre + '!');
    document.querySelector('.login-form').style.display = 'none';
    document.getElementById('player').style.display = 'block';
    player.innerHTML = 'Jugador: '+ nombre;
    document.getElementById('contenido-juego').style.display = 'block';
    document.getElementById('respuesta').focus();
    cuentaAtras();
    iniciar();
    
})
//

//funcion que se ejecuta cuando todas las pregunta se han respondido
function finDelJuego(){
    console.log('final de la partida');
    document.getElementById('contenido-juego').style.display = 'none';
    document.getElementById('scores').style.display = 'flex';
}

var volverJugar = document.getElementById('volverJugar');
volverJugar.addEventListener('click',function(){
    location.reload();
});

