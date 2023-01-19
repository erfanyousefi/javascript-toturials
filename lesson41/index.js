//timers in js
console.log(" First log");

setTimeout(function() {
    console.log("third log");
}, 10);

console.log("second log");

setTimeout(() => {
    console.log("forth log");
}, 10)
setInterval(sayHello, 1000)

function sayHello(){
    console.log("Hello...");
}