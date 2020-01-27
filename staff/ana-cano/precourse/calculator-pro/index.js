

  
       // Devuelve true si el parámetro que le pasamos es un número
       // https://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript
       function isNumber(n) {
           return !isNaN(parseFloat(n)) && !isNaN(n - 0)
       }
   
       // Devuelve la suma de a + b
       function suma(a, b) {
           return a + b;
       }
   
       // Devuelve la resta de a - b
       function resta(a, b) {
           return a - b;
       }
   
       // Devuelve la multiplicación de a * b
       function multiplica(a, b) {
            return a * b;
       }
   
       // Devuelve la división de a / b
       function division(a, b) {
            return a / b;
       }
   
       // Devuelve true si el número pasado como parámetro no tiene decimales
       // https://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number
       function tienedecimales(num) {
           return num % 1 != 0;
       }
   
       // Devuelve resultado de la raiz cuadrada
       // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/sqrt
       function raizcuadrada(num) {
           return Math.sqrt(num);
       }
   
       // Si el parametro tiene decimales lo deja en 3 decimales
       // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/toFixed
       function reducirDecimalesatres(num)
       {
           if (tienedecimales(num)) {
               return num.toFixed(3);
           }
           return num;
       }
   
       // Nos convierte un string a number, lo necesitamos porque al solicitar los datos
       // al usuario con promt nos devolvia un string y nos daban error las operaciones de suma, resta....
       // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number
       function convertiraNumber(num) {
           return Number(num)
       }
   
       function calculadora() {
           // Solicitamos al usuario que introduzca los valores que quiera
           // https://stackoverflow.com/questions/28252888/javascript-how-to-save-prompt-input-into-array
           var datos = prompt("Intoduce los números a calcular separados por comas:").split(",")
   
           // Comprobamos si el usuario escribio un unico valor y no esta vacio, en ese caso devovemos raiz cuadrada
           // https://stackoverflow.com/questions/20533127/detect-empty-value-on-prompt
           if (datos.length == 1 && datos[0]!='') {
               resultado = raizcuadrada(convertiraNumber(datos[0]));
               alert('El resultado de la raiz cuadrada de ' + datos[0] +' es: ' + reducirDecimalesatres(resultado));
           } else {
   
               // Si usuario introduce dos valores hacemos suma, resta, multiplicación y división
               if (datos.length == 2) {
                   resultado = suma(convertiraNumber(datos[0]), convertiraNumber(datos[1]));
                   alert('El resultado de la suma de ' + datos[0] +' y ' + datos[1] + ' es: ' + reducirDecimalesatres(resultado) );
   
                   resultado = resta(convertiraNumber(datos[0]), convertiraNumber(datos[1]));
                   alert('El resultado de la resta de ' + datos[0] +' y ' + datos[1] + ' es: ' + reducirDecimalesatres(resultado) );
   
                   resultado = multiplica(convertiraNumber(datos[0]), convertiraNumber(datos[1]));
                   alert('El resultado de la multiplicación de ' + datos[0] +' y ' + datos[1] + ' es: ' + reducirDecimalesatres(resultado));
   
                   resultado = division(convertiraNumber(datos[0]), convertiraNumber(datos[1]));
                   alert('El resultado de la división de ' + datos[0] +' y ' + datos[1] + ' es: ' + reducirDecimalesatres(resultado));
   
               }
               else {
                   // Si usuario introduce número indeterminado de valores
   
                   if (datos.length > 2) {
                       var sumaval = 0;
                       var restaval = 0;
                       var multival = 1;
                       var divival = (datos[0]);
   
                       for (var i=0; i<datos.length;i++) {
                        
                        sumaval += convertiraNumber(datos[i]);
                        restaval -=  convertiraNumber(datos[i]);
                        multival *=  convertiraNumber(datos[i]);
                        divival /=  convertiraNumber(datos[i])
                        divival = divival.toFixed(3);
                    }
                    var resultado = alert(' El restultado de la operación és: ' + sumaval + ", "+ restaval + " ,"+ multival +" y "+divival);

                }
            }

        }

    }
    calculadora();

