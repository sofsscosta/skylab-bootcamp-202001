function calculator (num1, num2) {

    //In the case of introducing only one number:

    if (num2 === undefined && !isNaN(num1)) {
        return `You introduced ${num1}. The square root is: ${Math.sqrt(num1)}. Thank you for using calculator!`;

    //In the case of introducing anything other than numbers:

    } else if (isNaN(num1) || isNaN(num2)) {
        return 'Please introduce numbers.';

    //In the case of introducing two numbers correctly:

    } else {
        
    const resultSum = num1 + num2;
    const resultRest = num1 - num2;
    const resultMultiplication = num1 * num2;
    const resultDivision = num1 / num2;
          
        return `You introduced ${num1} and ${num2}.
        The sum is ${resultSum};
        The difference is ${resultRest};
        The product is ${resultMultiplication};
        The quotient is ${resultDivision}.
        Thank you for using calculator!`;
    }
}