const squares = document.querySelectorAll('.square')

const timeleftdisplay = document.querySelector('#timeleftdisplay')
const scoredisplay = document.querySelector('#scoredisplay')
const start = document.querySelector("#start")

let score = 0
let time = 60
let square // define square outside the functions so that I can access it from both
let hitposition

// Update the timer display
function updatetimer() {
    time-=1;
    timeleftdisplay.textContent = time;
    if(time == 0){
        timeleftdisplay.textContent = "over"
        clearInterval(timeinterval)
        clearInterval(generate)
        alert(`Game Over, Score: ${score}`)
        console.log("game over, score: ", score)
        squares.forEach(square => {
            square.classList.remove('mole') // removes mole from field
        })
    }
}


function plussone(){ // adds score
    score += 1
    scoredisplay.innerHTML = score
}


function randomsquare(){ // removes mole from field //generates new mole on random square

    squares.forEach(square => {
        square.classList.remove('mole') 

    })

    let randommole = squares[Math.floor(Math.random() * 9)] //generates new mole on init
    console.log(randommole)
    randommole.classList.add('mole')
    hitposition = randommole.id

}


const clickhandler = () => {
    timeinterval = setInterval(updatetimer, 1000);

    start.removeEventListener("click", clickhandler)

    squares.forEach(square => {
        square.addEventListener("click", () => {
            if(square.id == hitposition){
                plussone()
                hitposition = null

            }
        })
    })

        // activates randomsquare removing old mole and adding new mole creating a loop

    generate = setInterval(randomsquare, 500)
}

start.addEventListener("click", clickhandler) // cant use anonymous functions when removing event listener


// make if you click on non mole you lose points

// if !== mole

