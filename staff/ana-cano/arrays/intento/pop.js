function pop() {
    var numbers = [4, 5, 4, 87, 8, 7, 4, 5];
    for (var i = 0; i < numbers.length; i++) {
        var last = numbers.length;
        numbers = numbers - last;
        console.log(numbers)
    }
}