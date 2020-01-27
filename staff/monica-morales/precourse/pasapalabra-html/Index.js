//BOTONES
window.onload = function (){
    document.getElementById('jugar').addEventListener("click", jugar);
    document.getElementById('enviar').addEventListener("click", enviar);
    document.getElementById('pasapalabra').addEventListener("click", pasapalabra);
        
    //Objeto con preguntas y respuestas del juego
    var questions = [
        [        
            { letter: "a", answer: "anglosajon", status: 0, question: "EMPIEZA POR LA A:\n\nDicho de una persona: De procedencia y lengua inglesas." },
            { letter: "a", answer: "aroma", status: 0, question: "EMPIEZA POR LA A:\n\nPerfume, olor muy agradable." },
            { letter: "a", answer: "acera", status: 0, question: "EMPIEZA POR LA A:\n\nOrilla de la calle o de otra vía pública." },
        ],
        [
            { letter: "b", answer: "baraja", status: 0, question: "EMPIEZA POR LA B:\n\nConjunto completo de cartas empleado para juegos de azar." },
            { letter: "b", answer: "beato", status: 0, question: "EMPIEZA POR LA B:\n\nDicho de una persona: Beatificada por el papa." },
            { letter: "b", answer: "buhardilla", status: 0, question: "EMPIEZA POR LA B:\n\nParte de un edificio situada inmediatamente debajo del tejado, con techo en pendiente y destinada a vivienda." },
        ],
        [
            { letter: "c", answer: "ceja", status: 0, question: "EMPIEZA POR LA C:\n\nParte de la cara, prominente, curvilínea y cubierta de pelo, situada sobre la cuenca del ojo." },
            { letter: "c", answer: "cian", status: 0, question: "EMPIEZA POR LA C:\n\nDicho de un color: Azul verdoso, complementario del rojo." },
            { letter: "c", answer: "corona", status: 0, question: "EMPIEZA POR LA C:\n\nAro, hecho de flores, de ramas o de metal, que ciñe la cabeza y se usa como adorno, insignia honorífica o símbolo de dignidad o realeza." },
        ],
        [
            { letter: "d", answer: "dibujo", status: 0, question: "EMPIEZA POR LA D:\n\nDelineación o imagen dibujada." },
            { letter: "d", answer: "dedal", status: 0, question: "EMPIEZA POR LA D:\n\nUtensilio pequeño, ligeramente cónico y hueco, con la superficie llena de hoyuelos y cerrado a veces por un casquete esférico para proteger el dedo al coser." },
            { letter: "d", answer: "duda", status: 0, question: "EMPIEZA POR LA D:\n\nSuspensión o indeterminación del ánimo entre dos juicios o dos decisiones, o bien acerca de un hecho o una noticia." },
        ],
        [
            { letter: "e", answer: "entrada", status: 0, question: "EMPIEZA POR LA E:\n\nEspacio por donde se entra a alguna parte." },
            { letter: "e", answer: "emanacion", status: 0, question: "EMPIEZA POR LA E:\n\nAcción y efecto de emanar." },
            { letter: "e", answer: "embalsamador", status: 0, question: "EMPIEZA POR LA E:\n\nadj. Que embalsama." },
        ],
        [
            { letter: "f", answer: "fiebre", status: 0, question: "EMPIEZA POR LA F:\n\nFenómeno patológico que se manifiesta por elevación de la temperatura normal del cuerpo y mayor frecuencia del pulso y la respiración." },
            { letter: "f", answer: "faba", status: 0, question: "EMPIEZA POR LA F:\n\nFruto y semilla de la judía." },
            { letter: "f", answer: "fobia", status: 0, question: "EMPIEZA POR LA F:\n\nAversión exagerada a alguien o a algo." },
        ],
        [
            { letter: "g", answer: "gato", status: 0, question: "EMPIEZA POR LA G:\n\nMamífero carnívoro de la familia de los félidos, digitígrado, doméstico, de unos 50 cm de largo desde la cabeza hasta el arranque de la cola." },
            { letter: "g", answer: "gobernador", status: 0, question: "EMPIEZA POR LA G:\n\nQue gobierna." },
            { letter: "g", answer: "genoma", status: 0, question: "EMPIEZA POR LA G:\n\nSecuencia de nucleótidos que constituye el ADN de un individuo o de una especie." },
        ],
        [
            { letter: "h", answer: "higo", status: 0, question: "EMPIEZA POR LA H:\n\nSegundo fruto, o el más tardío, de la higuera, blando, de gusto dulce." },
            { letter: "h", answer: "hobbit", status: 0, question: "EMPIEZA POR LA H:\n\nHabitantes de la Comarca, raza del protagonista de la famosa trilogía de J.R.R. Tolkien." },
            { letter: "h", answer: "habitacion", status: 0, question: "EMPIEZA POR LA H:\n\nEn una vivienda, cada uno de los espacios entre tabiques destinados a dormir, comer, etc." },
        ],
        [
            { letter: "i", answer: "invadir", status: 0, question: "EMPIEZA POR LA I:\n\nIrrumpir, entrar por la fuerza." },
            { letter: "i", answer: "intencion", status: 0, question: "EMPIEZA POR LA I:\n\nDeterminación de la voluntad en orden a un fin." },
            { letter: "i", answer: "impulsar", status: 0, question: "EMPIEZA POR LA I:\n\nDar empuje para producir movimiento." },
        ],
        [
            { letter: "j", answer: "jamon", status: 0, question: "EMPIEZA POR LA J:\n\nPierna trasera del cerdo, curada o cocida entera." },
            { letter: "j", answer: "juramento", status: 0, question: "EMPIEZA POR LA J:\n\nAfirmación o negación de algo, poniendo por testigo a Dios, o en sí mismo o en sus criaturas." },
            { letter: "j", answer: "jabalina", status: 0, question: "EMPIEZA POR LA J:\n\nArma, a manera de pica o venablo, que se usaba más comúnmente en la caza mayor, y actualmente en una modalidad deportiva." },
        ],
        [
            { letter: "k", answer: "koala", status: 0, question: "EMPIEZA POR LA K:\n\nMamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos." },
            { letter: "k", answer: "kosobar", status: 0, question: "EMPIEZA POR LA K:\n\nNatural de Kosovo, provincia autónoma de Serbia." },
            { letter: "k", answer: "kilobyte", status: 0, question: "EMPIEZA POR LA K:\n\nUnidad equivalente a 1024 (210) bytes." },
    
        ],
        [
            { letter: "l", answer: "lealtad", status: 0, question: "EMPIEZA POR LA L:\n\nCumplimiento de lo que exigen las leyes de la fidelidad y las del honor y hombría de bien." },
            { letter: "l", answer: "loro", status: 0, question: "EMPIEZA POR LA L:\n\nPapagayo, ave, y más particularmente el que tiene el plumaje con fondo rojo." },
            { letter: "l", answer: "liar", status: 0, question: "EMPIEZA POR LA L:\n\nFormar un cigarrillo envolviendo la picadura en el papel de fumar." },
        ],
        [
            { letter: "m", answer: "musculo", status: 0, question: "EMPIEZA POR LA M:\n\nÓrgano compuesto principalmente de fibras contráctiles." },
            { letter: "m", answer: "monte", status: 0, question: "EMPIEZA POR LA M:\n\nGran elevación natural del terreno." },
            { letter: "m", answer: "mundana", status: 0, question: "EMPIEZA POR LA M:\n\nDicho de una persona: Inclinada a los placeres y frivolidades de la vida social." },
        ],
        [
            { letter: "n", answer: "neandertal", status: 0, question: "EMPIEZA POR LA N:\n\nDicho de un individuo: De un grupo extinto de homínidos que vivió en gran parte de Europa y parte de Asia durante el Paleolítico medio." },
            { letter: "n", answer: "necio", status: 0, question: "EMPIEZA POR LA N:\n\nIgnorante y que no sabe lo que podía o debía saber." },
            { letter: "n", answer: "no", status: 0, question: "EMPIEZA POR LA N:\n\nExpresa negación." },
        ],
        [
            { letter: "ñ", answer: "antaño", status: 0, question: "CONTIENE LA Ñ:\n\nEn un tiempo pasado." },
            { letter: "ñ", answer: "añorar", status: 0, question: "CONTIENE LA Ñ:\n\nRecordar con pena la ausencia, privación o pérdida de alguien o algo muy querido." },
            { letter: "ñ", answer: "ñu", status: 0, question: "CONTIENE LA Ñ:\n\nMamífero rumiante africano de la familia de los antílopes, de color pardo grisáceo, cuya cabeza recuerda la de un toro." },
        ],
        [
            { letter: "o", answer: "orar", status: 0, question: "EMPIEZA POR LA O:\n\nHablar en público para persuadir y convencer a los oyentes o mover su ánimo." },
            { letter: "o", answer: "once", status: 0, question: "EMPIEZA POR LA O:\n\nDiez más uno." },
            { letter: "o", answer: "oso", status: 0, question: "EMPIEZA POR LA O:\n\nMamífero carnívoro plantígrado, de gran tamaño, de pelaje pardo, largo y espeso, cabeza grande, ojos pequeños, extremidades fuertes y gruesas, con garras, y cola muy corta, que vive en los montes boscosos." },
        ],
        [
            { letter: "p", answer: "presa", status: 0, question: "EMPIEZA POR LA P:\n\nMuro grueso de piedra u otro material que se construye a través de un río, arroyo o canal, para almacenar el agua a fin de derivarla o regular su curso fuera del cauce." },
            { letter: "p", answer: "peaje", status: 0, question: "EMPIEZA POR LA P:\n\nDerecho de tránsito." },
            { letter: "p", answer: "poliglota", status: 0, question: "EMPIEZA POR LA P:\n\nDicho de una persona: Que habla varias lenguas." },
        ],
        [
            { letter: "q", answer: "quiste", status: 0, question: "CONTIENE LA Q:\n\nVejiga membranosa que se desarrolla anormalmente en diferentes regiones del cuerpo y que contiene líquido o materias alteradas." },
            { letter: "q", answer: "empaquetar", status: 0, question: "CONTIENE LA Q:\n\nHacer paquetes." },
            { letter: "q", answer: "adquirir", status: 0, question: "CONTIENE LA Q:\n\nGanar, conseguir con el propio trabajo o industria." },
        ],
        [
            { letter: "r", answer: "robert", status: 0, question: "EMPIEZA POR LA R:\n\nCabeza de la casa Baratheon y Rey de los Siete Reinos hasta su muerte." },
            { letter: "r", answer: "robar", status: 0, question: "EMPIEZA POR LA R:\n\nQuitar o tomar para sí con violencia o con fuerza lo ajeno." },
            { letter: "r", answer: "resina", status: 0, question: "EMPIEZA POR LA R:\n\nSustancia sólida o de consistencia pastosa, insoluble en el agua, soluble en el alcohol y en los aceites esenciales, y capaz de arder en contacto con el aire, obtenida naturalmente como producto que fluye de varias plantas." },
        ],
        [
            { letter: "s", answer: "sopa", status: 0, question: "EMPIEZA POR LA S:\n\nPlato compuesto de un caldo y uno o más ingredientes sólidos cocidos en él." },
            { letter: "s", answer: "soplar", status: 0, question: "EMPIEZA POR LA S:\n\nDespedir aire con violencia por la boca, alargando los labios un poco abiertos por su parte media." },
            { letter: "s", answer: "sentimiento", status: 0, question: "EMPIEZA POR LA S:\n\nHecho o efecto de sentir o sentirse." },
        ],
        [
            { letter: "t", answer: "tirano", status: 0, question: "EMPIEZA POR LA T:\n\nDicho de una persona: Que obtiene contra derecho el gobierno de un Estado, especialmente si lo rige sin justicia y a medida de su voluntad." },
            { letter: "t", answer: "tension", status: 0, question: "EMPIEZA POR LA T:\n\nEstado de un cuerpo sometido a la acción de fuerzas opuestas que lo atraen." },
            { letter: "t", answer: "tubo", status: 0, question: "EMPIEZA POR LA T:\n\nPieza hueca, de forma por lo común cilíndrica y generalmente abierta por ambos extremos." },
        ],
        [
            { letter: "u", answer: "uralita", status: 0, question: "EMPIEZA POR LA U:\n\nMaterial de construcción hecho a base de cemento y de fibras, generalmente de asbesto, usado sobre todo en cubiertas y tejados." },
            { letter: "u", answer: "urticaria", status: 0, question: "EMPIEZA POR LA U:\n\nEnfermedad eruptiva de la piel, cuyo síntoma más notable es una comezón parecida a la que producen las picaduras de la ortiga." },
            { letter: "u", answer: "unir", status: 0, question: "EMPIEZA POR LA U:\n\nHacer que una cosa esté al lado de otra, o en contacto con ella formando un todo." },
        ],
        [
            { letter: "v", answer: "vertebrado", status: 0, question: "EMPIEZA POR LA V:\n\nQue tiene vértebras." },
            { letter: "v", answer: "vocal", status: 0, question: "EMPIEZA POR LA V:\n\nPerteneciente o relativo a la voz." },
            { letter: "v", answer: "vertedero", status: 0, question: "EMPIEZA POR LA V:\n\nLugar adonde o por donde se vierte algo." },
        ],
        [
            { letter: "w", answer: "wolframio", status: 0, question: "EMPIEZA POR LA W:\n\nTambién conocido como tungsteno,​ es un elemento químico de número atómico 74 que se encuentra en el grupo 6 de la tabla periódica de los elementos. Su símbolo es W." },
            { letter: "w", answer: "wasabi", status: 0, question: "EMPIEZA POR LA W:\n\nPasta de color verde y picante que se sirve para acompañar delicias como el sushi o el sashimi." },
            { letter: "w", answer: "weber", status: 0, question: "CEMPIEZA POR LA W:\n\nUnidad de flujo magnético del sistema internacional, equivalente al flujo magnético que, al atravesar un circuito de una sola espira, símboo wb." },
        ],
        [
            { letter: "x", answer: "mexico", status: 0, question: "CONTIENE LA X:\n\nPaís de América ubicado en la parte meridional de América del Norte." },
            { letter: "x", answer: "xenon", status: 0, question: "CONTIENE LA X:\n\nElemento químico o cuerpo simple, gaseoso, incoloro e inodoro, encontrado en el aire." },
            { letter: "x", answer: "xilofono", status: 0, question: "CONTIENE LA X:\n\nInstrumento músico compuesto de láminas de madera, sostenidas por hilos de seda o cuerda de tripa, de espesor y longitud tales que, golpeados con un martillo dan notas diferentes." },
        ],
        [
            { letter: "y", answer: "ayahuasca", status: 0, question: "CONTIENE LA Y:\n\nLiana de la selva de cuyas hojas se prepara un brebaje de efectos alucinógenos, empleado por chamanes con fines curativos."},
            { letter: "y", answer: "yihad", status: 0, question: "CONTIENE LA Y:\n\nGuerra santa de los musulmanes."},
            { letter: "y", answer: "yacare", status: 0, question: "CONTIENE LA Y:\n\nCaimán."},
        ],
        [
            { letter: "z", answer: "zapato", status: 0, question: "EMPIEZA POR LA Z:\n\nCalzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel."},
            { letter: "z", answer: "zorro", status: 0, question: "EMPIEZA POR LA Z:\n\nMamífero cánido de menos de un metro de longitud, incluida la cola, de hocico alargado y orejas empinadas, pelaje de color pardo rojizo y muy espeso."},
            { letter: "z", answer: "zocatearse", status: 0, question: "EMPIEZA POR LA Z:\n\nDicho de un fruto: Ponerse zocato."},
        ] 
    ];

    //variables globales
    var posicion=0;
    var rosco=document.getElementById("rosco");//el rosco de las letras
    var usuario=document.getElementById("usuario");//espacio dedicado a que el usuario introduzca su nombre
    var name=document.getElementById("user");//nombre con el que entra el jugador
    var reglas=document.getElementById("reglas");//explicación reglas del juego
    var pregunta=document.getElementById("pregunta");//recuadro para interactuar con el jugador, introduciendo preguntas e indicando  respuestas correctas en caso de fallo
    var enunciado=document.getElementById("enunciado");//enunciado de las preguntas
    var respuesta=document.getElementById("respuesta");//espacio dedicado a que el usuario introduzca su respuesta
    var jugar=document.getElementById("jugar");//boton de jugar
    var aciertos=document.getElementById("aciertos");//aciertos del jugador
    var fallos=document.getElementById("fallos");//fallos del jugador
    var segundos=document.getElementById("segundos");//segundos que quedan de juego
    var resultado=document.getElementById("resultado");//el ranking con los resultados
    var gameOver=document.getElementById("gameOver");//se acabó el tiempo, fin de partida
    var title=document.getElementById("title");//logo que aparece dentro del rosco
    var correccion=document.getElementById("modal");//espacio donde aparece la solución de los fallos
         
    //Sonidos
    var falloSound = document.getElementById("sound_fallo");
    var aciertoSound = document.getElementById("sound_acierto");

    function playSound(elem) {
        elem.play();
    };

    //contadores
    var contador_aciertos=0;//donde se van sumando los aciertos
    var contador_fallos=0;//donde se van sumando los fallos
    var score=[
        {nombre: "Jose", puntos: 10},
        {nombre: "Luis", puntos: 15},
        {nombre: "Silvia", puntos: 21},
        {nombre: "Vanesa", puntos: 9}
    ]; 
    var questionsRandom=[];//incluye las preguntas que han sido seleccionadas aleatoriamente 
    var pasapalabra=[];//incluye las preguntas que el jugador ha pasado palabra

    //Desactivar la tecla ENTER
    window.addEventListener("keypress", function(event){
        if (event.keyCode===13){
            event.preventDefault();
        }   
    }, false);

     //Función para seleccionar las preguntas aleatoriamente.
     function selectWord(){
        for(i in questions){
            let random=Math.floor(Math.random() * 3);
            questionsRandom.push(questions[i][random]); 
        }   
    };
    selectWord();

    //Función que activa la pantalla de pregunta cuando se clicka "jugar" y lanza la primera pregunta aleatoria.
    function jugar(){
        if(name.value!=''){
            usuario.style.visibility="hidden";
            reglas.style.visibility="hidden";
            pregunta.style.visibility="visible";
            //enunciado.style.visibility="visibe";
            enunciado.value=(questionsRandom[posicion].question);            
            respuesta.value='';
            jugar.style.display="none";//desaparece el boton jugar una vez aparece el enunciado de la primera pregunta*/
            document.getElementById("go").style.visibility="hidden";
            timer();
        }
        else{
            return false;
        }
    };

    //Función para refrescar y lanzar la siguiente pregunta
    function newQuestion(pos){  
        if(contador_aciertos===27){
            document.getElementById("win").style.visibility="visible";
        }
        if((contador_aciertos+contador_fallos>26)){
            ranking();
        }
        else {            
            if(pos<=26 && questionsRandom[pos].status===0){
                    respuesta.value='';
                    var container = enunciado;
                    var content = questionsRandom[pos].question;
                    container.value= content;        
                    posicion=pos;
            }else{
                if(pos===27){
                    posicion=0;
                }   
                else{
                    for(i=pos; i<questionsRandom.length;i++){
                        if(i===questionsRandom.length-1){
                            posicion=0;
                        }
                        if(questionsRandom[i].status===0){
                            posicion=i;
                            break;
                        }
                    }
                }
                newQuestion(posicion); 
            }
        }    
    };
        
    //Función para validar respuesta, controlar el contador de aciertos y fallos, marcar en el rosco (rojo o verde)
    function enviar(){         
        for(i=0; i<questionsRandom.length; i++){
            if(respuesta.value===''){
                newQuestion(posicion);
                break;
            }
            if(questionsRandom[i].answer===respuesta.value.toLowerCase()){
                if(contador_aciertos+contador_fallos<27){
                    contador_aciertos++;
                    aciertos.value=contador_aciertos;
                    questionsRandom[posicion].status="OK";
                    playSound(aciertoSound);
                    changeColorAcierto(posicion); 
                    newQuestion(posicion+1);                    
                    break;
                }
            }
            if(i===questionsRandom.length-1){
                if(contador_aciertos+contador_fallos<27){
                    contador_fallos++;
                    fallos.value=contador_fallos;
                    questionsRandom[posicion].status="WRONG";
                    modal(); 
                    playSound(falloSound);
                    changeColorFallo(posicion);
                    newQuestion(posicion+1); 
                    break;
                }
            }
        }
    };  
    
    //Funcion cuando se pulsa "pasapalabra"
    function pasapalabra(){
        newQuestion(posicion+1);
    };
     
    //Funcion para cambiar el color de la letra del rosco cuando se ACIERTA
    function changeColorAcierto(posicion){
        document.getElementById(posicion).style.background = "#37c90a";
        document.getElementById(posicion).style.color = "#111111";
    };
    
    //Funcion para cambiar el color de la letra del rosco cuando se FALLA
    function changeColorFallo(posicion){
        document.getElementById(posicion).style.background = "#fa2f0b";
        document.getElementById(posicion).style.color = "#111111";
    };

    //Función para ocultar los elementos del layout
    function ocultar(){
        pregunta.style.display="none";//se oculta el cuadro de pregunta
        rosco.style.display="none";//se oculta el rosco
        title.style.display="none";//se oculta el logo que aparece dentro del rosco
        fallos.style.display="none";//se ocultan los fallos
        aciertos.style.display="none";//se ocultan los aciertos
        segundos.style.display="none";//se ocultan los segundos
        correccion.style.display="none"//se oculta la solución de la palabra fallada.
    };

    //Funcion contador de tiempo
    function timer(){
        s=segundos;
        var cronometro=setInterval(
            function(){
                if(s.value!=0){
                    s.value--;
                }
                if(s.value==0){
                    ocultar()
                    gameOver.style.visibility="visible";
                }
            }
        ,1000);
    };

    

    //Funcion para que aparezca el modal con la respuesta correcta, cuando el jugador falle.
    function modal(){
        var modal=document.getElementById("modal");
        var span=document.getElementsByClassName("close");
        pregunta.style.display="none";//desaparece la pregunta para que aparezca el modal
        modal.style.display="block";
        respuesta_correcta=questionsRandom[posicion].answer;
        document.getElementById("texto").innerHTML=(`La respuesta correcta es: ${respuesta_correcta}`);
        span.onclick=function(){
            modal.style.display="none";
        };
        window.onclick=function(event){
            if (event.target===modal){
                modal.style.display="none";  
                pregunta.style.display="block";//para que vuelva a aparecer la pregunta
            }
        };
    };

    //Ranking
    function ranking(){
        var modal=document.getElementById("modal");
        modal.style.display="none";
        ocultar();
        score.push({nombre: name.value, puntos: contador_aciertos});
        score.sort(function(a,b){
            return (b.puntos-a.puntos);
        });
        var conta=1;        
        for(i in score){
            var player = document.getElementById('jugador' + conta);
            player.innerHTML=(`${score[i].nombre}`); 
            var puntuation= document.getElementById('puntuacion' + conta);
            puntuation.innerHTML=(`${score[i].puntos}`);
            conta +=1;
            if(conta===6){
                resultado.style.visibility="visible";//aparece el cuadro con los resultados del ranking
                break;
            }
        }
    };
    
        
};
