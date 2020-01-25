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

//Solicitamos nombre al usuario mediante prompt y damos la bienvenida con un alert.
var usuario = prompt("Bienvenido a Skylab Airlines. Por favor, introduce tu nombre.");
alert("Bienvenid@ " + usuario);

//Mostramos al usuario todos los vuelos disponibles.
alert("A continuación te mostraremos los vuelos disponibles para el día de hoy.")
for (var i = 0; i < flights.length; i++){
    if (flights[i].scale === false){
        alert("El vuelo con origen " + flights[i].to + " y destino " + flights[i].from + " tiene un coste de " + flights[i].cost + "€ y no realiza ninguna escala.");
    } else {
        alert("El vuelo con origen " + flights[i].to + " y destino " + flights[i].from + " tiene un coste de " + flights[i].cost + "€ y realiza escala.")
    }
}

//Calculamos el coste medio de los vuelos mediante el método reduce.
var costeTotal = flights.reduce(function (accumulator, currentValue){
    return accumulator + currentValue.cost;
}, 0)
var costeMedio = function(){
    return costeTotal / flights.length;
}
alert("El coste medio de los vuelos es de " + costeMedio().toFixed(2) + "€");

//Para calcular cúantos vuelos tienen escala aplicamos el método filter y, posteriormente, se los mostramos al usuario.
var numEscalas = flights.filter( function (flight){
    return flight.scale === true;
})
alert ("Actualmente disponemos de " + numEscalas.length + " vuelos con escala. Te los mostramos a continuación:");
for (var i = 0; i < numEscalas.length; i++){
    alert("Vuelo con origen " + numEscalas[i].from + " y destino " + numEscalas[i].to + " con un coste de " + numEscalas[i].cost + "€");
}

//Mostramos al usuario el destino de los últimos 5 vuelos. 
for (var i = flights.length - 5; i < flights.length; i++){
    alert ("Los destinos de los últimos 5 vuelos del día son: " + flights[i].to);
}

//Nos despedimos mediante un alert.
alert ("Gracias por visitar Skylab Airlines. Hasta pronto.");