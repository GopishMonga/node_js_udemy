// function constructors and 'new' keyword to create objects
function Person(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
let person1 = new Person('gopish','monga');
console.log(person1);

// prototypal inheritance
Person.prototype.greet = function () {
  console.log(this.firstName+" "+this.lastName);
};
person1.greet();

// accessing prototype
console.log('person1 prototype ',person1.__proto__);

// comparing prototype of objects of same class
let person2 = new Person('gopu','monga');
let isClassProtoEqual = (person1.__proto__ === person2.__proto__);
console.log("is Class Proto Equal --> " + isClassProtoEqual);
