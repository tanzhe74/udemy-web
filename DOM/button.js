var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetbutton = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var numDisplay = document.querySelector("#maxNumber");

var gameover = false;
var maxscore = 5;

var p1score = 0;
var p2score = 0;
p1button.addEventListener("click", function(){
	if(!gameover) {
		p1score++;
		p1display.textContent = p1score;
		if(p1score === maxscore) {
			p1display.classList.add("winner");
			gameover = true;
		}
	}
	
});

p2button.addEventListener("click", function(){
	if(!gameover) {
		p2score++;
		p2display.textContent = p2score;
		if(p2score === maxscore) {
			p2display.classList.add("winner");
			gameover = true;
		}
	}

});

resetbutton.addEventListener("click", function(){
	p1score = 0;
	p2score = 0;
	gameover = false;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
});

numInput.addEventListener("click", function() {
	numDisplay.textContent = numInput.value;
	maxscore = Number(numInput.value);
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	gameover = false;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
};




