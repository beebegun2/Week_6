//create the array for the suit and the values of each card
const suits = ["♠", "♣", "♥", "♦"]
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

//create a class for Deck and the variable then pass cards into the constructor
export default class Deck {
	constructor(cards = freshDeck()){
		this.cards = cards
	}
	//creating all cards in the deck
	get numberOfCards() {
		return this.cards.length
	}

	//return the top card of the deck
	pop() {
		return this.cards.shift()
		}

		//add the card to the bottom of the deck 
		push(card) {
		this.cards.push(card)
	}
	
//create a function to shuffle the cards randomly	
	shuffle() {
		for (let i = this.numberOfCards -1; i > 0; i --) {
			const newIndex = Math.floor(Math.random() * (i + 1))
			const oldValue = this.cards[newIndex]
			//flip the card and replace the previous card
			this.cards[newIndex] = this.cards[i]
			this.cards[i] = oldValue
		}
	}
}
console.log(suits)
console.log(values)

//create a card class and declare the suit value. 
class Card {
	constructor(suit, value) {
		this.suit = suit
		this.value = value
	}

//return the corresponding color to the correct suit
get color() {
    return this.suit === '♥' || this.suit === '♦' ? 'red' : 'black'
}
 
//calling the HTML elements
getHTML() {
    const cardDiv = document.createElement('div')
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
	}
}


//create a function to create a new deck for all cards using .flatMap to take all of the arrays into one array
function freshDeck() {
	return suits.flatMap(suit => {
		return values.map(value => {
			return new Card (suit, value)
		})
	})
}
