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
let contadorConEscala = 0;
let contadorSinEscala = 0;
let nombre = prompt("Por favor introduce tu nombre");
console.log("Bienvenido " + nombre);
for (i=0; i<flights.length; i++){
    if (flights[i].scale == true){
        console.log("El vuelo con origen:" + flights[i].from + ", y destino:" + flights[i].to + " tiene un coste de " + (flights[i].cost).toString() + "€ y realiza escala.");
        contadorConEscala += 1;
    }
    else{
        console.log("El vuelo con origen:" + flights[i].from + ", y destino:" + flights[i].to + " tiene un coste de " + (flights[i].cost).toString() + "€ y no realiza ninguna escala.");
        contadorSinEscala += 1;
    }
}
console.log("Vuelos con escala: " + contadorConEscala.toString());
console.log("Vuelos sin escala: " + contadorSinEscala.toString());

function crearVuelo(){
    let preguntaVuelo = prompt("¿Quieres añadir un nuevo vuelo? y/n");
    if (preguntaVuelo == "y"){
        if (flights.length < 15){
            let idVuelo = prompt("Id del vuelo.");
            let destinoVuelo = prompt("Destino del vuelo.");
            let origenVuelo = prompt("Origen del vuelo.")
            let precioVuelo = prompt("Coste del vuelo.");
            let escalaVuelo = prompt("Tiene escala? y/n");
            if (escalaVuelo == 'y'){
                escalaVuelo = true;
            }
            if (escalaVuelo == 'n'){
                escalaVuelo = false;
            }
            let nuevoVuelo = {id: parseInt(idVuelo), to: destinoVuelo, from: origenVuelo, cost: parseInt(precioVuelo), scale: escalaVuelo};
            flights.push(nuevoVuelo);
            mostrarVuelos(flights);
            crearVuelo();
        }
        else{
            alert("Ya hay 15 vuelos, no puedes añadir más.")
        }
    }
}
function borrarVuelo(){
    let preguntaBorrar = prompt ("¿Desea borrar un vuelo? y/n");
    if (preguntaBorrar == "y"){
        let idVueloBorrar = prompt("Introducir el id del vuelo que se desea borrar.")
        for (k=0; k<flights.length; k++){
            if (idVueloBorrar == flights[k].id){
                flights.splice(k,1);
                mostrarVuelos(flights);
                break;
            }
        }
        borrarVuelo();
    } else if (preguntaBorrar == "n"){
        console.log("Bye.")
    }
}
function mostrarVuelos(lista){
    for (i=0; i<lista.length; i++){
        console.log(lista[i]);
    }
}
function comprarVuelo(listaV){
    let compra = prompt("Indique el id del vuelo que desea comprar.")
    for (c=0; c<listaV.length; c++){
        if (compra == listaV[c].id){
            console.log("Gracias por la compra.");
            return;
        }
    }
    console.log("Id incorrecto, introduzca de nuevo el id del vuelo")
    comprarVuelo(listaV);
}
let usuario = prompt("¿Eres administrador o usuario? ADMIN/USER");
let listaVuelos = [];
if (usuario == 'ADMIN'){
    crearVuelo();
    borrarVuelo();
}
if (usuario == "USER"){
    let precio = prompt("Indique un precio.");
    let mayorMenorIgual = prompt("Indique si desea buscar por encima, por debajo o un precio igual al indicado. my/mn/ig");
    if (mayorMenorIgual == "my"){
        for (j=0; j<flights.length; j++){
            if (flights[j].cost > precio){
                listaVuelos.push(flights[j]);
                console.log(flights[j]);
            }
        }
    }
    if (mayorMenorIgual == "mn"){
        for (j=0; j<flights.length; j++){
            if (flights[j].cost < precio){
                listaVuelos.push(flights[j]);
                console.log(flights[j]);
            }
        }
    }
    if (mayorMenorIgual == "ig"){
        for (j=0; j<flights.length; j++){
            if (flights[j].cost == precio){
                listaVuelos.push(flights[j]);
                console.log(flights[j]);
            }
        }
    }
    comprarVuelo(listaVuelos);
}