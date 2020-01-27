

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



function welcome (){ //FUNCIÓN DE ENTRADA AL PROGRAMA I INTRODUCCION DEL NOMBRE  
    
alert ("BienVenido a las lineas Aereas Skylab\n ");
var nombreUsusario = prompt("Introduzca el nombre de usuario: ");
return nombreUsusario; 
};

var usuario = welcome(); // ASIGNAMOS A LA VARIABLE USUARIO EL NOMBRE QUE HEMOS OBTENIDO EN LA FUNCION BIENVENIDA nombreUsuario


function flightsday (){   // MOSTRAMOS POR PANTALLA LOS VUELOS DEL DIA CON EL NOMBRE DE USUARIO DE LA FUNCION BIENVENIDA
    console.log("estos son los vuelos para el dia de hoy señor/a " + usuario + "\n");
    flights.forEach(element => {
        console.log("id: "+ element.id + " to: "+ element.to + " from: " +element.from + " cost: " +element.cost +"€" + " scale: "+ element.scale)
    });
}



function middlecost (){  //HACEMOS UN BUCLE POR EL ARRAY I EN CADA POSICION IMPRIMIMOS POR TERMINAL EL OBJETO .COST 
    var auxCost = 0;
    for(var i =0; i < flights.length; i++){
        console.log("el coste del vuelo con id: "+flights[i].id +" es: "+ flights[i].cost+ "€")
        auxCost = flights[i].cost + auxCost; //HACEMOS ACUMULADOR I LUEGO INVOCAMOS PARA HACER LA DIVISION
       }
       console.log("coste MEDIO de todos los vuelos es: " + (auxCost/11).toFixed(2)) 
   }




function flightswithscale (){ //COMPROBAMOS QUE VUELOS TIENEN ESCALA I LO MOSTRAMOS POR TERMINAL
    for(var i =0; i < flights.length; i++){
        if (flights[i].scale){
           console.log("los vuelos con escala son: "+"id:"+ flights[i].id + " " + "de "+ flights[i].from + " a " + flights[i].to) 
        }
    } 
}

function lastflights(){
    for (var i =0; i< flights.length; i++){
        if (flights[i].id >= 5)
        console.log("los últimos vuelos para el dia de hoy son: "+ flights[i].id +" "+ flights[i].to)
    }
}

flightsday(); 
flightswithscale();
lastflights();
middlecost();



////////////////////PART PRO //////////////////////////////////////
function validadorPrompt (valor){
    if (valor === ""){
        console.log("no puede dejar el campo vacío, intentelo otra vez")
        return 
    } else if (valor === null){
        adios();
    } else {
        validate = true;
        return validate
    } 

}

function validadorPrompt1 (valor){
    
    if(!valor) {
        console.log("no puede dejar el campo vacío, intentelo otra vez")
        return undefined
    } else {
        var result = Number(valor)
        
        if(isNaN(result)) {
            if (valor === null){
                return false
            } else {
                return true
            }
        } else {
            return result
        }

    }


     

}

setTimeout(typeUser,2000); //preguntem si es administrador i fem un delay de 2000 msg

function bye(){ //despedida del programa
    var exit = confirm("está usted seguro que quiere salir?")
    exit === true ? 
    (console.log("vuelva pronto."),alert("vuelva pronto."), validate = true) 
    : typeUser()
}

var existUser = false;
var tipouser;
var validate = false;



function flightcreation(origen, destino, precio, escala ) {
    var id = flights.length
    flights.push({ id, to: origen, from: destino, cost: precio, scale: escala })
}

function question (index) {
    switch(index) {
        case 1:
            return prompt("diga el destino: ");
        case 2:
            return prompt("diga el origen: ");
        case 3:
            return prompt("diga el PRECIO del destino: (solo números)");
        case 4:
            return prompt("harà escala el vuelo?: si/no");

    }
}


