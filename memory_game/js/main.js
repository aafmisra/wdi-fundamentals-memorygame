function swap(arr, i, j) {
	let temp = arr[j];
	arr[j] = arr[i];
	arr[i] = temp;
}

function shuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		let rand = Math.round(Math.random() * (arr.length - 1));
		swap(arr, rand, i);
	}
}



let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

shuffle(cards);

let cardsInPlay = [];

let message = document.getElementById("message");

let score = document.getElementById("score");

let matches = 0;

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			message.textContent = "You found a match!";
			score.textContent = `Your matches: ${++matches}`;
	} else {
			message.textContent = "Sorry, try again.";
			let cardElements = document.getElementsByClassName("card");
			for (let i = 0; i < cardElements.length; i++) {
				cardElements[i].setAttribute("src", "images/back.png");
			}
			cardsInPlay = [];
	}
}

function flipCard() {
	let cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage); 
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} 
}


function createBoard(){
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard); 
		cardElement.classList.add("card");
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();

function reset() {
	message.textContent = "";
	shuffle(cards);
	let cardElements = document.getElementsByClassName("card");
	for (let i = 0; i < cardElements.length; i++) {
		cardElements[i].setAttribute("src", "images/back.png");
	}
	cardsInPlay = [];
}

document.getElementById("reset").addEventListener("click", reset);



