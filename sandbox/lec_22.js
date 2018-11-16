// IIFE :: immediately invoked function expression
(function() {
  'use strict';
  console.log('I am inside an IIFE!');
}());

// Scope of IIFE helps us to separate logic of different modules and
// is very useful to make sure that base file is not affected by other modules.
let firstName = 'Gopish';
(function(arg) {
  'use strict';
   let firstName = arg;
   console.log('inside iife :: '+firstName);
}('Gopu'));
console.log('inside main file :: '+firstName);
