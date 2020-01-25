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

//constructor objeto Vuelo
function Vuelo(id,to,from,cost,scale){
    this.id = id;
    this.to = to;
    this.from = from;
    this.cost = cost;
    this.scale = scale;
}

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
    console.log('Vuelos con escala: ');
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
    console.log('Los últimos 5 vuelos del día son: ');
    for(var i =0; i<ultimosVuelos.length; i++){
        //console.log(ultimosVuelos[i]);
        console.log(`El vuelo con origen ${ultimosVuelos[i].from} y con destino ${ultimosVuelos[i].to}`);
    }
}

//función principal
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
    console.log('PRO');
    preguntaAdminUser(); 
     
}

airline();

//PRO//

//contar vuelos para sumar id automatico
function countVuelos(){
    var count = [];
    for(var i=0; i<flights.length; i++){
        count.push(flights[i]);
    }
    return count.length +1;
}

//función para crear vuelos
function crearVuelos(){
    
    var to = prompt('Indica un destino').toLowerCase().trim();
    to = PrimeraMayus(to);
    var from = prompt('Indica un origen').toLowerCase().trim();
    from = PrimeraMayus(from);
    var cost = parseInt(prompt('Indica un coste'));
    var scale = prompt('¿Tiene escalas?').toLowerCase().trim();

    var vuelo = new Vuelo();
    //restamos porque el array cuenta desde 0 y length desde 1
    //sino sumaría uno mas
    vuelo.id = countVuelos()-1;
    vuelo.to = to;
    vuelo.from = from;
    vuelo.cost = cost;
    if(scale === 'si'){
        vuelo.scale = true;
    }else{
        vuelo.scale = false;
    }
    flights.push(vuelo);
}

function eliminarVuelo(id){
    for(var i=0; i<flights.length; i++){
        if(flights[i].id == id){
            flights.splice(id,1);
            return;
        }else{
            console.log('el id no existe');
        }
    }
}

function ordenarBarato(){
    var baratos = [];
    for(var i=0; i<flights.length; i++){
        baratos.push(flights[i]);
    }    
    console.log(baratos);
    console.log(baratos.length)
}

//pregunta si es admin o user
function preguntaAdminUser(){
    var pregunta = prompt('¿Eres admin o user?(a/u)').toLowerCase();
    var count = 0;
    //si es administrador
    if(pregunta === 'a'){
        var crearEliminar = prompt('¿Crear o eliminar vuelo?(c/e)').toLowerCase();
        if(crearEliminar === 'c'){
            while(count<15){
                crearVuelos();
                vuelos();
                count++;
            }
            console.log('no puedes crear mas vuelos');
        
        }else if(crearEliminar === 'e'){
            //le restamos uno porque el array empieza desde el 0
            var id = parseInt(prompt('Indica el ID a eliminar'))-1;
            eliminarVuelo(id);
            vuelos();
        }
    //si es usuario
    }else if(pregunta === 'u'){
        ordenarBarato();
    }
    
}