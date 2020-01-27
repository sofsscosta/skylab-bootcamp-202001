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
    PLAYERS_RANKING = [
        { name: "Osas", points: 13 },
        { name: "Steve", points: 8 },
        { name: "Eric Aig", points: 3 }
    ];

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    getRandomNumber(min, max, max_exclusive) {
        //https://stackoverflow.com/a/1527820
        /* MIN-MAX (inclusive) */
        if (max_exclusive) return Math.floor(Math.random() * (max - min)) + min;
        else return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    confirmBox(confirmMessage) {
        return confirm(confirmMessage);
    }

    promptBox(promptMessage, message, hideHints) {
        message = !!message ? message : "";
        promptMessage = hideHints ? promptMessage : promptMessage + "\n\n\nHints:\n- Type '" + this.end_keyword + "' to end game\n- Type '" + this.skip_keyword + "' to skip question";
        return prompt(promptMessage, message)
    }

    welcomeUser(name) {
        console.log("%cHello " + name + "! You're about to play the most addictive game in the world, PASAPALABRA!", "font-size: 14px; color: threeddarkshadow")
        console.log("Game components loading... 100% Loaded!")
    }

    goodByeMessage() {
        console.log("Thank you for playing Pasapalabra. See you next time...")
    }

    showPlayersRanking() {
        //let's sort players according to points accumulated...
        var playersRanking = this.PLAYERS_RANKING.sort(function (a, b) { return b.points - a.points })

        //pretty print
        playersRanking = playersRanking.map(function (player, index) {
            return (index + 1) + ".     " + player.name + "     |     " + player.points
        })

        playersRanking = playersRanking.join("\n")

        console.group("Players ranking");
        console.log(playersRanking);
        console.groupEnd();

        alert("Players ranking\n\n" + playersRanking)
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

    promptQuestionsLang(promptMessage) {
        var output = "\n\n1. Español\n2. English";
        var lang = this.promptBox(promptMessage || "Please select a language of which you want the questions" + output, "", true);
        lang = lang !== null ? lang.trim() : lang;
        lang = this.isNumeric(lang) ? parseInt(lang) : lang;

        if (lang === 1 || lang === 2) {
            var l = lang === 1 ? "es" : "en";

            if (this.player.lang.trim() !== "" && this.player.lang !== l) {
                //let's reset this array if player changes from one language to another
                this.excluded_questions = [];
            }

            this.player.lang = l;

        } else if ((typeof lang === "number" || typeof lang === "string" || lang === "") && lang !== null) {
            this.promptQuestionsLang("Hello\n\nPlease select a valid language of which you want the questions" + output)
        } else if (lang === null) {
            this.player.lang = "";
            this.goodByeMessage()
        }
    }

    getQuestions() {
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

    confirmPlayerReadiness() {
        return this.confirmBox("The game is about to start. Are you ready?")
    }

    startGame() {
        console.group("Round " + this.game_round);

        var self = this;
        var respondedTo = 0;
        var okResponse = 0;
        var koResponse = 0;
        var player_ended_game = false;

        /*
            Question Statuses:{
                1: correctly answered
                2: incorrectly answered
                3: skipped - pasapalabra
            }
        */

        var incorrectFnc = function (q) {
            q.status = 2;
            respondedTo++;
            koResponse++;
            console.info("%c\u00d7 Incorrect!", "color: #dc3545")
        };

        var correctFnc = function (q) {
            q.status = 1;
            respondedTo++;
            okResponse++;
            console.info("%c\u2714 Correct, you have " + okResponse + " point" + (okResponse > 1 ? "s" : "") + "!", "color: #28a745")
        };

        var showResult = function () {
            console.log("%c Correct answers: " + okResponse + " | Incorrect answers: " + koResponse, "color: #17a2b8; font-size: 13px");
        };

        var callbackFnc = function () {
            do {
                //this.generated_questions.forEach(function(q){
                for (var x = 0; x < self.generated_questions.length; x++) {
                    var q = self.generated_questions[x];
                    if (!q.status || parseInt(q.status) === 3) {
                        console.log((x + 1) + ": " + q.question) //"'" + q.letter.toUpperCase() + "': " + 

                        var answer = self.promptBox(q.question)
                        answer = answer !== null ? answer.trim().toLowerCase() : answer;

                        if (answer !== null) {
                            if (answer === self.skip_keyword.toLowerCase()) {
                                console.info("%cPasamos palabra!", "color: #007bff")
                            } else if (answer === self.end_keyword.toLowerCase()) {
                                respondedTo = self.generated_questions.length;
                                player_ended_game = true;
                                return;
                            } else {
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
                            }
                        } else if (answer === null) {
                            incorrectFnc(q);
                        }
                    }
                }
            } while (respondedTo < self.generated_questions.length)
        }

        callbackFnc(); // using an anonymouse fnc so that the 'return' statement (in do...while) wouldn't prevent below codes from running...

        if (player_ended_game) {
            showResult();
            console.groupEnd();
            this.goodByeMessage();
        } else {
            showResult();
            console.groupEnd();

            this.updateCurrentPlayerRanking(okResponse);
            this.showPlayersRanking();
            this.game_round++;

            var response = this.confirmBox("Hey " + this.player.name + "! Would you like to play again?")
            if (response) {
                this.promptQuestionsLang();
                if (this.player.lang) this.loadGameComponents(); //am I hoisting?????
            } else {
                this.goodByeMessage();
            }
        }
    }

    loadGameComponents() {
        this.getQuestions();
        if (this.confirmPlayerReadiness()) {
            this.startGame();
        } else {
            this.goodByeMessage();
        }
    }

    init(promptMessage) {
        var name = this.promptBox(promptMessage, "", true);
        name = name !== null ? name.trim() : name;

        if (typeof name === "string" && name !== "") {
            this.player.name = name;
            this.welcomeUser(name);
            this.promptQuestionsLang()
            if (this.player.lang) this.loadGameComponents();
            //this.startGame();
        } else if ((typeof name !== "string" || name === "") && name !== null) {
            this.init("Hello\n\nPlease enter a valid name")
        } else if (name === null) {
            this.goodByeMessage()
        }
    }
}

var pasapalabraGame = new Pasapalabra();
pasapalabraGame.init("Hello\n\nPlease enter your name");