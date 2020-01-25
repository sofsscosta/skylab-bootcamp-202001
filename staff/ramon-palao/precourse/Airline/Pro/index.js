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
// Declaramos la funcion admin, en la que dependiendo de la elección del administrador se invocará la función de añadir o eliminar
var admin = function() {
    var adminChoice = prompt ("¿Quieres AÑADIR o ELIMINAR vuelos?").toLowerCase()
    if (adminChoice === "añadir"){
        añadir();
    } else if (adminChoice === "eliminar"){
        eliminar();
    } else {
        alert ("Introduce acción válida (AÑADIR / ELIMINAR)");
        admin();
    }
}

// Declaramos función de añadir vuelos. 
// Si el administrador elige añadir, se le pedirá por prompt() los valores de cada una de las propiedades del objeto y se incluirá en el array flights mediante push()
// Se le mostrará al administrador cada vuelo añadido
// Si no quiere añadir más vuelos, se le mostrarán el listado de vuelos actualizado en un único alert.
// Si en el array hay 15 vuelos no dejará añadir más. 

var añadir = function() {
    do {
        var vuelosNuevos = [];
        var objArr = {};
        var añadirMas = confirm ("¿Deseas añadir un nuevo vuelo?");
        if (añadirMas){
            objArr.id = (flights[flights.length - 1].id) + 1;
            var añadirDestino = function (){
                var destino = prompt ("Añade el destino del vuelo")
                if (isNaN (destino) === false){
                    alert ("Introduce un destino correcto. No puedes introducir números");
                    añadirDestino();
                } else {
                    objArr.to = destino;
                }
            }    
            var añadirOrigen = function(){
                var origen = prompt ("Añade el origen del vuelo")
                if (isNaN (origen) === false){
                    alert ("Introduce un origen correcto. No puedes introducir números");
                    añadirOrigen();
                } else {
                    objArr.from = origen;
                }
            }
            var añadirCoste = function(){
                var costeVuelo = parseInt(prompt("Añade el coste del vuelo (sin el signo de la moneda)"));
                if (isNaN (costeVuelo) === true){
                    alert ("Introduce un importe correcto. Deben ser números");
                    añadirCoste();
                } else {
                    objArr.cost = costeVuelo;
                }
            }
            var añadirEscala = function(){
                var escalaVuelo = prompt ("Indica si el vuelo tiene o no tiene escala (true / false)").toLowerCase();
                if ((escalaVuelo === "true") || (escalaVuelo === "false")){
                    objArr.scale = escalaVuelo;
                } else {
                    alert ("Valor introducido incorrecto. Indica TRUE o FALSE");
                    añadirEscala();
                }
            }
            añadirDestino();
            añadirOrigen();
            añadirCoste();
            añadirEscala();
        flights.push(objArr);
        vuelosNuevos.push(objArr);
        for (var i = 0; i < vuelosNuevos.length; i++){
            alert ("Has añadido el vuelo con destino: " + vuelosNuevos[i].to + ", origen: " + vuelosNuevos[i].from + ", coste: " + vuelosNuevos[i].cost + "€ y escala: " + vuelosNuevos[i].scale);
        }    
        } else if (añadirMas === false){
            var volverAdmin = function (){
                var opcion = confirm ("¿Deseas acceder al menú de ELIMINAR vuelos?");
                if (opcion === true){
                    eliminar();
                } else if (opcion === false){
                    var opcionInicio = confirm ("¿Deseas volver a la página de inicio?");
                    if (opcionInicio === true){
                        airlines();
                    } else {
                        alert ("Gracias. A continuación te mostraremos todos los vuelos registrados en el sistema.");
                        alert (JSON.stringify(flights));
                        alert ("Hasta pronto");
                    }
                }
            }
            volverAdmin();   
        }
    } while ((añadirMas === true) && (flights.length < 15));
    if (flights.length >= 15){
        alert ("Has alcanzado el máximo permitido de 15 vuelos en el sistema");
        alert ("A continuación te mostraremos todos los vuelos registrados en el sistema.");
        alert (JSON.stringify(flights));
        var continuar = confirm ("¿Deseas acceder al menú de ELIMINAR vuelos?");
        if (continuar === true){
            eliminar();
        } else if (continuar === false){
            var continuarInicio = confirm ("¿Deseas volver a la página de incio?");
            if (continuarInicio === true){
                airlines();
            } else {
                alert ("Gracias por tu visita. Hasta pronto");
            }
        }
    }
}

// Declaramos función de eliminar vuelos.
// Eliminamos mediante el método splice()
// El sistema no permitirá eliminar más vuelos si sólo queda uno en el array. 
var eliminar = function() {
    do {
        var deleteVuelo = confirm ("¿Quieres eliminar un vuelo del listado?");
        if (deleteVuelo === true){
            alert ("Para eliminar vuelos debes introducir el ID del vuelo que desees eliminar. A continuación te mostraremos todos los vuelos registrados en el sistema.");
            alert (JSON.stringify(flights));
            var deleteId = parseInt(prompt ("Indica el ID del vuelo que deseas eliminar"));
            for (var i = 0; i < flights.length; i++){
                if (flights[i].id === deleteId){
                    alert ("El vuelo con ID " + deleteId + " con origen en " + flights[i].from + " y con destino en " + flights[i].to + " ha sido eliminado con éxito")
                    flights.splice(flights[i].id, 1);
                }
            }
        } else if (deleteVuelo === false){
            var volverAñadir = function (){
                var opcion = confirm ("¿Deseas acceder al menú de AÑADIR vuelos?");
                if (opcion === true){
                    añadir();
                } else if (opcion === false){
                    var opcionInicio = confirm ("¿Deseas volver a la página de inicio?");
                    if (opcionInicio === true){
                        airlines();
                    } else {
                        alert ("Hasta pronto");
                    }
                }
            }
            volverAñadir();
        }
    } while ((deleteVuelo === true) && (flights.length >= 2));
    if (flights.length < 2){
        alert ("No puedes eliminar más vuelos. Sólo queda uno.")
        alert ("A continuación te mostraremos el único vuelo registrado en el sistema.");
        alert (JSON.stringify(flights));
        var continuar = confirm ("¿Deseas acceder al menú de AÑADIR vuelos?");
        if (continuar === true){
            añadir();
        } else if (continuar === false){
            var continuarInicio = confirm ("¿Deseas volver a la página de incio?");
            if (continuarInicio === true){
                airlines();
            } else {
                alert ("Gracias por tu visita. Hasta pronto");
            }
        }
    }
}

