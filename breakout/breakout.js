const grid = document.querySelector('#grid')
const blockwidth = 100
const blockheight = 20
const bulletdiameter = 20
const scoredisplay = document.querySelector('#scoredisplay')
const button = document.querySelector('#button')

const computedstyle = window.getComputedStyle(grid)
gridwidth = computedstyle.getPropertyValue("width")
const gridwidth2 = parseFloat(gridwidth.replace("px",))
console.log(gridwidth2)
const computedstyle2 = window.getComputedStyle(grid)
gridheight = computedstyle2.getPropertyValue("height")
const gridheight2 = parseFloat(gridheight.replace("px",))
console.log(gridheight2)

//create block
class block {
    constructor(xaxis, yaxis){
        this.bottomleft = [xaxis, yaxis]
        this.bottomright = [xaxis + blockwidth, yaxis]
        this.topleft = [xaxis, yaxis + blockheight]
        this.topright = [xaxis + blockwidth, yaxis + blockheight]
    }
}

//al my blocks
/*
const blocks = [
    new block(10,270)
]
console.log(blocks[0].topleft)


addblock()
addblock()
addblock()
*/
let blocks = [
    new block(5, 10),
    new block(115, 10),
    new block(225, 10),
    new block(335, 10),  // Adjust X-axis coordinates
    new block(445, 10),  // Adjust X-axis coordinates

    new block(5, 20 + blockheight),  // Adjust X-axis coordinates
    new block(115, 20 + blockheight),  // Adjust X-axis coordinates
    new block(225, 20 + blockheight),  // Adjust X-axis coordinates
    new block(335, 20 + blockheight),  // Adjust X-axis coordinates
    new block(445, 20 + blockheight),  // Adjust X-axis                     

    new block(5, 30 + blockheight * 2),  // Adjust X-axis coordinates
    new block(115, 30 + blockheight * 2),  // Adjust X-axis coordinates
    new block(225, 30 + blockheight * 2),  // Adjust X-axis coordinates
    new block(335, 30 + blockheight * 2),  // Adjust X-axis coordinates
    new block(445, 30 + blockheight * 2),  // Adjust X-axis coordinates

    new block(5, 40 + blockheight * 3),  
    new block(115, 40 + blockheight * 3),  
    new block(225, 40 + blockheight * 3),  
    new block(335, 40 + blockheight * 3),  
    new block(445, 40 + blockheight * 3),   


    new block(5, 50 + blockheight * 4),  
    new block(115, 50 + blockheight * 4),  
    new block(225, 50 + blockheight * 4),  
    new block(335, 50 + blockheight * 4),  
    new block(445, 50 + blockheight * 4),  
]


console.log(blocks)

function addblock(){

    for (let i = 0; i < blocks.length; i+=1) {

        const block = document.createElement("div")
        block.classList.add("block")
        block.style.left = blocks[i].bottomleft[0] + "px";
        block.style.top = blocks[i].bottomleft[1] + "px"
    
    
        grid.appendChild(block)
    }
}

addblock()

//add user
class user {
    constructor(classid, xaxis, yaxis, playerspeed, score){
        this.classid = classid
        this.xaxis = xaxis
        this.yaxis = yaxis
        this.playerspeed = playerspeed
        this.score = score
        this.usercurrent = [this.xaxis, this.yaxis] // usercurrent has to be in constructor
        this.userelement = null                     // to be accessed by multiple functions
        /*                                            // inside class
        this.bulletspeed = bulletspeed
        this.bulletcurrent = [this.usercurrent[0], this.usercurrent[1]]
        this.bulletstartposition = [40, -10]
        this.bulletcurrent2 = []
        this.bulletinterval = null*/
    }
    createuser() {
        this.userelement = document.createElement('div')
        this.userelement.classList.add('user')
        grid.appendChild(this.userelement)

                                                // this keeps original user position intact
        this.userelement.style.left = this.usercurrent[0] + "px" // only usercurrent 
        this.userelement.style.top = this.usercurrent[1] + "px" // values will 
                                                                //be changed by player movement

        return this.userelement
    }

    moveuser(event) {

        if(event.key == "ArrowLeft"){
            if(this.usercurrent[0] > 0){
                this.usercurrent[0]-= this.playerspeed
                this.userelement.style.left = this.usercurrent[0] + "px";

            }
        }
        if(event.key == "ArrowRight"){
            if(this.usercurrent[0] < gridwidth2 - blockwidth){
                this.usercurrent[0]+= this.playerspeed
                this.userelement.style.left = this.usercurrent[0] + "px";
            }
        }
    }
    /*
    usershoot(event){

        if(event.key == " "){

            const bulletelement = document.createElement('div')
            bulletelement.classList.add('bulletelement')
            this.userelement.appendChild(bulletelement)

            //bulletelement.style.left = (parseInt(this.bulletcurrent[0]) + 50)

            bulletelement.style.left = this.bulletstartposition[0] + "px"
            bulletelement.style.top = this.bulletstartposition[1] + "px"

            this.bulletcurrent2[0] = this.bulletstartposition[0]
            this.bulletcurrent2[1] = this.bulletstartposition[1]
            
            this.bulletinterval = setInterval(() => flying.call(this), this.bulletspeed)

            function flying(){
                this.bulletcurrent2[1] -= 2
                bulletelement.style.top = this.bulletcurrent2[1] + "px"
                console.log(this.bulletcurrent2[1])

                if(this.bulletcurrent2[1] < -290){
                    clearInterval(this.bulletinterval)
                    console.log("dfujgbnwesu")
                }
            }


        }
    }*/

}
const userobject = new user("user", 290, 260, 50, 0)

