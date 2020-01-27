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

//función para calcular el coste medio de los vuelos
var sum=0
function mediumCost(){
    for(i=0;i<=flights.length-1;i++)
    sum+=flights[i].cost
    var mean=sum/flights.length
    alert('Coste medio vuelos: '+ mean.toFixed(2)+'€');
};
//función para mostrar los vuelos
function itinerary(){
    for(let i in flights){
        if(flights[i].scale===false){
        console.log(`El vuelo con origen: ${flights[i].from}; destino: ${flights[i].to}; tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala\n`)
        }else{
        console.log(`El vuelo con origen: ${flights[i].from}; destino: ${flights[i].to}; tiene un coste de ${flights[i].cost}€ con escala\n`)  
        }
    } 
};

//función para mostrar los vuelos con escala
function scale(){
    for(let i in flights){
        if(flights[i].scale===true){
            console.log('Vuelo con escala:'+`Origen: ${flights[i].from}; destino: ${flights[i].to}`)
        }
    }
};

//función 5 últimos vuelos del día
function lastFlights(){
    console.log('Ultimos vuelos del día:\n');
    for(i=flights.length-5;i<flights.length;i++){
        console.log(`Vuelo con destino: ${flights[i].to}; con origen: ${flights[i].from}; con un coste de ${flights[i].cost}€; vuelo con escala: ${flights[i].scale}`)
    }
};

//función añadir vuelos

function addFly(){
    if(flights.length>=15){
        alert('Lo sentimos, ya tiene 15 vuelos, no puede crear mas');
    }else{
        var add=prompt('¿Quiere crear un nuevo vuelo?(YES/NO)').toUpperCase();
        switch(add){
            case 'YES':
                var id=parseInt(prompt('Introduzca ID'));
                var to=prompt('Introduzca TO');
                var from=prompt('Introduzca FROM');
                var cost=parseInt(prompt('Introduza COST'));
                var scale=prompt('¿vuelo con escala?(TRUE/FALSE)');
                var inclues=flights.push({id,to,from,cost,scale});
                addFly();
                break;
            case 'NO':
                alert('OK, gracias.');
                break;
        }
    }
};
//función eliminar vuelos

function restFly(){
        var rest=prompt('Quiere eliminar un vuelo?(YES/NO)').toUpperCase();
        switch(rest){
            case 'YES':
                var answerId=parseInt(prompt('Introduza el ID del vuelo'));
                for(i=0;i<flights.length;i++){
                    if(flights[i].id==answerId){
                    flights.splice(flights[i].id,1)
                        }
                    }
                break;
            case 'NO':
                break;
        }
};

//función mostrar vuelos según importe

function byPrice(){
    var yourPrice=parseInt(prompt('Introzca un importe'))
    var answerPrice=prompt('Busqueda de vuelos con importe MENOR, MAYOR o IGUAL que el indicado.').toUpperCase();
    switch(answerPrice){
        case 'MAYOR':
            console.log(`Los vuelos con importe superior a ${yourPrice}€ son:`)
            for(i=0;i<flights.length;i++){
                if(flights[i].cost>yourPrice){
                console.log(`id:${flights[i].id}; Origen: ${flights[i].from}; destino: ${flights[i].to}; precio: ${flights[i].cost}€; escala: ${flights[i].scale}`)   
                }
            }
            break;
        case 'MENOR':
            console.log(`Los vuelos con importe inferior a ${yourPrice}€ son:`)
            for(i=0;i<flights.length;i++){
                if(flights[i].cost<yourPrice){
                console.log(`id:${flights[i].id}; Origen: ${flights[i].from}; destino:  ${flights[i].to}; precio: ${flights[i].cost}€; escala: ${flights[i].scale}`)   
                }
            }
            break;
        case 'IGUAL':
            console.log(`Los vuelos de ${yourPrice}€ son:`)
            for(i=0;i<flights.length;i++){
                if(flights[i].cost==yourPrice){
                console.log(`id:${flights[i].id}; Origen: ${flights[i].from}; destino: ${flights[i].to}; precio: ${flights[i].cost}€; escala: ${flights[i].scale}`)   
                }
            } 
            break; 
    }
    var answer=prompt('¿Desea realizar mas consultas?(YES/NO)').toUpperCase();
        if(answer=='YES'){
            byPrice();
        }else{
            var select= prompt('Introduzca el ID del vuelo que desea comprar')
            for(i=0; i<flights.length; i++){
                if(flights[i].id==select){
                alert(`El vuelo comprado es id:${flights[i].id}; Origen: ${flights[i].from}; Destino:${flights[i].to};precio: ${flights[i].cost}€; escala: ${flights[i].scale} `)
                }
            }
            alert('Gracias por su compra, vuelva pronto.')
        }
};

//Función ejecución programa(1ª parte)
function airlines(){
    var name=prompt('Introduce tu nombre');
    var answer=alert(`${name}, bienvenido/a a Skylab Airlines`);
        itinerary();
            mediumCost();
                scale();
                    lastFlights();
};   
     
//Función ejecución parte PRO
function airlinesPro(){
    airlines();
    var questionUser=prompt(('¿ADMIN o USER?')).toUpperCase();
    switch(questionUser){
        case 'ADMIN':
            addFly();
            restFly();
            break;
        case 'USER':
            byPrice();
            break;
    }
};

airlinesPro();