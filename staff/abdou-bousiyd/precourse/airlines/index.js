let flights = [
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
  
  function loginAirlines(){
  const user = prompt(`Introduzca su nombre:`);
      if (!user) {
          console.log(`Has cancelado o introducido el nombre vacío`);
          return
      } else {
          console.log(`Hola ${user}, bienvenido a airlines`)
            showFlightsWithScale()
            showFlights()
            averageSum()
            finalFlights()
      }
  }
  
  function showFlightsWithScale() {
    flights.filter(({scale}) => scale)
              .forEach(({from, to, cost}) => 
              console.log(`origen ${from}, destino ${to}, coste ${cost} € con scala`))
  }
  
  function showFlights() {
    flights.forEach(({from, to, cost, scale}) => 
              console.log(`origen ${from}, destino ${to}, coste ${cost} € ${`${scale ? 'CON' : 'SIN'} `}scala`))    
  }
  
  function finalFlights() { 
    let vuelosFinales = flights.splice(6, flights.length -6)
    for ( let {to} of vuelosFinales) {
      console.log(`Destino de los ultimos vuelos: ${to}`)
    }
  }
  
  function averageSum(){
    const sumaPromedio = flights.reduce((vAn, {cost}) => vAn += cost, 0) / flights.length
    console.log(`El coste medio de los vuelos es de: ${sumaPromedio.toFixed(2)} €`)
  }
  loginAirlines()