// Declaramos funcion del usuario.
// Se mostrarán los vuelos disponibles en función de si el usuario elige mostrar vuelos con precio igual, mayor o menor al introducido en el prompt()
var user = function (){
    var userChoice = parseInt(prompt ("Bienvenido. Introduce el precio por el que deseas buscar un vuelo"))
    var mostrarCost = prompt ("¿Quieres que te mostremos los vuelos con un precio IGUAL, MENOR o MAYOR a " + userChoice + "€?").toLowerCase();
    var menorPrecio = [];
    var mayorPrecio = [];
    var igualPrecio = [];
    if (mostrarCost === "menor"){
        for (var i = 0; i < flights.length; i++){
            if (flights[i].cost < userChoice){
                alert ("El vuelo con ID " + flights[i].id + " tiene origen en " + flights[i].from + ", destino en " + flights[i].to + " y tiene un precio de " + flights[i].cost + "€");
                menorPrecio.push(flights[i]);
            }
        }
        if (menorPrecio.length === 0){
            alert ("Lo sentimos. Actualmente no disponemos de vuelos con un precio inferior a " + userChoice + "€");
            user();
        }
    } else if (mostrarCost === "mayor"){
        for (var i = 0; i < flights.length; i++){
            if (flights[i].cost > userChoice){
                alert ("El vuelo con ID " + flights[i].id + " tiene origen en " + flights[i].from + ", destino en " + flights[i].to + " y tiene un precio de " + flights[i].cost + "€");
                mayorPrecio.push(flights[i]);
            }
        }
        if (mayorPrecio.length === 0){
            alert ("Lo sentimos. Actualmente no disponemos de vuelos con un precio superior a " + userChoice + "€");
            user();
        }
    } else if (mostrarCost === "igual"){
        for (var i = 0; i < flights.length; i++){
            if (flights[i].cost === userChoice){
                alert ("El vuelo con ID " + flights[i].id + " tiene origen en " + flights[i].from + ", destino en " + flights[i].to + " y tiene un precio de " + flights[i].cost + "€");
                igualPrecio.push(flights[i]);
            }
        }
        if (igualPrecio.length === 0){
            alert ("Lo sentimos. Actualmente no disponemos de vuelos con un precio de " + userChoice + "€");
            user();
        }
    } else {
        alert ("Introduce dato válido (IGUAL / MENOR / MAYOR)");
        user();
    }
}

// En la función comprarVuelo() preguntaremos al usuario el ID del vuelo que desea comprar.
// Si el ID no es correcto volveremos a llamar a la función.
var comprarVuelo = function (){
    var confirmarCompra = confirm ("¿Desea comprar alguno de los billetes mostrados?");
    if (confirmarCompra === true){
        var idComprar = parseInt(prompt("Introduce el ID del vuelo que deseas comprar"));
        var idVuelo = [];
        for (var i = 0; i < flights.length; i++){
            if (flights[i].id === idComprar){
                idVuelo.push(flights[i]);
                alert ("Confirmamos que ha comprado el billete con origen " + flights[i].from + " y destino " + flights[i].to + " por " + flights[i].cost + "€. Gracias por su compra, vuelva pronto.");
            }
        }
        if (idVuelo.length === 0){
            alert ("Introduce un ID válido");
            comprarVuelo();
        }
    } else if (confirmarCompra === false) {
        var volverUser = confirm ("¿Desea volver a la página de inicio?");
        if (volverUser === true){
            airlines();
        } else {
            alert ("Gracias por tu visita, vuelva pronto");
 
        }
    }
}

// En la función airlines() saludamos al usuario y preguntamos si quiere entrar como admin o user.
// Invocaremos las anteriores funciones en función de la elección del usuario.
var airlines = function () {
    var saludo = prompt ("Bienvenido a Skylab Airlines. Introduce tu nombre");
    if((saludo === "")||(saludo === null)){
        alert ("Introduce tu nombre, por favor");
        airlines();
    }
    var identificar = prompt ("Hola " + saludo + ", ¿Quieres entrar como ADMIN o como USER?").toLowerCase()
    if (identificar === "admin"){
        admin();  
    } else if (identificar === "user"){
        user();
        comprarVuelo();
    } else if (identificar === null){
        var salirAirlines = confirm ("¿Deseas salir de Airlines?");
        if (salirAirlines === true){
            alert ("Gracias por tu visita, vuelve pronto");
        } else {
            airlines();
        }
    } else {
        alert ("Introduce un nombre correcto (ADMIN / USER)");
        airlines();
    }    
} 
airlines();