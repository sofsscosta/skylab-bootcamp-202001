alert('Welcome to calculator!')

var numArr = [];
var introducedNumbers = [];
var sum = 0;
var difference = 0;
var product = 1;
var quotient = 0;

startCalculator();

function verify(number) {
    if (isNaN(number)) {
        alert('Please introduce numbers.');
        return false
    } else {
        return true
    };
};

function bye() {
    alert('Bye bye! Nice to do math with you!');
}

function startCalculator() {

    var num = prompt('Introduce numbers! If you want to finish write finish.');

    if (num === null) bye();
    else if (num === 'finish') calculatorPro(numArr);
    else {
        verify(parseFloat(num)) ? numArr.push(num) : '';

        startCalculator();
    };
};



function calculatorPro(numbers) {

    function results() {

        console.log(`You have introduced the numbers ${introducedNumbers.join(", ")}.
        The result sum is ${sum}.
        The result difference is ${difference}.
        The result quotient is ${quotient}.
        The result product is ${product}.
    
        Thank you for using calculator!`);

    }

    for (var num in numbers) {
        numbers[num] = parseFloat(numbers[num])
        introducedNumbers.push(numbers[num])

        if (isNaN(numbers[num])) {

            alert('Please introduce numbers.')


        } else if (!isNaN(numbers[num]) && numbers.length < 2) {

            console.log(
                `You have introduced ${numbers[num]}.
                Its square root is ${Math.sqrt(numbers[num])}.`)


        } else if (!isNaN(numbers[num]) && numbers.length > 1) {

            // Sum

            sum += parseFloat(numbers[num]);
            
            // Difference

            if(num == 0){
                difference = numbers[num]
            }else{
                difference -= numbers[num]; 
            }

            // Multiplication

            product *= numbers[num];

            // Division

            if (num === '0') {
                quotient = numbers[0];
            } else {
                quotient /= numbers[num];
            }


        }

    }

    if (!isNaN(num) && numbers.length > 2) {

        results()

    }
}

