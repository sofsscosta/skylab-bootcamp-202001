function add(num) {
  console.log(num)
  if (num === 1) {
    return 1
  }


  return num * add(num - 1)
}

console.log(add(5))
