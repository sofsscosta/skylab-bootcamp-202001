//una vez tengo la logica en funcion decido pasarla a objeto para
//que sea mas fácil de leer o interpretar.


var controller = {

     operacion : "", //mi string de carácteres concatenados.
     yaTieneComa : false, //inicializo el bolean
     resultado : 0, //resultado operación
     resultAnterior : true, //si partimos de un resultado en pantalla.
     operand : "", //mi operando mostrado en pantalla.


     pressKey:function (char) 
    {   
        
        if (char == "AC")
        {
            this.operation = "";
            this.yaTieneComa = false;
            this.resultado = 0;
            this.resultAnterior = true;
            this.operand = "";

            view.showOutput(0);  //salida a pantalla.
            return;
        }
        
        if (this.resultAnterior)  //partimos de resultado anterior.
        {
            
            if (char == "=")
            {
                
            }
            else if (char == "+" || char == "-" || char == "*" || char == "/")
            {
                this.operacion = this.resultado.toString(); //nuestro resultado es un mumber. Lo pasamos a string operacion para operar en él.
                view.showOutput(this.operacion);
                this.operacion += char;
                this.operand = "";
                this.resultAnterior = false; //actualizamos el bolean.
            }
            else if (!isNaN(char))
            {
            
                this.operacion = char; //si añadimos un number ese será el 1er operando de operación.
                this.resultAnterior = false;
                this.operand += char;

                view.showOutput(this.operand); //
            }
        }
        else  //partimos de cero. No hay resultado anterior.
        {
            if (char == "C") //borramos el último caracter.
            {
                this.operacion = this.operacion.slice(0,this.operacion.length -1); //método selecciona nuevo string cin el último elemento.
                this.operand = this.operand.slice(0,this.operand.length - 1); //same para pantalla.
                
                view.showOutput(this.operand);
                
            }
            if (char == "=")
            {
                this.resultado = eval(this.operacion);
                console.log("result = " + this.resultado);
                this.operacion = "";
                this.operand = "";
                this.yaTieneComa = false;
                this.resultAnterior = true;

                view.showOutput(this.resultado)

            }
            if (char == ".")
            {
                if (this.yaTieneComa)
                {
                    
                }
                else
                {
                    this.operacion += "."; //char es "," pero para JS es "."
                    this.operand += char;
                    view.showOutput(this.operand);
                    this.yaTieneComa = true;
                }  
            
            }      

            else if (char == "+" || char == "-" || char == "*" || char == "/")
            {
                view.showOutput(this.operand);
                this.operacion += char;
                this.operand = "";
                this.yaTieneComa = false;
            }
            else if ( !isNaN(char)) 
            {
                this.operacion += char;
                this.operand += char;
                view.showOutput(this.operand);
               
            }
        }
    }
}
