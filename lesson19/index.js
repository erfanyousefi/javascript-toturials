// Function Experssion
let sayHello = function (){
    alert("Hello javascript")
}
let showOk = function() {
    alert("Yes i am")
}
let showCancel = function() {
    alert("No i'm not")
}
let Ask = function(question, yes, no) {
    confirm(question) ? yes() : no()
}
// Ask("Do you javascript developer?", showOk, showCancel)

let sum = function (num1,  num2) {
    return num1 + num2
}
console.log(sum(4,5));