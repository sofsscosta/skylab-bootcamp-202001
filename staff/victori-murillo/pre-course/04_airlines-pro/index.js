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
  var admin = confirm("OK si eres ADMIN o Cancel si eres USER")

  if (admin) {
    runAdmin()
  } else {
    runUser()
  }
}

function runUser() {
  var find;

  do {
    find = prompt(
      "Buscar Vuelos por precio mas alto, digite 1\n" +
      "Buscar Vuelos por precio mas bajo, digite 2\n" +
      "Buscar Vuelos con precios iguales, digite 3"
    )

    find = Number(find)

  } while( !(find > 0 && find < 4) )

  var fligthsBy = flights

  if (find === 1) {
    fligthsBy = flights.sort((a, b) => (a.cost > b.cost) ? -1 : 1)
  }

  if (find === 2) {
    fligthsBy = flights.sort((a, b) => (a.cost > b.cost) ? 1 : -1)
  }

  if (find === 3) {
    fligthsBy = []

    for (var i = 0; i < flights.length; i++) {
      flights.forEach(f => {
        if (f.cost === flights[i].cost) {
          if(f.id !== flights[i].id && !fligthsBy.some(fl => fl.id === flights[i].id)) {
            fligthsBy.push(flights[i])
          }
        }
      })
    }
  }
  
  showResults(fligthsBy)
}

function runAdmin() {
  var option;
  var id = 10

  do {

    option = confirm("Quieres ingresar un nuevo vuelo?")

    if (flights.length === 15) {
      alert("Maximo 15 vuelos")
      option = false
    }

    if (option && flights.length < 15) {
      var from = prompt("Desde:")
      var to = prompt("A:")
      var cost = prompt("Valor")

      flights.push({
        id: id + 1,
        to: to, 
        from: from,
        cost: cost
      })
    }

    if (!option) {
      var idDelete = Number(prompt("Si quieres ELIMINAR un vuelo digita su ID?"))
      flights = flights.filter(f => f.id !== idDelete)
      
      if(flights.length < 15 && idDelete) option = true
    }

  } while (option)

  showResults(flights)
}

function showResults(fligthss) {
  alert(
    fligthss.map(f => ("\nEl vuelo de " + f.from + " a " + f.to + " vale " + f.cost) ) +
  "\n\nGracias por su compra, vuelva pronto."
  )
}

runAirlines()