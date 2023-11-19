grid = document.querySelector("#grid")
gridwidth = 1000
gridheight = 300

//define user
class user {
    constructor(userclass, x, y, score, color){
        this.userclass = userclass
        this.x = x
        this.y = y
        this.currentlocation = [this.x, this.y]
        this.score = score
        this.color = color
    }
    creatediv(){
        const userelement = document.createElement('div')
        userelement.classList.add(this.userclass)
        userelement.style.top = this.y + "px"
        userelement.style.left = this.x + "px"
        userelement.style.backgroundColor = this.color
        return userelement
    }
}
userobject = new user("user1", 200, 230, 0, "yellow")
grid.appendChild(userobject.creatediv())

class enemy {
    constructor(enemyclass, x, y, color, speed){
        this.enemyclass = enemyclass
        this.x = x
        this.y = y
        this.currentlocation = [this.x, this.y]
        this.color = color
        this.speed = speed
    }
    creatediv(){
        const enemyelement = document.createElement('div')
        enemyelement.classList.add(this.enemyclass)
        enemyelement.style.left = this.x + "px"
        enemyelement.style.top = this.y + "px"
        enemyelement.style.backgroundColor = this.color
        return enemyelement
    }
}
enemyobject = new enemy("enemy1", 1020, 250, "green", 6)
enemyelement = enemyobject.creatediv()
grid.appendChild(enemyelement)


progress1 = 0
timer = setInterval(animationmovement, 20)
function animationmovement(){

    if (enemyobject.currentlocation[0] >= -150) {
        enemyobject.currentlocation[0] -= enemyobject.speed
        //console.log(barrier1current[0])
        //console.log(barrier1current[0])
        enemyelement.style.left = enemyobject.currentlocation[0] + "px"
    }

    if (enemyobject.currentlocation[0] <= -150) {

        enemyobject.currentlocation[0] = enemyobject.x
        enemyobject.currentlocation[1] = enemyobject.y

        enemyelement.style.left = enemyobject.currentlocation[0] + "px"
        enemyelement.style.top = enemyobject.currentlocation[1] + "px"

        progress1 += 1
        console.log(progress1)
    }
    if (progress1 === 5) {
        enemyobject.speed = 8
    }
    if (progress1 === 10) {
        enemyobject.speed = 11
    }
    if (progress1 === 15) {
        enemyobject.speed = 15
    }
    if (progress1 === 25) {
        enemyobject.speed = 20
    }
    if (progress1 === 40) {
        enemyobject.speed = 30
    }
    if (progress1 === 60) {
        enemyobject.speed = 45
    }

}
/*
timercollision = setInterval(collisioninterval, 15)
function collisioninterval(enemy1) {
    for (let i = 0; i < 5; i +=1) {
        checkcollision(userobject, enemyobject)
    }
}
*/
function checkcollision(user, enemy){
    if (                           // collision with barricades   
    user.currentlocation[0] < enemy.currentlocation[0] + 50 &&
    user.currentlocation[0] + 50 > enemy.currentlocation[0] &&
    user.currentlocation[1] < enemy.currentlocation[1] + 50 &&
    user.currentlocation[1] + 50 > enemy.currentlocation[1] && 

    enemyobject.enemyclass === 'barricade' 
    ){
        console.log("hit")
    }   
}

timercollision = setInterval(checkcollision, 20)
