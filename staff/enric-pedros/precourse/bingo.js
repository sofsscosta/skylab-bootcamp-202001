


function usuario() { //nombre de usuario
    var usuarionuevo = prompt("Buenos dias, indique su nombre: ");
    return usuarionuevo;
}

var cartro = []
var lineasCartro = 5;


function aleatorio(a, b) {   //esta funcion genera un numero aleatorio entre un minimo y un máximo 
    var num = Math.round(Math.random() * (b - a) + (a));
    if (cartro.length === 0){
        cartro.push({ number: num, matched: false })
    }
    else if (cartro.length < lineasCartro){
        cartro.includes(num) ? '' : cartro.push({ number: num, matched: false });
    }
    if (cartro.length < lineasCartro){
        
        aleatorio(a,b)
    }
    
} 



var confirmacio = false
var arrayNumeros;

function nuevaPartida() {  // funció que comença el Bingo
    var newplay = confirm("Quiere iniciar una nueva partida señor " + user + " ?");
    if (newplay) {
        aleatorio(1, 100)
        arrayNumeros = cartro.map(element => { //ponemos en un array los valores de los numeros del array de Objetos 
            return element.number
        });
        console.log("aqui tiene el nuevo carton: " + (arrayNumeros))
        Tirada()
        
    } else alert("Gracias por jugar ")
    
    
}


function compara(numeroBombo) { //comparamos bombo i carton 
    
    var indice = arrayNumeros.indexOf(numeroBombo)
    if (indice!=-1){
        arrayNumeros[indice]= "X" 
        numeroX++
        console.log("Premio!"+"/n") 
        console.log(arrayNumeros)
    } else{
        console.log("lastima");  
    } 
    Tirada();
}




var numbersbombo = [] // guardarem els números del bombo perque no es repeteixin i ens serveix per comptar les tirades

function numBombo(a,b) {
    var numrandom = Math.round(Math.random() * (b - a) + (a));
      if (numbersbombo.includes(numrandom)){
    return numBombo(1,100)  
    }else  {
    numbersbombo.push(numrandom);
    }
    return numrandom
}


var totalTiradas = 1;
var numeroX = 0;



function Tirada() { // tirada i obtencion numero bombo
   
    if (numeroX === 5){   // comprobamos si el array de Numeros contiene X i si es asi le sumamos 1 a la variable  numeroX de la funcion Compara
        console.log("LINEA!")
        console.log("ha conseguido acabarlo en " + totalTiradas + " tiradas!!")
        numeroX=0;
        totalTiradas = 1            // reiniciamos todas las variables a 0 para empezar de nuevo
        arrayNumeros=[]
        numbersbombo = []
        nuevaPartida(); 
    
    }else{

        var primera = confirm("desea usted hacer la " + totalTiradas + " tirada? ");
        var num;

        (primera) ?
        (num = numBombo(1,100),
        console.log("el número del bombo es: " + num),
        totalTiradas++ , //comptem les tirades 
        compara(num))
        : alert("Nos vemos")
    


    }
}


var user = usuario();
var partidanew = nuevaPartida();



