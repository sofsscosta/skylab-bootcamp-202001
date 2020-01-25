var FLIGHTS_LIST = [
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

var MAX_AVAILABLE_FLIGHTS = 15;
var END_PROCESS_KEYWORD = "home";
var ROLES_ACTIONS_DESCRIPTION = {
    "delete": "Delete flights",
    "add": "Add a new flight",
    "search": "Search flights"
}
var USER_ROLES = [{ id: 1, text: "ADMIN", actions: ["delete", "add"] }, { id: 2, text: "USER", actions: ["search"] }];
var USER = { ROLE: {} };

var utils = {
    isNumeric: (n) => !isNaN(parseFloat(n)) && isFinite(n),
    isValidString: (s) => s !== null && s.trim() !== "" && s.length && !utils.isNumeric(s),
    formatPrice: (p)=>{
        /*p = utils.isNumeric(p) ? p : 0;
        return `${p.toFixed(2)} €`*/

        var n = 2;
        var x = "3";
        var s = ".";
        var c = ",";
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
    constructFlightSummary: (f, i, briefSummary)=>{
        if (!briefSummary) {
            return f.summary = `${i + 1}. Origin: ${f.from} | Destination: ${f.to} | Price: ${utils.formatPrice(f.cost)} | ${f.scale ? "Has stops" : "Direct flight"}`
        } else {
            return f.summary = `${i + 1}. Origin: ${f.from} | Destination: ${f.to} | Price: ${utils.formatPrice(f.cost)}`;
        }
    },
    processFlights: (briefSummary, flightList)=>{
        flightList = typeof flightList !== "undefined" ? flightList : FLIGHTS_LIST;
        flightList.forEach((f, i)=> utils.constructFlightSummary(f,i,briefSummary))
        return flightList
    }
}

function promptBox(promptMessage, message, noEndProcessCheckpoint){
    message = !!message ? message : "";
    promptMessage = noEndProcessCheckpoint ? promptMessage : `${promptMessage}\n\nPS: Type '${END_PROCESS_KEYWORD}' to start from beginning`;
    return prompt(promptMessage, message)
}

function welcomeUser(name){
    console.log(`%cHello ${name}! Welcome to Skylab Airline. Below are some useful informations`, "font-size: 14px; color: threeddarkshadow")
}

function consoleFlightsSummary(flights, groupLabel, expandGroup){
    var summaries = flights.map((f, i) => f.summary)
    utils.consoleGroup(groupLabel, summaries.join('\n\n'), expandGroup)
}

function showFlights(){
    var flights = utils.processFlights()
    flights = flights.length ? flights : [{ summary: "There are no flights available" }]
    consoleFlightsSummary(flights, "Available Flights", true)
}

function averageFlightCost(){
    var sum = FLIGHTS_LIST.map(f=> f.cost)
    sum = sum.length ? eval(`${sum.join(' + ')}`) / FLIGHTS_LIST.length : 0;
    utils.consoleGroup("Average price", `The average price of available flights is ${utils.formatPrice(sum)}`, false)
}

function flightsWithStops(){
    var flights = utils.processFlights();
    var flightsWithStops = flights.filter(f=> f.scale)
    flightsWithStops =  flightsWithStops.length ? flightsWithStops : [{summary: "There are no flights with stops"}]
    consoleFlightsSummary(flightsWithStops, "Flights with stops", false)
}

function lastFlightsOfTheDay(){
    var flights = utils.processFlights();
    var start = flights.length - 5;
    start = start < 0 ? 0 : start;

    flights = flights.slice(start)
    flights = flights.length ? flights : [{ summary: "There are no flights available" }]
    consoleFlightsSummary(flights, "Last flights of the day", false)
}

/*Pro airline starts*/
function endAllProcess(){
    //console.clear();
    console.log(`User typed '${END_PROCESS_KEYWORD}' in prompt box`)
    USER.ROLE = {};
    skylabAirline("Hello\n\nPlease enter your name")
}

function deleteFlight(){
    var flights = utils.processFlights(true);
    if (flights.length){
        var summaries = flights.map(f => f.summary)
        //utils.consoleGroup(groupLabel, summaries.join('\n\n'), expandGroup)

        var flightToDelete = 0;
        var validAction = false;

        do {
            flightToDelete = promptBox(`Please choose a flight to delete\n\n${summaries.join('\n')}`);
            if (flightToDelete !== END_PROCESS_KEYWORD) {
                flightToDelete = utils.isNumeric(flightToDelete) ? parseInt(flightToDelete) : -1;
                validAction = flightToDelete > 0 && flightToDelete <= flights.length;
            } else {
                validAction = true;
            }
        } while (!validAction)

        if (flightToDelete === END_PROCESS_KEYWORD) {
            endAllProcess();
            return;
        }

        flightToDelete--;
        console.info(`Deleted flight:: ${flights[flightToDelete].summary}`)
        FLIGHTS_LIST.splice(flightToDelete, 1);
    }else{
        alert("There are no flights to delete, please select another action")
    }
    initializeRoleActions()
}

function askForNewFlightDetail(promptMessage, detailType){
    var data = -1;
    var isValidData = false;

    do {
        data = promptBox(promptMessage);
        if (data !== END_PROCESS_KEYWORD) {
            if (detailType === "origin" || detailType === "destination"){
                isValidData = utils.isValidString(data);
            } else if (detailType === "cost"){
                isValidData = utils.isNumeric(data);
            } else if (detailType === "stops"){
                isValidData = parseInt(data) === 1 || parseInt(data) === 2;
                data = isValidData;
            }else{
                isValidData = true;
                data = -1;
            }
        } else {
            isValidData = true;
        }
    } while (!isValidData)

    if (data === END_PROCESS_KEYWORD) data = -2;

    return data
}

function addFlight() {
    if (FLIGHTS_LIST.length === MAX_AVAILABLE_FLIGHTS){
        alert(`Available flights already at maximum capacity '${MAX_AVAILABLE_FLIGHTS}'. Can no longer accept more entries.`);
        initializeRoleActions()
        return;
    }

    var destination = -1;
    var cost = -1;
    var hasStop = -1;

    var origin = askForNewFlightDetail("Please type in an origin", "origin");

    if (typeof origin === "string"){
        destination = askForNewFlightDetail(`What is the destination of this flight?\n\nFrom: ${origin}`, "destination");
    }else if(origin === -2){
        endAllProcess();
        return;
    }

    if (typeof destination === "string") {
        cost = parseFloat(askForNewFlightDetail(`What is the cost of this flight?\n\nFrom: ${origin} | To: ${destination}`, "cost"));
    } else if (destination === -2) {
        endAllProcess();
        return;
    }

    if (cost !== -1 && cost !== -2) {
        hasStop = askForNewFlightDetail(`Does this flight has stops?\n\nFrom: ${origin} | To: ${destination} | Price: ${utils.formatPrice(cost)}\n\n1. Yes\n2. No`, "stops");
    } else if (cost === -2) {
        endAllProcess();
        return;
    }

    if (typeof hasStop === "boolean") {
        var flightId = FLIGHTS_LIST.length;
        var newFlightObj = { id: flightId, to: destination, from: origin, cost: cost, scale: hasStop };

        console.log("New Flight", utils.constructFlightSummary(newFlightObj, newFlightObj.id, true));
        FLIGHTS_LIST.push(newFlightObj)
    } else if (hasStop === -2) {
        endAllProcess();
        return;
    }

    initializeRoleActions()
}

function showFoundFlightsAndPurchase(flightsFound){
    var action = 0;
    var validAction = false;
    var summaries = flightsFound.map(f => f.summary)

    if(flightsFound.length){
        do {
            action = promptBox(`Please choose flight to purchase\n\n${summaries.join('\n')}`);
            if (action !== END_PROCESS_KEYWORD) {
                action = utils.isNumeric(action) ? parseInt(action) : -1;
                validAction = action > 0 && action <= flightsFound.length;
            } else {
                validAction = true;
            }
        } while (!validAction)

        if (action === END_PROCESS_KEYWORD) {
            endAllProcess();
            return;
        }

        console.log("Purchased flight: ", flightsFound[action - 1].summary)
        alert(`Gracias por su compra, vuelva pronto.`);
    }else{
        console.log("No flights found, choose another search option")
        searchFlights()
    }
}

function searchFlights() {
    var searchParam = promptBox("Flight Finder\n\nType in: \n- 'max' to show most expensive first\n- 'min' to show cheapest first\n- or an amount");
    var flights = utils.processFlights(true);
    var flightsFound = [];
    
    if (searchParam === END_PROCESS_KEYWORD) {
        endAllProcess();
        return;
    }

    var extractAndSortImports = (order)=>{
        var imports = flights.map(f=> f.cost)
        return imports.sort((a, b) => order === "max" ? b - a : a - b)
    };

    if (searchParam !== null){
        if (!utils.isNumeric(searchParam) && typeof searchParam === "string" || typeof searchParam === "undefined"){
            if(typeof searchParam !== "undefined"){
                searchParam = searchParam.toLocaleLowerCase();
                if (searchParam === "max" || searchParam === "min"){
                    var prices = extractAndSortImports(searchParam);

                    //https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
                    //Let's remove duplicates from array
                    prices = prices.filter((price, index)=> prices.indexOf(price) === index)

                    prices.forEach(price=>{
                        flights.forEach(f =>{
                            if(f.cost === price){
                                flightsFound[flightsFound.length] = f
                            }
                        })
                    })
                }else{
                    searchFlights()
                    return;
                }
            }else{
                initializeRoleActions()
                return;
            }
        }else if(utils.isNumeric(searchParam)){
            var price = parseFloat(searchParam);
            flightsFound = flights.filter(f=> f.cost === price)
        }else{
            initializeRoleActions()
            return;
        }
    }else{
        searchFlights()
        return;
    }

    flightsFound = utils.processFlights(true, flightsFound)
    showFoundFlightsAndPurchase(flightsFound)
}

function promptUserForAnAction(){
    var promptMessage = USER.ROLE.actions.map((act, actI) => `${actI + 1} = ${ROLES_ACTIONS_DESCRIPTION[act]}`)
    var action = 0;
    var validAction = false;

    do {
        action = promptBox(`Please choose an action\n\n${promptMessage.join('\n')}`);
        if (action !== END_PROCESS_KEYWORD) {
            action = utils.isNumeric(action) ? parseInt(action) : -1;
            validAction = action > 0 && action <= USER.ROLE.actions.length;
        } else {
            validAction = true;
        }
    } while (!validAction)

    if (action === END_PROCESS_KEYWORD) {
        endAllProcess();
        return;
    }

    return USER.ROLE.actions[action - 1]; //selected action
}

function initializeRoleActions(){
    if (USER.ROLE.id >= 1 && USER.ROLE.id <= 2){
        var selectedAction = promptUserForAnAction()
        if(selectedAction === "delete"){
            deleteFlight();
        }else if(selectedAction === "add"){
            addFlight();
        }else if(selectedAction === "search"){
            searchFlights();
        }else if(typeof selectedAction === "undefined"){

        }else{
            console.log(`The selected action '${selectedAction}' doesn't do anything... yet.`)
            promptUserRole()
        }
    }else{
        console.log(`The selected role '${USER.ROLE.text}' hasn't been assigned any action... yet.`)
        promptUserRole()
    }
}

function promptUserRole() {
    var roleIds = [];
    var roles = USER_ROLES.map(r=> {
        roleIds.push(r.id)
        return `${r.id} = ${r.text}`
    })

    var validRole = false;
    var roleId = -1;

    do{
        roleId = promptBox(`Please choose a role\n\n${roles.join('\n')}`);
        if (roleId !== END_PROCESS_KEYWORD){
            roleId = utils.isNumeric(roleId) ? parseInt(roleId) : -1;
            validRole = roleIds.indexOf(roleId) !== -1;
        }else{
            validRole = true;
        }
    } while (!validRole)

    if (roleId === END_PROCESS_KEYWORD){
        endAllProcess();
        return;
    }

    USER.ROLE = USER_ROLES.filter(r => r.id === roleId)[0]
    initializeRoleActions();
}
/*Pro airline ends*/

function skylabAirline(promptMessage){
    var name = promptBox(promptMessage, "", true);
    name = name !== null ? name.trim() : name;

    if (typeof name === "string" && name !== ""){
        welcomeUser(name);
        showFlights();
        averageFlightCost();
        flightsWithStops();
        lastFlightsOfTheDay();

        //Airline Pro
        promptUserRole();
    }else if ((typeof name !== "string" || name === "") && name !== null){
        skylabAirline(`Hello\n\nPlease enter a valid name`)
    } else if (name === null){
        console.log("Thank you for using Skylab Airline. See you next time...")
    }
}

skylabAirline("Hello\n\nPlease enter your name")