//const userstart = [user1.xaxis, user1.yaxis]



userobject.createuser()

//drawuser
function drawuser(){
}
drawuser()

//move user
window.addEventListener("keydown", userobject.moveuser.bind(userobject))


class bullet {
    constructor(xaxis, yaxis, xdirection, ydirection){
        this.bulletstart = [xaxis, yaxis] // xaxis, yaxis without .this because first time defined
        this.xdirection = xdirection
        this.ydirection = ydirection
        this.bulletcurrent = [this.bulletstart[0], this.bulletstart[1]]

        this.bulletelement = null

        this.gameinterval = null

    }
    initbullet(){
        this.bulletelement = document.createElement('div')
        this.bulletelement.classList.add('bulletelement')
        grid.appendChild(this.bulletelement)
    }
    drawbullet(){
        this.bulletelement.style.left = this.bulletcurrent[0] + "px"
        this.bulletelement.style.top = this.bulletcurrent[1] + "px"
        
        checkcollisionsbullet()

    }

    movebullet(){
        this.bulletcurrent[0] += this.xdirection // this took 45min to figure out
        this.bulletcurrent[1] += this.ydirection
        this.drawbullet()
    }

    changedirectionsbullet(){
        /*if(this.ydirection == -2){
            this.ydirection = +2 
            return
        }
        if(this.xdirection == -2){
            this.xdirection = 2 
            return
        }
        if(this.xdirection == 2){
            this.xdirection = -2 
            return
        }*/
        if(this.xdirection === -2 && this.ydirection === -2){
            this.ydirection = +2
            return
        }
        if(this.xdirection === -2 && this.ydirection === 2){
            this.xdirection = +2
            return
        }
        if(this.xdirection === 2 && this.ydirection === 2){
            this.ydirection = -2
            return
        }
        if(this.xdirection === 2 && this.ydirection === -2){
            this.xdirection = -2
            return
        }

    }
}

bulletobject = new bullet(450, 185, -2, 2)

function checkcollisionsbullet(){

    //block collision
    for (let i = 0; i < blocks.length; i++){
        
        if (
            bulletobject.bulletcurrent[0] > blocks[i].bottomleft[0] &&
            bulletobject.bulletcurrent[0] < blocks[i].bottomright[0] &&
            (bulletobject.bulletcurrent[1] + bulletdiameter) > blocks[i].bottomleft[1] &&
            bulletobject.bulletcurrent[1] < blocks[i].topleft[1]
        ) {
            const allblocks = (document.querySelectorAll('.block'))
            allblocks[i].classList.remove('block')
            blocks.splice(i, 1)
            bulletobject.changedirectionsbullet()
            
            userobject.score += 1
            scoredisplay.innerHTML = userobject.score
            if (blocks.length === 0)                     // checks if array is empty
            {
                clearInterval(bulletobject.gameinterval)
                alert("you win")
 
                button.addEventListener('click', startgame)
            }
        }
    }

    //wall collision
    if(
        bulletobject.bulletcurrent[1] <= 0                             || 
        bulletobject.bulletcurrent[0] >= (gridwidth2 - bulletdiameter) ||
        bulletobject.bulletcurrent[0] <= 0     
        )   
    {

        bulletobject.changedirectionsbullet()
    }

    // game over
    if(bulletobject.bulletcurrent[1] >= gridheight2){
       // this.changedirectionsbullet()
       clearInterval(bulletobject.gameinterval)
       alert("game over, score: ", scoredisplay.innerHTML = userobject.score)

       button.addEventListener('click', startgame)
       bulletobject.bulletcurrent[0] = bulletobject.bulletstart[0]
       bulletobject.bulletstart[0] = bulletobject.bulletstart[1]

    }
    //check user collision
    if(
        /*(bulletobject.bulletcurrent[0] > userobject.usercurrent[0] && bulletobject.bulletcurrent[0] < userobject.usercurrent[0]) && (bulletobject.bulletcurrent[1] > userobject.usercurrent[1] && bulletobject.bulletcurrent[1] < userobject.usercurrent[1]*/
        (bulletobject.bulletcurrent[1] > userobject.usercurrent[1] - 20 && 
        bulletobject.bulletcurrent[0] > userobject.usercurrent[0] && 
        bulletobject.bulletcurrent[0] < userobject.usercurrent[0] + 100)
    ){
        console.log("c1")
        
        if(bulletobject.ydirection == 2){
  
            console.log("up")
            bulletobject.ydirection = -2 

            console.log("collision")
        }
        
    }

}

bulletobject.initbullet()
bulletobject.drawbullet()
console.log(bulletobject.bulletcurrent[1])



button.addEventListener('click', startgame)

function startgame(){


        bulletobject.gameinterval = setInterval(() => {
            bulletobject.movebullet()
        }, 10);
        button.removeEventListener("click", startgame)

            
}
    




