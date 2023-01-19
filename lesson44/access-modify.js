//access modify
class Person {
    // private, public
    #firstName;
    #lastName;
    skill;
    constructor(name, family, skill = "student") {
        this.#firstName = name;
        this.#lastName = family;
        this.skill = skill
    }
    getFullName(){
        return [this.#firstName, this.#lastName]
    }
    get name() {
        return this.#firstName
    }
}
const erfan = new Person("Erfan", "Yousefi", "Backend Developer");
const [firstName, lastName] = erfan.getFullName();
console.log(firstName);
console.log(lastName);
erfan.skill = "Programmer";

console.log(erfan.skill);
