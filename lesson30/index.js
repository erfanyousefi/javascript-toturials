let myStringList = "Erfan, Ali, Mahmmod, Milad";
const arr = myStringList.split(", ");
console.log(arr)
const newText = arr.join(" - ")
console.log(newText)
console.log(newText.split(" - "));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.reduce((prev, curr)=>{
    return prev + curr
}, 0)

let prev = 0;
for (const curr of numbers) {
    prev += curr
}
console.log("Reduce: ", result)
console.log("Reduce: ", prev)

console.log(typeof [])
console.log(Array.isArray(numbers))