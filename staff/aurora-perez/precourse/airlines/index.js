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

function aerolinea () {
    var nombre = prompt('Bienvenido/a a Skylab aerolineas, nos complace que nos haya elegido como compañía de vuelo. '+
    'Por favor, indique su nombre completo a continuación:');
    var bienvenida= alert('Buenos días '+nombre+'.');
    var i 

    //funcion declarar todos los vuelos

    function itinerario (){
        for (i in flights ){
         if (flights[i].scale) {
            alert('El vuelo '+ flights[i].id+ ' con origen '+flights[i].to + ', con destino a '+flights[i].from + ', tiene un coste de '+flights[i].cost+'€ con escala.');
          } else {
            alert('El vuelo '+ flights[i].id+ ' con origen '+flights[i].to + ', con destino a '+flights[i].from + ', tiene un coste de '+flights[i].cost+'€ sin escala.');
          };
       };
    }; 

    itinerario();

    function costeMedio () {
     var calculoCoste
     var sumaTotal =0
     for (i=0; i<flights.length; i++){
        sumaTotal+=flights[i].cost;
      };
     calculoCoste=Math.round(sumaTotal/flights.length)
     alert('El coste medio de los vuelos es de '+calculoCoste+'€ .')
     };
    costeMedio();

    //funcion cuantos vuelos tienen escalada

    function escaladas (){
    var vuelosEscalada =[];
    for (i=0; i<flights.length;i++){
        if (flights[i].scale===true){
        vuelosEscalada.push(flights[i]);
        };
      };
      alert('En el día de hoy hay '+vuelosEscalada.length+ ' vuelos con escala.')
    };
    escaladas();

    //funcion ultimos vuelos del dia

    function ultimosVuelos () {
      var ultimosCinco =[];
      for (i=flights.length-5; i<flights.length; i++){
      ultimosCinco.push(flights[i].to);
      };
     alert('Los últomos cinco vuelos de tienen destino a '+ultimosCinco+'.')
    };

    ultimosVuelos();

}