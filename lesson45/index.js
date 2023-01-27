//Try-Catch-finally
let input ='145';
try {
    if(input.trim() == "") throw "input is empty";
    if(isNaN(input)) throw "that input is not a number";
    input = Number(input);
    if(input < 5) throw "number in lower than 5";
    if(input > 10) throw {message : "number in bigger than 10", code: 101};
    function foo(){

    }
    fooo();

} catch (error) {
   if(typeof error == "object" && "message" in error) {
    alert(error.message)
   }else if(typeof error == "string") {
    alert(error)
   }else {
    alert("some thing is wrong")
   }
}finally{
    console.log("finally is executed");
}