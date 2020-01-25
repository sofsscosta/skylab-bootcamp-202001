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

function runAirlines() {
  var name = prompt("Hola, cual es tu nombre?")
  alert("Bienvenid@ " + name + " a Skylab Airlines!")
  var showFlights = ""

  flights.forEach(f => {
    showFlights += "El vuelo de " + f.from + " a " + f.to + " vale " + f.cost + " y " + (f.scale ? 'si' : 'no') + " tiene escala\n"
  })

  alert(showFlights)

  average()
  scale()
  lastFlights()
}

function average() {
  alert(
    "El coste promedio de los vueloes es de:\n" + 
    "€" + (flights.map(f => f.cost).reduce((c, a) => a + c) / flights.length).toFixed(2)
  )
}

function scale() {
  alert("Cantidad de vuelos con escala son: " + flights.filter(f => f.scale).length)
}

function lastFlights() {
  var showLastFive = 'Los últimos 5 vuelos del día son:\n'

  flights.slice(-5).forEach(f => {
    showLastFive += "El vuelo de " + f.from + " a " + f.to + " vale " + f.cost + " y " + (f.scale ? 'si' : 'no') + " tiene escala\n"
  })

  alert(showLastFive)
}

runAirlines()