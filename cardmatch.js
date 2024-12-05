let flippedCards = [];
let totalCard = [];

let cardMap = new Map([
  ["container1", "heart"],
  ["container2", "tree"],
  ["container3", "spade"],
  ["container4", "joker"],
  ["container5", "heart"],
  ["container6", "diamond"],
  ["container7", "diamond"],
  ["container8", "crown"],
  ["container9", "tree"],
  ["container10", "joker"],
  ["container11", "crown"],
  ["container12", "spade"]
]);

function action(element) {
  const cardId = element.id;

  if (!cardMap.has(cardId)) return;

  element.classList.add('flipped');
  flippedCards.push(cardId);
  totalCard.push(cardId);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

var points = 0;
 function checkMatch() {
	if (cardMap.get(flippedCards[0]) === cardMap.get(flippedCards[1])) {
		document.getElementById('gameOutput').innerHTML = "Match found!";
		points++
		document.getElementById('points').innerHTML = points;
		
		if(points == 6){
			document.getElementById('gameOutput').innerHTML =  "Well Done! Game Completed";
			cardMap.clear();
			document.getElementById('zone').style.display= "none";
			document.getElementById('retry').style.display= "flex";
		}
	} else {
		document.getElementById('gameOutput').innerHTML =  "Not a match!";
		for(i in totalCard){
			document.getElementById(totalCard[i]).classList.remove('flipped');
		}
		points = 0;
		document.getElementById('points').innerHTML = points;
	}
	
	flippedCards = [];
}

function Restart(){
	cardMap = new Map([
		["container1", "heart"],
		["container2", "tree"],
		["container3", "spade"],
		["container4", "joker"],
		["container5", "heart"],
		["container6", "diamond"],
		["container7", "diamond"],
		["container8", "crown"],
		["container9", "tree"],
		["container10", "joker"],
		["container11", "crown"],
		["container12", "spade"]
	]);
	document.getElementById('zone').style.display="grid";
	document.getElementById('retry').style.display= "none";
	document.getElementById('gameOutput').innerHTML =  "Embark on a Cosmic Memory Odyssey! Match the celestial pairs.";
	for(i in totalCard){
		document.getElementById(totalCard[i]).classList.remove('flipped');
	}
	points = 0;
	document.getElementById('points').innerHTML = points;
}
