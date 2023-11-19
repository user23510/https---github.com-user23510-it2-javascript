// constructor = a special method of a class,
//          accepts arguments and asigns properties


class Student{

    constructor(name, age, gpa){

        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
    whatisthis(){
        return this;
    }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("patrick", 25, 4.9);
const student3 = new Student("Sandy", 19, 2.0);

console.log(student1.name)
console.log(student1.age)
console.log(student1.gpa)


student3.study()

console.log(student2.whatisthis())