// Ternery Operator - Nulish Operator\
let username = "user", password = "pass";

let isLogedIn1;
if(username == "user" && password == "pass"){
    isLogedIn1 = true;
}else {
    isLogedIn1 = false;
}
let condition = username == "user" && password == "pass";
let isLogedIn2 = condition ? true : false;
let isLogedIn3 = condition

console.log(isLogedIn1, isLogedIn2, isLogedIn3);
const blogs = "blogs"; //get data from server
console.log(blogs??"not found any blog")
console.log(null??true, undefined??54, false??"anything", 0??5);
let myVar = ""??"-"; 
let myVar2 = 0 ?? 0
console.log(myVar, myVar2);