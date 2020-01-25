var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C.  Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la funciÃ³n del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia lÃ­quida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmÃ¡tica. Los cazafantasmas medÃ­an su radiaciÃ³n"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partÃ­culas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonÃ©s por desentraÃ±amiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la pelÃ­cula 'El Rey LeÃ³n', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acciÃ³n temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversiÃ³n hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. DemostraciÃ³n de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ‘. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantÃ¡stico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnolÃ³gicamente avanzada que se caracteriza por sus grandes poderes psÃ­onicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduraciÃ³n de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informÃ¡tico"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. PelÃ­cula del director James Cameron que consolidÃ³ a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filÃ³sofo espaÃ±ol de la generaciÃ³n del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nÃ³rdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamÃ³n y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujÃ­a estÃ©tica"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. PequeÃ±o cÃ¡ctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indÃ­genas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabidurÃ­a mÃ¡s allÃ¡ del discurso racional"},
]

var error=0;
var acierto = 0;
var name;  
jugadores = [];

function Result (name, numeroerrores, numeroaciertos) {
    this.name = name,
    this.numeroerrores = numeroerrores,
    this.numeroaciertos = numeroaciertos,
    function equalizer(){
         console.log(`el jugador ${this.name} ha hecho ${numeroerrores} errores y ${numeroaciertos} aciertos`)
     }
}
agregar =() => {
    jugadores.push({name: name, numeroerrores: error, numeroaciertos:acierto})
    console.log(jugadores);
    
}

verBaseDatos =() =>{
    jugadores.sort(function(a,b) {
        return (b.numeroaciertos - a.numeroaciertos)
        });
        
}


ranking =() => {
    var tablatotal = prompt("quiere ver el ranking? ")
    if(tablatotal === "si"){
        verBaseDatos()
    }else {
        console.log("adios");
    }
    setTimeout(() => { //aplicamos un delay para poder visualizar por pantalla el resultado 
        nuevapartida()
    }, 4000);
}

nombre = () => {
    var nom = prompt("indique su nombre para empezar a jugar: ")
    return nom
}

var numeroErrores = () => {   
    error++ 
    console.log("errores: " + error)
    return error
}

var numeroaciertos = () => {
    acierto ++
    console.log("aciertos: " + acierto);
    return acierto
}


enunciado = () => {   //primera ronda de preguntes 
    name = nombre();
    questions.forEach(element => {        
        console.log(element.question);
        var questOnly = prompt("la respuesta es: ")
        questOnlySin = questOnly.toLowerCase()  //PRO : sense distincions 
        if(questOnly!="pasapalabra"){     // canviem el status a 1 per despres tornar a preguntar
            if (questOnlySin === element.answer){
                console.log("acierto!!!!!!!!")
                numeroaciertos() 
            }else {
                console.log("error!!!!!!")
                numeroErrores();
            }
        }else element.status = 1;                    
    }); 
        //segona ronda de preguntes
    var lastCopy = questions.filter(element => element.status > 0) //fem un filter per filtrar els objectes amb status 1 i tornem a preguntar les preguntes pendents
    lastCopy.forEach(element2 => {
        console.log(element2.question);
        var lastQuestion = prompt("la respuesta es: ")
        lastQuestionSin = lastQuestion.toLocaleLowerCase() //PRO 
        if(lastQuestion === element2.answer){

            (console.log("acierto!!!!!!!!"),numeroaciertos()) 
        }
        else {

            (console.log("error!!!!!!"),numeroErrores());
        }
    });
                
}
nuevapartida  = () => {
    var nueva = confirm("¿quiere hacer una partida nueva?")
    if (nueva){
        error = 0;
        acierto =0;
        enunciado()
        agregar()
        ranking()
    }else {
        console.log("adios") 
    }  
} 

enunciado();
var resultado = new Result (name, error, acierto)
agregar();
ranking();

 