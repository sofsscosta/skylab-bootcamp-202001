function calculator(n1, n2) {

    let formatNumber = num => parseFloat(num.toFixed(3))
    let isValid = (n1, n2) => !isNaN(n1) && !n2 || !isNaN(n1) && !isNaN(n2)

    if (!isValid(n1, n2)) {
        return `El tipo de parametro es invalido.`
    }

    if ( n1 && !n2 ) {
        return `la raiz cuadrada de ${n1} es ${formatNumber(Math.sqrt(n1))}`
    }

    return `
        la suma es ${formatNumber(n1 + n2)}
        la resta es ${formatNumber(n1 - n2)}
        la multiplicacion es ${formatNumber(n1 * n2)}
        la division es ${formatNumber(n1 / n2)}`
}
console.log(calculator(6))
console.log(calculator(6, 9))
console.log(calculator('lorem'))
console.log(calculator(7, 'ipsum'))