function typeUser (){ // funcion donde indicamos si somos administrador o no i en funcion de eso tendremos unos privilegios u otros
    if (existUser=== false){
    tipouser = confirm("Es usted Administrador? ")
    existUser = true
    }
    if (tipouser===true){  //aqui SI somos administradores
    var opcion = prompt("escoja la opcion: " + "\n" + "opcion 1: añadir vuelos\n" + "opcion 2: eliminar vuelos\n");    
    var respuestas = [];
    switch (opcion){ 
            case "1" : ("añadir vuelos.");
                var repeatAdd; 
                admin(1)
                function admin (index) {
                    if(flights.length < 15) {
                        if (index === 3){
                            do{         //hacemos este loop para comprobar que el valor introducido no sea ni null ni vacío
                                
                                var tonuevo = question(index);
                                var pattern = /\d/;
                                var validate = validadorPrompt1(tonuevo);
                                var costnuevoInt = parseInt(validate);
                                var validaPattern = pattern.test(costnuevoInt)
                                // var costeType =  isNaN(costnuevoInt);
                            } while (validate === undefined || validaPattern === false)
    
                        } 
                        if (index === 1 || index === 2 ){
                            do{         //hacemos este loop para comprobar que el valor introducido no sea ni null ni vacío
                                var pattern = /\D/;
                                var tonuevo = question(index);
                                var validate = validadorPrompt1(tonuevo);
                                var validaPattern = pattern.test(tonuevo)
                            } while (validate === undefined || validaPattern === false)
                            
                        }
                        
                        if (index === 4){
                            var pattern = /(si|no)/
                            var tonuevo = question(index)
                            var validate = validadorPrompt1(tonuevo)
                            
                            if (validate === "si"){
                                tonuevo = true
                            }else tonuevo = false

                        }
                        index++
                        respuestas.push(tonuevo)
                        
                        if(index < 5) {
                            if(validate === false) {
                                bye()
                            } else {
                                admin(index)
                            }
                        }

                        flightcreation(respuestas[0], respuestas[1], respuestas[2], respuestas[3] )

                        console.log("el nuevo vuelo es: " + "id: " + flights[flights.length-1].id + " to: " + flights[flights.length-1].to + " from: " + flights[flights.length-1].from + "de coste: " + flights[flights.length-1].cost + "i escala: " + flights[flights.length-1].scale);
                        console.log(flights)
                        console.log("solo puede añadir " + (16 - flights.length)+ "vuelos")                       

                    }
                        repeatAdd = prompt("quiere añadir más vuelos? (si/no) ")
                        if (repeatAdd === "si"){
                            typeUser()
                        }else if (repeatAdd === "no"){
                            var salir = confirm("quiere usted volver a la pantalla de inicio? ")
                            salir ? typeUser() : bye();
                        }
                    }
                break;
            case "2" : ("eliminar vuelos."); // aqui eliminamos una entrada i lo printamos por pantalla
            var numId = prompt("digame el numero de identificacion de vuelo para eliminarlo con un 0 delante si es inferior a 10: ");
            var numIdInteger = parseInt(numId);
                for (var i=0; i < flights.length-1;i++){
                    if(numIdInteger === flights[i].id){
                    var borrarVuelo = confirm("está usted seguro de eliminar el vuelo: " + "id: "+ flights[i].id + " de "+ flights[i].from+ " a " + flights[i].to+ " ?");
                        if(borrarVuelo){
                            delete flights[i];
                            console.log(flights);
                        }
                        else{alert("Gracias por su tiempo")}
                    } 
                } 
            break;
                default : alert("No ha escogido ninguna opcion viable");
            break;
        }
    } else{ //aqui NO somos Administradores por lo tanto solo podemos consultar precios de biletes (+/-/=)
        var precioBilleteString = prompt("indique el precio de su billete");
        var precioBillete = parseInt(precioBilleteString) 
        var opcion2 = prompt("indique si:\n" + "1. busca un precio mas alto\n"+"2. un precio más bajo\n" + "3. un precio igual al suyo\n")
        switch (opcion2){
            case "1" : ("busca un precio mas alto.");
            for (var i = 0; i<flights.length-1; i++){
                if(precioBillete < flights[i].cost){
                    console.log("estos son los vuelos con un precio mas alto: " + "id: "+flights[i].id +" de "+ flights[i].from +" a "+flights[i].to+ " coste " + flights[i].cost)
                }
            }
            break;
            case "2" : ("2.un precio más bajo.");
            for (var i = 0; i<flights.length-1; i++){
                if( flights[i].cost < precioBillete){
                    console.log("estos son los vuelos con un precio mas bajo: " + "id: "+flights[i].id +" de "+ flights[i].from +" a "+flights[i].to+ " coste " + flights[i].cost)
                }
            }
            break;
            case "3" : ("un precio igual al suyo");
            for (var i = 0; i<flights.length-1; i++){
                if(precioBillete === flights[i].cost){
                    console.log("estos son los vuelos con un precio igual: " + "id: "+flights[i].id +" de "+ flights[i].from +" a "+flights[i].to+ " coste " + flights[i].cost)
                 } 
            }
            break;
        }setTimeout(bye,3000); // delay para despedida
    }
}



