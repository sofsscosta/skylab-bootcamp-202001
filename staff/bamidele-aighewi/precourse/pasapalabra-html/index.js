"use strict"

class Pasapalabra {
    questions = {
        en: [
            [
                { letter: "a", answer: "Apple", status: 0, question: "Starts with an A | A fruit that can be red, green or yellow" },
                { letter: "a", answer: ["Animals", "Animal"], status: 0, question: "Starts with an A | A dog, a cat, an elephant are" },
            ],
            [
                { letter: "b", answer: "Beautiful", status: 0, question: "Starts with B | Bonita in english is" },
                { letter: "b", answer: "Bear", status: 0, question: "Starts with B | A toy that is an animal and you go to bed with it at night" },
            ],
            [
                { letter: "c", answer: "Chocolate", status: 0, question: "Starts with C | It is a sweet food, You can drink it or eat it" },
                { letter: "c", answer: "Crocodile", status: 0, question: "Starts with C | It is a reptile and has many teeth" },
            ],
            [
                { letter: "d", answer: "Dog", status: 0, question: "Starts with D | It's an animal: the best friend of the human" },
                { letter: "d", answer: "Dinner", status: 0, question: "Starts with D | You have breakfast in the morning, and in the evening you have..." },
            ],
            [
                { letter: "e", answer: "Elephant", status: 0, question: "Starts with E | It's an animal. It has very big ears" },
                { letter: "e", answer: "East", status: 0, question: "Starts with E | It's is west, north, south and..." },
            ],
            [
                { letter: "f", answer: "Food", status: 0, question: "Starts with F | In general you eat this all day" },
                { letter: "f", answer: ["Flamingos", "Flamingo"], status: 0, question: "Starts with F | They are birds.They've got very long legs, a very long neck, and they are pink" },
            ],
            [
                { letter: "g", answer: "Leg", status: 0, question: "It has the letter G | Part of the body: it's long and helps you to walk" },
                { letter: "g", answer: "Giraffe", status: 0, question: "Starts with G | It's an animal,  it has got a long neck and eats leaves from the trees" },
            ],
            [
                { letter: "h", answer: "He", status: 0, question: "Starts with H | Personal pronoun: él" },
                { letter: "h", answer: "Head", status: 0, question: "Starts with H | Part of the body, has got eyes, mouth, nose..." },
            ],
            [
                { letter: "i", answer: "I", status: 0, question: "Starts with I | Personal pronoun: YO" },
                { letter: "i", answer: "Ice cream", status: 0, question: "Starts with I | You eat a lot of this in summer" },
            ],
            [
                { letter: "j", answer: "Jaguar", status: 0, question: "Starts with J | Very fast animal" },
                { letter: "j", answer: "July", status: 0, question: "Starts with J | It's april, may, june and …" },
            ],
            [
                { letter: "k", answer: "Cake", status: 0, question: "It has the letter K | It is a food: it's sweet and you eat it in your birthday" },
                { letter: "k", answer: "King", status: 0, question: "Starts with K | The husband of the queen is the..." },
            ],
            [
                { letter: "l", answer: "Lemon", status: 0, question: "Starts with L | It's a yellow and acid fruit" },
                { letter: "l", answer: "Lion", status: 0, question: "Starts with L | The king of the jungle is an animal and it is a..." },
            ],
            [
                { letter: "m", answer: "Mouse", status: 0, question: "Starts with M | Small animal that cats love" },
                { letter: "m", answer: "Monkey", status: 0, question: "Starts with M | It's typical animal from Gibraltar" },
            ],
            [
                { letter: "n", answer: "Hand", status: 0, question: "It has the letter N | Part of the body that you use it to write, say hello and goodbye" },
                { letter: "n", answer: "Nose", status: 0, question: "Starts with N | Part of the body that you use to smell" },
            ],
            [
                { letter: "o", answer: "Orange", status: 0, question: "Starts with O | It's a colour and a fruit" },
                { letter: "o", answer: "Old", status: 0, question: "Starts with O | The opposite of young is" },
            ],
            [
                { letter: "p", answer: "Pen", status: 0, question: "Starts with P | You use it to write" },
                { letter: "p", answer: ["Potatoes", "Potato"], status: 0, question: "Starts with P | You like eggs fried with..." },
            ],
            [
                { letter: "q", answer: "Queen", status: 0, question: "Starts with Q | The wife of the king" },
                { letter: "q", answer: "Question", status: 0, question: "Starts with Q | Pregunta en inglés" },
            ],
            [
                { letter: "r", answer: "Hair", status: 0, question: "It has the letter R | you have this in your head" },
                { letter: "r", answer: "Rice", status: 0, question: "Starts with R | It's a food the Chineese like a lot" },
            ],
            [
                { letter: "s", answer: "She", status: 0, question: "Starts with S | Personal pronoun:ella" },
                { letter: "s", answer: "Saturday", status: 0, question: "Starts with S | The day of the week before Sunday" },
            ],
            [
                { letter: "t", answer: "They", status: 0, question: "Starts with T | Personal pronoun: ellos o ellas" },
                { letter: "t", answer: "Teacher", status: 0, question: "Starts with T | He or she is a person who teaches you" },
            ],
            [
                { letter: "u", answer: "June", status: 0, question: "It has the letter U | It's the sixth month of the year" },
                { letter: "u", answer: ["Mushrooms", "Mushroom"], status: 0, question: "It has the letter U | Vegetables which are white and you use them in pizzas" },
            ],
            [
                { letter: "v", answer: "Five", status: 0, question: "It has the letter V | One, two, three, four..." },
                { letter: "v", answer: "Volleyball", status: 0, question: "Starts with V | It is a sport and you can practice in the beach and you need a ball" },
            ],
            [
                { letter: "w", answer: "We", status: 0, question: "Starts with W | Personal pronouns : nosotros" },
                { letter: "w", answer: "What", status: 0, question: "Starts with W | Qué in english" },
            ],
            [
                { letter: "x", answer: ["Sax", "Saxophone"], status: 0, question: "It has the letter X | Musical instrument where you blow" },
                { letter: "x", answer: "Exit", status: 0, question: "It has the letter X | Salida in english" },
            ],
            [
                { letter: "y", answer: "You", status: 0, question: "Starts with Y | Pesonal pronoun :vosotros" },
                { letter: "y", answer: "Yellow", status: 0, question: "Starts with Y | It's a colour and it is in a song about a submarine" },
            ],
            [
                { letter: "z", answer: "Zoo", status: 0, question: "Starts with Z | Place where you visit animals" },
                { letter: "z", answer: "Zebra", status: 0, question: "Starts with Z | It's an animal and it is black and white" },
            ],
        ],
        es: [
            [
                { letter: "a", answer: "Abducir", status: 0, question: "Con la A | Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
                { letter: "a", answer: "Amarillo", status: 0, question: "Con la A | Uno de los colores primarios junto al rojo y el azul" },
            ],
            [
                { letter: "b", answer: "Buscar", status: 0, question: "Con la B | hallar, perseguir el encuentro de algo" },
                { letter: "b", answer: "bingo", status: 0, question: "Con la B | Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
            ],
            [
                { letter: "c", answer: "churumbel", status: 0, question: "Con la C | Niño, crío, bebé" },
                { letter: "c", answer: "Chocolate", status: 0, question: "Con la C | Dulce proveniente del cacao" },
            ],
            [
                { letter: "d", answer: ["Dinosaurios", "Dinosaurio"], status: 0, question: "Con la D | Reptiles que dominaron la tierra hasta su extinción 65.000.000 de años atrás" },
                { letter: "d", answer: "diarrea", status: 0, question: "Con la D | Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
            ],
            [
                { letter: "e", answer: "ectoplasma", status: 0, question: "Con la E | Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
                { letter: "e", answer: "Electricidad", status: 0, question: "Con la E | Fenómeno que proporciona energía a televisiones, radios, videoconsolas, etc. y les permite funcionar" },
            ],
            [
                { letter: "f", answer: "Fantasma", status: 0, question: "Con la F | Ser en el que se convierte una persona tras morir, según diversas mitologías" },
                { letter: "f", answer: "facil", status: 0, question: "Con la F | Que no requiere gran esfuerzo, capacidad o dificultad" },
            ],
            [
                { letter: "g", answer: "galaxia", status: 0, question: "Con la G | Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
                { letter: "g", answer: "Gato", status: 0, question: "Con la G | Animal conocido por su enemistad con los perros" },
            ],
            [
                { letter: "h", answer: "harakiri", status: 0, question: "Con la H | Suicidio ritual japonés por desentrañamiento" },
                { letter: "h", answer: "Hipnosis", status: 0, question: "Con la H | Proceso mediante el cual se 'duerme' a una persona, que entra en un trance durante el cual acata las palabras de quien la controla" },
            ],
            [
                { letter: "i", answer: "Indio", status: 0, question: "Con la I | Habitante nativo de India" },
                { letter: "i", answer: "iglesia", status: 0, question: "Con la I | Templo cristiano" },
            ],
            [
                { letter: "j", answer: "jabali", status: 0, question: "Con la J | Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
                { letter: "j", answer: "Jota", status: 0, question: "Con la J | Tipo de música aragonesa" },
            ],
            [
                { letter: "k", answer: "kamikaze", status: 0, question: "Con la K | Persona que se juega la vida realizando una acción temeraria" },
                { letter: "k", answer: "iglesia", status: 0, question: "Con la K | nombre que comparten una fruta y un ave no voladora" },
            ],
            [
                { letter: "l", answer: ["Líquido", "Liquido"], status: 0, question: "Con la L | Uno de los estados de la materia, junto a sólido y gaseoso" },
                { letter: "l", answer: "licantropo", status: 0, question: "Con la L | Hombre lobo" },
            ],
            [
                { letter: "m", answer: "misantropo", status: 0, question: "Con la M | Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
                { letter: "m", answer: ["Milímetro", "Milimetro"], status: 0, question: "Con la M | Medida directamente inferior al centímetro" },
            ],
            [
                { letter: "n", answer: "necedad", status: 0, question: "Con la N | Demostración de poca inteligencia" },
                { letter: "n", answer: "Navidad", status: 0, question: "Con la N | Festividad religiosa que celebra el nacimiento de Cristo" },
            ],
            [
                { letter: "ñ", answer: "señal", status: 0, question: "Contiene la Ñ | Indicio que permite deducir algo de lo que no se tiene un conocimiento directo" },
                { letter: "ñ", answer: "Añorar", status: 0, question: "Contiene la Ñ | Sinónimo de extrañar, echar de menos" },
            ],
            [
                { letter: "o", answer: "orco", status: 0, question: "Con la O | Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
                { letter: "o", answer: "Oscuro", status: 0, question: "Con la O | Contrario a brillante, con poca luz" },
            ],
            [
                { letter: "p", answer: "Pintura", status: 0, question: "Con la P | Sustancia química que se utiliza para dar color a algo" },
                { letter: "p", answer: "protoss", status: 0, question: "Con la P | Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
            ],
            [
                { letter: "q", answer: "queso", status: 0, question: "Con la Q | Producto obtenido por la maduración de la cuajada de la leche" },
                { letter: "q", answer: "Enclenque", status: 0, question: "Contiene la Q | Dícese de la persona débil, enfermiza, muy flaca" },
            ],
            [
                { letter: "r", answer: "Roma", status: 0, question: "Con la R | Capital de Italia" },
                { letter: "r", answer: "raton", status: 0, question: "Con la R | Roedor" },
            ],
            [
                { letter: "s", answer: "stackoverflow", status: 0, question: "Con la S | Comunidad salvadora de todo desarrollador informático" },
                { letter: "s", answer: "Simpson", status: 0, question: "Con la S | Apellido de los personajes Homer, Bart, Lisa, Maggie y Marge en la famosa serie homónima" },
            ],
            [
                { letter: "t", answer: ["Tónica", "Tonica"], status: 0, question: "Con la T | Nombre de la sílaba que pronunciamos con más fuerza" },
                { letter: "t", answer: "terminator", status: 0, question: "Con la T | Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
            ],
            [
                { letter: "u", answer: "unamuno", status: 0, question: "Con la U | Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
                { letter: "u", answer: "Unificar", status: 0, question: "Con la U | Juntar, reunir o unir unos territorios" },
            ],
            [
                { letter: "v", answer: "Vaca", status: 0, question: "Con la V | Femenino de toro" },
                { letter: "v", answer: "vikingos", status: 0, question: "Con la V | Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
            ],
            [{ letter: "w", answer: "sandwich", status: 0, question: "Contiene la W | Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" }],
            [
                { letter: "x", answer: "botox", status: 0, question: "Contiene la X | Toxina bacteriana utilizada en cirujía estética" },
                { letter: "x", answer: ["Saxofón", "Saxofon"], status: 0, question: "Contiene la X | Instrumento de viento, muy presente en el Jazz" },
            ],
            [
                { letter: "y", answer: "peyote", status: 0, question: "Contiene la Y | Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
                { letter: "y", answer: "Yo", status: 0, question: "Con la Y | Pronombre personal de 1ª persona de singular" },
            ],
            [
                { letter: "z", answer: "Zozobrar", status: 0, question: "Con la Z | Naufragar, peligrar una embarcación" },
                { letter: "z", answer: "zen", status: 0, question: "Con la Z | Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
            ],
        ]
    };

    excluded_questions = [];

    total_correct_answers = 0;
    total_wrong_answers = 0;
    game_round = 1;
    end_keyword = "end";
    skip_keyword = "pasapalabra";
    player = { name: "", lang: "es" }
    generated_questions = [];
    timer_interval = undefined;
    time_limit = 150;
    PLAYERS_RANKING = [
        { name: "Osas", points: 13 },
        { name: "Steve", points: 8 },
        { name: "Sabina", points: 21 },
        { name: "Eric Aig", points: 3 }
    ];
    current_question = {
        qst: {},
        index: 0
    };

    current_audio = undefined;
    audio1 = new Audio("start.mp3");
    audio2 = new Audio("music.mp3");
    audioMuted = true;

    constructor(){
        //let's set current audio to start.mp3
        this.current_audio = this.audio1;
    }

    getRandomNumber(min, max, max_exclusive) {
        //https://stackoverflow.com/a/1527820
        /* MIN-MAX (inclusive) */
        if (max_exclusive) return Math.floor(Math.random() * (max - min)) + min;
        else return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    objIsEmpty(obj){
        //https://stackoverflow.com/a/32108184
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    setAudio1() { this.current_audio = this.audio1 }
    setAudio2() { this.current_audio = this.audio2 }

    showPage(page, callback) {
        var initialPage = document.getElementById("initial-page");
        var readinessPage = document.getElementById("confirm-readiness-page");
        var gamePlayPage = document.getElementById("gameplay-page");
        var timerContainer = document.getElementById("timer-container");
        var mainContainer = document.getElementById("container");
        mainContainer.classList.add("flex-centric-items")

        if (page === "initial"){
            initialPage.classList.remove("hide");
            readinessPage.classList.add("hide");
            gamePlayPage.classList.add("hide");
            timerContainer.classList.add("hide");
        } else if (page === "readiness"){
            initialPage.classList.add("hide");
            readinessPage.classList.remove("hide");
            gamePlayPage.classList.add("hide");
            timerContainer.classList.add("hide");
        } else if (page === "gameplay"){
            initialPage.classList.add("hide");
            readinessPage.classList.add("hide");
            gamePlayPage.classList.remove("hide");
            timerContainer.classList.remove("hide");
            mainContainer.classList.remove("flex-centric-items")
        }

        if (typeof callback === "function"){
            callback();
        }
    }

    savePlayerInfos(name, langId) {
        var langString = langId === 1 ? "es" : "en";

        if (this.player.lang.trim() !== "" && this.player.lang !== langString) {
            //let's reset this array if player changes from one language to another
            this.excluded_questions = [];
        }

        this.player = { name: name, lang: langString }
    }

    showCurrentQuestionToUI() {
        var qstContainer = document.getElementById("current-question-container");
        qstContainer.innerHTML = this.current_question.qst.question
    }

    inanimateAllAlphabets() {
        //remove active class from all other alphabet containers
        var alphabetContainers = document.querySelectorAll("#alphabet-soup-container .alphabets");
        for (var x = 0; x < alphabetContainers.length; x++) {
            alphabetContainers[x].classList.remove('active');
        }
    }

    getCharCode(s) {
        return s.toLowerCase().charCodeAt(0) - 97 + 1
    }

    getCurrentAlphaContainer() {
        var charCode = this.getCharCode(this.current_question.qst.letter)
        return document.getElementById("alpha-" + charCode);
    }

    animateCurrentAlphabet() {
        this.inanimateAllAlphabets();

        //animate current alphabet container
        var alphabetContainer = this.getCurrentAlphaContainer();
        alphabetContainer.classList.add("active");
    }

    generateAlphabetSoupToUI(){
        var questions = this.questions[this.player.lang];
        var alphabetSoupContainer = document.getElementById("alphabet-soup-container");
        alphabetSoupContainer.innerHTML = "";
        var rowContainer = null;
        var rowCounter = 0;
        var self = this;

        questions.map(function(question, index){
            if(question.length){
                if (rowContainer === null){
                    rowContainer = document.createElement("div");
                    var rowContainerClass = document.createAttribute("class");
                    rowContainerClass.value = "flex-justify-content-center alphabet-soup-row";
                    rowContainer.setAttributeNode(rowContainerClass);
                    rowCounter = 0;
                }

                rowCounter++;

                var alphabet = question[0].letter.toUpperCase();

                //create DOM element for this alphabet
                var alphabetContainer = document.createElement("div");
                
                //let's set element's id
                var alphabetContainerId = document.createAttribute("id");       // Create an "id" attribute
                alphabetContainerId.value = "alpha-" + self.getCharCode(alphabet);
                alphabetContainer.setAttributeNode(alphabetContainerId);

                //let's set element's class
                var alphabetContainerClass = document.createAttribute("class");
                alphabetContainerClass.value = "alphabets flex-centric-items";

                if(index === 0){
                    //let's set the first alphabet as active...
                    alphabetContainerClass.value += " active";
                }
                alphabetContainer.setAttributeNode(alphabetContainerClass);

                //let's set element's value
                alphabetContainer.innerHTML = alphabet;
                
                //let's append elements to parents
                rowContainer.appendChild(alphabetContainer);

                if(rowCounter === 15){
                    alphabetSoupContainer.appendChild(rowContainer);
                    rowContainer = null;
                }
            }
        });

        if(rowContainer !== null){
            alphabetSoupContainer.appendChild(rowContainer);
        }
    }

    generateQuestions() {
        /*
            on first init, we get a random question from each letter.
            save the index of that question because if the player want's to replay the game, we have to exclude previous questions.
            if the total length of questions of a letter is one, do nothing,, always return that question
            if the total length of excluded questions is equal to the total length of the questions of a letter, we reset and restart the process
        */

        var questions = JSON.parse(JSON.stringify(this.questions[this.player.lang]));

        this.generated_questions = [];
        var self = this;

        questions.forEach(function (items, index) {
            var rand = 0;
            var excluded = self.excluded_questions[index]

            if (typeof excluded !== "undefined" && excluded.length < items.length) {
                excluded.forEach(function (e) { items.splice(e, 1) })
            } else {
                self.excluded_questions[index] = [];
            }

            if (items.length === 1) {
                self.generated_questions.push(items[rand])
            } else if (items.length > 1) {
                rand = self.getRandomNumber(0, items.length, true);
                self.generated_questions.push(items[rand])
            }

            self.excluded_questions[index].push(rand)
        })
    }

    sortPlayerRankingToUI(){
        //let's sort players according to points accumulated...
        var playersRanking = this.PLAYERS_RANKING.sort(function (a, b) { return b.points - a.points })

        var createNodeElement = function (tagName, classString, value){
            var el = document.createElement(tagName);

            if (typeof classString !== "undefined"){
                var elClass = document.createAttribute("class");
                elClass.value = classString;
                el.setAttributeNode(elClass);
            }

            if (typeof value !== "undefined"){
                el.innerHTML = value;
            }

            return el;
        };

        var olEl = createNodeElement("ol");
        var listContainer = document.getElementById("player-ranking-list-container");
        listContainer.innerHTML = "";

        //pretty print
        playersRanking.map(function (player) {
            var liEl = createNodeElement("li");
            var flexDiv = createNodeElement("div", "display-flex");
            var nameDiv = createNodeElement("div", "w-50", player.name);
            var hyphenDiv = createNodeElement("div", "w-10", "-");
            var pointDiv = createNodeElement("div", "w-10 text-center", player.points);

            flexDiv.appendChild(nameDiv);
            flexDiv.appendChild(hyphenDiv);
            flexDiv.appendChild(pointDiv);

            liEl.appendChild(flexDiv)
            olEl.appendChild(liEl);
        })
        listContainer.appendChild(olEl);
    }

    updateCurrentPlayerRanking(points) {
        var updated = false;
        var self = this;

        self.PLAYERS_RANKING.forEach(function (player, index) {
            if (player.name.toLowerCase() === self.player.name.toLowerCase()) {
                updated = true;
                if (points > player.points) {
                    //only update point if player did better than last time...??????
                    self.PLAYERS_RANKING[index].points = points;
                }
            }
        })

        if (!updated) {
            self.PLAYERS_RANKING.push({ name: self.player.name, points: points })
        }
    }

    togglePlayerRanking() {
        var playerRanking = document.getElementById("player-ranking");
        playerRanking.classList.toggle("show")
    }

    hidePlayerRanking() {
        var playerRanking = document.getElementById("player-ranking");
        playerRanking.classList.remove("show")
    }

    showPlayerRanking() {
        var playerRanking = document.getElementById("player-ranking");
        playerRanking.classList.add("show")
    }

    validatePlayerForm() {
        var self = this;
        var playerName = document.getElementById("playerName").value;
        var gameLanguageId = document.querySelector('input[name="language"]:checked').value;
        var initialPage = document.getElementById("initial-page");

        playerName = playerName.trim();
        gameLanguageId = parseInt(gameLanguageId);

        var validInfos = typeof playerName === "string" && playerName && [1, 2].indexOf(gameLanguageId) !== -1;
        if (validInfos) {
            initialPage.classList.add("hide")
            self.hidePlayerRanking() //just in case it's open in 'initial page'
            self.savePlayerInfos(playerName, gameLanguageId)
            self.showPage("readiness")
            self.generateAlphabetSoupToUI();
            self.generateQuestions();
        } else {
            alert("Please enter a valid player name and select a language");
        }
    }

    getQuestionsStatistics(){
        var okResponse = 0;
        var koResponse = 0;
        var skipped = 0;
        var noResponse = 0; // not 1 or 2
        var respondedTo = 0; // 1 or 2
        var pendingQuestions = [];

        /*
            Question Statuses:{
                1: correctly answered
                2: incorrectly answered
                3: skipped - pasapalabra
            }
        */

        for (var x = 0; x < this.generated_questions.length; x++) {
            var q = this.generated_questions[x];
            var status = parseInt(q.status);
            if(status === 1){
                okResponse++;
                respondedTo++;
            }else if(status === 2){
                koResponse++;
                respondedTo++;
            }else if(status === 3){
                skipped++;
                noResponse++;
                pendingQuestions.push(q)
            }else if(!status){
                noResponse++;
                pendingQuestions.push(q)
            }
        }

        return {
            okResponse: okResponse,
            koResponse: koResponse,
            skipped: skipped,
            noResponse: noResponse,
            respondedTo: respondedTo,
            pendingQuestions: pendingQuestions
        }
    }

    updateUIResponseSummary(okResponse, koResponse){
        var okElement = document.getElementById("ok-answers-count");
        var koElement = document.getElementById("ko-answers-count");

        okElement.innerHTML = okResponse;
        koElement.innerHTML = koResponse;
    }

    clearTimerInterval() {
        var timerContainer = document.getElementById("timer");
        var mainContainer = document.getElementById("container");

        if (typeof this.timer_interval !== "undefined") {
            clearInterval(this.timer_interval)
        }
        timerContainer.classList.remove("active");
        mainContainer.classList.remove("time-running-out")
    }

    gameHasEndedHideBtns(){
        var inGameRankBtn = document.getElementById("inGameRankBtn")
        var stopGameBtn = document.getElementById("stopGame")
        var restartGameBtn = document.getElementById("restartGameBtn")
        var confirmResponseBtn = document.getElementById("confirmResponse")
        var skipQuestionBtn = document.getElementById("skipQuestion")
        var responseInput = document.getElementById("answer-input-container")

        inGameRankBtn.classList.remove("hide");
        restartGameBtn.classList.remove("hide");
        stopGameBtn.classList.add("hide");
        confirmResponseBtn.classList.add("hide");
        skipQuestionBtn.classList.add("hide");
        responseInput.classList.add("hide");
    }

    gameRestartsBtns() {
        var inGameRankBtn = document.getElementById("inGameRankBtn")
        var stopGameBtn = document.getElementById("stopGame")
        var restartGameBtn = document.getElementById("restartGameBtn")
        var confirmResponseBtn = document.getElementById("confirmResponse")
        var skipQuestionBtn = document.getElementById("skipQuestion")
        var responseInput = document.getElementById("answer-input-container")

        inGameRankBtn.classList.add("hide");
        restartGameBtn.classList.add("hide");
        stopGameBtn.classList.remove("hide");
        confirmResponseBtn.classList.remove("hide");
        skipQuestionBtn.classList.remove("hide");
        responseInput.classList.remove("hide");
    }
    
    gameHasEnded(endMessage){
        this.clearTimerInterval();
        this.gameHasEndedHideBtns();
        this.setAudio1();

        var stats = this.getQuestionsStatistics();
        var points = stats.okResponse * 2;
        this.updateCurrentPlayerRanking(points)

        this.sortPlayerRankingToUI();

        var answerInput = document.getElementById("player-response");
        answerInput.value = "";

        var questionContainer = document.getElementById("current-question-container");
        //var endMessage = "Hey "+this.player.name+"! The game has ended<br/>What would you like to do?";
        if (!endMessage) endMessage = "Hey " + this.player.name + "! The game has ended<br/>What would you like to do?";

        questionContainer.innerHTML = endMessage;

        this.generated_questions = [];
        this.current_question.qst = {};
        this.inanimateAllAlphabets()

        //mark pending questions as incorrect
        /*
        var pendingQuestions = document.querySelectorAll('#alphabet-soup-container .alphabets:not(.correct):not(.incorrect)')
        for (var x = 0; x < pendingQuestions.length; x++) { 
            pendingQuestions[x].classList.add("incorrect")
            pendingQuestions[x].classList.remove("pasapalabra") //incase if it already has this class
        }
        this.updateUIResponseSummary(stats.okResponse, (pendingQuestions.length + stats.koResponse))*/

        this.showPlayerRanking();
    }

    stopGame() {
        this.gameHasEnded("Hey " + this.player.name + "! You stopped the game<br/>What would you like to do?")
    }

    restartGame() {
        var self = this;
        this.showPage("initial", function () {
            self.gameRestartsBtns()
        })
    }

    getNextQuestion(){
        var self = this;
        var stats = self.getQuestionsStatistics();

        var pendingQuestions = stats.pendingQuestions;

        var current_qst_index = self.current_question.index;
        current_qst_index = current_qst_index >= pendingQuestions.length ? 0 : current_qst_index;

        var respondedTo = 0;

        if (pendingQuestions.length){
            for (var x = current_qst_index; x <= pendingQuestions.length; x++) {
                var q = pendingQuestions[x];
                if (!q.status || parseInt(q.status) === 3) {
                    self.current_question.qst = q;
                    self.current_question.index = x;
                    break;
                }
            }
        }

        respondedTo = stats.respondedTo;
        self.updateUIResponseSummary(stats.okResponse, stats.koResponse)

        if (!self.objIsEmpty(self.current_question.qst) && respondedTo !== self.generated_questions.length) {
            var alphabetContainer = self.getCurrentAlphaContainer();
            alphabetContainer.classList.remove("pasapalabra");
            alphabetContainer.classList.remove("correct");
            alphabetContainer.classList.remove("incorrect");
        }

        if (respondedTo === self.generated_questions.length){
            self.gameHasEnded();
        }else{
            self.showCurrentQuestionToUI()
            self.animateCurrentAlphabet();
        }
    }

    updateCurrentQuestionStatus(status){
        for(var x = 0; x < this.generated_questions.length; x++){
            var q = this.generated_questions[x];
            if(q.letter === this.current_question.qst.letter){
                q.status = status;
                break;
            }
        }
    }

    confirmPlayerResponse(callback){
        if (this.objIsEmpty(this.current_question.qst)) {
            return false;
        }

        var answerInput = document.getElementById("player-response");
        var answer = answerInput.value.toLowerCase();
        var q = this.current_question.qst;
        var self = this;
        var alphabetContainer = self.getCurrentAlphaContainer();

        var incorrectFnc = function (q) {
            self.updateCurrentQuestionStatus(2)
            alphabetContainer.classList.remove("pasapalabra");
            alphabetContainer.classList.remove("correct");
            alphabetContainer.classList.add("incorrect");
        };

        var correctFnc = function (q) {
            self.updateCurrentQuestionStatus(1)
            alphabetContainer.classList.remove("pasapalabra");
            alphabetContainer.classList.remove("incorrect");
            alphabetContainer.classList.add("correct");
        };

        if (typeof q.answer === "string") {
            if (answer === q.answer.toLowerCase()) {
                correctFnc(q);
            } else {
                incorrectFnc(q);
            }
        } else if (typeof q.answer === "object") {
            q.answer = q.answer.length ? q.answer.join(',').toLowerCase().split(',') : q.answer;
            if (q.answer.length && q.answer.indexOf(answer) !== -1) {
                correctFnc(q);
            } else {
                incorrectFnc(q);
            }
        } else {
            incorrectFnc(q);
        }

        answerInput.value = "";
        answerInput.focus();

        if(typeof callback === "function") callback();
    }

    skipQuestion(){
        if (this.objIsEmpty(this.current_question.qst)){
            return false;
        }

        var answerInput = document.getElementById("player-response");
        var alphabetContainer = this.getCurrentAlphaContainer();
        this.updateCurrentQuestionStatus(3)
        this.current_question.index++;

        alphabetContainer.classList.add("pasapalabra");
        alphabetContainer.classList.remove("correct");
        alphabetContainer.classList.remove("incorrect");

        answerInput.value = "";
        answerInput.focus();

        this.getNextQuestion();
    }

    restartTimer(){
        this.clearTimerInterval();

        var mainContainer = document.getElementById("container");
        var timerContainer = document.getElementById("timer");
        var time_limit = this.time_limit;
        var added_active_class = false;
        var self = this;

        timerContainer.innerHTML = time_limit.toString();

        this.timer_interval = setInterval(function() {
            time_limit--;
            timerContainer.innerHTML = time_limit.toString();

            if(!added_active_class) timerContainer.classList.add("active");

            if(time_limit < 10 && time_limit > 0){
                mainContainer.classList.add("time-running-out");
            }else if (time_limit < 1){
                mainContainer.classList.remove("time-running-out");
                self.clearTimerInterval();
                self.gameHasEnded();
            }
        }, 1000)
    }

    init(){
        var self = this;
        self.sortPlayerRankingToUI();

        //player form info submit button
        document.getElementById("validatePlayerFormBtn").addEventListener('click', function (e) {
            self.validatePlayerForm()         
        });

        //unmute song btn
        document.getElementById("unmute-song").addEventListener('click', function (e) {
            self.current_audio.volume = 1;
            self.current_audio.play();
            e.target.classList.add("hide");
            document.getElementById("mute-song").classList.remove("hide")
        });

        //mute song btn
        document.getElementById("mute-song").addEventListener('click', function (e) {
            self.current_audio.volume = 0;
            e.target.classList.add("hide");
            document.getElementById("unmute-song").classList.remove("hide")
        });

        //player form on ENTER event
        document.getElementById("playerName").addEventListener('keypress', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                self.validatePlayerForm()
            }
        });

        //player readiness confirmation - NO
        document.getElementById("playerNotReady").addEventListener('click', function (e) {
            //location.reload()
            self.showPage("initial")
            //TODO:: reset game play -- just in case
        });

        //player readiness confirmation - Yes
        document.getElementById("playIsReady").addEventListener('click', function (e) {
            self.showPage("gameplay", function(){
                self.setAudio2();
                self.getNextQuestion();
                self.restartTimer()
            })
        });

        //confirm response btn
        document.getElementById("confirmResponse").addEventListener('click', function (e) {
            self.confirmPlayerResponse(function(){
                self.getNextQuestion();
            })
        });

        //player response on ENTER event
        document.getElementById("player-response").addEventListener('keypress', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                self.confirmPlayerResponse(function () {
                    self.getNextQuestion();
                })
            }
        });

        //skip question btn
        document.getElementById("skipQuestion").addEventListener('click', function (e) {
            self.skipQuestion()
        }); 

        //stop game btn
        document.getElementById("stopGame").addEventListener('click', function (e) {
            self.stopGame();
        });

        //restart game btn
        document.getElementById("restartGameBtn").addEventListener('click', function (e) {
            self.restartGame();
        });

        //toggle player ranking btns
        var rankingBtns = document.getElementsByClassName("togglePlayerRankingBtns")
        for (var x = 0; x < rankingBtns.length; x++){
            rankingBtns[x].addEventListener('click', function (e) {
                self.togglePlayerRanking();
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var pasapalabra = new Pasapalabra();
    pasapalabra.init()
}, false);