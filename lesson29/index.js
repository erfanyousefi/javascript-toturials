const skills = ["js ", "Nodejs","Angular", "vuejs", "mongodb", "html", "react.js"];
const numbers = [2, 4, 5,10, 12, 20, 30, 47, 6, 8, 14, 56, 3, 5];

numbers.sort((a, b) => {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1
});
numbers.sort((a, b) => {
    return a - b
});
numbers.sort((a, b) => b - a);
skills.sort()
console.log(numbers)
console.log(skills)