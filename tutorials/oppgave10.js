/*
divs - player t green, enemy m yellow, turns into h grey

at start player in middle, enemy in random spot set x y variable to random randit

player constantly moving direction decided by keyboard

when player hits enemy - player gets point, enemy becomes grey cant be hit anymore, new enemy gets created - always 3 enemies - speed increases

amount of points should always be visible

if player hits edge of field or grey game end

*/
const grid = document.querySelector("#grid")
let scoredisplay = document.querySelector("#scoredisplay")
const divradius = 25
/*
class enemy {
    constructor(id, x, y, color){
        this.id = id
        this.x = x
        this.y = y
        this.color = color
    }
}

const en1 = new enemy("enemy1", Math.floor(Math.random() * 950) + 1, Math.floor(Math.random() * 950) + 1, "yellow")
const enemy1 = document.createElement('div')
enemy1.id = en1.id;
enemy1.style.top = en1.y + "px"
enemy1.style.left = en1.x + "px"
enemy1.style.backgroundColor = en1.color
screen.appendChild(enemy1)
*/
class enemy {
    constructor(enemyclass, x, y, color, letter){
        this.enemyclass = enemyclass
        this.x = x
        this.y = y
        this.currentlocation = [this.x, this.y]
        this.color = color
        this.letter = letter
    }
    creatediv(){
        const enemyelement = document.createElement('div')
        enemyelement.classList.add(this.enemyclass)
        enemyelement.classList.add('generic')
        enemyelement.style.top = this.y + "px"
        enemyelement.style.left = this.x + "px"
        enemyelement.style.backgroundColor = this.color
        enemyelement.innerHTML = this.letter
        return enemyelement
    }
}
//make array of enemyobjects
let yellows = []
yellowscount = 3

createenemiestimer = setInterval(createelementinterval, 20)

function createelementinterval(){
    if (yellows.length < yellowscount){

        const enemyobject = new enemy("enemy1", Math.floor(Math.random() * 950) + 1, Math.floor(Math.random() * 950) + 1, "yellow", "H")
        //en1 is the class object
        yellows.push(enemyobject)
        for (let i = 0; i < yellows.length; i+=1) {
            const enemyelement = yellows[i].creatediv() // enemy1 is the html element
            grid.appendChild(enemyelement)
        }
    }
}


/*
//barricade class
class barricade extends enemy {
    constructor(enemyclass, x, y, color, letter){
        super(enemyclass, x, y, color, letter)
    }
    creatediv(){
        const barricadeelement = document.createElement('div')
        barricadeelement.classList.add(this.enemyclass)
        barricadeelement.classList.add('generic')
        barricadeelement.style.top = this.y + "px"
        barricadeelement.style.left = this.x + "px"
        barricadeelement.style.backgroundColor = this.color
        barricadeelement.innerHTML = this.letter
        return barricadeelement
    }
}
*/

//975

//define user
class user {
    constructor(userclass, x, y, playerspeed, score, letter){
        this.userclass = userclass
        this.x = x
        this.y = y
        this.currentlocation = [this.x, this.y]
        this.playerspeed = playerspeed
        this.score = score
        this.letter = letter
    }
    creatediv(){
        const userelement = document.createElement('div')
        userelement.classList.add(this.userclass)
        userelement.style.left = this.x + "px"
        userelement.style.top = this.y + "px"
        userelement.innerHTML = this.letter
        return userelement
    }
}
const userobject = new user("user1", 500, 500, 1.5, 0, "U")
userelement = userobject.creatediv()
grid.appendChild(userelement)


//playermovement
timerdown = null // keep them outside to not initialize them every key press
timerup = null
timerleft = null
timerright = null


window.addEventListener("keydown", playermovement)

