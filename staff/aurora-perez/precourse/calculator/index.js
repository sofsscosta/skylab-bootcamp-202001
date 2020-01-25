
var pregunta1= prompt("¿Quieres usar la calculadora?");

function siONo (respuesta){
  if (respuesta==="si"){
    calculadora();
  }else if(respuesta==="no"){
    alert ("Sesión finalizada, hasta pronto!");
  }else {
    pregunta1 = prompt ("No has puesto ni si ni no."); 
    siONo(pregunta1);
  }
};

function calculadora (){
    var preguntaInicial=prompt("Esta calculadora funciona insertando los números con los que desee hacer los cálculos. "+
    "El resultado será la suma, resta, multiplicación y división de los números entre sí, en ese orden."+
    "Por favor inserte los números:");
    var extraer = preguntaInicial.split(",");
    var respLista = extraer.map(function (num) {return parseInt(num)});
    let tieneLetra = true;
    let i;
    
    
    for (i=0; i<respLista.length;i++){
      const noNumero = respLista[i];
      if (isNaN(noNumero)) { 
        tieneLetra=false;
      }
    }
    
    
    
    function suma () {
      var inicioSuma = 0;
      
        for (i=0; i<respLista.length; i++) {
               inicioSuma+=respLista[i];
           }
      return parseFloat(inicioSuma.toFixed(3));
        };
     
    
    //console.log(suma(2,3.456,1.1234));
    
    function resta () {
      var inicioResta=respLista[0];
        for (i=1; i<respLista.length; i++) {
                inicioResta-=respLista[i];
            }
            return parseFloat(inicioResta.toFixed(3));
        };
    
    
    
    function multiplicacion (){
      var inicioMultip = respLista[0]
        for (i=1;i<respLista.length;i++){
          inicioMultip*=respLista[i];
       };
      return parseFloat(inicioMultip.toFixed(3));
    };
    
    
    function division (){
      var inicioDivision = respLista[0]
        for (var i=1;i<respLista.length;i++){
          inicioDivision/=respLista[i];
       };
      return parseFloat (inicioDivision.toFixed(3));
    };
     
    
    //discriminar los 0 porque no se pueden dividir entre 0 y las letras
   if (tieneLetra===false){ //discriminar letras
      alert('No pongas algo que no sea un número');
      calculadora();
    }else if (respLista.length===1){
      var respRaiz = parseFloat(Math.sqrt(respLista[0]).toFixed(3));
      alert('Tu resultado final es '+respRaiz+'.');
      var pregunta1=prompt("¿Quieres hacer otra operación? Responde si o no");
      siONo(pregunta1);
    } else { //se crean variables de los resultados de todas las funciones, para juntarlas en una string y que sea más fácil la visualización, despues se imprime en pantalla el resultado
      
    var resultadoSuma = suma(respLista);
    var resultadoResta = resta(respLista);
    var resultadoMultiplicacion= multiplicacion(respLista);
    var resultadoDivision;

   for (i=1;i< respLista.length;i++){
    const infi= respLista.length[i];
    if (infi===0){
      resultadoDivision="Infinito";
      break;
    }else{
      resultadoDivision = division(respLista);
    }
   };

    var resultadoFinal=[resultadoSuma,resultadoResta,resultadoMultiplicacion, resultadoDivision];
    alert('Tu resultado final de suma, resta, multiplicación y división, en ese orden, es: ' + resultadoFinal + '.');
    pregunta1=prompt("¿Quieres hacer otra operación? Responde si o no");
      siONo(pregunta1);
    };
  };
    
        
    siONo(pregunta1) ;    