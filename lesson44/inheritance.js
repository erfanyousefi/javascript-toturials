//inheritance

class Human {
    fullName;
    identity;
    age;
    gender;
    constructor(fullName, identity, age, gender) {
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
        this.identity = identity;
    }

    walk(){
        return "walking...";
    }
    eat(){
        console.log("eating...");
    }
    sleep(){
        console.log("sleeping...");
    }
}

class Employee extends Human {
    skill;
    constructor(fullName, identity, age, gender, skill){
        super(fullName, identity, age, gender);
        this.skill = skill;
    }
    goToWork(){
        console.log(`${this.fullName} - ${this.walk()} - to work office`);
    }
    eat(foodType, time) {
        console.log(`im eating lunch in ${time} and i eating ${foodType}`);
    }
}
class Student extends Human {
    field;
    constructor(fullName, identity, age, gender, field){
        super(fullName, identity, age, gender);
        this.field = field;
    }
    study(){
        console.log(`study...`);
    }
    eat() {
        console.log(`iAm student and i eating every thing`);
    }
}
class Doctor extends Human {
    constructor(fullName, identity, age, gender){
        super(fullName, identity, age, gender);
    }
}

class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    animalName(){
        return this.name
    }
}
class Pets extends Animal {
    #sound;
    constructor(name, sound) {
        super(name);
        this.#sound = sound;
    }
    getSound(){
        return this.#sound;
    }
    //...methods
}

const dog = new Pets("Dog", "haf-haf");
const cat = new Pets("Cat", "mewo - mewo");
console.log(dog.getSound());
console.log(cat.getSound());
const employee = new Employee("erfan yousefi",654654654, 28, "male", "programmer");
const student = new Student("erfan yousefi",654654654, 28, "male", "nurse");
const doctor = new Doctor("erfan yousefi",654654654, 28, "male");
console.log(employee.eat("FastFood","12:00"));
console.log(student.eat());
console.log(doctor.eat());


//override - overloading