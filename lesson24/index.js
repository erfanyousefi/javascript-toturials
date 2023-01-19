const userNames = ["Erfan", "Ali", "Milad", "Hassan"];
const numbers = [4,5,6,7,2,1]
console.log(userNames.length)
for(let index =0; index < userNames.length; index++){
    console.log(userNames[index])
}
for (const name of userNames) {
    console.log(name);
}
let temp = 0;
for (const num of numbers) {
    temp += num
}
console.log(temp);

