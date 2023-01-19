let temp = 0;
for(let index = 20; index >= 0; index--){
    temp += index; // temp = temp + index
}
for(let index = 200; index >= 0; index-=15){
    temp += index; // temp = temp + index
    console.log(index);
}
console.log("------------------------")
for(let index = 0; index<=40; index+=7){
    temp += index; // temp = temp + index
    console.log(index);
}
console.log("------------------------")

console.log(temp);
let var1 = 20;
var1 *= 2; //var1 = var1 * 2
console.log(var1);

let var2 = 24;
var2 /= 2; //var2 = var2 / 2
console.log(var2);

console.log(var2 **= 2);
console.log(var2 -= 44);
console.log(var2);