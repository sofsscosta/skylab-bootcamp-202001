
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


//Funcion para informar sobre las escalas de forma amigable (reutilizada más adelante):

function scales (num) {
    if (flights[num].scale) {
        return `has a scale`;
    } else {
        return `doesn\'t have a scale`
    }
}


//Funcion principal donde se pueden ver los vuelos:

function whichFlights () {

    var sentence = []
    for (var num in flights) {
        sentence += [`The flight number ${flights[num].id} flies from: ${flights[num].from} \
and goes to: ${flights[num].to}. Has a cost of ${flights[num].cost}€ and ` + scales(num) + '.\n \n'];
        
    } 

    console.log(sentence)

    moreInfo()

}









// FINITO AMIGOS


// Ahora el pro


// Heheh he morrido un poquito con ese
// Imaginando lo que me espera ^o^ uuuuuh








pro()



// Opción para inserir nuevos vuelos por el administrador:

//Que empieze lo spaghetti! ~~~~~~~~~~~ ºoº ~~~~~~~~~~~~~




function funNewFlight () {

    var newFlight = {id: 10 ,to: '', from: '', cost: '', scale: false }

    destination()
    departure()
    cost()
    addFlightNumber()
    
    function addFlightNumber() {

        var newFlightNumber = 0

        for (let i = 0 ; i < flights.length ; i++) {    

            if (flights[i].id > newFlightNumber) {  

                newFlightNumber = flights[i].id 
            
        }

        newFlightNumber += 1
        
        newFlight.id = newFlightNumber
            
        }
    }
    
    
    function destination() {
    
        var destination = prompt ('Introduce the destination of your flight')
        return newFlight.to = destination
    
    }
    
    function departure() {
    
        var departure = prompt ('Introduce the departure of your flight')
        return newFlight.from = departure
    
    }
    
    function cost() {
    
        var cost = parseFloat(prompt ('Introduce the cost of your flight'))
        
        if (!isNaN(cost)) {
            return newFlight.cost = cost
        } else {
            alert('Please introduce a number.')
            cost()
        }
    
    }
    
    function scale() {
    
        var scale = prompt ('If your flight has a scale, press Y. If it doesn\'t, press N.').toUpperCase()

        if (scale === 'Y') {newFlight.scale = true
                            return `has a scale`}
        else if (scale === 'N') {newFlight.scale = false
                                return `doesn't have a scale`}    
        else {newFlight.scale = false
                return `doesn't have a scale`}
            
    }
    

    if (newFlight.id === 15) { 

        alert('You have reached the maximum of added new flights!')

        var isDelete = prompt('If you want to delete flights, press D. \
To go back, press B').toUpperCase()

            if (isDelete === 'D') {

                deleteFlights()

            } else if (isDelete === 'B') {

                admin()

            } else if (isDelete == cancel) {

                alert ('Bye bye!')

            }

    }

    console.log(`You have introduced flight number ${newFlight.id}, flying to \
${newFlight.to} and departing from ${newFlight.from}. It has a cost of ${newFlight.cost}€ \
and it ` + scale(newFlight) + `.`)

    flights.push(newFlight)

    admin()


}



// Opción para apagar vuelos por parte del administrador:


function deleteFlights() {

    var whichFlight = Number(prompt('Introduce the number of the flight you want to delete.'))

    console.log(`You have deleted flight number ${whichFlight}, coming from\
 ${flights[whichFlight].from} and going to ${flights[whichFlight].to}. This flight had a cost \
 of ${flights[whichFlight].cost} and it ${scales(whichFlight)}.`)

    for (let i = 0; i < flights.length ; i++) {
    if (whichFlight === flights[i].id){
        flights.splice(i,1)
        }

    }

    admin()

}



// Opción para ver los vuelos por parte del administrador:


function whichFlights2 () {

    var sentence = []
    for (var num in flights) {
        sentence += [`The flight number ${flights[num].id} flies from: ${flights[num].from} \
and goes to: ${flights[num].to}. Has a cost of ${flights[num].cost}€ and ` + scales(num) + '.\n \n'];
        
    } 

    console.log(sentence)

    admin()

}



// Menú del administrador:


