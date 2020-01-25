
//array con los numeros ingresados.
var nums = [];

//funcion para pedir numero al usuario.
function pedir(){
    var pedirNums = prompt('Ingresa un numero...');
    if(pedirNums === null || pedirNums == "" || isNaN(pedirNums) ){
        console.log('Debes ingresar un numero...');
        pedir();
    }else{
        var numsInt = parseInt(pedirNums);
        nums.push(numsInt);
        
        var confirmar = confirm('¿Quieres ingresar mas numeros?');
        if(confirmar){
            pedir();
        }
    }
    return nums;  
}

function suma(){
    var i;
    var resSum = 0;
    for(i=0;i<nums.length;i++){
        resSum += nums[i];
    }
    console.log("la suma es: "+resSum);
}

function resta(){
    var i;
    var resRes = nums[0];
    for(i=1;i<nums.length;i++){
        resRes -= nums[i];
    }
    console.log("La resta es: "+resRes);
}

function multiplicar(){
    var i;
    var resMult = 1;
    for(i=0;i<nums.length;i++){
        resMult *= nums[i];
    }
    console.log("La multiplicación es: "+resMult);
}

function dividir(){
    var i;
    var j;
    var resDiv = nums[0];
    for(i=0;i<nums.length;i++){
        if(nums[0]=== 0){
            console.log('No se puede dividir');
        }
    }
    for(j=1;j<nums.length;j++){
        resDiv /= nums[j];
    }
    console.log("La división es: "+resDiv);
}


function raiz(){
    var raizNumero = Math.sqrt(nums[0]);
    console.log("La raíz cuadrada es: "+raizNumero.toFixed(3));
}

function mostrarNumeros(){
    console.log('Los numeros ingresados son:');
    nums.forEach(function(n){
        console.log(n);
    })
}

function calculadora(){
    pedir();
    if(nums.length === 1){
        mostrarNumeros();
        raiz();
    }else if(nums.length > 1){
        mostrarNumeros();
        suma();
        resta();
        multiplicar();
        dividir();
    }   
}

calculadora();

