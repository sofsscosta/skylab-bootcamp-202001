function calculatorPro(...arguments) {

    let formatNumber = num => parseFloat(num.toFixed(3))
    let numbers = arguments.filter(num => !isNaN(num))

    if (!numbers.length) {
        return `El tipo de parametro es invalido.`
    }

    if ( numbers.length === 1 ) {
        let [number] = numbers
        return `la raiz cuadrada de ${number} es ${formatNumber(Math.sqrt(number))}`
    }

    let suma = eval(numbers.join('+'))
    let resta = eval(numbers.join('-'))
    let multi = eval(numbers.join('*'))
    let division = eval(numbers.join('/'))

    return `
    la suma es ${formatNumber(suma)}
    la resta es ${formatNumber(resta)}
    la multiplicacion es ${formatNumber(multi)}
    la division es ${eval(formatNumber(division))}`

}
console.log(calculatorPro(4, 3, 2, 1))
console.log(calculatorPro(6, 9, 'lorem', 0))
console.log(calculatorPro(5, 'ipsum'))