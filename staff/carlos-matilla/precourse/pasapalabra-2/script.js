/* Variables */
var questions = [
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. <br/><br/>Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional."},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. <br/><br/>Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos."},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. <br/><br/>Toxina bacteriana utilizada en cirujía estética."},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. <br/><br/>Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso."},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. <br/><br/>Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa."},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. <br/><br/>Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914."},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. <br/><br/>Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984."},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. <br/><br/>Comunidad salvadora de todo desarrollador informático."},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. <br/><br/>Roedor"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. <br/><br/>Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. <br/><br/>Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. <br/><br/>Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien."},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. <br/><br/>Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. <br/><br/>Demostración de poca inteligencia."},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. <br/><br/>Persona que huye del trato con otras personas o siente gran aversión hacia ellas."},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. <br/><br/>Hombre lobo."},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. <br/><br/>Persona que se juega la vida realizando una acción temeraria."},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. <br/><br/>Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba."},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. <br/><br/>Templo cristiano."},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. <br/><br/>Suicidio ritual japonés por desentrañamiento."},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. <br/><br/>Conjunto enorme de estrellas, polvo interestelar, gases y partículas."},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. <br/><br/>Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. <br/><br/>Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación."},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. <br/><br/>Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida."},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. <br/><br/>Niño, crío, bebé."},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. <br/><br/>Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso."},
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. <br/><br/>Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien."}],
    nombre = '',
    valor= '',
    respuestaCorrecta = '',
    posicion = 0,
    contador = 0,
    aciertos = 0,
    fallos = 0,
    tiempo = 180,
    temporizador,
    check = false,
    key = 0,
    total =0,
    rankingObj = [],
    rankingArray = [],
    noventa = 103.33333;
    menosnoventa = -103.33333;
/* Fin variables */


/* Asignar id de las letras con variable questions*/

for(var i = 0; i < questions.length; i++){
    questions[i].letter = document.getElementById(questions[i].letter);
}


/* Colocar la esferas mediante transform en posicion circular */

for(var i = 26; i < questions.length; i--){
    noventa -= 13.33333;
    menosnoventa += 13.33333;
    questions[i].letter.style.transform = `rotate(${menosnoventa}deg) translate(19rem) rotate(${noventa}deg)`;
}


/* Funcion para pasar a las preguntas */

function inicio(){
    nombre = document.getElementById('cajaNombre').value;
    if(nombre === ''){
        document.getElementById('cajaNombre').placeholder = "Nombre no valido"
        inicio();
    }
    document.getElementById('inicio').style.display="none";
    document.getElementById('btn2').style.display="none";
    document.getElementById('contenido').style.height="350px";
    document.getElementById('contenido').style.width="350px";
    document.getElementById('preguntas').style.display="inline";
    pregunta();
    cuentaAtras();
}


/* Limpia la caja texto de nombre */

function limpiar(){
    document.getElementById('cajaNombre').placeholder = "";
    document.getElementById('cajaNombre').value = "";
}


/* Cuenta atras */

function cuentaAtras() {
    document.getElementById('cronometro').innerHTML = tiempo;
    if(tiempo==0){
        document.getElementById('preguntas').style.display="none";
        document.getElementById('contenido').style.height="500px";
        document.getElementById('contenido').style.width="500px";
        document.getElementById("fin").style.display= "inline";
        document.getElementById("finjuego").innerHTML= "Fin del Tiempo";
        document.getElementById("acertadas").innerHTML= `<i class="fas fa-check" style="color: #89BB07; font-size: 35px;"></i> ${aciertos}`;
        document.getElementById("falladas").innerHTML= `<i class="far fa-times-circle" style="color: #D90202; font-size: 35px;"></i> ${fallos}`;
    }else{
        tiempo-=1;
        temporizador = setTimeout("cuentaAtras()",1000);
    }
}


/* Chequea si la letra esta activa para aplicar estilos */

function estilos(){
    
    if(check){
        questions[posicion].letter.style.width="75px";
        questions[posicion].letter.style.height="75px";
        questions[posicion].letter.style.fontSize="32px";
        questions[posicion].letter.style.color="white";
       // questions[posicion].letter.style.border="1px solid #848484"
       // questions[posicion].letter.style.boxShadow="0 0 20px #848484";
       
    } else if(!check){
        questions[posicion].letter.style.width="55px";
        questions[posicion].letter.style.height="55px";
        questions[posicion].letter.style.fontSize="18px";
        questions[posicion].letter.style.color="whitesmoke";
       // questions[posicion].letter.style.border="none";
        //questions[posicion].letter.style.boxShadow="none";
    }
}


/* Activar la pulsacion de Intro para enviar respuesta */

function presIntro() {
    key = window.event.keyCode;
    if (key === 13) {
        tenerRespuesta();
    }
}


