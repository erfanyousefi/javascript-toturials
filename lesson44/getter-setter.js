//getters-setters
class Foo {
    #private
    constructor(value){
        this.#private = value
    }
    get privateProperty(){
        if(this.#private == "value of private") return "this value is not accepted value"
        else return this.#private
    }
    set changePrivate(value) {
        if(!value) return this.#private = "notAccepted";
        if(value.toString().length < 3) return this.#private = null;
        this.#private = value;
    }
}
const foo = new Foo("value of private")
foo.changePrivate = "any things"
console.log(foo.privateProperty);