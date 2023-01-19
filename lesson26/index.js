const skills = ["js", "Nodejs","js", "mongodb", "html", "js", "react.js"]
for (const item of skills) {
    if(item == "js") {
        console.log("this is best language for web");
    }
}
function itemCounter(item, key) {
    console.log(key, ": ", item)
}
skills.forEach(itemCounter)
console.log("----------------------")
skills.forEach(function(item, key){
    console.log(item , key);
})
console.log("----------------------")
skills.forEach((item, key) => {
    console.log(item);
})
console.log("----------------------")
const result1 = skills.find((item) => {
    if(item === "Nodejs"){
        return item
    }
})
const result2 = skills.find((skill) => skill == "mongodb")
const result3 = skills.find(skill => skill == "javad")

const newArr = skills.filter(skill => skill.indexOf("js") > -1);
console.log(newArr)