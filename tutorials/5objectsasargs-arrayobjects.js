//How to pass an object to a function tutorial example explained

class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`${this.model} is driving`)
    }
}

const car1 = new Car("Mustang", 2023, "red",);
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow",);

displayInfo(car3)
changecolor(car3, "gold")
displayInfo(car3)

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changecolor(car, newcolor){
    car.color = newcolor
}

//JavaScript how to create and use an array of objects tutorial example explained

const cars = [car1, car2, car3]

console.log(cars[0].model)

cars[0].drive()
cars[2].drive()

console.log("----------")

function startrace(cars){
    for(const wasd of cars){
        wasd.drive()
    }
}
startrace(cars)