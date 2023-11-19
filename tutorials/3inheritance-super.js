// inheritance = a child class can inherit all the 
//                        methods and properties from another class

// super = Refers to the parent class. 
//               Commonly used to invoke constructor of a parent class


class Animal{

    constructor(name, age){
        this.name = name
        this.age = age
    }

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
//inheritance eliminates need to repeat code 

class Rabbit extends Animal{

    constructor(name, age, runspeed){
        super(name,age)
        this.flyspeed = runspeed
    }

    name1 = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{

    constructor(name, age, swimspeed){
        super(name,age)
        this.flyspeed = swimspeed
    }

    name1 = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{

    constructor(name, age, flyspeed){
        super(name,age)
        this.flyspeed = flyspeed
    }

    name1 = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit("rabbi", 10, 200)
const fish = new Fish("fis", 11, 300)
const hawk = new Hawk("haw", 4, 350)

console.log(rabbit.name1)