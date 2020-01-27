//airlines 
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

    // 1 Preguntar nombre usuario y dar Bienvenida
function airlinesName() {
    var nombre = prompt('¿Cómo te llamas?');
    alert('Bienvenido a Skylab Airlines ' + nombre);
// 2 Ver datos de forma amigable, hice un prompt pero no entiendo como poner todo en el mismo mensaje
alert('A continuación verás todos los vuelos que disponemos');
for (var i = 0; i < flight.length; i++) {
        if (flight[i].scale === true) {
            escalator = ' realiza una escala.';
        } else {
            escalator = ' no realiza ninguna escala.'
        };
        alert('El vuelo con origen ' + flight[i].from + ', y destino: ' + flight[i].to + ' tiene un coste de ' + flight[i].cost + ' y' + escalator + "\n");
    }
// 3 Ver coste medio de los vuelos
    var auxTotalFlights = 0;
    for (var i = 0; i < flight.length; i++) {
        if (i == 0) {
            auxTotalFlights = flight[0].cost;
        } else {
            auxTotalFlights += flight[i].cost;
            precioMedioVuelos = (auxTotalFlights / 11)
        }
    }
    alert('Precio medio vuelos ' + precioMedioVuelos.toFixed(2) + ' €');

    // 4 Número de escalas
    var numeroEscalas = ""
    for (var i = 0; i < flight.length; i++) {
        if (flight[i].scale === true) {
            numeroEscalas += 1;
        }
    }
    alert('Número total de escalas ' + numeroEscalas.length);



// 5 últimos vuelos 
alert('A continuación mostraremos los ultimos 5 vuelos del día')    


    // Mostrar usuario 5 últimos vuelo día
    for (var i = 6; i < flight.length; i++) {
        if (flight[i].scale === true) {
            escalator = ' realiza una escala.';
        } else {
            escalator = ' no realiza ninguna escala.'
        };
        alert('Los últimos vuelos del día són ' + flight[i].from + ' destino: ' + flight[i].to + ' tiene un coste de ' + flight[i].cost + ' y' + escalator);

    }
}





