//StateMachine es un patrón de código para ir de un estado a otrol
//utilizamos nuestra clase StateMachine para trasladarnos de un "State" a otro en nuestro flujo del programa
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

//creamos nuestra clase que nos servira para heredarla en nuestros estados (State) de trabajo.
//solo utilizaremos el método "OnEnter" que es donde queremos que nuestro programa ejecute instrucciones.
class State
{
    OnEnter()
    {

    }
    OnExit()
    {

    }
}

//definimos la función para empezar.
function start() 
{
    newStateMachine = new StateMachine();
    newStateMachine.GoToState(new state_Start()); // var newState_Start = new state_stat();
}


//creamos una clase para el rosco.
class Rosco
{
    constructor()
    {
        this.questions = [
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
        ]
    }
}

//creamos la clase ranking.
class ObjetoRanking
{
    constructor(player,okQ)
    {
        this.name = player;
        this.aciertos = okQ;
    }
    getString()
    {
        var texto = this.name + " : " + this.aciertos + " respuestas correctas. \n";
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
    var newRosco = new Rosco();
    //mi condicion while debe verificar todo el "status" y comprobar que !0.
    //aquellos elemtos del array que tengan status 0 deberian filtrarse en un nuevo array.
    //while debería checar el nuevo array.
    var newArray = newRosco.questions.filter((question)=>{return question.status === 0})
       while (newArray.length > 0)   //lenght será cada vez más pequeño con las preguntas "status: !0"
        {
            
            for (var i = 0; i<newRosco.questions.length; i++)
            {
                var pregunta = newRosco.questions[i];
                if (pregunta.status != 0)
                {
                    continue;
                }
                var respuesta = prompt(pregunta.question + "\n - Dame tu respuesta: \n - Pasapalabra.");

                if (respuesta === null)
                {
                    newStateMachine.GoToState(new state_GameOver())
                    return;
                }
                if (respuesta.toLowerCase() === "pasapalabra")
                {
                    continue;
                }
                if (respuesta.toLowerCase() === pregunta.answer)
                {
                    pregunta.status = 1;
                    aciertos += 1;
                    alert("Respuesta correcta !!")
                    continue;
                }
                if (respuesta.toLowerCase() !== pregunta.answer)
                {
                    pregunta.status = 2;
                    errores +=1;
                    alert("Respuesta incorrecta !!!")
                    continue;
                }
                
            }  
             newArray = newRosco.questions.filter((question)=>{return question.status === 0})  
        }
        alert("El numero de respuestas CORRECTAS ha sido: " + aciertos + "\n El numero de respuestas INCORRECTAS ha sido: " + errores);
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
                textoRanking += ranking[i].getString();
                
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


//invocar a la función start para empezar el juego.
start();









