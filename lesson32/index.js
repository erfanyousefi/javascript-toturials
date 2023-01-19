let title = "javascript"
let user = {
    let: 2,
    return: 1,
    for: 5,
    [title + "-" + "150"] : 45,
    'کلید' : "name",
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
    },
    0: "zero"
}
//...

user.role = 'user'
user.security = {
    username: "admin",
    password: "1234",
    email: "admin@gmail.com"
}

user['birthDay'] = "22/2/1996";
user['palceOfBorn'] = 'Kordistan';
user.age = 27
console.log(user["0"], user[0])
console.log(user[title+'-150'])
console.log(user.role, user['birthDay'], user['age'], user['role'])
console.log(user)
