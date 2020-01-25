let USER_NUMBERS = [];

function calculate(){
    let result = { inputs: `${USER_NUMBERS.join(', ')}`, operations: [], message: "Success!" }
    const storeOperation = (op) => result.operations.push(op);

    if (USER_NUMBERS.length > 1){
        [
            `Division: ${USER_NUMBERS.join(' / ')}`,
            `Multiplication: ${USER_NUMBERS.join(' * ')}`,
            `Addition: ${USER_NUMBERS.join(' + ')}`,
            `Subtraction: ${USER_NUMBERS.join(' - ')}`
        ].forEach(op => {
            let res = eval(op);
            res = !isFinite(res) ? 0 : res;
            storeOperation(`${op} = ${Number.isInteger(res) ? Number(res) : res.toFixed(3)}`)
        });
    }else if(USER_NUMBERS.length == 1){
        const op = `Math.sqrt(${USER_NUMBERS[0]})`;
        storeOperation(`${op} = ${eval(op).toFixed(3)}`)
    }else{
        result.message = "At least a (valid) number has to be given to continue with operation..."
    }

    return result
}

function getNewUserNumber(promptMessage){
    return promptResponse = prompt(`${promptMessage}`)
}

function calculatorPro(promptMessage){
    let number = getNewUserNumber(promptMessage);
    const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

    if(isNumeric(number)){
        USER_NUMBERS.push(number);
        promptMessage = `INPUTS: ${USER_NUMBERS.join(', ')}\nPress cancel to calculate\n\nPlease enter a number`;
        calculatorPro(promptMessage)
    } else if (!isNumeric(number) && number !== null){
        promptMessage = `${USER_NUMBERS.length ? `INPUTS: ${USER_NUMBERS.join(', ')}\nPress cancel to calculate\n\n` : ""}Please enter a valid number`;
        calculatorPro(promptMessage)
    }else if(number === null){
        //user canceled prompt
        if (USER_NUMBERS.length){
            //let's calculate
            console.log(calculate());
        }else{
            console.log("Thank you for using calculator pro")
        }
    }
}

calculatorPro("Please enter a number");