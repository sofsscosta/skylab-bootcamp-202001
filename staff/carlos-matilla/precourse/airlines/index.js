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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }]

    costeMedio = 0
    sumaPrecios = 0
    ultimosVuelos = flights.slice(-5)
    nombre = ''
    opcion = 0
;
    
function inicio() {

    nombre = prompt('Introduzca su nombre de usuario:')
    console.log('Hola ' + nombre + ', bienvenido a SkyLab Airlines.')
    console.log('')
    console.log('')
    console.log('Elija una opcion entre las disponibles marcando el numero de esta:')
    console.log('')
    console.log('1. Vuelos disponibles para el dia de hoy. \n2. Precio medio de nuestros vuelos.\n3. Vuelos con escala programados para hoy. \n4. Cinco ultimos vuelos del dia. \n5. Salir.')
    console.log('')
    console.log('')
    setTimeout ('opciones()', 8000); 
    
}


function opciones() {

    opcion = parseFloat(prompt('Escoge tu opcion'));
    
    switch(opcion) {
        case 1:
            console.log('VUELOS DISPONIBLES PARA EL DIA DE HOY:')
            console.log('')
            for(var i = 0; i < flights.length; i++) {
                if(flights[i].scale){
                    var escala = ', con escala';
                } else {
                    var escala = ', sin escalas';
                }
                console.log(flights[i].id + 1 + '. Vuelo con destino ' + flights[i].to + escala + ', procedente de ' + flights[i].from + ', con un coste de ' + flights[i].cost + ' Euros.')
                console.log('')
            }
            setTimeout ('opciones()', 6000); 
            break;

        case 2:
            console.log('PRECIO MEDIO DE NUESTROS VUELOS:')
            console.log('')
            for(var i = 0; i < flights.length; i++) {
                sumaPrecios += flights[i].cost ;
                costeMedio = sumaPrecios / flights.length;
            }
            console.log('El precio medio de nuestros vuelos ofertados para hoy es de: ' + costeMedio.toFixed(2))          
            console.log('')     
            setTimeout ('opciones()', 6000); 
            break;  

        case 3:
            console.log('VUELOS CON ESCALA PROGRAMADOS PARA HOY:')
            console.log('')
            console.log('Los vuelos programados para hoy con escala son: ')
            console.log('')
            for(var i = 0; i < flights.length; i++) {
                if(flights[i].scale){
                
                    console.log('El vuelo con destino ' + flights[i].to + ' desde ' + flights[i].from + '.')
                } 
            }
            console.log('')
            setTimeout ('opciones()', 6000); 
            break;

        case 4:
            console.log('CINCO ULTIMOS VUELOS DEL DIA:')
            console.log('')
            for(var i = 0; i < ultimosVuelos.length; i++) {

                if(ultimosVuelos[i].scale){
                    var escala = ', con escala';
                } else {
                    var escala = ', sin escalas';
                }
            
                console.log('Vuelo con destino ' + ultimosVuelos[i].to + escala + ', procedente de ' + ultimosVuelos[i].from + ', con un coste de ' + ultimosVuelos[i].cost + ' Euros.')
                console.log('')
            }
            console.log('')
            setTimeout ('opciones()', 6000); 
            break;  

        case 5:
            console.log('Tenga un buen dia. Hasta pronto!')     
            break;

        default:
            console.log('')
            console.log('Introduzca un valor valido.') 
            console.log('') 
            console.log('')
            opciones();
            break;
    }
    
}
inicio();