console.log('This is Calculin 🤓')

function calculate(expression) {
    return eval(expression) // WARN! eval should not be used
}

module.exports = calculate
//export default calculate