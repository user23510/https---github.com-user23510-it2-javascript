// anonymous objects = objects without a name
//              not directly refrenced
//              less syntax. no need for unique names

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit
    }
}



let cards = [
    new Card("A", "Hearts"),
    new Card("A", "Spades"),
    new Card("A", "Diamonds"),
    new Card("A", "Clubs"),

    new Card("2", "Hearts"),
    new Card("2", "Spades"),
    new Card("2", "Diamonds"),
    new Card("2", "Clubs")
]

console.log(cards[0].value + cards[0].suit)