const button = document.querySelector("#button")
const grid = document.querySelector("#grid")


class user {
    constructor(userclass, x, y, color){
        this.userclass = userclass
        this.x = x
        this.y = y
        this.currentlocation = [this.x, this.y]
        this.color = color
    }
    creatediv(){
        const userelement = document.createElement('div')
        userelement.classList.add(this.userclass)
        userelement.style.left = this.x + "px"
        userelement.style.top = this.y + "px"
        userelement.style.backgroundColor = this.color
        return userelement
    }
}
class barriers {
    constructor(barrierclass, x, y, color, width, height){
        this.barrierclass = barrierclass
        this.x = x
        this.y = y
        this.currentlocation = [this.x, this. y]
        this.color = color
        this.width = width
        this.height = height
    }
    createdivs(){
        const barrierelement = document.createElement('div')
        barrierelement.classList.add(this.barrierclass)
        barrierelement.classList.add("barriers")
        barrierelement.style.left = this.x + "px"
        barrierelement.style.top = this.y + "px"
        barrierelement.style.backgroundColor = this.color
        barrierelement.style.width = this.width + "px"
        barrierelement.style.height = this.height + "px"
        return barrierelement
    }
}
//make barriers
const barrierobject = new barriers("barrier1", 520, 50, "green", 200, 50)
const barrierelement = barrierobject.createdivs()
grid.appendChild(barrierelement)

button.addEventListener("click", initialize)
function initialize(){
    button.removeEventListener("click", initialize)


    

    timer = null
    timer = setInterval(animationmovement, 20)
    
    function animationmovement(){
    
        if (barrierobject.currentlocation[0] >= -230) {
            barrierobject.currentlocation[0] -= 6
            //console.log(barrier1current[0])
            //console.log(barrier1current[0])
            barrierelement.style.left = barrierobject.currentlocation[0] + "px"
        }
    
        if (barrierobject.currentlocation[0] <= -230) {
    
            barrierobject.currentlocation[0] = barrierobject.x
            barrierobject.currentlocation[1] = barrierobject.y
    
            barrierelement.style.left = barrierobject.currentlocation[0] + "px"
            barrierelement.style.top = barrierobject.currentlocation[1] + "px"
        }
    }

    //make userobject
    const userobject = new user("user1", 225, 400, "red")
    const userelement = userobject.creatediv()
    grid.appendChild(userelement)
    console.log(userobject.currentlocation[1])
    
                                                // usermovement
    window.addEventListener("keydown", usermovement)
    function usermovement(event){
        if(event.key === "ArrowUp") {
            console.log("arrowup")
            userobject.currentlocation[1] -= 50
            userelement.style.top = userobject.currentlocation[1] + "px"
        }
    }
    collisioninterval = null
    function checkcollision(){
        if(userobject.currentlocation[1] < 0) {
            console.log("game over")
        }
        if (                           // collision with barricades      
        userobject.currentlocation[0] < barrierobject.currentlocation[0] + 200 &&
        userobject.currentlocation[0] + 50 > barrierobject.currentlocation[0] &&
        userobject.currentlocation[1] < barrierobject.currentlocation[1] + 50 &&
        userobject.currentlocation[1] + 50 > barrierobject.currentlocation[1] &&
        barrierobject.barrierclass === 'barrier1'
        ){
            clearInterval(timer)
            console.log("game over")
        }   
    }
    collisioninterval = setInterval(checkcollision, 20)
}