function playermovement(event) {
    console.log(userelement.style.top)
    d = false
    u = false
    l = false
    r = false
    if (event.key === "ArrowUp" && !u) {

        clearInterval(timerdown)
        clearInterval(timerleft)
        clearInterval(timerright)
        clearInterval(timerup)

        timerup = setInterval(up, 5)
        u = true
        console.log("u", u)

        function up(){

            userobject.currentlocation[1]-= userobject.playerspeed
            userelement.style.top = userobject.currentlocation[1] + "px";
                
            }   
    }
    if (event.key === "ArrowDown" && !d) {

        clearInterval(timerup)
        clearInterval(timerleft)
        clearInterval(timerright)
        clearInterval(timerdown)

        timerdown = setInterval(down, 5)
        d = true
        console.log("d", d)

        function down(){

            userobject.currentlocation[1]+=userobject.playerspeed
            userelement.style.top = userobject.currentlocation[1] + "px";
                
            }   
    }
    if (event.key === "ArrowLeft" && !l) {

        clearInterval(timerup)
        clearInterval(timerdown)
        clearInterval(timerright)
        clearInterval(timerleft)

        timerleft = setInterval(left, 5)
        l = true
        console.log("l", l)

        function left(){

            userobject.currentlocation[0]-=userobject.playerspeed
            userelement.style.left = userobject.currentlocation[0] + "px";
                
            }   
    }
    if (event.key === "ArrowRight" && !r) {

        clearInterval(timerup)
        clearInterval(timerdown)
        clearInterval(timerleft)
        clearInterval(timerright)

        timerright = setInterval(right, 5)
        r = true
        console.log("r", r)

        function right(){

            userobject.currentlocation[0]+=userobject.playerspeed
            userelement.style.left = userobject.currentlocation[0] + "px";
                
            }   
    }
}
score10 = false

//checkcollision
function checkcollision(user, enemy, enemyobject){

    if (userobject.score === 15 && score10 === false){
        userobject.playerspeed += 0.4
        score10 = true
        console.log("score10")
    }
    //collision with walls
    if (
        userobject.currentlocation[0] < 0 ||
        userobject.currentlocation[0] > 950 ||
        userobject.currentlocation[1] < 0 ||
        userobject.currentlocation[1] > 950
    ){
        clearInterval(timerdown)
        clearInterval(timerleft)
        clearInterval(timerright)
        clearInterval(timerup)
        window.removeEventListener("keydown", playermovement)

        clearInterval(collisioninterval)
    }
    //collision with enemies
    if (
        userobject.currentlocation[0] < enemy.currentlocation[0] + 50 &&
        userobject.currentlocation[0] + 50 > enemy.currentlocation[0] &&
        userobject.currentlocation[1] < enemy.currentlocation[1] + 50 &&
        userobject.currentlocation[1] + 50 > enemy.currentlocation[1] &&
        enemy.enemyclass === 'enemy1' // checks if div colliding is with enemies
    ){
        // collision
        console.log("colission ")
        yellowscount += 1
        userobject.score += 1

        scoredisplay.innerHTML = userobject.score
        enemy.enemyclass = "barricade" // changes collision to barricade
        enemy.color = "grey"
        enemy.letter = "B"
        
        //loops delays interval for checking barricades
        setTimeout(delaybarricade, 500)
        function delaybarricade(){
            delaybarricade2 = setInterval(barricadeblock, 15)
            function barricadeblock(){
                
                if (                           // collision with barricades      
                userobject.currentlocation[0] < enemy.currentlocation[0] + 50 &&
                userobject.currentlocation[0] + 50 > enemy.currentlocation[0] &&
                userobject.currentlocation[1] < enemy.currentlocation[1] + 50 &&
                userobject.currentlocation[1] + 50 > enemy.currentlocation[1] &&
                    enemy.enemyclass === 'barricade' 
                ){
                                            //ends game on contact with barrier
                    clearInterval(timerdown)
                    clearInterval(timerleft)
                    clearInterval(timerright)
                    clearInterval(timerup)
                    window.removeEventListener("keydown", playermovement)
                    clearInterval(collisioninterval)
                }
                else {
                    //console.log("no colission")
                    // no collision
            }}
        }
/*      
        const barricadeobject = new barricade("enemy1", enemy.currentlocation[0], enemy.currentlocation[1], "grey", "B")
        barricadeobject.creatediv()
        screen.appendChild(barricadeobject)

        const barricadeobject = new barricade("barricade1", enemy.currentlocation[0], enemy.currentlocation[1], "grey", "B");                   // takes coords from current
        screen.appendChild(barricadeobject.creatediv());    // enemy coords

        */
    }
}

timercollision = setInterval(collisioninterval, 15)
function collisioninterval(enemyelement) {
    for (let i = 0; i < yellows.length; i +=1) {
        checkcollision(user, yellows[i], enemyelement)
    }
}