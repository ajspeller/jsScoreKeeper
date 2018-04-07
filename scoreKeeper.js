var score1 = 0;
var score2 = 0;

var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");

var score1Text = document.querySelector("#score1text");
var score2Text = document.querySelector("#score2text");

var inputNumber = document.querySelector("input");

var playingTo = document.querySelector("#playingTo");

var resetBtn = document.querySelector("#reset");



playingTo.textContent = 5;

inputNumber.addEventListener("click", function() {
	playingTo.textContent = this.value;
});

button1.addEventListener("click", function() {

	if (score1 < +playingTo.textContent) {
		score1 += 1;
		score1text.textContent = score1;
		if (score1 == +playingTo.textContent) {
			score1text.style.color = 'red';
		} 
	}

});

button2.addEventListener("click", function() {

	if (score2 < +playingTo.textContent) {
		score2 += 1;
		score2text.textContent = score2;
		if (score2 == +playingTo.textContent) {
			score2text.style.color = 'red';
		} 
	}

});

resetBtn.addEventListener("click", function() {
	score1 = 0;
	score2 = 0;
	score1text.style.color = 'black';
	score2text.style.color = 'black';
	score1text.textContent = score1;
	score2text.textContent = score2;
});