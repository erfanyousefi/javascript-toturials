// Function Decleration
function primeNumber(userInput) {
    if (typeof userInput == "number") {
        let temp = 0;
        for (let counter = 0; counter <= userInput; counter++) {
            if (userInput % counter == 0) {
                temp++
            }
        }
        if (temp == 2) {
            console.log("adade aval", userInput);
        }
    }else{
        console.log("invalid input");
    }
}
function showMessage(text){
    // if(!text){
    //     text = "empty message"
    // }

    // text = text || "empty message"
    text = text ?? "empty message"
    alert(text)
}
function sum(number1, number2) {
    if(typeof number1 == "number" && typeof number2 == "number"){
        return number1 + number2;
    }
    console.log("please enter valid number")
}
function min(num1, num2) {
    // if(num1 < num2){
    //     return num1;
    // }
    // else {
    //     return num2
    // }

    // if(num1 < num2) return num1;
    // else return num2

    // if(num1 < num2) return num1;
    // return num2

    return (num1 < num2) ? num1 : num2;
}
console.log(pow(2,2));

function pow(num1, num2){
    let temp = 1;
    for(let counter = 0; counter < num2; counter ++) {
        temp *= num1 // temp = temp * num1
    }
    return temp
}