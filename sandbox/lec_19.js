// Object and Object Literals
var person = {
  firstName : "Gopish",
  lastName : "Monga",
  greet : function(){
    console.log('Hello '+this.firstName+' '+this.lastName+' !');
  }
};
person.greet();

// Access properties of objects using []
console.log(person['firstName']);

// Pass Objects to functions on the fly!!!
function greetMe(obj){
  obj.greet();
}
greetMe({"greet":function(){console.log("Hi There!");}});
