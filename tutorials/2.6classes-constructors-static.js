
//clas = a blueprint for creating objects
//      define what properties and methods they have
//         use a constructor for unique properties

class Player{

    static numberofplayers = 0;

    constructor(id, score){
        this.id = id
        this.score = score
        Player.numberofplayers += 1;
    }

    pause(){
        console.log(`${this.id} paused the game`);
    }
    exit(){
        console.log(`${this.id} exited the game`);
    }
    
    static startgame(){
        console.log("3...2...1...GO!")
    }
}

const player1 = new Player("player1", 0);
const player2 = new Player("player2", 0);

player1.score += 1;
player2.score += 2;

console.log(player1.id, "score:", player1.score)
console.log(`${player2.id} score: ${player2.score}`)

player1.pause();

player2.exit();

// static = belongs to the class, not the objects
//               properties: useful for caches, fixed-configuration
//               methods:    useful for utility functions
console.log("number of players", Player.numberofplayers)

Player.startgame()
