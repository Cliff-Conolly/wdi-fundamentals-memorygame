
// First stage:  VAR's irrelevant
/* 
var cardOne  = "queen";
var cardTwo  = "king";
var cardThree = "queen";
var cardFour = "king"; 
*/

// Second stage: Array replace VAR's
/*
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
console.log("Up and running!");


var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped" + " " + cardOne); 

var cardTwo = cards[2];
cardsInPlay.push(cardTwo); 
console.log("User flipped" + " " + cardTwo); 


if (cardsInPlay.length === 2) {
 if (cardsInPlay[0] === cardsInPlay[1]) 
 {alert("You found a match!"); }

 else { alert ("Sorry, try again."); }

}; 
*/

// Potential code.
/*
var flipCard=function(cardId) {
  console.log("User flipped" + cards[cardId]);
  */


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2)
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};


function flipcard (cardId) { 
	checkForMatch();
	
	
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped" + " " + cards[cardId]); 
	 }


flipcard(0);
flipcard(2); 


