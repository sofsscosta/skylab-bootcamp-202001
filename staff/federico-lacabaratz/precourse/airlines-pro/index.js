alert("Bienvenido a Skylab Airlines");

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

var user;

primerInput();

function primerInput () {
    user = prompt("Por favor inserte el nombre de usuario o administrador: \"USER\" - \"ADMIN\"");
    verify(user)
};

function verify(data) {
    
    if (data == "USER") {
        alert(`Bienvenido ${user} a Skylab Airlines.\nPresiona \"Ok\" para continuar y conocer todos los vuelos gestionados por esta terminal.`);
        infoAmiga();
        segundoInput();
        tercerInput();
        tercerInput2();
        
    } else if (data == "ADMIN") {
        alert(`Bienvenido ${user} a Skylab Airlines.\nPresiona \"Ok\" para continuar y conocer todos los vuelos gestionados por esta terminal.`);
        infoAmiga();
        segundoInput();
        cuartoInput();
        cuartoInput2();
        
        
    }else if (data === null) {
        primerEnd();
        
    }
    else if (data!== Number || data === "") {
        user = prompt("Por favor, introduce el nombre correcto. (USER) o (ADMIN)");
        verify(user);
    }    
    
};

function theEnd() {
    alert("Gracias por utilizar nuestros servicios, a continuación y como despedida, te dejamos una lista con los vuelos del dia de hoy! Hasta la próxima!");
    ultVuelos();
};

function primerEnd() {
        
    var exit = confirm("Quieres salir de la aplicación?");
        if (exit) {
            theEnd();
        } else {
            primerInput();
        }
};

var resultado;
    
function infoAmiga() {
        
    flights.forEach(function (vuelos) {
    
    if (vuelos.scale === true) {
            var scale = `y realiza escala`;
         
    } else if (vuelos.scale === false) {
            var scale = `y no realiza ninguna escala`;
            
    }
            
    resultado = `\nEl vuelo ${vuelos.id}, con destino ${vuelos.to} y que parte desde ${vuelos.from}, tiene un coste de ${vuelos.cost}€ ${scale}.`;
    console.log(resultado);
    });
    
};

function theEndDos() {
    alert("Hasta la próxima!");
    console.log("\nFin del programa");
};

function segundoEnd() {
    
    var exit = confirm("Quieres salir de la aplicación?");
    if (exit) {
        theEnd();
    } else {
        segundoInput();
    }
};

var segImp;

function segundoInput() {
    
    segImp = prompt("Quieres conocer mas detalles de nuestra terminal y sus vuelos?\nEscribe \"COSTES?\" para conocer el coste medio de los vuelos operados desde aqui.\nEscribe \"ESCALAS?\" para saber que vuelos tienen escalas.\nHaz click en \"Cancelar\" para salir de la aplicación.");
    segVerify(segImp);
};

function segVerify(data2) {

    if (data2 === "COSTES?") {
        costes();
        segundoInput();
        
    } else if (data2 === "ESCALAS?") {
        escalas();
        segundoInput();
    
    } else if (data2 === null) {
        segundoEnd();
    
    } else if (data2!== Number || data2 === "") {
        segImp = prompt("Por favor, Escribe \"COSTES?\" para conocer el coste medio de los vuelos operados desde aqui.\nEscribe \"ESCALAS?\" para saber que vuelos tienen escalas.\nHaz click en \"Cancelar\" para salir de la aplicación.");
        segVerify(segImp);
    
    }  
     
};

function costes() {
    
    var costs = flights.map(function(item) { 
        return item.cost;
        
    });
    
    var sum = costs.reduce(function (accumulator, currentValue){
        return accumulator + currentValue;
    }); 
    
    var avg = sum / costs.length;
    console.log(`\nEl coste medio de los vuelos de esta terminal es de ${avg.toFixed(2)}€`);
    
};

function escalas() {
    
    for (var i in flights) {
        
        if(flights[i].scale === true) {
            var scale = `y realiza escala`;
            
            console.log(`\nEl vuelo ${flights[i].id}, con destino ${flights[i].to} y que parte desde ${flights[i].from}, tiene un coste de ${flights[i].cost}€ ${scale}.`);
        }

    }

};

