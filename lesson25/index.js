let names = ["Ali", "javid", "Ali", "mohammadReza", "Erfan", "Saman", "Keyvan"];
console.log(names);
// names.splice(1, 2)
// names.splice(1, 1)
// names.splice(2, 2)
// names.splice(2, 0, "Milad", "Hassan")
const middOfArray = names.length / 2
names.splice(middOfArray, 0, "Milad", "Hassan")
console.log(names);
console.log(names.slice(-3))
let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9];
const newNumbers = numbers1.concat(numbers2)
console.log(names.indexOf("Ali"))
console.log(names.indexOf("Erfan"))
console.log(names.indexOf("jack"))
console.log(names.lastIndexOf("Ali"))
