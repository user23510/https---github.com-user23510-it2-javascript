// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

class Car{
    constructor(power){
        this._gas = 31
        this._power = power;
    }
    get power(){
        return `${this._power}hp`
    }
    get gas(){
        return `${this._gas}L (${this._gas / 45 * 100}%)`
    }
    set gas(value){
        if(value > 45){
            value = 45;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value
    }
}

let car = new Car(400)


car.gas = 2000000

console.log(car.power)

console.log(car.gas)
