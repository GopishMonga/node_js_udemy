const greetings = require('./greetings.json');

var greet = function() {
  console.log("Hello!");
  console.log(greetings.english);
};

module.exports = greet;