function ultVuelos(){
    
    for (i=flights.length-5; i<flights.length; i++) {
    
     if (flights[i].scale === true) {
        var scale = `y realiza escala`;
    
    } else if (flights[i].scale === false) {
        var scale = `y no realiza ninguna escala`;
       
    } 

        console.log(`\nEl vuelo ${flights[i].id}, con destino ${flights[i].to} y que parte desde ${flights[i].from}, tiene un coste de ${flights[i].cost}€ ${scale}.`);
    }
};

function tercerEnd() {
    
    var exit = confirm("\nHaz click en \"Ok\" salir de la aplicación o en \"Cancelar\"para realizar otra busqueda");
    if (exit) {
        theEndDos();
    }
    
};


function tercerInput() {

    var valorIntrod = parseFloat(prompt(`Introduzca su importe para comparar con los vuelos existentes`));

    var respuesta = prompt("Introduzca valor MAYOR, IGUAL o MENOR");

    for (var i=0; i<flights.length; i++) {

        
        if (flights[i].scale === true) {
            scale = " con escala";
                
        } else if (flights[i].scale === false) {
            scale = " sin escala";
    
        }
        
        if(respuesta === 'MAYOR' && flights[i].cost > valorIntrod) {
            console.log(`\nEl\"/\"Los vuelo\"/\"s con importe superior al que indicas es\"/\"son:\n${flights[i].id}, con destino: ${flights[i].to}, con origen: ${flights[i].from}, con coste de: ${flights[i].cost}€, ${scale}.`);
        
        } else if(respuesta === 'IGUAL' && flights[i].cost === valorIntrod) {
            console.log(`\nEl\"/\"Los vuelo\"/\"s que coincide\"/\"n con el importe que indicas es\"/\"son:\n${flights[i].id}, con destino: ${flights[i].to}, con origen: ${flights[i].from}, con coste de: ${flights[i].cost}€, ${scale}.`);
        
        } else if(respuesta === 'MENOR' && flights[i].cost < valorIntrod) {
            console.log(`\nEl\"/\"Los vuelo\"/\"s con importe inferior al que indicas es\"/\"son:\n${flights[i].id}, con destino: ${flights[i].to}, con origen: ${flights[i].from}, con coste de: ${flights[i].cost}€, ${scale}.`);
        
        }

    };

    tercerEnd();

};


function tercerInput2() {

    var selecId = parseFloat(prompt("Intruduzca el número de ID del vuelo que desee comprar"));

    for (var i=0; i<flights.length; i++) {

        if(flights[i].id == selecId) {
            alert(`Has comprado el vuelo: ${flights[i].id}, con destino: ${flights[i].to}, con origen: ${flights[i].from}, con coste de: ${flights[i].cost}€, ${scale}.`);
            tercerEnd();

        } 
         
    }
    
};

function cuartoInput() {
    
    if (flights.length >=15) {
        alert("Este sistema solo permite crear hasta 15 vuelos. Por favor intente esa cantidad o menos.");

    } else {
        var nuevosVuelos = prompt("Quieres añadir uno o mas vuelos? (Escribe \"SI\" o \"NO\"para volver al menu de opciones.) Ten en cuenta que solo podrás añadir hasta 15 vuelos.");

            if (nuevosVuelos === "SI") {
                var id = parseFloat(prompt(`Introduzca un nuevo ID.`));
                var to = prompt(`Introduzca nombre de ciudad destino.`);
                var from = prompt(`Introduzca numbre de ciudad origen.`);
                var cost = parseFloat(prompt(`Introduzca el costo del vuelo`))
                var scale = parseFloat(prompt(`Si el vuelo tiene escala, escriba \"TRUE\" y, caso contrario \"FALSE\".`));
                
                var incluir = flights.push({id, to, from, cost, scale});
                cuartoInput();
            } else {
                tercerEnd();

            }

    }

};


function cuartoInput2() {
            
    var quitaVuelos=prompt("Quisiera eliminar algún vuelo de la lista?\nEscriba\"SI\" o \"NO\"");
            
    if (quitaVuelos === "SI") {
        
        var idElimin = parseFloat(prompt("Introduza el ID del vuelo a eliminar"));
                    
        for(var i=0; i<flights.length; i++) {
                        
            if(flights[i].id == idElimin) {
            
                flights.splice(flights[i].id,1);
                    
                }
            }
    
    } else {
        tercerEnd();
    }
    
};


newOp();

function newOp() {
var exit2 = confirm("Quieres repetir el proceso?");    
    if (!exit2) {
        theEndDos();
    } else {
        primerInput();
    }    
};

