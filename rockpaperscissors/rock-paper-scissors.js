const computerchoicedisplay = document.getElementById("computerchoice")
const userchoicedisplay = document.getElementById("userchoice")
const resultdisplay = document.getElementById("result")

const possiblechoices = document.querySelectorAll(".button1")

let userchoice
let computerchoice
let result

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener("click", (abdc) => {
    userchoice = abdc.target.id
    userchoicedisplay.innerHTML = userchoice

    generatecomputerchoice()
    getresult()
}))

function generatecomputerchoice() {

    const randomnumber = Math.floor(Math.random() * possiblechoices.length)//or you can use 3 since 3choices
    console.log(randomnumber)

    if(randomnumber === 0) {
        computerchoice = 'rock'
    }
    if(randomnumber === 1) {
        computerchoice = 'scissors'
    }
    if(randomnumber === 2) {
        computerchoice = 'paper'
    }
    computerchoicedisplay.innerHTML = computerchoice
    }

function getresult() {
    
    if(computerchoice === userchoice) {
        result = "draw"
    }

    if(computerchoice === "rock" && userchoice === "paper") {
        result = "user wins"
    }
    if(computerchoice === "rock" && userchoice === "scissors") {
        result = "computer wins"
    }

    if(computerchoice === "paper" && userchoice === "rock") {
        result = "computer wins"
    }
    if(computerchoice === "paper" && userchoice === "scissors") {
        result = "user wins"
    }

    if(computerchoice === "scissors" && userchoice === "rock") {
        result = "user wins"
    }
    if(computerchoice === "scissors" && userchoice === "paper") {
        result = "computer wins"
    }
    resultdisplay.innerHTML = result
}
