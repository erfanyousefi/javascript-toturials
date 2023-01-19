//IIFE => Immediately Invoked Function Expression
var x = 10;
(function foo(a, b){
    var x = 25;
    console.log("Hello IIFE");
    foo(4, 6)
})(45, 98);
let z = 5;
 {
    let z = 4;
 }