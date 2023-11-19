
//window.addEventListener("keydown", keypress)

//function keypress(event){
//    console.log(event.key)
//}
const player = document.getElementById("mydiv")
const enemy = document.getElementById("div2")
window.addEventListener("keydown", move)
window.addEventListener("keydown", start)

let x2 = 450
let y2 = 500
hasstarted = false

function start2(){
    let timerid = null

    let x = 450
    let y = 500

    timerid = setInterval(frame, 5)


    function frame(){

        if(x >= window.outerWidth){
            clearInterval(timerid)
        }
        else {
            x+=2
            enemy.style.left = x + "px";
            
        }   
    }

}



function start(event){
    if (!hasstarted)
        switch(event.key){
            case "ArrowDown":
            case "ArrowUp":
            case "ArrowLeft":
            case "ArrowRight":
                start2()
                hasstarted = true
                break
            default:
                break 
    }
}

function move(event){
    switch(event.key){
        case "ArrowDown":
            y2+=5
            player.style.top = y2 + "px"
            break
        case "ArrowUp":
            y2-=5
            player.style.top = y2 + "px"
            break
        case "ArrowLeft":
            x2-=5
            player.style.left = x2 + "px"
            break
        case "ArrowRight":
            x2+=5
            player.style.left = x2 + "px"
            break    
        default:
            break 
    }
}

