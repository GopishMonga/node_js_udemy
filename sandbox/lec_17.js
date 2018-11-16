//** first class functions and function expressions

//function statement
function greet(){
  console.log("Hi There!");
}
greet();

//functions are first-class
function consoleGreet(fn){
  fn();
}
consoleGreet(greet);

//function expression
var greetMe = function(){
  console.log("Hello!!");
}
greetMe();

//it's first-class
consoleGreet(greetMe);

//use a function expression on the fly
consoleGreet(function(){
  console.log("Hello World!");
});
