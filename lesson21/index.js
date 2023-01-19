// local - global variables
let message = "global scope variable"
function anyThing(){
    let message = "this is a anyThing function scope variable";
    console.log("AnyThing: ", message);
    function showMessage(){
        console.log("ShowMessage: ", message);
        function any(){
            let message = "this is a local variable";
            console.log(" Any: ", message)
        }
        any()
    }
    showMessage()
}
console.log("Global Scope: ", message);
anyThing()
let scope = "scope0"
{
    let scope = "scope1"
    {
        let scope = "scope2"
        console.log(scope)
    }
}