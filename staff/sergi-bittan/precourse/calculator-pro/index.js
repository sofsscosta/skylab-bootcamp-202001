



var resultado = [];
function calculator() 
{   
    var operandos = arguments;
    var suma = sumaF(operandos);
    var resta = restaF(operandos);
    var mul = multiF(operandos);
    var div = divisF(operandos);
    resultado.push(suma, resta, mul, div);
    var mostrarResultado = "";
    for (var i = 0; i< resultado.length; i++)
    {
        if (i % 4 === 0)
        {
            mostrarResultado += "\n";
        }
        mostrarResultado += resultado[i] + ", ";
    }  
    mostrarResultado += "\n";
    alert(mostrarResultado);
    newArray = [];
    masOperacionesF();  
}

 

    
// operandos es una variable que tiene asignada arguments
function sumaF(operandos) 
{   
    
    var acc = 0;
    for (var i = 0; i <operandos.length; i++)
    {
        acc += operandos[i];
    }   
    return acc;
}

function restaF(operandos) 
{
    //iteracion en i=1 para colocar el primer operando[0] - operando[1] y evitar en (-).
    acc1 = operandos[0];
    for (var i = 1; i <operandos.length; i++)
    {
        acc1 -= operandos[i];
    }    
    return acc1;
}

function multiF(operandos) 
{
    var acc2 = 1;
    for (var i = 0; i <operandos.length; i++)
    {
        acc2 *= operandos[i];
    }    
    return acc2;
}

function divisF(operandos) 
{
    //iteracion en i=1 para colocar el primer operando[0] / operando[1] y evitar (0/num).

    acc3 = operandos[0];
    for (var i = 1; i <operandos.length; i++)
    {
        acc3 /= operandos[i];
    }    
    return acc3;
}




var newArray = [];

function pedirNumerosF() 
{
    var pedirNumeros = parseFloat(prompt("Introduzca los numeros que desea operar"));

    if (isNaN(pedirNumeros))
    {
        alert("Por favor, introduzca un numero correcto");
        pedirNumerosF();

    }
    if (!isNaN(pedirNumeros))
    {
        newArray.push(pedirNumeros);
        var addNumbers = confirm("Desea anadir algun numero mas?");
        if (addNumbers === true || addNumbers === "")
        {
            pedirNumerosF();
        }
        else
        {
            //expandimos el array para sacar la lista de sus elementos.ES6
            calculator(...newArray);
            return;
        }
    }
    
   

}


function masOperacionesF() 
{
    var masOperaciones = confirm("Desea realizar alguna otra operacion?");
    if (masOperaciones === true)
    {
        pedirNumerosF();
    }
    else
    {
        alert("Bye!!");
    }
        
}

pedirNumerosF();