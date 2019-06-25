describe("fizzBuzz", function() {
  let fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  it("takes a number divisible by 15 and returns fizzbuzz", function(){
    expect(fizzbuzz.game(15)).toEqual("fizzbuzz");
    expect(fizzbuzz.game(30)).toEqual("fizzbuzz");
  }); 

  it("takes a number divisible by 5 and returns buzz", function(){
    expect(fizzbuzz.game(5)).toEqual("buzz");
    expect(fizzbuzz.game(50)).toEqual("buzz");
  }); 

  it("takes a number divisible by 3 and returns fizz", function(){
    expect(fizzbuzz.game(3)).toEqual("fizz");
    expect(fizzbuzz.game(12)).toEqual("fizz");
  }); 

  it("takes a number and returns it", function(){
    expect(fizzbuzz.game(1)).toEqual(1);
    expect(fizzbuzz.game(77)).toEqual(77);
  }); 

});

