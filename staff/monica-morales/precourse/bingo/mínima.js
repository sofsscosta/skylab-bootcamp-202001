var bingoCar={num1:1,num2:7,num3:2,num4:5,num5:8};
var aciertos=[];


function generateRandom(){
    var aleatorio=Math.floor(Math.random() * 10) + 1;
    alert(`El número extraído es: ${aleatorio}`)
    return aleatorio;
};

function newTurn(){
    var aleatorio=generateRandom();
    for(i in bingoCar){
        if(bingoCar[i]===aleatorio){
            bingoCar[i]='X';
            alert(`Enhorabuena!!! El nº: ${aleatorio} está en su carton`)
            aciertos.push(bingoCar[i])
        }
    }
    alert(Object.values(bingoCar));
    askTurn();
};

function askTurn(){
    if(aciertos.length===5){
        alert('BINGO!!!')
    }else{
        var answer=confirm('¿Desea continuar?')
        switch(answer){
            case true:
                newTurn();
                break;
            case false:
                alert('Ciao!.');
                break;
        }
    }
};

function bingo(){
    var name=prompt('Por favor, indique su nombre.')
    alert(`${name}, este es su carton: ${Object.values(bingoCar)}.`);
    askTurn();
};

bingo();