//static methods/properties
class Student {
    static #students = [];
    static count(){
        return this.#students.length;
    }
    static search(id) {
        return this.#students.find(stud => stud.id == id);
    }
    constructor(){
        this.#init()
    }
    #init(){
        Student.#students.push({id: 1, name: "ali"});
        Student.#students.push({id: 2, name: "mammad"});
        Student.#students.push({id: 3, name: "hassan"});
        Student.#students.push({id: 4, name: "qoli"});
    }
}
class BestStudents extends Student {
    constructor(){
        super()
    }
    static any(){
        return super.count()
    }
    normal(id){
        return Student.search(id)
    }
}
new Student();
console.log(Student.count());
console.log(Student.search(4));
console.log(BestStudents.any());