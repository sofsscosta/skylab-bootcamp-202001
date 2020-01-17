function basicFibonacci(num) {
  var a = 1, b = 0, temp;

  // b --> last result
  // a --> new result
  // temporal

  while (num >= 1) {
    temp = a;
    a = a + b
    b = temp

    num --;
  }


  // a = 1, b = 0, temp = 1
  // a = 2, b = 1, temp = 1
  // a = 3, b = 2, temp = 2
  // a = 5, b = 3, temp = 3
  // a = 8, b = 5, temp = 5
  // a = 13


  return a
}


console.log(basicFibonacci(5))