/* Comprueba si las respuestas estan todas respondidas,
cambia el estado de la pregunta si hemos completado una ronda, 
chequea si la pregunta esta activa para aplicar estilos [estilos();],
imprime la pregunta y los aciertos en pantalla
y guarda en una variable la respuesta correcta */

function pregunta(){
    total=aciertos+fallos;
    if(total===27){
        document.getElementById('preguntas').style.display="none";
        document.getElementById('contenido').style.height="500px";
        document.getElementById('contenido').style.width="500px";
        document.getElementById("fin").style.display= "inline";
        document.getElementById("finjuego").innerHTML= "Fin del Juego";
        document.getElementById("acertadas").innerHTML= `<i class="fas fa-check" style="color: #89BB07; font-size: 35px;"></i> ${aciertos}`;
        document.getElementById("falladas").innerHTML= `<i class="far fa-times-circle" style="color: #D90202; font-size: 35px;"></i> ${fallos}`;
        clearTimeout(temporizador);
    }
    
    if(contador > 26){
        for(var i = 0; i<questions.length;i++){
            if(questions[i].status === 3){
                questions[i].status = 0;
            }
        }
        contador = aciertos + fallos;
        pregunta();
    } 

    for(var i = 0; i < questions.length; i++){
        check = false;
        estilos();
        if(questions[i].status === 0){
            document.getElementById("p-enunciado").innerHTML = questions[i].question;
            document.getElementById("acierto").innerHTML = aciertos;
            respuestaCorrecta = questions[i].answer;
            posicion = i;
        } else if(questions[i].status === 3){
            check = true;
            continue;
        } 
        check = true;
    } 
    estilos();
}


/* Guarda el valor de la respuesta introducida por pantalla,
limpia el campo y pasa el valor introducido a la funcion chequearRespuesta() */

function tenerRespuesta(){
    valor = document.getElementById('respuesta').value.toLowerCase();
    document.getElementById('respuesta').value = '';
    chequearRespuesta(valor);
}


/* Chequea si la respuesta es correcta, incorrecta o pasapalabra */

function chequearRespuesta(valor){
    if(valor === respuestaCorrecta){
        aciertos++
        contador++;
        questions[posicion].status = 1;
        questions[posicion].letter.style.backgroundColor="#89BB07";
        document.getElementById("acierto").innerHTML = aciertos;
        pregunta();
    } else if (valor === 'p'){
        contador++;
        questions[posicion].status = 3;
        questions[posicion].letter.style.backgroundColor="rgb(0, 174, 255)";
        pregunta();
    } else {
        fallos++
        contador++;
        questions[posicion].status = 2;
        questions[posicion].letter.style.backgroundColor="#D90202";
        pregunta();
    }
}


/* Funcion reiniciar */

function reiniciar(){
    nombre='',
    valor= '',
    respuestaCorrecta = '',
    posicion = 0,
    contador = 0,
    aciertos = 0,
    fallos = 0,
    tiempo = 180,
    check = false,
    key = 0,
    total = 0;
    for(var i = 0; i<questions.length;i++){
        if(questions[i].status !== 0){
            questions[i].status = 0;
            questions[i].letter.style.backgroundColor="rgb(0, 174, 255)";
            questions[i].letter.style.width="55px";
            questions[i].letter.style.height="55px";
            questions[i].letter.style.fontSize="18px";
            questions[i].letter.style.border="none";
            questions[i].letter.style.boxShadow="none";
        }
    }
    document.getElementById('cajaNombre').placeholder = "Introduzca su nombre";
    document.getElementById("acierto").innerHTML = aciertos;
    document.getElementById('cronometro').innerHTML = tiempo;
    document.getElementById('inicio').style.display="inline";
    document.getElementById('contenido').style.height="500px";
    document.getElementById('contenido').style.width="500px";
    document.getElementById('preguntas').style.display="none";
    document.getElementById("p-enunciado").style.fontSize="20px";
    document.getElementById("respuesta").style.display="inline-flex";
    document.getElementById("btn1").style.display="inline-flex";
    document.getElementById("btn2").style.display="none";
    document.getElementById("fin").style.display="none";
    document.getElementById('ranking').style.display="none";
    document.getElementById('cajaNombre').value = "Introduzca su nombre";
    clearTimeout(temporizador);
}


/* Funcion ranking */

function ranking(){
    rankingObj.push({nombre: nombre, puntos: aciertos})
    rankingObj.sort(function(v1,v2){return (v2.puntos - v1.puntos);})
    rankingArray = [];
    for(var i = 0; i < rankingObj.length; i++){
        rankingArray.push((i + 1) + ' ' + '\272'+ ' ' + rankingObj[i].nombre + ': ' + rankingObj[i].puntos + ' puntos')
    }
    document.getElementById("rank").innerHTML = rankingArray.join('<br/>');
    document.getElementById('fin').style.display="none";
    document.getElementById('contenido').style.height="500px";
    document.getElementById('contenido').style.width="500px";
    document.getElementById("ranking").style.display= "inline";
}

