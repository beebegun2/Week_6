function startGame() {
    const deck = new Deck()
    deck.shuffle()

    //split deck at start of game in half
	const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
	playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
	computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
	inRound = false
	stop = false
}