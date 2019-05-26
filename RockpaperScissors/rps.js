//*
//LOGIC
//



var score = 0;
var playerChoice;

var readable = {
	"0": "Rock",
	"1": "Paper",
	"2": "Scissors"
};

var cpuChoice = {
	init: function() {
		this.store = Math.floor(Math.random() * 3);
		this.text = readable[this.store];
	}, 
	store:" ",
	text:" " 
};

 var order = [0, 1, 2, 0];

 var chooseWinner = function(player, cpu) {
 	if(order[player] === order[cpu]) {
 		return "The Game is Tied. Try Again?";
 	}
 	if(order[player] === order[cpu + 1]) {
 		score++;
 		return "YOU WON!";
 	} else {
 		score--;
 		return "you lost :(";
 	}
 }

//* make  game work


var paragraph = document.querySelector("p");

var assignClick = function(tag, pos) {
	//assign a click listener

	tag.addEventListener("click", function() {
		// set the players choice
		playerChoice = pos;
		//give feedback to cpu cpuchoice
		cpuChoice.init();
		paragraph.innerText = "The computer chose: " + cpuChoice.text;
		// choose winner
		// display the winner and current score
		paragraph.innerText += "\n" + chooseWinner(playerChoice, cpuChoice.store);
		paragraph.innerText += "\n" + "SCORE: " + score;
	});
}
	
var images = {
	tags: document.getElementsByTagName("img"),
	init: function() {
	for( var step = 0; step < this.tags.length; step++) {
		assignClick(this.tags[step], step);
		}
	}
}
images.init();