let user = {
    id: 1234567890,
    firstName: "Erfan",
    lastName: "Yousefi",
    age: 26,
}

const address = {
    street: "any where",
    alley: "nodejs",
    zipcode: 12345
}
const newAddress = {...address};
const security = {
    username: "admin", 
    password: "123456",
    email: "admin@gmail.com"
}
Object.assign(user, {address : {...address}}, {security : {...security}}, {key: "value"})
address.alley = "NestJS"
address.street = "javascript"
console.log(user);
console.log(newAddress);
console.log(address);