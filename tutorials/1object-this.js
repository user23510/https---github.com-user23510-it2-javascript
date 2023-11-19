// object = A group of properties and methods
//                properties = what an object has
//                methods = what an object can do
//                use . to access properties/methods


var human = {
    name: "rick",
    age: 65,

    eat: function(){
        console.log("rick is eating")
    },

    drink: function(){
        console.log("Rick is drinking")
    },
};

console.log(human.name);
human.drink()

//this = refrence to a particular object
    // the object depends on the immediate context


const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`You drive the ${this.model} `);
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}
const car2 = {
    model:"Audi",
    color:"blue",
    year:2022,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.brake();

car1.drive();
car2.drive();