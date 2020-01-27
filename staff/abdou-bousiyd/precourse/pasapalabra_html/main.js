
let questions=[{letter:"a",answer:"abducir",status:0,question:"CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},{letter:"b",answer:"bingo",status:0,question:"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},{letter:"c",answer:"churumbel",status:0,question:"CON LA C. Niño, crío, bebé"},{letter:"d",answer:"diarrea",status:0,question:"CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},{letter:"e",answer:"ectoplasma",status:0,question:"CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},{letter:"f",answer:"facil",status:0,question:"CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},{letter:"g",answer:"galaxia",status:0,question:"CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},{letter:"h",answer:"harakiri",status:0,question:"CON LA H. Suicidio ritual japonés por desentrañamiento"},{letter:"i",answer:"iglesia",status:0,question:"CON LA I. Templo cristiano"},{letter:"j",answer:"jabali",status:0,question:"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},{letter:"k",answer:"kamikaze",status:0,question:"CON LA K. Persona que se juega la vida realizando una acción temeraria"},{letter:"l",answer:"licantropo",status:0,question:"CON LA L. Hombre lobo"},{letter:"m",answer:"misantropo",status:0,question:"CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},{letter:"n",answer:"necedad",status:0,question:"CON LA N. Demostración de poca inteligencia"},{letter:"ñ",answer:"señal",status:0,question:"CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},{letter:"o",answer:"orco",status:0,question:"CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},{letter:"p",answer:"protoss",status:0,question:"CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},{letter:"q",answer:"queso",status:0,question:"CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},{letter:"r",answer:"raton",status:0,question:"CON LA R. Roedor"},{letter:"s",answer:"stackoverflow",status:0,question:"CON LA S. Comunidad salvadora de todo desarrollador informático"},{letter:"t",answer:"terminator",status:0,question:"CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},{letter:"u",answer:"unamuno",status:0,question:"CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},{letter:"v",answer:"vikingos",status:0,question:"CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},{letter:"w",answer:"sandwich",status:0,question:"CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},{letter:"x",answer:"botox",status:0,question:"CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},{letter:"y",answer:"peyote",status:0,question:"CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},{letter:"z",answer:"zen",status:0,question:"CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}];

//welcome()

let position = 0;
let repited = false;
let time = 4;
let name = null;



function draw() {
    questions.forEach((q, i) => {
        let rotate = (360 / questions.length) * i + (-90);
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(q.letter));
        li.style.transform = `rotate(${rotate}deg) translate(18em) rotate(${rotate * (-1)}deg)`;
        document.getElementById('list').appendChild(li);
    });

}
draw()

    let a = setInterval(() => {
        time = time -1
        document.getElementById('time').innerText = time
        console.log(time)
        if (time <= 0) return gameOver()
    }, 1000)
    

function pasapalabra() {
    const {question, status} = questions[position]
    if (status !== 0) return next()
    document.getElementById('question').innerText = question
    document.getElementsByTagName('li')[position].classList.add('active')
}

function gameOver() {
    const correctas = questions.filter(question => question.status === 1);
    const incorrectas = questions.filter(question => question.status === 2);
    const skiped = questions.filter(question => question.status === 0);

    document.getElementById('result').innerHTML = `<div class="total">Total correctas: ${correctas.length}. 
    Total incorrectas: ${incorrectas.length}. 
    Total saltadas: ${skiped.length}.</div>`

    document.getElementById('nameUser').innerHTML = `<div>Nombre de Usuario: ${name}</div>`
    document.getElementById('playGame').innerHTML = `<button onclick="anotherPlay()"><img src="./img/refresh.png" alt=""></button> `
    clearInterval(a)

}

function anotherPlay() {
    location.reload(true);
}

function next() {
    console.log(position)

    const {answer, status} = questions[position]
    if (status === 0) {
        const userAnswer = document.getElementById('answer').value

        if (answer === userAnswer) {
            document.getElementsByTagName('li')[position].classList.add('correct')
            questions[position].status = 1
        } else if (userAnswer === '' || answer === 'pasapalabra') {
            // .....
        } else {
            document.getElementsByTagName('li')[position].classList.add('fail')
            questions[position].status = 2
        }

        document.getElementsByTagName('li')[position].classList.remove('active')
        document.getElementById('answer').value = ''
    }

    if (position === questions.length - 1) {
        if (repited) {
            return gameOver();
        }
        repited = true
        position = 0
            document.getElementsByTagName('li')[position].classList.remove('active')
            document.getElementById('answer').value = ''
        const skiped = questions.filter(question => question.status === 0);

        if (skiped.length) {
            pasapalabra()
            return
        }
    } else {
        position++
    }

    pasapalabra()
};

pasapalabra()
