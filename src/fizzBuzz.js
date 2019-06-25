function fizzBuzz() {
  
}

fizzBuzz.prototype.game = function(num) {
  if(num % 15 == 0) {
    return "fizzbuzz"
  } else if(num % 5 == 0) {
    return "buzz"
  } else if(num % 3 == 0) {
    return "fizz"
  } else {
    return num
  }
}

let bla = new fizzBuzz();

for (let i = 1; i <= 100; i++) {
  console.log(bla.game(i));
}
