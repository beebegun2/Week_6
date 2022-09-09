import Deck from "./deck.js"

//creating the empty slots where the flipped card goes and text for who wins the point
const computerCardSlot = document.querySelector('.computer-card-slot')
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

//create action of getting the new deck and shuffling the deck prior to game starting
const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

computerCardSlot.appendChild(deck.cards[0].getHTML())

//create object that maps the value of each card and the value
const card_value_map = {
	"2" : 2,
	"3" : 3,
	"4" : 4,
	"5" : 5,
	"6" : 6,
	"7" : 7,
	"8" : 8,
	"9" : 9,
	"10" : 10,
	"J" : 11,
	"Q" : 12,
	"K" : 13,
	"A" : 14
}

//during each round
let playerDeck, computerDeck, inRound, stop


document.addEventListener('click', () => {
	if(stop) {
		startGame()
		return
	}
	
	
	if(inRound) {
		cleanBeforeRound()
	}else {
		flipCards()
	}
})

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    //split deck at start of game in half
	const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
	playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
	computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
	inRound = false
	stop = false

	cleanBeforeRound()
}	
//create function to refresh text prior to next round
function cleanBeforeRound() {
	inRound = false
	computerCardSlot.innerHTML = ""
	playerCardSlot.innerHTML = ""
	text.innerHTML = ""

	updateDeckCount()
}
//create the function to flip the card 
function flipCards() {
	inRound = true

	const playerCard = playerDeck.pop()
	const computerCard = computerDeck.pop()

	playerCardSlot.appendChild(playerCard.getHTML())
	computerCardSlot.appendChild(computerCard.getHTML())
	
	updateDeckCount()
//create the action for the winner to take the card and add to their card count
	if (isRoundWinner(playerCard, computerCard)) {
		text.innerText ="You win the point!"
		playerDeck.push(computerCard)
		playerDeck.push(playerCard)
	}else if (isRoundWinner(computerCard, playerCard)) {
		text.innerText = "Computer wins the point!"
		computerDeck.push(playerCard)
		computerDeck.push(computerCard)
	}else {
		text.innerText = "Draw - No one gets the point"
		playerDeck.push(playerCard)
		computerDeck.push(computerCard)
	}

	if (isGameOver(playerDeck)) {
		text.innerText = 'You Lost!!'
	} else if (isGameOver(computerDeck)) {
		text.innerText = 'You Won!!'
		stop = true
	}

}
//return the text of Win, Lose, Draw and update count
function updateDeckCount() {
	computerDeckElement.innerText = computerDeck.numberOfCards
	playerDeckElement.innerText = playerDeck.numberOfCards
}

//returns the numeric value to determine winner of round
function isRoundWinner(cardOne, cardTwo) {
	return card_value_map[cardOne.value] > card_value_map[cardTwo.value]
}
//create function to stop game when either player has no more cards
function isGameOver(deck) {
	return deck.numberOfCards === 0
}

console.log(playerDeck)
console.log(computerDeck)


