var numerosCalculadora=[];
var paraOperar=[];

function calculatorVamos(){
for (var i =0; paraOperar.length<i;i++){
	console.log(paraOperar[i])
}
}


function operando(){
	for(var i =0; i<numerosCalculadora.length; i++){
		var indice = numerosCalculadora.length-1;
		paraOperar = numerosCalculadora[indice];
	}
}

function undoUndo(){
	for(var i =0; i<numerosCalculadora.length; i++){
		var indice = numerosCalculadora.length-2;
		paraOperar = numerosCalculadora[indice];
	}
}

function calculatorNew(fn){
	return new Function( fn)();}

//Numbers
document.getElementById("one").addEventListener("click",key1);
document.getElementById("two").addEventListener("click",key2);
document.getElementById("three").addEventListener("click",key3);
document.getElementById("four").addEventListener("click",key4);
document.getElementById("five").addEventListener("click",key5);
document.getElementById("six").addEventListener("click",key6);
document.getElementById("seven").addEventListener("click",key7);
document.getElementById("eight").addEventListener("click",key8);
document.getElementById("nine").addEventListener("click",key9);
document.getElementById("zero").addEventListener("click",key0);
document.getElementById("clearlcd").addEventListener("click",keyclearlcd);
document.getElementById("undo").addEventListener("click",keyundo);
//Operations
document.getElementById("division").addEventListener("click",keyDivision);
document.getElementById("multiplication").addEventListener("click",keyMultiplication);
document.getElementById("deduct").addEventListener("click",keyDeduct);
document.getElementById("add").addEventListener("click",keyAdd);
document.getElementById("coma").addEventListener("click",keyComa);
document.getElementById("equal").addEventListener("click",keyEqual)

//Functions for operations

function keyundo(){
	undoUndo();
	document.getElementById('lcd').innerHTML = paraOperar;
	paraOperar=numerosCalculadora;
}

function keyclearlcd(){
	numerosCalculadora=[];
}
function keyEqual(){
	operando();
    console.log(eval(paraOperar));
	document.getElementById('lcd').innerHTML = eval(paraOperar);
    

}

function keyDivision(){
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("division").innerHTML;
	document.getElementById('lcd').innerHTML = actual + " " + sumado + " ";
}
 
function keyMultiplication(){
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("multiplication").innerHTML;
	document.getElementById('lcd').innerHTML = actual + " " + sumado + " ";
}

function keyDivision(){
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("division").innerHTML;
	document.getElementById('lcd').innerHTML = actual + " " + sumado + " ";
}

function keyDeduct(){
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("deduct").innerHTML;
	document.getElementById('lcd').innerHTML = actual + " " + sumado + " ";
}

function keyAdd(){
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("add").innerHTML;
	document.getElementById('lcd').innerHTML = actual + " " + sumado + " ";
}

function keyComa(){
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("coma").innerHTML;
	document.getElementById('lcd').innerHTML = actual + sumado;
}

function keyDivision(){
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("division").innerHTML;
	document.getElementById('lcd').innerHTML = actual + " " + sumado + " ";
}

//Functions for numbers


function key1() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("one").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
function key2() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("two").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
function key3() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("three").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
function key4() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("four").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
function key5() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("five").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
function key6() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("six").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
function key7() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("seven").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
function key8() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("eight").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
function key9() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("nine").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
function key0() {
	let actual = document.getElementById('lcd').innerHTML;
	let sumado = document.getElementById("zero").innerHTML;
	document.getElementById('lcd').innerHTML = actual + parseInt(sumado);
	numerosCalculadora.push(actual+sumado);
}
