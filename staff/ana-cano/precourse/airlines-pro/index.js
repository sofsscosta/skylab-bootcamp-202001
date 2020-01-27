
var flight = [
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];
    
const maxVuelos = 15;

// Visualizar vuelos
function verVuelos(array) {
    alert(JSON.stringify(array, null, 1)); 
}

// Buscar vuelo por precio
function returnFlight(array, number) {
    var index = -1;
    for (var i = 0; i < array.length; i++) {
        if (parseInt(array[i].cost) == number) {
            index = i;
        }
    }
    return index;
}

// Function añadir vuelos
function masVuelos() {
    let origen = prompt('¿Qué origen?');
    let destino = prompt('¿Qué destino?');
    let coste = prompt('¿Qué coste?')
    let escalas = prompt('¿Tiene alguna escala? (si/no)');
    
    flight.push({
        id: flight.length, to: destino, from: origen, cost: parseInt(coste), scale: escalas
    });

}

//Empieza el programa PRO ====
var adminUs = prompt('¿Eres usuario o admin?(admin/user)');
var vuelosQuedan = 0;
// Begin admin
if (adminUs.toUpperCase() === "ADMIN") {

    do {
        var anadirVuelos = prompt('¿Deseas añadir algún vuelo?(si/no)').toUpperCase();
        if (anadirVuelos === 'SI') {
            masVuelos();
        } else {
            alert ('Te mostraremos todos los vuelos');
            verVuelos(flight);
            console.log(flight);
            anadirVuelos = 'NO';
        }
    } while ((anadirVuelos === 'SI') && (flight.length < maxVuelos ))

    if (flight.length >= maxVuelos ) {
        alert ('Te has pasado, el máximo de vuelos permitido són 15, así que procedermos a mostrártelos en pantalla');
        verVuelos(flight);
    }

} else if (adminUs.toUpperCase() === "USER") {
    var buscarPorPrecio = prompt('¿Qué importe estas buscando para tu vuelo?');
    var flightLength = 0;
    buscarPorPrecio = parseInt(buscarPorPrecio);
    
    // Ordenar array object de vuelos
    flight.sort(function (a, b) {
        if (a.cost > b.cost) {
          return 1;
        }
        if (a.cost < b.cost) {
          return -1;
        }
        return 0;
      });

    for (var i=0; i<flight.length; i++) {
        if (flight[i].cost === buscarPorPrecio) {
            alert ("El vuelo de igual precio és" + flight[i].cost +".")
            break;
        } else if (flight[i].cost !== buscarPorPrecio) {
            alert ('No hay ningún vuelo con el precio introducido.');
            break;
        }
    
    }

    flightLength = flight.length - 1;
    console.log(flightLength);
    alert ("El vuelo más bajo és " + flight[0].from + " destino " + flight[0].to + " con coste " + flight[0].cost + ".");
    alert ("El vuelo más alto és " + flight[flightLength].from + " destino " + flight[flightLength].to + " con coste " + flight[flightLength].cost + ".");


} else {
    console.log('Debes seleccionar entre ADMIN o USER');
}









            


