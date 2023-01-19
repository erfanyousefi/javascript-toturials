// for(let num = 0; num <= 30; num++) {
//     if(num % 2 == 0) {
//         console.log("is even: ", num)
//     }
// }

// let input = 3;
// for(let counter = 0; counter <= input; counter ++){
//     if(input % counter == 0){
//         console.log(counter)
//     }
// }

// let input = 8128;
// let temp = 0;
// for(let counter = 0; counter < input; counter++){
//     if(input % counter == 0){
//         temp = temp + counter;
//     }
// }
// if(temp == input){
//     console.log("PerfectNumber: ", temp);
// }

let input = 7;
let temp = 0;
for(let counter = 0; counter<=input; counter++){
    if(input % counter == 0){
        temp++
    }
}
if(temp == 2){
    console.log("adade aval", input);
}