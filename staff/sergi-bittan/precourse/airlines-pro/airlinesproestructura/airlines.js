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

var name = "";



function nameF() 
{
   name = prompt("Hola. Introduzca su nombre por favor");    
}

function bienvenidaF() 
{
    alert("Bienvenido\\a " + name);    
}

function infoVuelosF() 
{
    var info = "";
    var textoEscala = "";
    for (var index = 0; index < flights.length; index++) {
        var vuelo = flights[index];
       
        if (textoEscala)
        {
            textoEscala = "con";
        }
        else
        {
            textoEscala = "sin";
        }
        info += "El vuelo numero " + vuelo.id + " con destino " + vuelo.to + " y origen " + vuelo.from + " tiene un coste de " + vuelo.cost + " euros " + textoEscala + " escala"; 
        info += "\n";
        
    }
    alert(info);  
}


function costeMedioF() 
{
    var infoCosteVuelo = 0;
   
    for (var index = 0; index < flights.length; index++) 
    {
         var vuelo = flights[index];
         infoCosteVuelo += vuelo.cost;
    }

    var costeMedio = infoCosteVuelo / flights.length;
    alert("El coste medio de los vuelos de hoy es: " + costeMedio.toFixed(3) + " euros");
}

function escalaVuelosF()
{
    var numeroEscalas = 0;
    for (var index = 0; index < flights.length; index++) {
        var vuelo = flights[index];
       
        if (vuelo.scale == true)
        {
            numeroEscalas += 1;
        }
    }
    alert("El numero de vuelos con escalas en el dia de hoy seran: " + numeroEscalas);   

}


function destinos5F() 
{
    var destinos5 = "";
    for (var index = flights.length - 5; index < flights.length; index++) {
        var vuelo = flights[index];
        destinos5 += vuelo.to
        destinos5 += "\n";
    }
    alert("Los ultimos 5 vuelos del dia de hoy tienen los siguientes destinos: \n" + destinos5);
}



function startF() 
{
    nameF();
    bienvenidaF();
    infoVuelosF();
    costeMedioF();
    escalaVuelosF();
    destinos5F();   
}

function start2F()
{
    infoVuelosF();
    costeMedioF();
    escalaVuelosF();
    destinos5F();  
}