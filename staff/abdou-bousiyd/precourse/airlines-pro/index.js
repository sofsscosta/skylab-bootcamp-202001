
const messages = {
    
    hiAdmin: `Hi Admin\n you can add flights or remove them\n write an action ADD or DELETE`,
    deleteFlightConfirm: "Do you want to delete some flight?",
    addMoreConfirm: "Do you want to add more flights?",
    addSuccess: "flight added",
    ActionLimited: "you have exceeded the flight limit",

    cancelled: "You pressed Cancel",
    userActions: "You can see flights by price",
    selectAFlyConfirm: "Do you want to buy a flight?",
    selectAFlyAlert: "Thanks for your purchase",
    userAlert: "Thanks for your visit",
    selectAFlyPrompt: "Enter ID",
    selectAFlyPrint: "You have not made any purchases."
}

class AirlinesPro {
    constructor() {
        this.flights = [
            { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
            { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
            { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
            { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
            { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
            { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
            { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
            { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
            { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
            { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
            { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
        ];
        this.role = 'USER'
    }

    print(messages) {
        console.log(messages)
    }

    loginUser() {
        let user = prompt("ADMIN / USER").toUpperCase()
        return (!user) ? this.loginUser() : this.role = user
    }

    ejecutarActions() {
        if (this.role === 'USER') this.userActions();
        if (this.role === 'ADMIN') this.adminActions()
    }

    adminActions() {
        let action = prompt(messages.hiAdmin).toUpperCase()
        if (action === 'DELETE') this.deleteFlight()
        if (action === 'ADD') this.addFlight()
    }

    userActions() {
        let action = confirm(messages.userActions)
        if (action) this.orderByPrice() 
        if (!action) return this.print(messages.cancelled) 
        if (action) this.selectAFly() 
        alert(messages.userAlert)
    }

    deleteFlight() {
        let remove = confirm(messages.deleteFlightConfirm)
        if ( remove ) {
            let id = Number(prompt(messages.selectAFlyPrompt)) 
            this.flights = this.flights.filter( flight => flight.id !== id )
            this.print(this.flights)
            alert(`Flight with id: ${id} has been removed`)
        }
    }

    addFlight() {
        if (this.flights.length === 15) return this.print(messages.ActionLimited)
        let from = prompt(`From`)
        let to = prompt(`To`)
        let cost = prompt(`Cost`)
        let scale = confirm(`Scale`)
        let id = this.flights.length
        let flight = {id, to, from, cost, scale}
        this.flights.push(flight)
        this.print(messages.addSuccess)
        this.print(this.flights)
        const add = this.addMore()
         if (add) {
            this.addFlight()
        } else {
            this.print(messages.cancelled) 
        }
      }

    addMore(){
        let add = confirm(messages.addMoreConfirm);
        return add
        }

    orderByPrice() {  
        this.flights.sort((a, b) => {
            if (a.cost < b.cost) return 1
            if (a.cost > b.cost) return -1
            return 0
        })

        const [highPrice] = this.flights
        const lowPrice = this.flights[this.flights.length-1] //precio bajo

        this.print(`Id: ${highPrice.id}, From ${highPrice.from}, To ${highPrice.to}, Price ${highPrice.cost} €  the highest price`)
        this.print(`Id: ${lowPrice.id}. From ${lowPrice.from.toUpperCase()}, To ${lowPrice.to.toUpperCase()}, Price ${lowPrice.cost} € the lowest price` )
        }

    selectAFly() {
        let compra = confirm(messages.selectAFlyConfirm)
        if (!compra) return this.print(messages.selectAFlyPrint)
        if(compra) {
            let id = Number(prompt(messages.selectAFlyPrompt))
            this.flights = this.flights.find(flight => flight.id == id)
        }
        this.print(`Id: ${this.flights.id}, From ${this.flights.from}, To ${this.flights.to}, Price: ${this.flights.cost} €`)
        if (compra) return alert(messages.selectAFlyAlert)
        }

    init() {
        this.loginUser()
        this.ejecutarActions()
    }
}

let airlinesPro = new AirlinesPro()
airlinesPro.init()