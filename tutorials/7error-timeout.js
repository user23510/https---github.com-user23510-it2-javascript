// error = object with a description of 
//             something that went wrong

// throw = executes a user-defined error

try{
    let x = window.prompt("Enter a #")
    x = Number(x);

    if(isNaN(x)) throw "That not number";
    if(x=="") throw "Empty";

    console.log(`${x} is a number`)
}
catch(error){
    console.log(error)
}
finally{
    console.log("this always executes")
}

// setTimeout() = invokes a function after a number of milliseconds            
//                            asynchronous function (doesn't pause execution) 

let item = "cryptocurrency";
let price = 43

let timer1 = setTimeout(firstmsg, 3000, item, price)
let timer2 = setTimeout(secondmsg, 6000)
let timer3 = setTimeout(thirdmsg, 9000)

function firstmsg(item, price){
    alert(`Buy this ${item} for ${price}`);

}
function secondmsg(){
    alert(`Not scam`);
    
}
function thirdmsg(){
    alert(`Do it`);
    
}

document.getElementById("button").onclick = function(){
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    alert("thanks  for buying")
}