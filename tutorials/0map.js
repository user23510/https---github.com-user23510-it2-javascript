// Map = object that holds key-value pairs of any data type

const clothingstore = new Map([
    ["tshirt", 20],
    ["jeans", 30],
    ["socks", 10]
]);

//view
clothingstore.forEach((value, key) => console.log(`${key} $${value}`));

let shoppingcart = 0;

//add value to shoppingcart
shoppingcart += clothingstore.get("tshirt");

console.log(shoppingcart)

//add item to map
clothingstore.set("hat", 100)

//view
clothingstore.forEach((value, key) => console.log(`${key} $${value}`));

//delete
clothingstore.delete("hat")

//check
console.log(clothingstore.has("jeans"))
console.log(clothingstore.has("hat")) 