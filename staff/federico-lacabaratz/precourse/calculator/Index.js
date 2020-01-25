alert("Bienvenidos a Skylab's Calculator");

var n1 = prompt("Inserte el primer número");
var n2 = prompt("Inserte el segundo número");

function calculator(n1,n2) {

    var results = [];

    if (isNaN(n1) && isNaN(n2) || (n1==="" && n2==="") || (n1===null && n2===null)) {
        console.log("Inserte al menos un número");
        return;

    } else if (isNaN(n2) || n2===null || n2==="") {
        var sqrn1 = Math.sqrt(n1).toFixed(3);
        results.push(`La raíz cuadrada de ${n1} es: ${sqrn1}`);
        console.log(results);

    } else if (isNaN(n1) || n1===null || n1==="") {
        var sqrn2 = Math.sqrt(n2).toFixed(3);
        results.push(`La raíz cuadrada de ${n2} es: ${sqrn2}`);
        console.log(results);

    } else {

        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        var suma= n1+n2;
        var rest= n1-n2;
        var mult= n1*n2;
        var div= n1/n2;
        
       
        results.push(`Los resultados son: ${n1} + ${n2} = ${suma.toFixed(3)}, ${n1} - ${n2} = ${rest.toFixed(3)}, ${n1} x ${n2} = ${mult.toFixed(3)} y ${n1} / ${n2} = ${div.toFixed(3)}`);
        
        console.log(results);
    }
    
}

calculator(n1,n2); 