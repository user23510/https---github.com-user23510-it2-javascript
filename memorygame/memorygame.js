const cardarray = [
    {
        name: "fries",
        img: "im/fries.png"
    },
    {
        name: "cheeseburger",
        img: "im/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "im/hotdog.png"
    },
    {
        name: "icecream",
        img: "im/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "im/milkshake.png"
    },
    {
        name: "pizza",
        img: "im/pizza.png"
    },



    {
        name: "fries",
        img: "im/fries.png"
    },
    {
        name: "cheeseburger",
        img: "im/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "im/hotdog.png"
    },
    {
        name: "icecream",
        img: "im/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "im/milkshake.png"
    },
    {
        name: "pizza",
        img: "im/pizza.png"
    }

    
]
//sorts array randomly
cardarray.sort(() => 0.5 - Math.random())
console.log(cardarray)


const griddisplay = document.querySelector('#grid')
const resultdisplay = document.querySelector('#resultdisplay')

let cardschosen = [] //the two cards that are picked by user end up here then wiped
let cardschosenids = []
const cardswon = []


function createboard(){

    for (let i = 0; i < cardarray.length; i++){ //loops through cards

        const card = document.createElement('img') //makes card
        card.setAttribute('src', 'im/blank.png') //card image blank.png
        card.setAttribute('dataid', i) //sets card id
        console.log(card, i) 

        card.addEventListener("click", flipcard) //checks for click on grid starts flipcard()
        griddisplay.append(card) //appends card to board grid
    }
}
createboard()

function checkmatch(){

    const cards = document.querySelectorAll('#grid img')

    console.log("check for match")

    if (cardschosenids[0] === cardschosenids[1]){
        alert("you clicked same card")
        cards[cardschosenids[0]].setAttribute('src', 'im/blank.png')
        cards[cardschosenids[1]].setAttribute('src', 'im/blank.png') 
    }
    
    if(cardschosen[0] === cardschosen[1] && cardschosenids[0] !== cardschosenids[1]){ //turns matched cards to white
        alert("match")
        cards[cardschosenids[0]].setAttribute('src', 'im/white.png') 
        cards[cardschosenids[1]].setAttribute('src', 'im/white.png')

        cards[cardschosenids[0]].removeEventListener("click", flipcard)
        cards[cardschosenids[1]].removeEventListener("click", flipcard)

        cardswon.push(cardschosen)
    }

    else { //turns matched card to blank
        cards[cardschosenids[0]].setAttribute('src', 'im/blank.png') 
        cards[cardschosenids[1]].setAttribute('src', 'im/blank.png')
        alert("try again loser")
    }
    resultdisplay.textContent = cardswon.length

    cardschosen = [] // Wipes arrays
    cardschosenids = []

    if(cardswon.length == cardarray.length / 2){
        resultdisplay.textContent = "congratulation"
    }
}

function flipcard(){
    console.log(cardarray)

    var cardid = this.getAttribute('dataid')

    cardschosen.push(cardarray[cardid].name)
    cardschosenids.push(cardid)

    console.log("clicked", cardid)
    console.log("cardschosen: ", cardschosen)
    console.log("cardschosenids: ", cardschosenids)
    
    this.setAttribute('src', cardarray[cardid].img) //add image from array to card

    if (cardschosen.length === 2){
        setTimeout(checkmatch, 500)
    }
}