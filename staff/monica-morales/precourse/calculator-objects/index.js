
var number1 = (prompt('Introduce un numero'));
var number2 = (prompt('Introduce otro numero'));
var result = []

//hacer validaciones
var validations = {
    notNumber: function(){
        if (isNaN(number1) || isNaN(number2)){
        alert('Uno de los números introducidos no es correcto');
        number1 = (prompt('Introduce un numero'));
        number2 = (prompt('Introduce otro numero'));
        } 
    },
    missingNumber: function(){
        if(number1 === null || number1 === ""){
            alert(`La raiz cuadrada de ${number2} es ` + Math.sqrt(number2).toFixed(3))
        }
        if(number2 === null || number2 === ""){
            alert(`La raiz cuadrada de ${number1} es ` + Math.sqrt(number1).toFixed(3))
        }
    },
    decimalsControl: function(){
        for(i=0; i<result.length; i++){
            if(!(Number.isInteger(result[i]))){
                result[i] = result[i].toFixed(3);
            }
        }
    },
    showResult: function(){
        var value="";
        for(i=0; i<result.length; i++){
            switch(i){
                case 0:
                    value += `Suma: ${result[i]}\n`;
                    break;
                case 1:
                    value += `Resta: ${result[i]}\n`;
                    break;
                case 2:
                    value += `Multiplicación: ${result[i]}\n`;
                    break;
                case 3:
                    value += `División: ${result[i]}\n`;
                    break;
            }
            
        }
        alert(value);
    }
};

//declarar funcion constructora
function Operaciones(num1, num2){
    validations.notNumber();
    validations.missingNumber();
    this.num1 = parseFloat(num1);
    this.num2 = parseFloat(num2);
    this.suma = function(){
        result.push(this.num1 + this.num2);
    }
    this.resta = function(){
        result.push(this.num1 - this.num2);
    }
    this.multiplicacion = function(){
        result.push(this.num1 * this.num2);       
    }
    this.division = function(){
        result.push(this.num1 / this.num2);
    }
}

//instancias
var sumar = new Operaciones (number1, number2);
var restar = new Operaciones (number1, number2);
var multiplicar = new Operaciones (number1, number2);
var dividir = new Operaciones (number1, number2);

//invocar los métodos(motor de la aplicación)
sumar.suma();
restar.resta();
multiplicar.multiplicacion();
dividir.division();
validations.decimalsControl();
validations.showResult();


