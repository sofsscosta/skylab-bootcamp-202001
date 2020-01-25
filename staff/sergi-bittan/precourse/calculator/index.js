function Calculadora(numero1,numero2) 
{
    if (numero1 == undefined || numero2 == undefined)
    {
      var raiz = Math.sqrt(numero1);
      var resultadoRaiz = raiz.toFixed(3);
      console.log(resultadoRaiz); 
      return;
    }
    
    if (numero1 == null || isNaN(numero1))
    {
        numero1 = false;
        while (!numero1)
        {
         var numero1 = parseFloat(prompt("Esta opcion no es correcta! Introduce un numero valido"));
        }
    }
    if (numero2 == null || isNaN(numero2))
    {
        numero2 = false;
        while (!numero2)
        {
        var numero2 = parseFloat(prompt("Esta opcion no es correcta! Introduce un numero valido"));
        }
    }

   

    Operaciones(numero1,numero2);

    
}



function Operaciones(numero1,numero2)
{
    
    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var division = numero1 / numero2;

    var resultado = ["suma =  " + suma,"resta =  " + resta, "producto =  " + multiplicacion, "division =  " + division.toFixed(3)];
    return console.log(resultado);
}

