    /* ********INSTRUCCIONES*********
    PRO:
    4) Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, 
    el programa se comportará de la siguiente manera:
        4.1. Si eres ADMIN, la función debería permitir:
            4.1.1. Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, 
                si se intenta introducir uno más, saltará un alert().
            4.1.2. Poder eliminar vuelos mediante el ID.
    */

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

    function airlines () {
        // Función para la media de precios
        function meanCost () {
            var meanOfFlights = 0;
            for (let i=0; i<flights.length; i++) {
                meanOfFlights += flights[i].cost;
            };
            meanOfFlights = parseFloat((meanOfFlights/flights.length).toFixed(2));
            alert(`El coste medio de los vuelos de hoy es de ${meanOfFlights}€.`);
        };

        // ADMIN o USER función para selección
        function choiceAOU (answer) {
            var answer = prompt("Por favor, indique si usted es ADMIN o USER para las opciones complementarias:");
            var answerLower = answer.toLowerCase();
                if ("ADMIN".toLowerCase() === answerLower) {
                    admin(answerLower);
                } else if ("USER".toLowerCase() === answerLower) {
                    user(answerLower);
                } else {
                    alert("No has introducido una etiqueta correcta. Por favor, prueba de nuevo:");
                    choiceAOU();
            };
        };

        // Función para ADMIN
        function admin () {
            var newFlight = prompt("Gracias por identificarse como ADMIN, " + name + ". A continuación elija si quiere incluir un" +
            " nuevo vuelo (escriba 'add') o eliminar uno existente (escriba 'del'):");
            var newFlightLower = newFlight.toLowerCase();
            switch(newFlightLower) {
                case "add":
                    if (flights.length > 15) {
                        alert("Lo sentimos, no se pueden poner más de 15 vuelos. Elimine primero uno para poder añadir un nuevo vuelo.");
                        admin();
                    } else {
                        add();
                        break;
                    };
                case "del":
                    del();
                    break;
                default:
                    admin();
            };
        };

        function add() {
            alert("A continuación se va a añadir un nuevo vuelo en la base de datos. Por favor, añada los datos en el " + 
            "siguiente orden:\n\n1) Destino del vuelo\n2) Origen del vuelo\n3) Coste del vuelo\n4) Si tiene o no escala");
            const IDTrueList = [];
            flights.forEach(function(element) {IDTrueList.push(element.id)});
            var IdToPush = IDTrueList[flights.length-1] + 1;
            IDTrueList.push(IdToPush);

            flights.push({id: IDTrueList[IDTrueList.length-1], to: "", from: "", cost: 0, scale: true});



            var askTo = prompt("Indique el destino de vuelo:");
            flights[flights.length-1].to = askTo;

            var askFrom = prompt("Indique el origen del vuelo:");
            flights[flights.length-1].from = askFrom;

            var askCost = prompt("Indique el coste del vuelo (sólo el número, no hace falta incluir el '€'):");
            var parsedCost = parseInt(askCost);
            if (isNaN(parsedCost)) {
                alert("No ha introducido un número. Por favor, empiece de nuevo y asegúrese de incluir un número como precio.")
                flights.pop();
                add();
            };

            flights[flights.length-1].cost = parsedCost;

            var askScale = prompt("Tiene el vuelo escala? Indique con una 'y' si es que sí o con una 'n' si es que no:");
            var askScaleLower = askScale.toLowerCase();
            switch(askScaleLower) {
                case "y":
                    flights[flights.length-1].scale = true;
                    break;
                
                case "n":
                    flights[flights.length-1].scale = false;
                    break;

                default:
                    alert("No ha introducido 'y' o 'n'. Por favor, siga las instrucciones de manera estricta.");
                    flights.pop();
                    add();  
            };

            alert("Su vuelo ha sido añadido satisfactoriamente con la siguiente información:");
            if (flights[flights.length-1].scale) {
                alert("\n\nVuelo con ID " + flights[flights.length-1].id + "; con origen: " + flights[flights.length-1].from +
                "; con destino: " + flights[flights.length-1].to + "; con un coste de " + flights[flights.length-1].cost + "€; con escala.")
            } else if (flights[flights.length-1].scale === false) {
                alert("\n\nVuelo con ID " + flights[flights.length-1].id + "; con origen: " + flights[flights.length-1].from +
                "; con destino: " + flights[flights.length-1].to + "; con un coste de " + flights[flights.length-1].cost + "€; sin escala.")
            };

            var endQuestion1 = prompt("¿Desea hacer alguna cosa más? Indique con 'y' si es que sí o con 'n' en caso contrario:");
            var endQuestionLower1 = endQuestion1.toLowerCase();
            switch(endQuestionLower1) {
                case "y":
                    admin();
                    break;
                
                case "n":
                    alert("Gracias por usar Skylab Airlines. Le deseamos un buen día.");
                    break;

                default:
                    var endQuestion1 = prompt("¿Desea hacer alguna cosa más? Indique con 'y' si es que sí o con 'n' en caso contrario:");
            };
        };

        function del () {
            alert("A continuación se mostrarán los vuelos disponibles. Por favor, indique con el ID del vuelo aquel que desee eliminar:");
            const IdList = [];
            flights.forEach(function(element) {IdList.push(element.id)});

            // Posible impresión: var deleteList = prompt(JSON.stringify(flights)); 
            const flightsDeleteArray = [];
            flights.forEach(function(flight) {
                if (flight.scale === false) {
                    flightsDeleteArray.push("ID: " + flight.id + "; con origen: " + flight.from + ", y destino: " + flight.to + 
                    " tiene un coste de " + flight.cost + "€ y no realiza ninguna escala.");
                } else {
                    flightsDeleteArray.push("ID: " + flight.id + "; con origen: " + flight.from + ", y destino: " + flight.to + 
                    " tiene un coste de " + flight.cost + "€ y no realiza ninguna escala.");
                };
            });

            var deleteList = prompt("Indique con el ID del vuelo aquel que desee eliminar:\n\n" + flightsDeleteArray.join("\n")); 
            var parsedDelete = parseInt(deleteList);
            if (IdList.includes(parsedDelete) === false) {
                alert("No ha introducido un ID correcto. Por favor, inténtelo de nuevo siguiendo de forma estricta las instrucciones.");
                del();
            };
            flights.splice(parsedDelete, 1);
            alert("Vuelo con ID " + parsedDelete + " eliminado correctamente.");  

            var endQuestion2 = prompt("¿Desea hacer alguna cosa más? Indique con 'y' si es que sí o con 'n' en caso contrario:");
            var endQuestionLower2 = endQuestion2.toLowerCase();
            switch(endQuestionLower2) {
                case "y":
                    admin();
                    break;
                
                case "n":
                    alert("Gracias por usar Skylab Airlines. Le deseamos un buen día.");
                    break;

                default:
                    var endQuestion2 = prompt("¿Desea hacer alguna cosa más? Indique con 'y' si es que sí o con 'n' en caso contrario:");
            };
        };

        // Función para USER
        function user() {
            var setPrice = prompt("Gracias por identificarse como USER, " + name + ". A continuación marque un precio de vuelo " +
                "(sólo el número, sin decimales) que le interese:");
            var parsedPrice = parseInt(setPrice);
            var isValidPrice = true;
            if (isNaN(parsedPrice)) {
                isValidPrice = false;
            };
            if (isValidPrice === false) {
                alert("No ha introducido un número como precio. Por favor, repita el proceso siguiendo las instrucciones.")
                user();
            };

            var priceCompare = prompt("A continuación, ¿qué le gustaría consultar? Marque con un número (1, 2 o 3) si desea: " +
                "\n1 - Vuelos más caros de " + parsedPrice + "€.\n2 - Vuelos más baratos de " + parsedPrice + "€.\n3 - Vuelos que " +
                "valen exactamente " + parsedPrice + "€.");
            
                var priceCompare2 = parseInt(priceCompare);
                
                if (priceCompare2 <=1 && priceCompare2 >= 3) {
                    alert("No ha introducido un valor correcto. Por favor, pruebe de nuevo.");
                    user();
                }
                comparePrices(priceCompare,parsedPrice);
        };

        function comparePrices(priceCompare, parsedPrice) {
            switch (priceCompare) {
                case "1":
                    const higherThanPrice = [];
                    const storeIdOne = [];
                    for (let i = 0; i < flights.length; i++) {
                        if (flights[i].cost > parsedPrice) {
                            if (flights[i].scale) {
                                higherThanPrice.push("Vuelo con ID " + flights[i].id + "; con origen: " + flights[i].from +
                                    "; con destino: " + flights[i].to + "; con un coste de " + flights[i].cost + "€; con escala.");
                            } else {
                                higherThanPrice.push("Vuelo con ID " + flights[i].id + "; con origen: " + flights[i].from +
                                    "; con destino: " + flights[i].to + "; con un coste de " + flights[i].cost + "€; sin escala.");
                            };
                            storeIdOne.push(flights[i].id);
                        };
                    };
                    const arrayIdOne = storeIdOne.toString().split(",");
                    purchaseFlight = prompt("Estos son los vuelos disponibles: \n\n" + higherThanPrice.join("\n") +
                        "\n\nPor favor, indique a través del ID el vuelo que desearía comprar:");
                    if (arrayIdOne.includes(purchaseFlight) === false) {
                        alert("No ha introducido un ID válido. Por favor, inténtelo de nuevo.");
                        comparePrices();
                    } else {
                        alert("Gracias por su compra, vuelva pronto.");
                        break;
                    };
                    break;
                case "2":
                    const lowerThanPrice = [];
                    const storeIdTwo = [];
                    for (let i = 0; i < flights.length; i++) {
                        if (flights[i].cost < parsedPrice) {
                            if (flights[i].scale === true) {
                                lowerThanPrice.push("Vuelo con ID " + flights[i].id + "; con origen: " + flights[i].from +
                                    "; con destino: " + flights[i].to + "; con un coste de " + flights[i].cost + "€; con escala.");
                            } else {
                                lowerThanPrice.push("Vuelo con ID " + flights[i].id + "; con origen: " + flights[i].from +
                                    "; con destino: " + flights[i].to + "; con un coste de " + flights[i].cost + "€; sin escala.");
                            };
                            storeIdTwo.push(flights[i].id);
                        };
                    };
                    const arrayIdTwo = storeIdTwo.toString().split(','); 
                    var purchaseFlight = prompt("Estos son los vuelos disponibles: \n\n" + lowerThanPrice.join("\n") +
                        "\n\nPor favor, indique a través del ID el vuelo que desearía comprar:");
                    if (arrayIdTwo.includes(purchaseFlight) === false) {
                        alert("No ha introducido un ID válido. Por favor, inténtelo de nuevo.");
                        comparePrices();
                    } else {
                        alert("Gracias por su compra, vuelva pronto.");
                        break;
                    };
                    break;
                case "3":
                    const equalThanPrice = [];
                    const storeIdThree = [];
                    for (let i=0; i<flights.length; i++) {
                        if(flights[i].cost === parsedPrice) {
                            if (flights[i].scale === true) {
                                equalThanPrice.push("Vuelo con ID " + flights[i].id + "; con origen: " + flights[i].from +
                                "; con destino: " + flights[i].to + "; con un coste de " + flights[i].cost + "€; con escala.");
                            } else {
                                equalThanPrice.push("Vuelo con ID " + flights[i].id + "; con origen: " + flights[i].from +
                                "; con destino: " + flights[i].to + "; con un coste de " + flights[i].cost + "€; sin escala.");
                            }
                            storeIdThree.push(flights[i].id);
                        };
                    };
                    
                    if (equalThanPrice.length === 0) {
                        alert("Lo sentimos, no hay ningún vuelo con el precio de " + parsedPrice + "€. Por favor, inténtelo de nuevo.");
                        user();
                    };
                    const arrayIdThree = storeIdThree.toString().split(',');
                    var purchaseFlight = prompt("Estos son los vuelos disponibles: \n\n" + equalThanPrice.join("\n") +
                        "\n\nPor favor, indique a través del ID el vuelo que desearía comprar:");

                    while (arrayIdThree.includes(purchaseFlight) === false) {
                        purchaseFlight = prompt("Estos son los vuelos disponibles: \n\n" + equalThanPrice.join("\n") +
                            "\n\nPor favor, indique a través del ID el vuelo que desearía comprar:");
                    }
                    alert("Gracias por su compra, vuelva pronto.");
                    break;
                default:
                    var newPrice = prompt("No ha introducido un valor correcto. Por favor, marque con un número (1, 2 o 3) si desea: " +
                        "\n1 - Vuelos más baratos de " + parsedPrice + "€.\n2 - Vuelos más baratos de " + parsedPrice + "€.\n3 - Vuelos que " +
                        "valen exactamente " + parsedPrice + "€.");
                    comparePrices(newPrice);
            };
        };

        var name = prompt("Por favor, introduce tu nombre:");
        alert(`Hola ${name}, bienvenid@ a Skylab Airlines. A continuación se te mostrarán los vuelos disponibles para hoy:`);

        // 'for' con los vuelos del día de hoy
        const flightsTodayArray = [];
        for (let i=0; i<flights.length; i++) {
            if (flights[i].scale === false) {
                flightsTodayArray.push("El vuelo con origen: " + flights[i].from + ", y destino: " + flights[i].to + 
                " tiene un coste de " + flights[i].cost + "€ y no realiza ninguna escala.");
            } else {
                flightsTodayArray.push("El vuelo con origen: " + flights[i].from + ", y destino: " + flights[i].to + 
                "tiene un coste de " + flights[i].cost + "€, con escala.");
            }
        };
        alert(flightsTodayArray.join("\n"));
        
        // Impresión de la media de precios
        meanCost();

        // Preparación de mostrar qué vuelos tienen escala
        var hasScaleArray = [];
        for (let i=0; i<flights.length; i++) {
            if (flights[i].scale === true) {
                hasScaleArray.push(flights[i].to);
            }
        };
        alert("Los vuelos que hoy tienen escala son " + hasScaleArray.length + " y sus destinos son (en orden cronológico): " + hasScaleArray.join(", ") + ".");

        // Impresión de los destinos de los últimos 5 vuelos
        const lastFlightsArray = [];
        for (let i=flights.length-5; i<flights.length; i++) {
            lastFlightsArray.push(flights[i].to);
        };
        alert("Nuestros últimos 5 vuelos de hoy tienen los siguientes destinos (en orden cronológico): " + lastFlightsArray.join(", ") + ".");

        // ADMIN o USER
        choiceAOU();
    };

    airlines();