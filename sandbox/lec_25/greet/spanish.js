const greetings = require('./greetings.json');

var greet = function() {
  console.log("Hola!");
  console.log(greetings.spanish);
};

module.exports = greet;
