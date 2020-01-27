var flights=[
 { id:0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
 { id:1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
 { id:2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
 { id:3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
 { id:4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
 { id:5, to: 'London', from: 'Madrid', cost: 200, scale: false },
 { id:6, to: 'Madrid', from: 'Barcelona', cost: 90 , scale: false },
 { id:7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
 { id:8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
 { id:9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
 { id:10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
]; 
var nombre = '';
 // comentario para probar git
// Pido nombre y compruebo
function bienvenida(){  
  nombre = prompt('Ingrese su nombre por favor..');
    if(nombre!=''){
       if(isNaN(nombre)!==true){
         alert('Error! Ingrese su nombre , por favor.')
       }else{
         main(nombre);
       }
    }else{
    alert('Ingrese su nombre por favor..')
    }  
  return nombre;
};
// Núcleo del sistema
function main(nombre){
 var key = prompt('Hola '+ nombre +' ! Bienvenido a nuestro sistema\n En que podemos ayudarlo ?\n\n1- Mostrar vuelos disponibles.\n2- Mostrar coste medio de vuelos.\n3- Mostrar vuelos con escalas.\n4- Mostrar últimos vuelos del día'); 
    switch(key){
      case '1':
        cartel(flights);
        setTimeout( adminOrUser , 5000);
        break;
      case '2':
        costeMedioVuelos();
        setTimeout( adminOrUser , 5000);
        break;
      case '3':
        cartel(vuelosConEscalas);
        setTimeout( adminOrUser , 5000);
        break;
      case '4':
        cartel(ultimosVuelos);
        setTimeout( adminOrUser , 5000);
        break;
      default:
        alert('Error! ingrese respuesta correcta')
    }
};

// Muestra la información en pantalla  
function cartel(datos){
  for( i = 0 ; i< datos.length ; i++ ){
    if ( datos[i].scale === true){
      console.log('El vuelo Id: '+ datos[i].id + ' con destino : '+ datos[i].to +' desde : '+ datos[i].from +' tiene un coste de: '+ datos[i].cost+' CON escalas');   
    }else{
      console.log('El vuelo Id: '+ datos[i].id + ' con destino : '+ datos[i].to +' desde : '+ datos[i].from +' tiene un coste de: '+ datos[i].cost);
    }
  }
console.log('*************************************************');
};

// Devuelvo coste medio de los vuelos
function costeMedioVuelos(){
  var costeMedio = flights.reduce(function(a,b){ return a + b.cost },0)
  costeMedio = (costeMedio/flights.length).toFixed(2);
  console.log('El coste medio de vuelos es : ' + costeMedio + ' €');
  console.log('*************************************************');
};
// Devuelvo vuelos con escalas
var vuelosConEscalas = flights.filter(function(vue){
  return vue.scale == true;
});
// Devuelvo ultimos cinco vuelos del día
var ultimosVuelos = flights.filter(function(vue){
  return vue.id > flights.length-7;
});

// Selector entre el modo Admin o User
function adminOrUser(){
 var key = prompt('Skylabs Airlines : Desea continuar como: 1- Admin o 2- User ');
    switch(key){
      case '1':
        modoAdmin();
        break;
      case '2':
        modoUser(nombre);
        break;
      default:
        alert('Error! Elija entre 1 o 2');
        adminOrUser();    
    }  
};
// Función Adm : Eliminar vuelos
function borraVuelo(){
 var iD = prompt('Ingrese Id de vuelo que desee borrar');
  for( i = 0; i<flights.length ; i++){
    if(flights[i].id == iD){
      flights.splice(flights[i].id,1);
    }
  }
  cartel(flights);
  setTimeout( modoAdmin , 5000);
};

// Función Adm : Creador de vuelos
function creaVuelo(){
  var vuelo = {
    id: 0,
    to:'',
    from:'',
    cost: 0,
    scale: null,
  }

  function ultimaId(){      // Busca última Id
    var max = 0;
    for( i = 0 ; i<flights.length ; i++){
      if(max < flights[i].id){
        max = flights[i].id;
      }
    }
    return max + 1;
  }
 
  var nuevoVuelo = Object.create(vuelo);
    nuevoVuelo.id = ultimaId();
    nuevoVuelo.to = prompt('Ingrese destino : ');
    nuevoVuelo.from = prompt('Ingrese origen : ');
    nuevoVuelo.cost = prompt('Ingrese precio : ');
    var escala = prompt('Hay escala ? : 1 - Si  / 2 - No');
      switch(escala){
        case '1':
          nuevoVuelo.scale = true ;
          break;
        case '2':
          nuevoVuelo.scale = false ;
          break;
    }  
  flights.push(nuevoVuelo);
  cartel(flights);
  setTimeout( modoAdmin , 5000);  
};
 
// Núcleo de modo Administrador
function modoAdmin(){
 var keyAdm = prompt('Bienvenido Administrador! Que desea hacer?\n 1- Agregar vuelo.\n 2- Eliminar vuelo.\n 3- Salir de modo Admin');
    switch(keyAdm){
      case '1':
          if(flights.length == 16){
            alert('Error! Ha alcanzado el máximo de vuelos! Debe borrar vuelos');
            modoAdmin();
          }else if (flights.length == 15){
            alert('CUIDADO! Ha alcanzado el máximo de vuelos!');
          }   
        creaVuelo();
        break;
      case '2':
        borraVuelo();   
        break;
      case '3':
        adminOrUser();   
        break;
      default:
        alert('Error! Elija entre 1 , 2 o 3'); 
    }
};

// Núcleo modo User
function modoUser(nombre){
 var buscador = [];
 var precio = prompt('Hola '+ nombre +'! , Ingrese el importe de vuelo está buscando , por favor ');
 var key = prompt('Que desea hacer?\n 1- Buscar vuelo por precio más CARO.\n 2- Buscar vuelo por precio más BARATO.\n 3- Buscar vuelo por precio IGUAL.\n 4- Salir del modo Usuario');
    switch(key){
      case '1':
        for (i = 0 ; i < flights.length ; i++){
          if(precio < flights[i].cost){    
            buscador.push(flights[i])         
          }
        }
        if (buscador.length < 1){
          alert('Lo siento , no existen vuelos de ese precio. Vuelva a intentarlo');
          setTimeout( modoUser , 5000); 
        }else{
         var mem = buscador.sort(function(a,b){ 
            return a.cost - b.cost;});
          cartel(mem);
          setTimeout( selectorDeVuelo , 5000); 
        }
        break;
      case '2':
        for (i = 0 ; i < flights.length ; i++){
          if(precio > flights[i].cost){    
            buscador.push(flights[i])         
          }
        }
        if (buscador.length < 1){
          alert('Lo siento , no existen vuelos de ese precio. Vuelva a intentarlo');
          modoUser(nombre);
        }else{
         var mem = buscador.sort(function(a,b){ 
            return a.cost - b.cost;});
          cartel(mem);
          setTimeout( selectorDeVuelo , 5000);          
        } 
        break;
      case '3':
        for (i = 0 ; i < flights.length ; i++){
          if(precio == flights[i].cost){    
            buscador.push(flights[i])         
          }
        }
        if (buscador.length < 1){
          alert('Lo siento , no existen vuelos de ese precio. Vuelva a intentarlo');
          modoUser(nombre);
        }else{
          cartel(buscador);
          setTimeout( selectorDeVuelo , 5000);          
        }
        break;
      case '4':
        adminOrUser();   
        break;
      default:
        alert('Error! Elija entre 1 , 2 o 3'); 
      break;
  }

// Selección de compra de vuelo
  function selectorDeVuelo(){
   var select = prompt('Ingrese la Id del vuelo deseado ');
   var item = buscador.find( function (ele){
      return ele.id == select;
    })
    if(item){
      console.log(' Gracias por su compra! Vuelva pronto');
    }else{
      alert('Error! ese vuelo no existe');
      selectorDeVuelo()
    }
  };
};
 
bienvenida()
 
 