function fibonacci(num) {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(3))

// 1 = 1
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 2 = 5
// 5 + 3 = 8
// 8 + 5 = 13
// 13 + 8 = 21
// 21 + 13 = 34