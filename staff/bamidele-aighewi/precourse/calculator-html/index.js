"use strict"

var STRING_ACTIONS = {
    reset: "reset",
    backspace: "backspace",
    division: "division", /* symbols: / ÷ */
    multiplication: "multiplication", /* symbols: x * */
    subtraction: "subtraction",
    addition: "addition",
    comma: "comma", /* symbols: . */
    equal: "equal",
}

var inputBuffers = [];
var uiBuffers = [];
var currentBuffer = "";
var result = 0;
var equation = false;
var messageTimeout = undefined;

function replaceDotWithComma(p){
    return String(p).replace('.',',')
}

function displayInputBuffersToUI(){
    var buffer = document.getElementById("input-buffers");
    buffer.innerHTML = uiBuffers.length ? uiBuffers.join('') : "&nbsp;";
}

function displayCurrentBufferToUI(isReset) {
    var buffer = document.getElementById("current-buffer");
    if(!equation){
        buffer.innerHTML = currentBuffer === "" && !!isReset ? 0 : currentBuffer    
    }else{
        buffer.innerHTML = replaceDotWithComma(result)
    }
}

function clearMsgTimeout(){
    if (typeof messageTimeout !== "undefined") clearTimeout(messageTimeout)
}

function hideMessageBox(){
    var msgEl = document.getElementById("message");
    
    clearMsgTimeout();
    msgEl.classList.remove("show")
    msgEl.classList.add("hide")
}

function showMessageBox(message) {
    var msgEl = document.getElementById("message");
    msgEl.innerHTML = message
    msgEl.classList.add("show")
    msgEl.classList.remove("hide")

    clearMsgTimeout();

    messageTimeout = setTimeout(function(){
        hideMessageBox()
    }, 10000)
}

function receivedBufferIsValid(something){
    var message = "";
    var valid = false;
    var actionSymbols = ['/', '*', '+', '-']
    var firstEntryValues = ['.','-']
    var isActionSymbol = false;

    something = typeof something === "string" ? something.trim() : something;

    if (inputBuffers.length === 0){
        //if we have nothing in input buffer, user can only enter [0...9], [.] or [-] as first entry
        valid = typeof something === "number" || firstEntryValues.indexOf(something) !== -1
        if (!valid) message = "First entry value is invalid"
    }else{
        if(typeof something === "number"){
            valid = true
        } else if (typeof something === "string" && (actionSymbols.indexOf(something) !== -1 || something === "." )){
            var lastInputBufferValue = inputBuffers[inputBuffers.length - 1];
            lastInputBufferValue = typeof lastInputBufferValue === "string" ? lastInputBufferValue.trim() : lastInputBufferValue;
            isActionSymbol = something !== ".";

            valid = something !== lastInputBufferValue && actionSymbols.indexOf(lastInputBufferValue) === -1;

        }
    }

    return {
        valid: valid,
        message: message,
        isActionSymbol: isActionSymbol 
    }
}

function addToInputBuffer(something, mask){
    //add something to input buffer for processing...
    inputBuffers.push(something);
    uiBuffers.push(mask);
}

function addToCurrentBuffer(something, mask) {
    var response = receivedBufferIsValid(something);

    if(response.valid){
        mask = typeof mask !== "undefined" ? mask : something;
        currentBuffer += mask

        addToInputBuffer(something, mask)

        if (response.isActionSymbol){
            displayInputBuffersToUI()
            currentBuffer = "";
        }

        displayCurrentBufferToUI()
    }else{
        showMessageBox(response.message || "Bad expression");
    }
}

function getInputBuffers(){
    return inputBuffers;
}

function backspaceBuffers(){
    if (currentBuffer.length){
        currentBuffer = currentBuffer.substring(0, currentBuffer.length - 1);
    }

    if (inputBuffers.length) inputBuffers.pop()
    if (uiBuffers.length) uiBuffers.pop()
    
    if(!currentBuffer.length && inputBuffers.length){
        displayInputBuffersToUI()
    }

    displayCurrentBufferToUI()
}

function calculate(){
    try {
        var buffers = getInputBuffers();

        if (buffers.length) {
            var joined = getInputBuffers().join('');
            equation = true;
            result = eval(joined)
            displayInputBuffersToUI()
            displayCurrentBufferToUI()
        }
    } catch (e) {
        showMessageBox(e.name + ": " + e.message)
    }
}

function resetBuffers() {
    inputBuffers = []
    uiBuffers = []
    currentBuffer = "";
    displayCurrentBufferToUI(true)
    displayInputBuffersToUI()
}

function doButtonAction(action){
    equation = false;

    if(typeof action === "string"){
        if(action === STRING_ACTIONS.addition){
            addToCurrentBuffer(' + ');
        }else if (action === STRING_ACTIONS.subtraction){
            addToCurrentBuffer(' - ');
        }else if (action === STRING_ACTIONS.multiplication){
            addToCurrentBuffer(' * ', ' x ');
        }else if (action === STRING_ACTIONS.division){
            addToCurrentBuffer(' / ', ' ÷ ');
        } else if (action === STRING_ACTIONS.comma) {
            addToCurrentBuffer('.', ',');
        } else if (action === STRING_ACTIONS.reset) {
            resetBuffers();
        } else if (action === STRING_ACTIONS.backspace) {
            backspaceBuffers();
        }else if(action === STRING_ACTIONS.equal){
            calculate()
        }else{
            showMessageBox("This action is not recognised. Please try again.")
        }
    }else if(typeof action === "number"){
        addToCurrentBuffer(action)
    }else{
        console.log("Error 418:: I'm a teapot... :)")
    }
}