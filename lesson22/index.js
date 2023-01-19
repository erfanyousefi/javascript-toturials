function showMessage(param1, param2, param3, text = "empty Message", ){
    // if(!text){
    //     text = "empty message"
    // }

    // text = text || "empty message"

    // text = text ?? "empty message"
    alert(text)
}
// showMessage, showModal, showProfile
// getAge, getUsers, getBalance, getProduct,
// calcSum, calcBasket,
// createUser, createForm, createMenu, createProduct
// chackPermission, chackAccess, 

function anyThing(){
    for(let index = 0; index<= 20; index++){
        if(index%5 == 0) continue;
        console.log(index);
        if(index%11==0) break;
    }
}
function anyThing2(){
    nextPrime: for(let index=2; index<=20; index++){
        for(let counter = 2; counter < index; counter++){
            if(index%counter == 0) continue nextPrime
        }
        console.log(index);
   }
}
anyThing2()