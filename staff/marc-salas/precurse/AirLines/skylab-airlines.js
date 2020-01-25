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
// Dades d'usuari
function presentacio (){
    var user = prompt('Bon dia, Benvingut a SkyLab Airlines, quin és el seu nom?','');
    console.log ('Benvingut ' + user);
} 
// Vols del dia
function volsDiaris (){
    console.log ('Els vols disponibles son els seguents:');
    for(x=0; x < flights.length; x++){
        if (flights[x].scale === true){
            var escala = 'te una escala'
        }else {
            var escala = 'no te escala'
        }
        console.log('El vol amb origen ' + flights[x].from +' amb direcció ' + flights[x].to + '\
te un cost de ' + flights[x].cost + '€ i '+ escala);
    }
}
// Cost mitja 
function costMitja (){
    let cost = 0;
    for(x=0; x < flights.length; x++){
        cost = cost + flights[x].cost;
    }
    cost = cost/(flights.length  -1);
    console.log('El cost mitja dels vols és el seguent: ' + cost + '€');
}
// Vols amb escala
function volEscala(){
    console.log('Els vols amb escala son els seguents:')
    for(x=0; x < flights.length; x++){
        if (flights[x].scale === true){
            console.log('El vol amb origen ' + flights[x].from +' amb direcció ' + flights[x].to);    
        }
    }
}
// Ultims vols 
function ultimsVols(){
    console.log('Els 5 últims vols del dia són els seguents:')
    let volsfinals = flights.slice(flights.length-5);
    for(x=0; x < volsfinals.length; x++){
        console.log ('El vol amb origen ' + volsfinals[x].from +' amb direcció ' + volsfinals[x].to)
    }
}
// Programa
presentacio ();
console.log('');
volsDiaris ();
console.log('');
costMitja ();
console.log('');
volEscala();
console.log('');
ultimsVols();

