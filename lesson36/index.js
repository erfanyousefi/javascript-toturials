let user = 
{
    id: 1234567890,
    firstName: "Erfan",
    lastName: "Yousefi",
    age: 26,
    obj: {
        key: "value"
    }
}

const obj = JSON.parse(JSON.stringify(user))
user.id = 456
console.log(obj)