//promise
// sync - async 
// Pending - Fulfilled - Rejected
let state = "success";
const getUserList = new Promise(function(resolve, reject){
    setTimeout(() => {
        if(state == "success") {
            resolve([
                {
                    id: 1,
                    name: "user1"
                },
                {
                    id: 2,
                    name: "user2"
                },
            ])
        }
        reject("not found any user")
    }, 1500)
})

getUserList
.then((data) => {
    return data.map(item => {
        return {
            ...item,
            username: item.name + "sysChange"
        }
    })
}).then(data => console.log(data))
.catch(err => {
    console.log(err);
}).finally(() => {
    console.log("send request and get response finished ");
    
})