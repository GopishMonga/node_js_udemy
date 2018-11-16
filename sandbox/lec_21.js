// pass by value
function changePrimitive(b){
  b = 2;
}
a = 1;
changePrimitive(a);
console.log(a);

// pass by reference
function changeObject(d){
  d.name = "Gopu";
  d.greet = function(){};
}
c = {};
changeObject(c);
console.log(c);
