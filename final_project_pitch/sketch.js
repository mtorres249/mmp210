/*
final project pitch
5.18.2020
*/

var currentSlide = 0;
var numberOfSlides = 3;

//next slide button
var nextButtonX = 850;
var nextButtonY = 10;
var nextButtonW = 100;
var nextButtonH = 33;

//previous slide button
var prevButtonX = nextButtonX - 140;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;

//sound variables
var music;
var laserSound;

function preload() {
	music = loadSound("sawsquarenoise.mp3");
	laserSound = loadSound("Laser.wav");
}

function setup() {
	createCanvas(960, 720);
}

function draw() {
	background('grey');

	//text("slide " + currentSlide, 100, 100);

	var title; //the title of the slide
	var description;
	var caption1;
	var caption2;

	//setup each slide
	if(currentSlide == 0) {
		title = "My final project"; 
		description = "A watered down version of the game Galaga.";
	} else if(currentSlide == 1) {
		title = "User interaction";
		description = "User will press keys to shoot lasers at enemies.";
	} else if(currentSlide == 2) {
		title = "Graphics";
		description = "Images created in p5, sounds found on the web.";
		caption1 = "User Ship";
		caption2 = "Enemies";

		//graphics example

		//ship
		fill('red');
		square(90, 500, 55);
		square(210, 500, 55);
		rect(150, 380, 55, 100);
		fill('white');
		rect(100, 445, 155, 55);
		//rect(150, 380, 55, 100);

		//asteroid
		fill('yellow');
		ellipse(400, 490, 140, 140);

		//alien
		fill('green');
		square(550, 415, 140, 30, 30, 5, 5);
	} else if(currentSlide == 3) {
		title = "Sound";
		description = "Sound that will play when key is pressed, as well as background music. Enter key for music. G key for laser.";
}

	//display title
	textSize(80);
	fill('white');
	noStroke();
	textAlign(LEFT,TOP);
	text(title,20, 20);

	//display description
	textSize(40);
	text(description, 20, 200, width - 40);

	text(caption1, 90, 580);
	text(caption2, 420, 580);

	//slide buttons
	//slide button background design
	fill('blue');
	stroke('white');
	strokeWeight(2);

	if(currentSlide < numberOfSlides) { 
		rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5);//next
	}
	if(currentSlide > 0) {
		rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5);//prev
	}

	//text design
	fill('white');
	textSize(25);
	noStroke();
	textAlign(CENTER, CENTER);

	if(currentSlide < numberOfSlides) { 
		text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
	}
	if(currentSlide > 0) { 
		text("Previous", prevButtonX, prevButtonY, prevButtonW, prevButtonH);
	}
}

function keyPressed(){
	if(keyCode == 71) { // G key
		laserSound.play();
	}
	if(keyCode == 13) { // Space bar
		music.play();
	}
}

function mousePressed() {
	//detect mouse collision with next button
	if(mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
	   mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
		if(currentSlide < numberOfSlides) {
			currentSlide ++;
		}
	}

	//detect mouse collision with prev button
	if(mouseX >prevButtonX && mouseX < prevButtonX + prevButtonW &&
		mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
		if(currentSlide > 0) {
			currentSlide --;
		}
	}	
}