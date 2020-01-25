    var playAgain ="";
    var currentQuestion = '';
    var acertadas = 0;
    var ranking = [];
    var escoger = "";
    var indice = 0;
    var rosco = [
        { letter: "a", answer: ["ABDUCIR", "ABRIDOR","ARMA"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Instrumento usado para levantar las tapas de ciertas botellas","CON LA A. Instrumento o máquina que sirve para atacar o defenderse."]},
        { letter: "b", answer: ["BINGO", "BRUTO", "BUCEAR"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Que es violento, cruel o salvaje","CON LA B. Entrar en el agua para lavarse, para nadar o jugar"]},
        { letter: "c", answer: ["CHURUMBEL", "CANTAR", "CAZADORA"], status: 0, question: ["CON LA C. Niño, crío, bebé", "CON LA C. Emitir con la voz sonidos melodiosos.", "CON LA C. Ropa de abrigo que cubre desde los hombros a la cintura."]},
        { letter: "d", answer: ["DORMIR","DIARREA","DEVOTO"], status: 0, question: ["CON LA D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios.","CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida","CON LA D. Dedicado con fervor a obras de piedad y religión"]},
        { letter: "e", answer: ["ENTRECOT", "ECTOPLASMA","ENTERA"], status: 0, question: ["CON LA E. Trozo de carne sacado de entre costilla y costilla de la res","CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación","CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas"]},
        { letter: "f", answer: ["FARHADI","FACIL","FORESTAL"], status: 0, question: ["CON LA F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017.","CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad","CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos."]},
        { letter: "g", answer: ["GORGORITO","GALAXIA","GORIGORI"], status: 0, question: ["CON LA G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar","CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas","CON LA G. Coloquialmente, canto fúnebre co nque se acompañan los entierros"]},
        { letter: "h", answer: ["HIDROAVIÓN","HARAKIRI","HOMBRERAS"], status: 0, question: ["CON LA H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua.","CON LA H. Suicidio ritual japonés por desentrañamiento","CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros"]},
        { letter: "i", answer: ["INAPETENCIA","IGLESIA","INTUIR"], status: 0, question: ["CON LA I.Falta de gana de comer","CON LA I. Templo cristiano","CON LA I. Percibir íntima e instantáneamente una idea o verdad, tal como si se la tuviera a la vista."]},
        { letter: "j", answer: ["JARDINERÍA","JABALÍ","JORNADA"], status: 0, question: ["CON LA J. Arte y oficio del jardinero","CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba","CON LA J. Tiempo de duración del trabajo diario."]},
        { letter: "l", answer: ["LOBERA","LICÁNTROPO","LÉRMONTOV"], status: 0, question: ["CON LA L. Guarida de lobos","CON LA L. Hombre lobo","CON LA L. Apellido del poeta ruso autor de la obra 'la muerte del poeta' de 1837"]},
        { letter: "m", answer: ["MENTIRA","MISÁNTROPO","MENOR"], status: 0, question: ["CON LA M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída.","CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas","Se dice de una persona qeu no ha alcanzado la mayoría de edad"]},
        { letter: "n", answer: ["NATIVO","NECEDAD","NINFA"], status: 0, question: ["CON LA N. Se aplica al que ha nacido en el lugar de que se trata","CON LA N. Demostración de poca inteligencia","CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selva."]},
        { letter: "o", answer: ["ÓRGANO","ORCO", "ORDENANZA OFICIAL" ], status: 0, question: ["CON LA O. De las partes del pulpo, animal o vegetal que ejercen una función .","CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien","Con la O. Empleado que en ciertas oficinas desempeña funciones subalternas"]},
        { letter: "p", answer: ["PLOTINO","PROTOSS","PASADO"], status: 0, question: ["CON LA P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría.","CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft","Anterioridad de algo respecto de otra cosa, en tiempo o en orden"]},
        { letter: "q", answer: ["CHISQUERO","QUESO","BRÁNQUIAS"], status: 0, question: ["CON LA Q.Encendedor antiguo de bolsillo ","CON LA Q. Producto obtenido por la maduración de la cuajada de la leche","CONTIENE LA Q. Órgano respiratorio de los peces, formado por láminas o filamentos"]},
        { letter: "r", answer: ["RÁFAGA","RATÓN", "RENARD, CHARLES"], status: 0, question: ["CON LA R. Viento fuerte, resentido y de corta duración.","CON LA R. Roedor.","Apellido del ingeniero francés que construyó el dirigible militar La France."]},
        { letter: "s", answer: ["SIMPLE","STACKOVERFLOW","SARDANAS"], status: 0, question: ["CON LA S. Se aplica a lo que no tiene complicación.","CON LA S. Comunidad salvadora de todo desarrollador informático","CON LA S.Danza popular catalana"]},
        { letter: "t", answer: ["TRECE","TERMINATOR","TRAGAPERRAS"], status: 0, question: ["CON LA T. Número cardinal equivalente a 10 + 3","CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984","CON LA T. Máquina de juegos de azar que funciona introduciendo monedas."]},
        { letter: "u", answer: ["UDERZO","UNAMUNO","USURPAR"], status: 0, question: ["CON LA U. Apellido del dibujante y guionista francés autor de la serie Asterix.","CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U. Atribuirse y usar un cargo o título ajeno como si fueran propios"]},
        { letter: "v", answer: ["VERDE","VIKINGOS","VIVIENDA"], status: 0, question: ["CON LA V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda","CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa","CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas."]},
        { letter: "x", answer: ["EXÉRGESIS","BÓTOX","OXFORD"], status: 0, question: ["CONTIENE LA X. Explicación o interpretación particularmente de los libros de la Biblia","CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética","Ciudad inglesa cuya universidad compite cada año en una popular regata contra la universidad de Cambridge."]},
        { letter: "y", answer: ["MONCAYO","PEYOTE","LEGULEYO"], status: 0, question: ["CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico.","CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos","CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente."]},
        { letter: "z", answer: ["ZOODIACAL","ZEN","ZARANDEAR"], status: 0, question: ["CON LA Z. Perteneciente o relativo al zoodíaco.","CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso raciona"," CON LA Z. Movimiento repetido y violento de un lado a otro"]}
    ];


// Función coger número Rando
// Función escoger pregunta
function escogerPregunta(){
   var indice=Math.round(Math.random()*2);
    for( var i = 0; i<rosco.length; i++){
    currentQuestion = prompt(rosco[i].question[indice]);
          if (currentQuestion.toUpperCase() === rosco[i].answer[indice].toUpperCase()){
          alert('Correcto');
          acertadas++;
          rosco[i].status=3;
          } else if (currentQuestion === 'PASAPALABRA'|| currentQuestion === 'pasapalabra'){
          rosco[i].status=1;
          alert('Ok pasapalabra');
          } else if (currentQuestion === "END"){
          alert(`Interrumpimos el juego con un total de ${acertadas} preguntas acertadas`);
          return adios();
          } else {
          alert('Incorrecto')
            rosco[i].status=2;
          } 
  }
  }

//Función ordenar ranking
function ordenarRanking(){
    ranking.sort(function (a, b) {
        if (a.points > b.points) {
          return 1;
        }
        if (a.points < b.points) {
          return -1;
        }
        return 0;
      });
}

//Función preguntas pendientes
function preguntasPendientes(){
  for( var i = 0; i<rosco.length; i++){
  if (rosco[i].status === 1) {
    var pregunta = prompt(rosco[i].question[indice]);
    if(pregunta === rosco[i].answer[indice]){
      alert('Correcto')
    acertadas++;
    rosco[i].status = 3;
    } else if (pregunta === "pasapalabra".toUpperCase()){
    alert('Pasapalabra de nuevo');
    } else { 
    rosco[i].status = 2;
    alert('Incorrecto')
    }
    }
    }
}

//Función preguntas que quedan pendientes again
function preguntasPenPendientes(){
    for(var i = 0; i<rosco.length;i++){
        do{preguntasPendientes()} while (rosco[i].status === 1)
    }
}
//Función si escribe END
function adios(){
    ranking.push({name:nameGamer,points: acertadas });
    ordenarRanking();
    console.log(ranking)
  }

//Función juego
function jugarPasapalabra(){
    acertadas=0;
    var nameGamer = prompt('Hola, bienvenido a PASAPALABRA, ¿Cómo te llamas?')
      alert(`Bienvenido ${nameGamer}, vamos a iniciar el juego, recuerda que si completas el roscón ganarás el premio`);
      escogerPregunta();
      preguntasPendientes();
      preguntasPenPendientes();
      alert(`Has acertado en total un número de ${acertadas}`);
      ranking.push({name:nameGamer,points: acertadas });
      ordenarRanking();
      console.log(ranking)
}

// Empezar a jugar
    do { 
      jugarPasapalabra();     
      playAgain = confirm ('¿Quieres volver a jugar?');
      console.log(playAgain);
 
       } while (playAgain === true);

