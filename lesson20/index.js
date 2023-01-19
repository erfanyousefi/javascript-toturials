//Experssion Function
let sum = function (num1, num2) {
    return num1 + num2
}
let min = function (num1, num2) {
    return num1 < num2 ? num1 : num2
}
let pow = function (num1, num2) {
    let temp = 1;
    for (let counter = 0; counter < num2; counter++) {
        temp *= num1 // temp = temp * num1
    }
    return temp
}
//Arrow Function
let sum1 = (num1, num2) => num1 + num2

let min1 = (num1, num2) => num1 < num2 ? num1 : num2;

let pow1 = (num1, num2) => {
    let temp = 1;
    for (let counter = 0; counter < num2; counter++) {
        temp *= num1 // temp = temp * num1
    }
    return temp
}
console.log(min1(40, 9))