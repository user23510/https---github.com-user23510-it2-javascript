//ask question if wrong add html property game over

var prom = window.prompt("How much is 2 + 2?")

//button.onclick = dosomething
//function dosomething(){
//alert("you did something")
// }
//body.onload = dosomething
//element.onchange = dosomething
const element = document.getElementById("mydiv")

//element.onmouseover onmouseout, hover or stop hovering
element.onmousedown = dosomething
element.onmouseup = dosomething2
element.onmouseover = dosomething3
element.onmouseout = dosomething
function dosomething(){
    element.style.backgroundColor = "red"
}
function dosomething2(){
    element.style.backgroundColor = "green"

}
function dosomething3(){
    element.style.backgroundColor = "blue"
}
function dosomething4(){
    element.style.backgroundColor = "rgba(222, 184, 200)"
}


prom = Number(prom)
//let nametag = document.getElementById("completionsign")
const nametag = document.createElement("h1")
nametag.id = "completionsign"

if(prom === 4){
    nametag.innerHTML = "Correct"
} 
else {
    nametag.innerHTML = "Wrong"
    
    nametag.style.color = "red"
}

document.body.append(nametag)