var realQuestions = [
  { letter: "a", answer: "arbol", status: 0, question: "Inicia con A. Ser vivo vegetal que produce frutas y puede llegar a ser muy alto"},
  { letter: "b", answer: "barco", status: 0, question: "Inicia con B. Embarcación que se utiliza para navegar por el oceano"},
  { letter: "c", answer: "camion", status: 0, question: "Inicia con C. Vehiculo grande para transportar grandes artefacos"},
  { letter: "d", answer: "diarrea", status: 0, question: "Inicia con D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
  { letter: "e", answer: "ectoplasma", status: 0, question: "Inicia con E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
  { letter: "f", answer: "facil", status: 0, question: "Inicia con F. Que no requiere gran esfuerzo, capacidad o dificultad"},
  { letter: "g", answer: "galaxia", status: 0, question: "Inicia con G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
  { letter: "h", answer: "harakiri", status: 0, question: "Inicia con H. Suicidio ritual japonés por desentrañamiento"},
  { letter: "i", answer: "iglesia", status: 0, question: "Inicia con I. Templo cristiano"},
  { letter: "j", answer: "jabali", status: 0, question: "Inicia con J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
  { letter: "k", answer: "kamikaze", status: 0, question: "Inicia con K. Persona que se juega la vida realizando una acción temeraria"},
  { letter: "l", answer: "licantropo", status: 0, question: "Inicia con L. Hombre lobo"},
  { letter: "m", answer: "misantropo", status: 0, question: "Inicia con M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
  { letter: "n", answer: "necedad", status: 0, question: "Inicia con N. Demostración de poca inteligencia"},
  { letter: "ñ", answer: "señal", status: 0, question: "Contiene la Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
  { letter: "o", answer: "orco", status: 0, question: "Inicia con O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
  { letter: "p", answer: "protoss", status: 0, question: "Inicia con P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
  { letter: "q", answer: "queso", status: 0, question: "Inicia con Q. Producto obtenido por la maduración de la cuajada de la leche"},
  { letter: "r", answer: "raton", status: 0, question: "Inicia con R. Roedor"},
  { letter: "s", answer: "stackoverflow", status: 0, question: "Inicia con S. Comunidad salvadora de todo desarrollador informático"},
  { letter: "t", answer: "terminator", status: 0, question: "Inicia con T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
  { letter: "u", answer: "unamuno", status: 0, question: "Inicia con U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
  { letter: "v", answer: "vikingos", status: 0, question: "Inicia con V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
  { letter: "w", answer: "sandwich", status: 0, question: "Contiene la W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
  { letter: "x", answer: "botox", status: 0, question: "Contiene la X. Toxina bacteriana utilizada en cirujía estética"},
  { letter: "y", answer: "peyote", status: 0, question: "Contiene la Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
  { letter: "z", answer: "zen", status: 0, question: "Inicia con Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
];

function drawCircles() {
  var circles = 27
  var div = 360 / circles;
  var radius = 180;
  var alphabet = 'ijklmnñopqrstuvwxyzabcdefgh'.split('');

  var parentdiv = document.getElementById('parentdiv');
  var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);
  var offsetToChildCenter = 20;
  var totalOffset = offsetToParentCenter - offsetToChildCenter;

  for (var i = 1; i <= circles; ++i) {
    var childdiv = document.createElement('div');
    childdiv.className = 'circle';
    childdiv.classList.add(alphabet[i-1])
    childdiv.style.position = 'absolute';
    childdiv.innerHTML = alphabet[i-1]
    var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
    var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
    childdiv.style.top = (y + totalOffset).toString() + "px";
    childdiv.style.left = (x + totalOffset).toString() + "px";
    parentdiv.appendChild(childdiv);
  }
}

drawCircles()

var questions = realQuestions

// Counters
var indexQuestion;
var counterRights = 0
var counterWrongs = 0

// Buttons
var buttonStart = document.getElementById('start')
var buttonEnd = document.getElementById('end')
var buttonOk = document.querySelector('.ok')
var buttonPasapalabra = document.querySelector('.pasapalabra')
var buttonPrincipal = document.getElementById('principal')

// Containers Divs
var containerQuestions = document.querySelector('.container-questions')
var containerStartgame = document.querySelector('.container-startgame')
var containerEndgame = document.querySelector('.container-endgame')
var containerTimer = document.querySelector(".timer")

// Clue if Start or Contains the letter
var clueSpan = document.getElementById('clue')

// Paragraph Question
var question = document.querySelector('.question')

// Span current letter
var currentLetter = document.querySelector('.current-letter')

// Input answer
var currentAnswer = document.getElementById('currentAnswer')

// Spans of results
var rights = document.getElementById('rights')
var wrongs = document.getElementById('wrongs')
var rightsResult = document.getElementById('rightsResult')
var wrongsResult = document.getElementById('wrongsResult')


buttonStart.addEventListener('click', startEndGame)
buttonEnd.addEventListener('click', startEndGame)
buttonOk.addEventListener('click', nextQuestion)
buttonPasapalabra.addEventListener('click', nextQuestion)

buttonPrincipal.addEventListener('click', restart)

function timer() {
  containerTimer.innerHTML = seconds
  seconds -= 1
  if (seconds === 0) {
    startEndGame()
  }
}

var myTimer;

function startEndGame() {
  seconds = 300
  containerTimer.innerHTML = seconds
  clearInterval(myTimer)

  if (typeof containerTimer.classList[1] === "undefined") {
    myTimer = setInterval(timer, 1000);
  }

  containerTimer.classList.toggle('visible')

  indexQuestion = -1
  counterRights = 0
  counterWrongs = 0

  questions = realQuestions
  questions = questions.map(q => {
    q.status = 0
    return q
  })

  cleanCircles()
  containerStartgame.classList.toggle('invisible')
  containerQuestions.classList.toggle('visible')
  containerEndgame.classList.toggle('visible')
  showQuestion()
}

function nextQuestion(event) {
  compareAnswer(event)

  indexQuestion += 1

  if (indexQuestion === questions.length) {
    indexQuestion = 0
    questions = questions.filter(q => q.status === 0)
  }

  if(questions.length > 0 ) {
    question.innerHTML = questions[indexQuestion].question.split('.')[1]
    currentLetter.innerHTML = questions[indexQuestion].letter
    var clueQuestion = questions[indexQuestion].question.split('.')[0]
    clueQuestion = clueQuestion.split(' ')
    clueSpan.innerText = clueQuestion[0] + " " + clueQuestion[1] + " "

    cleanInput()

  } else {
    showResult()
  }

}

function nextPasalabra() {
  nextQuestion(true)
}

function showQuestion() {
  indexQuestion += 1
  question.innerHTML = questions[indexQuestion].question.split('.')[1]
  currentLetter.innerHTML = questions[indexQuestion].letter

  var clueQuestion = questions[indexQuestion].question.split('.')[0]
  clueQuestion = clueQuestion.split(' ')
  clueSpan.innerText = clueQuestion[0] + " " + clueQuestion[1] + " "
}


function compareAnswer(event) {

  var answerInput = currentAnswer.value
  if (answerInput) {
    answerInput = transformAnswer(answerInput)
  }
  var letter = document.querySelector("." + questions[indexQuestion].letter)

  if (event.target.innerHTML === "Pasapalabra") {
    return ''

  } else if (answerInput === questions[indexQuestion].answer) {
    counterRights += 1
    rights.innerHTML = counterRights
    letter.classList.add('backgroundGreen')
    questions[indexQuestion].status = 1

  } else {
    counterWrongs += 1
    wrongs.innerHTML = counterWrongs
    letter.classList.add('backgroundRed')
    questions[indexQuestion].status = 1
  }
}

function cleanInput() {
  currentAnswer.value = ""
}

function cleanCircles() {
  var circles = document.querySelectorAll('.circle')

  circles.forEach(c => {
    c.classList.remove('backgroundGreen')
    c.classList.remove('backgroundRed')
  })

  rights.innerHTML = counterRights
  wrongs.innerHTML = counterWrongs
}


function showResult() {
  rightsResult.innerHTML = counterRights
  wrongsResult.innerHTML = counterWrongs
  document.querySelector(".container-result").style.display = "flex";
  document.querySelector(".txt-buttons").style.display = "none";
  clearInterval(myTimer)
}

function restart() {
  document.querySelector(".container-result").style.display = "none";
  document.querySelector(".txt-buttons").style.display = "flex";
  startEndGame()
}


function transformAnswer(answer) {
  let answerLower = answer.toLowerCase()
  let letters = answerLower.split('')

  let lettersWithoutAccentMark = letters.map(letter => {
    let currentLetter;

    switch (letter) {
      case 'á':
        currentLetter = 'a'
        break;
      case 'é':
        currentLetter = 'e'
        break;
      case 'í':
        currentLetter = 'i'
        break;
      case 'ó':
        currentLetter = 'o'
        break;
      case 'ú':
        currentLetter = 'u'
        break;
    
      default:
        currentLetter = letter
    }

    return currentLetter
  })

  let answerTransformed = lettersWithoutAccentMark.join("")

  return answerTransformed
}




