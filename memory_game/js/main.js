
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


/*var cards = ["queen", "queen", "king", "king"]; */

var cards = [

{
	rank: "queen",
	suit: "hearts", 
	cardImage: "images/queen-of-hearts.png",
},

{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},

{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},

];


var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2)
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} else {
  		alert("Sorry, try again.");
}
};


function flipcard (cardId) { 
	
	cardsInPlay.push(cards[cardId.rank]);
	checkForMatch();
	console.log("User flipped" + " " + cards[cardId].rank); 
	console.log("User flipped" + " " + cards[cardId].cardImage); 
	console.log("User flipped" + " " + cards[cardId].suit); 
	 }


flipcard(0);
flipcard(2); 



/*
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} else {
  		alert("Sorry, try again.");
	}	
};


function flipcard (cardId) { 
	
	cardsInPlay.push(cards[cardId.rank]);
	console.log("User flipped" + " " + cards[cardId].rank); 
	console.log("User flipped" + " " + cards[cardId].cardImage); 
	console.log("User flipped" + " " + cards[cardId].suit); 
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[2])
		alert("You found a match!");
	checkForMatch();
	 } else {
  		alert("Sorry, try again.");
	}

	};


flipcard(0);
flipcard(2); 

*/


/*
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2)
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
};


function flipcard (cardId) { 
	
	cardsInPlay.push(cards[cardId.rank]);
	checkForMatch();
	console.log("User flipped" + " " + cards[cardId].rank); 
	console.log("User flipped" + " " + cards[cardId].cardImage); 
	console.log("User flipped" + " " + cards[cardId].suit); 
	 }


flipcard(0);
flipcard(2); 
*/











































