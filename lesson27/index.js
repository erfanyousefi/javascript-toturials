const skills = ["js ", "Nodejs", "mongodb", "html", "react.js"];
console.log(skills.includes("js"))
console.log(skills.includes("Nodejs"))
console.log(skills.includes("vuejs"))

console.log(skills.some(item => item == "js"))
console.log(skills.some(item => item == "mongodb"))
console.log(skills.some(item => item == "web"))

console.log(skills.every(item => item.length > 1))
console.log(skills.every(item => item.length > 2))
console.log(skills.every(item => item == "js"))

console.log(skills.findIndex(item => item == "Nodejs"))