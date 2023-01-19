let accessAge = 18;
let userAge = 27;
//true, truthy, condition
if(true && 5 && "anyThing" && [] && 5 > 1 && userAge < accessAge){
    console.log("Truthy");
}else{
    console.log("Falsy")
}
if(false || 0 || "" || [] || 5 < 1 || userAge > accessAge){
    console.log("Truthy");
}else{
    console.log("Falsy")
}