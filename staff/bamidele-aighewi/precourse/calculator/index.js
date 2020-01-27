function calculator(num1, num2){
    let result = { operations: [], message: "Success!" }

    const isNumeric = (n)=> !isNaN(parseFloat(n)) && isFinite(n);
    const storeOperation = (op) => result.operations.push(op);

    if (isNumeric(num1) && isNumeric(num2) && num2 != 0){
        [
            `Division: ${num1} / ${num2}`,
            `Multiplication: ${num1} * ${num2}`,
            `Addition: ${num1} + ${num2}`,
            `Subtraction: ${num1} - ${num2}`
        ].forEach(op => {
            const res = eval(op);
            storeOperation(`${op} = ${Number.isInteger(res) ? res : res.toFixed(3)}`)
        });
    } else if (isNumeric(num1) && (!isNumeric(num2) || num2 == 0)) {
        const op = `Math.sqrt(${num1})`;
        storeOperation(`${op} = ${eval(op).toFixed(3)}`)
    }else{
        result.message = "At least a (valid) number has to be given to continue with operation..."
    }

    return result
}

console.log(calculator("num1", "num2"));
console.log(calculator("num1"));
console.log(calculator(100));
console.log(calculator(1, 2));
console.log(calculator(4, -1))
console.log(calculator(0, -100))
console.log(calculator(30,0))