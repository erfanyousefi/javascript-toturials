//Spread , rest

function getArgs(a, b, c) {
    // console.log(a);
    // console.log(b);
    // console.log(c);
}
const nums = [2, 5, 6]
getArgs(...nums)

const numbers1 = [1,2,3,4,5];
const numbers2 = [6,7,8,9,10];
const mixedNumbers = [...numbers2.reverse(), ...numbers1.reverse()];
const chars = [..."Hello Nodejs"];
const object1 = {
    a: 1,
    b: 2,
    c: 3
}
const object2 = {
    c: 5,
    e: 6, 
    f: 8
}
const obj = {c:45}
const copy = {...object1, ...object2, ...obj, ...{c: 78}}

function adderFunction(...numbers){
    console.log(numbers.reduce((prev, curr) => prev + curr, 0));
}
adderFunction(1,2,3,4,65,6,988,8,9,6)