
//Data sobre los vuelos:

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


insertName()


//Funcion para verificar se el usuário introduce su nombre sen numeros:

function verify(name) {
    if (!isNaN(name)) {
        alert('Please introduce your name using letters ;)');
        return false
    } else {
        return true
    };
};


// Funcion para introducir el nombre:


function insertName () {

    var name = prompt ('Welcome to Skylab Airlines! Please insert your name:')

    // Aquí empieza un poco di spaghetti <3:

    if (verify(name)) {

        if (window.confirm (`Hello ${name}!\ 
Would you like to see the flights we have for today?`)) { 

            whichFlights()

            } else { alert ('Thanks for your visit!')}

     } else { insertName() }
}


// Funcion para calcular la media de los vuelos:

function averageFlights() {

    var total = 0;
    for(var i = 0; i < flights.length; i++) {
    total += flights[i].cost;
    }
    var avg = total / flights.length;

    return `The average price of our flights is ${Math.floor(avg)}.`
}


// Funcion para decir cuantos vuelos tienen escalas:

function manyScales () {

    var total = 0;
    for(var i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) total++

}
    return `A total of ${total} of our flights have a scale.`
}


// Funcion para decir cuales son los ultimos vuelos del día:

function lastFlights () {

    var last = [];
    for (var i = flights.length - 5; i < flights.length; i++) {
        if (i === flights.length - 1) {last += flights[i].to}
        else {last += flights[i].to + ', '}
    }

    return `The last flights of today are with the destinations of ${last}.` 

}


//Funcion para preguntar se el usuário quiere más informaciones (las ultimas 3 funciones de arriba)

function moreInfo(){

    if (confirm ('Would you like to see more information on our flights?')) {
        console.log (averageFlights() + '\n \n' + manyScales() + '\n \n' + lastFlights())

    } else {
        alert ('Thanks for your visit!')
    } 

}


//Funcion principal donde se pueden ver los voos:


function whichFlights () {

    var sentence = []
    for (var num in flights) {
        sentence += [`The flight number ${flights[num].id} flies from: ${flights[num].from} \
and goes to: ${flights[num].to}. Has a cost of ${flights[num].cost} and ` + scales(num) + '\n \n'];
        
    } 

    function scales (num) {
        if (flights[num].scale) {
            return `has a scale.`;
        } else {
            return `doesn\'t have a scale.`
        }
    }

    console.log(sentence)

    moreInfo()

}


// FINITO AMIGOS

