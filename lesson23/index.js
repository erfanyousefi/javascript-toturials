let arr = new Array();
let arr2 = [1,2,3,4,5,6];
const userAges = [12,14,15,52,57,23,30,31]
const userNamse = ["Erfan", "Ali", "Milad", "Hassan"]
const places = ["School", "Resturant", "University", "Shop"]
console.log(userAges);
console.log(userNamse);
console.log(places);

console.log(userNamse[0], userAges[0], places[0])
console.log(userNamse[1], userAges[1], places[0])
console.log(userNamse[2], userAges[2], places[1])
let titles = ["ID", "Name", "UserName", "Age", "Email"];
let user = [1, "Erfan Yousefi", "erf12", 26, "erfan2gmail.com"];
let users = [
    ["ID",   "Name",  "UserName","Age",   "Email"],
    [1, "Erfan Yousefi",   "erf12", 26, "erfan2gmail.com"],
    [2, "Ali Yousefi",      "ali2", 26, "erfan2gmail.com"],
    [3, "Milad Yousefi",   "milas2", 26, "erfan2gmail.com"],
    [4, "Mammad Yousefi",  "ahmad4", 26, "erfan2gmail.com"],
    [5, "Arsalan Yousefi",  "arsalan", 26, "erfan2gmail.com"],
    [6, "Erfan Yousefi",    "eri", 26, "erfan2gmail.com"],
]
console.log(users.length, userNamse.length, userAges.length);
console.log(users.at(-2))
console.log(userAges);
userAges.push(45)
userAges.push(17)
console.log(userAges.pop())
console.log(userAges.pop())

console.log(userAges.shift())
console.log(userAges.shift())

userAges.unshift("item")
userAges.unshift(46)
userAges[2] = 999
userAges[5] = 1374
userAges[50] = 7777
userAges[55] = 7777
console.log(userAges);
console.log([1][0] == [1][0])

// shift  <-                    pop ->
//            0, 1, 2 , 3, 4
// unshift ->                  push <-