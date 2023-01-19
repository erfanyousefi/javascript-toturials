//polymorphism
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    eats(){
        console.log("eats...");
    }
}
class Dog extends Animal {
    constructor(name){
        super(name);
    }
    eats(){
        console.log(`${this.name} eating food...`);
    }
}
console.log(new Dog("joly").eats());