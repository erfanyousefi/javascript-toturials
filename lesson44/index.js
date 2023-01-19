class User {
    name;
    family;
    constructor(firstName = "user", lastName = "foo") {
        this.name = firstName;
        this.family = lastName;
    }
}
const user1 = new User("Erfan", "Usefi");
console.log(user1.name, user1.family)
