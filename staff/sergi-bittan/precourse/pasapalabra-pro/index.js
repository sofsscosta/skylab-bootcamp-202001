//creamos nuestra clase StateMachine. StateMachine es un patrón de código para trasladarmos de un estado a 
//otro en nuestro flujo del programa.
class StateMachine
{
    constructor()
    {
        this.currentState = null;
        this.nextState = null;

        var _this = this; // Capturar esta variable para poderla usar dentro de la funcion anonima

        setInterval(function () 
        {
            if(_this.nextState != null) // Tenemos que hacer una transicion a un nuevo estado
            {
                if (_this.currentState != null)
                {
                    if(_this.currentState.OnExit != undefined)
                    {
                        _this.currentState.OnExit();
                    }
                }
                _this.currentState = _this.nextState;
                _this.nextState = null;

                if(_this.currentState.OnEnter != undefined)
                {
                    _this.currentState.OnEnter();    
                }
                
            }

        }, 16) // run this every 60 times per second

    }

    GoToState(newState)
    {
        if(this.nextState != null)
        {
            console.error("La state machine esta intentando hacer varias transiciones en el mismo frame");
        }

        this.nextState = newState;        
    }
}

//creamos la clase State.Esta clase será lo que heredaran cada uno de nuestros estados del programa.
class State
{
    OnEnter()
    {

    }
    OnExit()
    {

    }
}


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
            { letter: "x", answer: ["botox","extraño","xaxofon"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética","CONTIENE LA X. Desconocido.","CONTIENE LA X. Instrumento de viento muy sexy."]},
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


//variables globales.
var pedirNombre = null;
var newStateMachine = null;
var ranking = [];
var aciertos = 0;
var errores = 0;


//creamos las herencias de cada estado por el que pasará nuestra StateMachine
class state_Start extends State
{
    OnEnter()
    {
        newStateMachine.GoToState(new state_PedirNombre());
    }
    // OnExit()
    // {

    // }
}

class state_PedirNombre extends State
{
    OnEnter()
    {
        pedirNombre = prompt("Por favor, introduzca su nombre.");
        newStateMachine.GoToState(new state_Saludar());
    }
}

class state_Saludar extends State
{
    OnEnter()
    {
        alert("Bienvenido " + pedirNombre + " !");
        newStateMachine.GoToState(new state_ComienzoJuego());
    }
}

class state_ComienzoJuego extends State
{
    OnEnter()
    {
        aciertos = 0;
        errores = 0;

        alert("Empecemos con el ROSCO " + pedirNombre + "\nMuchisima suerte!!");
        newStateMachine.GoToState(new state_Preguntar());
    }
}


class state_Preguntar extends State
{
    OnEnter()
    {
    var newRosco = new Rosco(); //instanciamos Rosco.

    //mi condicion debe verificar todo el array.status y comprobar que !0.
    //aquellos elemtos del array que tengan status 0 deberian filtrarse en un nuevo array.
    //while debería checar el nuevo array.Filtrado.

    var newArray = newRosco.questions.filter((question)=>{return question.status === 0})
       while (newArray.length > 0)
        {
            
            for (var i = 0; i<newRosco.questions.length; i++)
            {
                var letra = newRosco.questions[i];
                if (letra.status != 0)
                {
                    continue;
                }
                //buscar index aleatorio del array interno
                var index = Math.floor(Math.random() * 3 );
                //pregunta será seleccionada de forma aleatoria
                var pregunta = prompt(letra.question[index] + "\n - Dame tu respuesta: \n - Pasapalabra.");
                if (pregunta === null)
                {
                    newStateMachine.GoToState(new state_GameOver())
                    return;
                }
                if (pregunta.toLowerCase() === "pasapalabra")
                {
                    continue;
                }
                //index de answer ha de ser el mismo que el seleccionado en la pregunta.
                if (pregunta.toLowerCase() === letra.answer[index])
                {
                    letra.status = 1;
                    aciertos += 1;
                    alert("Respuesta correcta !!")
                   
                 }
                if (pregunta.toLowerCase() !== letra.answer[index])
                {
                    letra.status = 2;
                    errores +=1;
                    alert("Respuesta incorrecta !!!")
                    
                    
                }
                if (pregunta.toLowerCase() === null)
                {
                    newStateMachine.GoToState(new state_GameOver());
                    return;
                    
                }
                var continuar = prompt("Desear continuar?")
                    if (continuar === "si" || continuar === "")
                    {
                        continue;
                    }
                    else
                    {
                        alert("El numero de respuestas CORRECTAS ha sido: " + aciertos + "\nEl numero de respuestas INCORRECTAS ha sido: " + errores);
                        newStateMachine.GoToState(new state_GameOver());
                        return;
                        
                    }
               
            }  
             newArray = newRosco.questions.filter((question)=>{return question.status === 0})  
        }
        alert("El numero de respuestas CORRECTAS ha sido: " + aciertos + "\nEl numero de respuestas INCORRECTAS ha sido: " + errores);
        newStateMachine.GoToState(new state_FinalPartida());
    }

}


class state_FinalPartida extends State
{
    OnEnter()
    {
        var newRanking = new ObjetoRanking(pedirNombre, aciertos);
        ranking.push(newRanking);
        ranking.sort((a,b)=>{return b.aciertos - a.aciertos});
        var textoRanking = "";

            for (var i = 0; i <ranking.length; i++)
            {
                textoRanking += ranking[i].getString() + "\n";
            }
            alert("RANKING: \n" + textoRanking);

        var again = prompt("Desea jugar otra partida?")
        if (again === "si" || again == "")
        {
            
            newStateMachine.GoToState(new state_PedirNombre());
        }
        else
        {
            newStateMachine.GoToState(new state_GameOver())
        }
    }
}


class state_GameOver extends State
{
    OnEnter()
    {
        alert("GAME OVER !!!");
        return;
    }
}



//definimos la funcion para empezar
function start() 
{
    newStateMachine = new StateMachine();
    newStateMachine.GoToState(new state_Start()); // var newState_Start = new state_stat();
}


//invocamos para empezar el juego.
start();






