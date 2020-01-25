var bingoCard=[
    { number: ''},
    { number: ''},
    { number: ''},
    { number: ''},
    { number: ''},
    //next line
    { number: ''},
    { number: ''},
    { number: ''},
    { number: ''},
    { number: ''},
    //next line
    { number: ''},
    { number: ''},
    { number: ''},
    { number: ''},
    { number: ''}
];

//contadores
var aciertosLine1=0;
var aciertosLine2=0;
var aciertosLine3=0;
var linea=0;
var turnos=0;

//crear carton con numeros aleatorios que no se repitan
function carton(){
    var numeros_carton=[]
    for(i=0; numeros_carton.length<15;i++){
        var numero=Math.floor(Math.random() * 99) + 1;
        if(numeros_carton.indexOf(numero)===-1)
        numeros_carton.push(numero);
    }
    for(i=0;i<15;i++){
        bingoCard.splice(i,1,numeros_carton[i]);
    }
};
//crear numero aleatorio que no se repita. 'la bola del juego'
var numeros_random=[]
function generateRandom(){
    var aleatorio=Math.floor(Math.random() * 99) + 1;
    while(numeros_random.indexOf(aleatorio)!=-1){
        aleatorio=Math.floor(Math.random() * 99) + 1;
    }
    alert(`El número extraído es: ${aleatorio}`);
    numeros_random.push(aleatorio);
    return aleatorio;
};
/*  Avisa al jugador si el número extraído aleatoriamente está en su carton. Si está, incrementa el contador de aciertos segun la linea al que corresponda, para
    así después poder controlar los aciertos de cada línea.
*/
function newTurn(){
    var aleatorio=generateRandom();
    turnos++;
    for(var i in bingoCard){
        if(bingoCard[i]===aleatorio){
            bingoCard[i]='X';
            alert(`Enhorabuena!!! El nº: ${aleatorio} está en su carton`);
        if(i<5){
            aciertosLine1++;
        }else if(i<=9){
            aciertosLine2++;
        }else{
            aciertosLine3++ ;
        }
                
        }
    } 
    alert(Object.values(bingoCard));
    askTurn();           
    };
/*
    Si alguno de los contadores por primera vez alcanza 5, salta una alerta indicando LINEA. Cuando las 3 líneas están completas indica BINGO y el número 
    de turnos en los que se ha realizado el bingo. 
    En caso de bingo, pregunta al jugador si quiere volver a jugar, si contesta que sí, pone todos los contadores a 0 y comienza el juego de nuevo, sino 
    dice 'Ciao'.
*/
function askTurn(){
    var isContinue=true;
    if(linea!=1){
        if(aciertosLine1===5 || aciertosLine2===5 || aciertosLine3===5){
            alert('LINEA!!!');
            linea++;
        }
    }
    if(aciertosLine1===5 && aciertosLine2===5 && aciertosLine3===5){
        alert('BINGO!!!');
        alert('Ha completado el carton en ' + turnos + ' turnos.');
        var newGame=confirm('¿Desea volver a jugar?');
        if(newGame===true){
            aciertosLine1=0;
            aciertosLine2=0;
            aciertosLine3=0;
            turnos=0;
            numeros_random=[];
            linea=0;
            carton();
            alert(`Este es su nuevo carton: ${Object.values(bingoCard)}.`);
        }else{
            alert('Gracias por jugar con nosotros.');
            isContinue=false;
        }
   } 
    if (isContinue===true){
        var answer=confirm('¿Desea continuar?');
            switch(answer){
                case true:
                    newTurn();
                    break;
                case false:
                    alert('Ciao!.');
                    break;
            }
        }
        else
        {
            return false;
        }
    };
//Esta es la función que engloba todas las funciones para que se ejecute el juego.
function bingo(){
    var name=prompt('Por favor, indique su nombre.');
    carton();
    alert(`${name}, este es su carton: ${Object.values(bingoCard)}.`);
    askTurn();
};

bingo(); 
       
    

