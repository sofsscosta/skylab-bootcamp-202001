// Variables
var carton = [];
var bombo = [];
var nombre = prompt('Cual es tu nombre?');

//Acumuladores
var lin1 = 0;
var lin2 = 0;
var lin3 = 0;
var turnos = 0;

//Funcion que crea un array de numeros aleatorios del 1 al 99
function getBombo() {
    for(var i = 1; i < 100; i++) {
        function genBom() {
            var numAle =  Math.floor(Math.random() * 99) + 1;
            if(bombo.indexOf(numAle) == -1){ 
                return bombo.push(numAle);
            } else {
                return genBom();
            }
        }
        genBom(); 
    }
}

//Funcion principal
function bingo(){
    //Funcion que crea un carton de 15 numeros aleatorios
    function getCarton() {
        for(var i = 1; i < 16; i++) {
            function genCarton() {
                var numAle =  Math.floor(Math.random() * 99) + 1;
                if(carton.indexOf(numAle) == -1){ 
                      return carton.push(numAle);
                } else {
                        return genCarton();
                }
            }   
            genCarton(); 
        }
    }
    getCarton();

   
    console.log('\nHola ' + nombre + '\n' + 'Este es el carton que se te ha asignado:\n' + carton.slice(0,5) + '\n' + carton.slice(5,10) + '\n' + carton.slice(10)+ '\n')
    


    if(confirm('Empezamos?')) {
        turno();
    } else {console.log('Bye')}

    //Funcion que contiene la logica del bingo, compara los numeros aleatorios del carton
    // con los numeros del bombo y sustituye por una x cuando coincidan
    function turno(){
        for(var i = 0; i < bombo.length; i++){
            console.log('El ' + bombo[i])
            turnos++
            if(carton.indexOf(bombo[i]) !== -1 && carton.indexOf(bombo[i]) < 5){
                console.log('El numero ' + bombo[i] + ' esta en el carton')
                carton[carton.indexOf(bombo[i])] = 'X'
                lin1++;
                if(lin1 === 5 && lin2 === 5 && lin3 === 5){
                    console.log('BINGO! Has completado el juego en ' + turnos + ' turnos.');             
                    if(confirm('Quieres jugar de nuevo?')){
                    console.clear();
                    lin1 = 0;
                    lin2 = 0;
                    lin3 = 0; 
                    turnos = 0;
                    carton = [];
                    bingo();
                } else{
                    console.log('Bye')
                    break;
                }}
                console.log(carton.slice(0,5))
                console.log(carton.slice(5,10))
                console.log(carton.slice(10))
                if(lin1 === 5){
                    console.log('LINEA!')
                }
               if(confirm('Nuevo turno?')) {} else {console.log('Bye'); break;}

            } else if(carton.indexOf(bombo[i]) !== -1 && carton.indexOf(bombo[i]) > 4 && carton.indexOf(bombo[i]) < 10) {
                console.log('El numero ' + bombo[i] + ' esta en el carton')
                carton[carton.indexOf(bombo[i])] = 'X'
                lin2++;
                if(lin1 === 5 && lin2 === 5 && lin3 === 5){
                    console.log('BINGO! Has completado el juego en ' + turnos + ' turnos.');              
                    if(confirm('Quieres jugar de nuevo?')){
                    console.clear();
                    lin1 = 0;
                    lin2 = 0;
                    lin3 = 0; 
                    turnos = 0;
                    carton = [];
                    bingo();  
                } else{
                    console.log('Bye')
                    break;
                }}
                console.log(carton.slice(0,5))
                console.log(carton.slice(5,10))
                console.log(carton.slice(10))
                if(lin2 === 5){
                    console.log('LINEA!')
                }
               if(confirm('Nuevo turno?')) {} else {console.log('Bye'); break;}
            }else if(carton.indexOf(bombo[i]) !== -1 && carton.indexOf(bombo[i]) > 9){
                console.log('El numero ' + bombo[i] + ' esta en el carton')
                carton[carton.indexOf(bombo[i])] = 'X'
                lin3++;
                if(lin1 === 5 && lin2 === 5 && lin3 === 5){
                console.log('BINGO! Has completado el juego en ' + turnos + ' turnos.'); 
                if(confirm('Quieres jugar de nuevo?')){
                    console.clear();
                    lin1 = 0;
                    lin2 = 0;
                    lin3 = 0; 
                    turnos = 0;
                    carton = [];
                    bingo();
                } else{
                    console.log('Bye')
                    break;
                }}
                console.log(carton.slice(0,5))
                console.log(carton.slice(5,10))
                console.log(carton.slice(10))
                if(lin3 === 5){
                    console.log('LINEA!')
                }
               if(confirm('Nuevo turno?')) {} else {console.log('Bye'); break;} 
            } else {
                if(confirm('Nuevo turno?')) {} else {console.log('Bye'); break;}
            }
        }
    }   
}

getBombo();
bingo();