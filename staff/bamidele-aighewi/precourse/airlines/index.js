const flights = [
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

const utils = {
    //isNumeric: (n) => !isNaN(parseFloat(n)) && isFinite(n),
    formatPrice: (p)=>{
        /*p = utils.isNumeric(p) ? p : 0;
        return `${p.toFixed(2)} €`*/

        const n = 2; x = "3"; s = "."; c = ",";
        //https://stackoverflow.com/a/14428340
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
            num = p.toFixed(Math.max(0, ~~n));

        return '\u20AC' + (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
    },
    consoleGroup: (title, param, expandGroup)=>{
        !expandGroup ? console.groupCollapsed(title) : console.group(title);
        console.log(param);
        console.groupEnd();
    },
    processFlights: ()=>{
        flights.forEach((f, i)=>{
            f.summary = `${i + 1}. Origin: ${f.from} | Destination: ${f.to} | Price: ${utils.formatPrice(f.cost)} | ${f.scale ? "Has stops" : "Direct flight"}`
        })
        return flights
    }
}

function promptForUserName(promptMessage){
    return prompt(promptMessage)
}

function welcomeUser(name){
    console.log(`%cHello ${name}! Welcome to Skylab Airline. Below are some useful informations`, "font-size: 14px; color: threeddarkshadow")
}

function consoleFlightsSummary(flights, groupLabel, expandGroup){
    const summaries = flights.map((f, i) => f.summary)
    utils.consoleGroup(groupLabel, summaries.join('\n\n'), expandGroup)
}

function showFlights(){
    let flights = utils.processFlights()
    flights = flights.length ? flights : [{ summary: "There are no flights available" }]
    consoleFlightsSummary(flights, "Available Flights", true)
}

function averageFlightCost(){
    let sum = flights.map(f=> f.cost)
    sum = sum.length ? eval(`${sum.join(' + ')}`) / flights.length : 0;
    utils.consoleGroup("Average price", `The average price of available flights is ${utils.formatPrice(sum)}`, false)
}

function flightsWithStops(){
    const flights = utils.processFlights();
    let flightsWithStops = flights.filter(f=> f.scale)
    flightsWithStops =  flightsWithStops.length ? flightsWithStops : [{summary: "There are no flights with stops"}]
    consoleFlightsSummary(flightsWithStops, "Flights with stops", false)
}

function lastFlightsOfTheDay(){
    let flights = utils.processFlights();
    let start = flights.length - 5;
    start = start < 0 ? 0 : start;

    flights = flights.slice(start)
    flights = flights.length ? flights : [{ summary: "There are no flights available" }]
    consoleFlightsSummary(flights, "Last flights of the day", false)
}

function skylabAirline(promptMessage){
    let name = promptForUserName(promptMessage);
    name = name !== null ? name.trim() : name;

    if (typeof name === "string" && name !== ""){
        welcomeUser(name);
        showFlights();
        averageFlightCost();
        flightsWithStops();
        lastFlightsOfTheDay();
    }else if ((typeof name !== "string" || name === "") && name !== null){
        skylabAirline(`Hello\n\nPlease enter a valid name`)
    } else if (name === null){
        console.log("Thank you for using Skylab Airline. See you next time...")
    }
}

skylabAirline("Hello\n\nPlease enter your name")