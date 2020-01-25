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

function llamarFuncion() {
    saludar()
    mostrarVuelos()
    mostrarCosteMedio()
    realizaEscala()
    ultimosDestinos()
}

function saludar() {
    var userName = prompt('¿Cuál es tu nombre?')
    console.log(`¡Hola, ${userName}!`)
}

function mostrarVuelos() {
    for(var i = 0; i < flights.length; i++) {
        var escala = ' '
        if(!flights[i].scale) {
            escala = ' no '
        } 
        console.log(`El vuelo con origen ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y${escala}realiza escalas.
        `)
    }

}

function mostrarCosteMedio() {
    var sum = 0
    for(var i = 0; i < flights.length; i++) {
        sum += flights[i].cost
    }
    var numOfValues = parseInt(flights.length)
    var media = parseInt(sum / numOfValues)
    console.log(`El coste medio de los vuelos es de ${media}€.`)
}

function realizaEscala(){
    var countEscala = 0
    for(var i = 0; i < flights.length; i++)
    {
        if(flights[i].scale){
            countEscala++
        }
    }
    console.log(`Hay ${countEscala} vuelos que realizan escalas.`)
}

function ultimosDestinos() {
    var ultimosVuelos = ''
    var i = flights.length - 5
    var l = flights.length
    var ult = flights.length - 1
    var penult = flights.length - 2
    for(i; i < l; i++) {
        if(i == ult) {
            ultimosVuelos += `y ${flights[i].to}`
        }else if(i == penult) {
            ultimosVuelos += `${flights[i].to} `
        }else {
            ultimosVuelos = ultimosVuelos + `${flights[i].to}, `
        }
    }
    console.log(`Los 5 últimos vuelos de hoy van a ${ultimosVuelos}.`)
}

llamarFuncion()
