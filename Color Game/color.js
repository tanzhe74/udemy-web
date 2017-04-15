
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset_button = document.querySelector("#reset");
// var easy_button = document.querySelector("#easy");
// var hard_button = document.querySelector("#hard");
var mode_button = document.querySelectorAll(".mode");


init();

function init() {
	setupMode();
	setupSquares();
	reset();
}

function setupMode() {
	for(var i = 0; i<mode_button.length; i++) {
		mode_button[i].addEventListener("click", function() {
			mode_button[0].classList.remove("selected");
			mode_button[1].classList.remove("selected");
			this.classList.add("selected");

			//how many to show
			//pick new colors
			//pick a new goal
			//update
			this.textContent === "EASY" ? numberOfSquares = 3: numberOfSquares = 6;
			reset();
		})
	}
}


function reset() {
	colors = generateRandomColors(numberOfSquares);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	for (var i = 0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	reset_button.textContent = "New Color";
	messageDisplay.textContent = "";
}


reset_button.addEventListener("click", function() {
	//generate new colors
	//pick new random colors
	//change the colors
	reset();
});

function setupSquares() {
	for (var i = 0; i<squares.length; i++) {
		//add initial colors
		squares[i].style.background = colors[i];

		//add clicklistener
		squares[i].addEventListener("click", function() {
			//compare color with goalColor
			var clickedColor = this.style.background;
			if(clickedColor === goalColor) {
				messageDisplay.textContent = "Correct!";
				h1.style.background = goalColor;
				reset_button.textContent = "Play Again?"
				correct(clickedColor);
			}
			else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}


function correct(color) {
	//change every square to match the given color
	for(var i = 0; i<squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length );
	return colors[random];
}

function generateRandomColors(num) {
	//array
	//add num random colors to array
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//pick red from 0 - 255
	//pick green from 0 - 255
	//pick blue from 0 - 255
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	//"rgb(r, g, b)"
	var color = "rgb(" + red+", "+green+", "+blue+")";
	return color;
}