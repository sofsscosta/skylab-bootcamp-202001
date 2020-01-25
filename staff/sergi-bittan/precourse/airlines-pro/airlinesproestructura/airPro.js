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

function rolPreguntarF() 
{
    
    while (true)
    {
        var rol = (prompt("Eliga la opcion correcta: \n - Admin. \n - User. \n - Finalizar.").toLowerCase());
      
      if (rol === "admin")
      {
        menuAdminF();
      } 

      if (rol === "user")
      {
       menuUserF();
      }
    
      if ( rol === "finalizar")
      {
        exitF();
        return;
      }
      
    }
    

};

function crearVueloF() 
{
    //buscar id mayor
    var nuevoNumeroVuelo = 0;
    for (var index = 0; index < flights.length; index++) 
    {
        var vueloN = flights[index];
        if (vueloN.id > nuevoNumeroVuelo)
        {
            nuevoNumeroVuelo = vueloN.id;
        }
        nuevoNumeroVuelo +=1;
    }
        if (nuevoNumeroVuelo > 15)
        {
            alert("Ha llegado al maximo de vuelos permitidos");
        }
    

        var nuevoDestino = prompt("Introduzca el destino deseado");
        var nuevoOrigen = prompt("Introduzca el origen de salida");
        var nuevoCoste = parseFloat(prompt("El coste total del vuelo sera:"));
        var textoEscala = prompt("El vuelo tendra escala? \n - si. \n - no");

        var nuevoVuelo = {
            id: nuevoNumeroVuelo,
            to: nuevoDestino,
            from: nuevoOrigen,
            cost: nuevoCoste,
            scale: false
        }

        if (textoEscala == "si")
        {
            nuevoVuelo.scale = true;
        }
        else
        {
            nuevoVuelo.scale = false;
        }
        
    
    
    flights.push(nuevoVuelo);    
};


function eliminarVueloF() 
{
    var index;
    var eliminarId = parseFloat(prompt("Indique el numero de vuelo que desea eliminar"));
    for (var i = 0; i < flights.length; i++) {
       var vueloId = flights[i];
       if (vueloId.id == eliminarId)
       {
           index = i;
           break;
       }
   }

    flights.splice(index,1);    
};




function buscarPrecioAltoF() 
{  
    info = "";
    var precioAlto = 0;
    for (var index = 0; index < flights.length; index++) 
    {
        var vuelo = flights[index];

        if (vuelo.cost > precioAlto)
        {
            precioAlto = vuelo.cost;
        }
    }


     for (var index = 0; index < flights.length; index++) 
    {
            var vuelo = flights[index];

            if (vuelo.cost == precioAlto)
            {
                if (vuelo.scale)
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
            
    }
         alert(info);
    
};

    
        

function buscarPrecioF() 
{
    var precioBuscar = parseFloat(prompt("Indique el importe del vuelo deseado"));
    var info = "";

    for (var index = 0; index < flights.length; index++) 
    {
        var vuelo = flights[index];  
        
        if (vuelo.cost === precioBuscar)
        {
            if (vuelo.scale)
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

    }
    if (info)
    {
        alert(info);
    }
    else
    {
        alert("Lo sentimos, no tenemos vuelos para hoy de esas caracteristicas.")
        
    }
    
    
};


function buscarPrecioBajoF() 
{
    var precioBajo = Number.MAX_SAFE_INTEGER;
    var info = "";
    for (var index = 0; index < flights.length; index++) 
    {
        var vuelo = flights[index];

        if (vuelo.cost < precioBajo)
        {
            precioBajo = vuelo.cost;
        }
    }

    for (var index = 0; index < flights.length; index++) 
    {
            var vuelo = flights[index];

            if (vuelo.cost == precioBajo )
            {
                if (vuelo.scale)
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
            
    }
         alert(info);
         
};


        


function comprarF() 
{
    
    var comprar = parseFloat(prompt("Introduzca el numero de vuelo para su compra")); 
    info = "";
    for (var index = 0; index < flights.length; index++) 
    {
        var vuelo = flights[index];
        if (vuelo.id == comprar)
        {
            alert("El vuelo numero " + vuelo.id + " con destino " + vuelo.to + " y origen " + vuelo.from + " ha sido comprado con exito");
            alert("Gracias por su compra!!");
            return;
        }
    }
        alert("Ups debe de haber un error. Introduzca un numero de vuelo correcto!");
        comprarF();
};



function menuUserF() 
{
   while (true)
   {
     var menuUser = (prompt("Escoja la opcion deseada: \n - Buscar precio mas alto: A \n - Buscar por precio: P \n - Buscar precio mas bajo: B \n - Comprar: C ").toUpperCase());

     switch (menuUser) 
        { 
             case "A":
                buscarPrecioAltoF();
                break;
            case "P":
                buscarPrecioF();
                break;
            case "B":
                buscarPrecioBajoF();
                break;
            case "C":
                comprarF();
            return;
        }
        
    }  
      
};


function menuAdminF() 
{
    
    while (true)
    {
     var menuAdmin = (prompt("Que desea hacer? \n - Crear Vuelo: C \n - Eliminar Vuelo: E \n - Salir: S").toLowerCase());

      switch (menuAdmin) 
       {
        case "c":
           crearVueloF();
           break;
        case "e":
           eliminarVueloF();
           break;
        case "s":
           start2F();
           return;

       } 
    }   
};




function startProF() 
{
    rolPreguntarF();    
}

function exitF() 
{
    alert("Muchas gracias. Hasta pronto!!");
       
};