function admin() {

    var admin = prompt(`If you want to introduce more flights, press M.
If you want to delete flights press D.
To see the flies available so far write S.
To go back press B.
To finish press F.`).toUpperCase()
    
                    if (admin === 'M') {
    
                        funNewFlight()
    
                    } else if (admin === 'D') {
    
                        deleteFlights()
    
                    } else if (admin === 'S') {
                    
                        whichFlights2()
                    
                    } else if (admin === 'F') {

                        alert('Bye bye, thank you for your visit!')

                    } else if (admin === 'B') {

                        pro()

                    } else if (admin !== null) {

                        alert ('Please introduce either N for new flight, \
D for delete flights, S for consulting the flights available or F to finish.')
                        pro()

                    }

}



// Opción de ver el vuelo más caro por el usuário:


function expensive() {

    var costs = []
        
        for (var i in flights) {

            costs.push(flights[i].cost)

            }

        var flightCost = Math.max.apply(null, costs)

        for (var i in flights){

            if (flights[i].cost === flightCost) {

                console.log(`The most expensive flight we have today is flight number ${flights[i].id}, \
going to ${flights[i].to} and departing from ${flights[i].from}. \
Has a cost of ${flightCost}€ and it ${scales(i)}.`)

        }
    }

    user()

}



// Opción de ver el vuelo correspondiente al precio indicado por el usuário:


function equalPrice() {

    var introducedPrice = parseFloat(prompt ('Introduce a price and we\'ll show you the corresponding flight\
, if there is one available.'))
    var isThereFlight = false

        for (var i in flights) {

            if (flights[i].cost === introducedPrice) {

                isThereFlight = true
                console.log(`The flight we have today for ${introducedPrice}€ is flight number ${flights[i].id}, \
going to ${flights[i].to} and departing from ${flights[i].from}. \
It ${scales(i)}.`)

            }

            }

    if (!isThereFlight) alert ('There is no flight which that price for today.')

    user()

}




// Opción de ver el vuelo más barato por el usuário:


function cheap() {

    var costs = []
      debugger  
        for (var i in flights) {

            costs.push(flights[i].cost)

            debugger}

        var flightCost = Math.min.apply(null, costs)

        for (var i in flights) { debugger

            if (flights[i].cost === flightCost) {

                console.log(`The cheapest flight we have today is flight number ${flights[i].id}, \
going to ${flights[i].to} and departing from ${flights[i].from}. \
Has a cost of ${flightCost}€ and it ${scales(i)}.`)

        }
    }

    user()

}


//Opción de comprar por parte del usuário:


function buy () {

    var input = parseFloat(prompt('Please introduce the ID number of the flight you would like to purchase.'))
    var trueInput = false
        
        for (var i in flights) {
            input == flights[i].id ? trueInput = true : ''
        }

        if (trueInput) {

            confirm(`Confirm to purchase:
Flight number ${flights[input].id}, \
going to ${flights[input].to}, coming from ${flights[input].from}, with a cost of \
${flights[input].cost}€, being that it ${scales(input)}.`)

                    confirm ? alert(`Thank you for your purchase!`) : user()

        } else {
            alert('Please introduce a valid ID.')
            user()
        }
        

}



// Menu del usuário:



function user() {

    var userInput = prompt(`Here you can consult our flights for today!
For consulting our most expensive flight press E.
For introducing a price and see which is the corresponding flight, press P.
For consulting our cheapest flight, press C.
To buy a flight press B.
To go back press G.`).toUpperCase()

    if (userInput === 'E') {

        expensive()

    } else if (userInput === 'P') {

        equalPrice()

    } else if (userInput === 'C') {

        cheap()

    } else if (userInput === 'B') {

        buy()

    } else if (userInput === 'G') {

        pro()

    }


}





// Aquí está la funcion de iniciación, preguntando por user o administrador:


function pro() {

    var input = prompt(`If you are an administrator press A.
If you are an user press U.
To finish press F.`).toUpperCase()

        if (input === 'A') {

            admin()

        } else if (input === 'U') {
            
            user()

        } else if (input === 'F') {

            alert ('Bye bye!')

        } else if (input !== null) {

            alert('Please introduce either A for administrator, U for user or F to finish.')
            pro()

        } 
}






//Quando introduzo mais dados não funciona o voo mais barato ou mais caro... why?