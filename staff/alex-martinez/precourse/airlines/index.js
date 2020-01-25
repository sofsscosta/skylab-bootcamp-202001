//array de objetos con los vuelos
var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

//función para poner la primera letra del usuario en mayúscula
function PrimeraMayus(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//funcion inicial inicio sesión
function saludo(){
    //pasamos el nombre de usuario a minuscula + eliminar espacios
    var usuario = prompt('Escibe tu usuario').toLowerCase().trim();
    

    if(usuario){
        console.log(`Bienvenido ${PrimeraMayus(usuario)}`);
    }
}
//función para mostrar los vuelos
function vuelos(){
    console.log('Vuelos de hoy: ')
    for(var i = 0; i<flights.length; i++){
        if(flights[i].scale === false){
            var escala = 'no realiza ninguna escala';
        }else{
            escala = 'si realiza escala';
        }

        console.log(`El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€, y ${escala}`);
    }
}

//función coste medio
function costeMedioVuelos(){
    //variable que sumará los precios de los vuelos
    var costeTotal = 0;
    //variable que almacenará el coste medio
    var costeMedio = 0;
    for(var i = 0; i<flights.length; i++){
        //variable para acumular todos los costes
        var costes = flights[i].cost;
        //suma de los precios
        costeTotal += costes;
    }
    //coste total / numero de total de vuelos, con dos decimales
    costeMedio = parseFloat(costeTotal/flights.length).toFixed(2);
    console.log(`El coste medio de los vuelos es de ${costeMedio}€`);
}

function vuelosEscalas(){
    //array para guardar los vuelos con escala y despues contarlos
    var conEscala = [];
    console.log('Vuelos con escala: ')
    for(var i=0; i<flights.length; i++){
        if(flights[i].scale === true){
            conEscala.push(flights[i]);
            console.log(`Vuelo con origen ${flights[i].from} y destino ${flights[i].to}`);   
        }    
    }
    console.log(`En total hay ${conEscala.length} vuelos con escala`);
}

//función para mostrar los 5 ultimos vuelos
function ultimosCinco(){
    //variable que almacena los 5 ultimos vuelos del array
    var ultimosVuelos = flights.slice(flights.length-5);
    console.log('Los últimos 5 vuelos del día son: ')
    for(var i =0; i<ultimosVuelos.length; i++){
        //console.log(ultimosVuelos[i]);
        console.log(`El vuelo con origen ${ultimosVuelos[i].from} y con destino ${ultimosVuelos[i].to}`);
    }
}

function airline(){
    saludo();
    console.log('');
    vuelos();
    console.log('')
    costeMedioVuelos();
    console.log('')
    vuelosEscalas();
    console.log('')
    ultimosCinco();
}

airline();
