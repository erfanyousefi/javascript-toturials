let object = {
    str: "value1",
    num: 2,
    arr: [1, 3, 54],
    bool: true,
    func: function () {
        return "Hello Objects"
    }
}
console.log(object.str)
console.log(object.num)
console.log(object.bool)
console.log(object.arr)
console.log(object.func())

let user = {
    firstName: "Erfan",
    lastName: "Yousefi",
    age: 26,
    id: 1234567890,
    address : {
        province: "Kurdestan",
        city: "sanandaj",
        town: "Saadi",
        street: "Azadi",
        alley: "zan",
        zipCode: 1401
    }
}
console.log(user.firstName)
console.log(user.id)
console.log(user.address.alley)
console.log(user.address.street)
console.log(user.address.zipCode)