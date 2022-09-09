//create variables for the value and the suit.

const suits = ['♥', '♣', '♠', '♦']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const J = 11
const Q = 12
const K = 13
const A = 14

//create a class for Deck

class Deck{
    constructor(cards = newDeck()){
        this.cards = cards
    }
}
//i put in and was wrong
// get numberOfCards() {
//     return this.cards.length
// }

// pop() {
//     return this.cards.shift()
//     }
    
//     push(card) {
//     this.cards.push(card)
// }
// shuffle(){
//     for (let i = this.numberOfCards -1; i > 0; i --) {
//         const newIndex = Math.floor(Math.random() * (i + 1))
//         const oldValue = this.cards[newIndex]
//         this.cards[newIndex] = this.cards[i]
//         this.cards[i] = oldValue
//     }
// }

//create a card class and declare the suit value. 
class Card {
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}

//build a function creating a new deck. and create one array for all using flatmap (per WDS website)

function newDeck(){
    return suits.flatMap(suit => {
        return values.map( value => {
            return new Card(suit, value)
        });
    });
}
console.log(Card)

//using a for loop I created a function that takes the cards and reassigns the indexes of random cards
// to create the "shuffle"
let shuffle = deck => {
	for (let i = deck.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]]
	}
	return deck;
}

const deck = new Deck();
shuffle(deck.cards);
console.log(deck.cards);

// player 1 is recieving the first half of the deck
const player1 = deck.cards.splice(0, 26);
console.log(player1);

// player 2 is recieving the second half of the deck
const player2 = deck.cards.splice(0, 26);
console.log(player2);

// player1 = player1.filter(val => !player2.includes(val));

// I used the .map method and used a function as the parameter that retrieves the value of each card
// for each player.
let resultOne = player1.map(a => a.value);
let resultTwo = player2.map(a => a.value);

let player1Points = 0
let player2Points = 0


// Here I set a for loop to compare the values given in the 2 result arrays. Each card played is compared
// and the player with the card of greater value will be given a point. Points are held in player1Points
// and player2Points variables.

for (let i = 0; i < 26; i++){
    console.log(`Player 1: ${resultOne[i]}`, `Player 2: ${resultTwo[i]}`);
    if(resultOne[i] > resultTwo[i]){
        player1Points += 1
    }else{
        player2Points += 1
    }
}
    console.log(`Player 1 Total Points ${player1Points}`);
    console.log(`Player 2 Total Points ${player2Points}`);

// I then compared the player points variables and whoever has more winning hands at the end of the game 
// is declared the winner. In the event of a tie game there is no winner and a tie game is declared.

if(player1Points > player2Points){
    console.log(`PLAYER ONE WINS!`);
}else if(player2Points > player1Points){
    console.log(`PLAYER TWO WINS!`);
}else {
    console.log(`ITS A TIE!`);
} 