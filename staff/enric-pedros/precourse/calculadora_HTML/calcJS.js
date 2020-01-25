
var result = document.getElementById('display'); //guardamos en una variable el objeto del display
var display2 = document.getElementById('display2') //le añadimos esta variable para ver el seguimiento de la operaciones
var primerNumero;
var segundoNumero;
var tipoOperacion;
var noDelete = false //esta variable auxiliar la creamos para no poder borrar el resultado (mejor presentacion)
var noAddnumbers = false // para no poder añadir numeros si ya hemos dado a la funcion resultado

//creamos eventos por cada uno de los botones de la calculadora

document.getElementById("reset").addEventListener("click",reset)
document.getElementById("borrar").addEventListener("click",borrar)
document.getElementById("dividir").addEventListener("click",dividir)

document.getElementById("nueve").addEventListener("click",addvalue)
document.getElementById("ocho").addEventListener("click",addvalue)
document.getElementById("siete").addEventListener("click",addvalue)
document.getElementById("multiplicar").addEventListener("click",multiplicar)

document.getElementById("seis").addEventListener("click",addvalue)
document.getElementById("cinco").addEventListener("click",addvalue)
document.getElementById("cuatro").addEventListener("click",addvalue)
document.getElementById("restar").addEventListener("click",restar)

document.getElementById("tres").addEventListener("click",addvalue)
document.getElementById("dos").addEventListener("click",addvalue)
document.getElementById("uno").addEventListener("click",addvalue)
document.getElementById("sumar").addEventListener("click",sumar)

document.getElementById("zero").addEventListener("click",addvalue)
document.getElementById("decimal").addEventListener("click",addDecimal)
document.getElementById("resultado").addEventListener("click",equal)

//creamos funciones que añaden su valor a la pantalla del display

function reset (){
    result.placeholder = result.placeholder = "";
    display2.placeholder = display2.placeholder ="";
    primerNumero = 0
    segundoNumero =0
    tipoOperacion ="";
    noDelete = false;
    noAddnumbers = false
}
// con esta funcion añadimos el valor del elemento correspondiente al display , hemos creado una funcion sola generica en vez de ir creando funciones por cada valor

function cleanDisplay (){
    result.placeholder = result.placeholder = "";
}

function addvalue() {
    if (noAddnumbers===false){
        
        result.placeholder += this.value
    } 
}

function borrar() {
//    console.log(typeof result.placeholder)   comprobamos que tipo de elemento es, i debido a que es un string podemos aplicar el método slice para eliminar el último valor añadido
    if(noDelete === false){ //aqui miramos si hemos pasado por el resultado o no para poder borrar los digitos por error al clickar

        result.placeholder = result.placeholder.slice(0, -1);
    }
}
function addDecimal() {    
    var numerosEnDisplay = result.placeholder  //primero comprovamos si ya existe el decimal
        if(numerosEnDisplay.includes('.')){
            return null
        }
        if (numerosEnDisplay === ""){ //aqui comprobamos si está vacío el string i si se cumple entonces le añadimos un 0
          result.placeholder = "0."  
        } else result.placeholder += this.value

}

function sumar (){
    var existesigno = result.placeholder //no podemos operar con un decimal como ultima opcion
    if (existesigno.endsWith(".")){
        return null

    }else if(tipoOperacion !== ""){ //así nos aseguramos que ya hay escogido un  tipo de operacion
        tipoOperacion = "+"
        primerNumero = result.placeholder
        display2.placeholder = result.placeholder + tipoOperacion
        cleanDisplay()
        noAddnumbers = false
    }
    
    else{
        primerNumero = result.placeholder
        tipoOperacion = "+"
        display2.placeholder += primerNumero + tipoOperacion 
        cleanDisplay()
    }
 
}

function restar (){
    var existesigno = result.placeholder //no podemos operar con un decimal como ultima opcion
    if (existesigno.endsWith(".")){
        return null

    }else if(tipoOperacion !== ""){ //así nos aseguramos que ya hay escogido un  tipo de operacion
        tipoOperacion = "-"
        primerNumero = result.placeholder
        display2.placeholder = result.placeholder + tipoOperacion
        cleanDisplay()
        noAddnumbers = false

    }
    else{
        primerNumero = result.placeholder
        tipoOperacion = "-"
        display2.placeholder += primerNumero + tipoOperacion 
        cleanDisplay()
    }
        
}

function multiplicar (){
    var existesigno = result.placeholder //no podemos operar con un decimal como ultima opcion
    if (existesigno.endsWith(".")){
        return null
    
    }else if(tipoOperacion !== ""){ //así nos aseguramos que ya hay escogido un  tipo de operacion
        tipoOperacion = "*"
        primerNumero = result.placeholder
        display2.placeholder = result.placeholder + tipoOperacion
        cleanDisplay()
        noAddnumbers = false

    }
        else{
        primerNumero = result.placeholder
        tipoOperacion = "*"
        display2.placeholder += primerNumero + tipoOperacion 
        cleanDisplay()
    }
        
}
function dividir (){
    var existesigno = result.placeholder //no podemos operar con un decimal como ultima opcion
    if (existesigno.endsWith(".")){
        return null
    
    }else if(tipoOperacion !== ""){ //así nos aseguramos que ya hay escogido un  tipo de operacion
        tipoOperacion = "/"
        primerNumero = result.placeholder
        display2.placeholder = result.placeholder + tipoOperacion
        cleanDisplay()
        noAddnumbers = false

    }
    else{
        primerNumero = result.placeholder
        tipoOperacion = "/"
        display2.placeholder += primerNumero + tipoOperacion 
        cleanDisplay()
    }
        
}

function equal(){
    if(display.placeholder == ""){
        return null
    }else if (noAddnumbers === true){
        return null
    }
    segundoNumero = result.placeholder
    display2.placeholder += segundoNumero
    noDelete = true;
    noAddnumbers = true
    operacion(primerNumero, segundoNumero,tipoOperacion)
}

function operacion (num1, num2, operacion){
    var resultado = 0
    switch (operacion) {
        case '+':
            resultado = parseFloat(num1) + parseFloat(num2)
            break;
            case '-':
                resultado = parseFloat(num1) - parseFloat(num2)
            
                break;
                case '*':
                    resultado = parseFloat(num1) * parseFloat(num2)

                    break;
                    case '/':
                        resultado = parseFloat(num1) / parseFloat(num2)

                        break;
                    
    } result.placeholder = resultado
    
}
