let user = {
    id: 1234567890,
    firstName: "Erfan",
    lastName: "Yousefi",
    age: 26,
}
const keys = Object.keys(user);
const values = Object.values(user);
Object.defineProperty(user, "key", {
    value: "some value",
    configurable: false,
    enumerable: true,
    writable: true,
})
user.key = "new value"
// Object.freeze(user)
console.log(Object.getOwnPropertyDescriptor(user, "firstName"));