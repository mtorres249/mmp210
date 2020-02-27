/*
	meme version 1
	2.25.2020
*/

// global scope
var cryImage;

//size variables
var w = 250; // half width of canvas
var h = 250; // half hieght of canvas

function preload(){
	cryImage = loadImage("cry.png");
}

function setup() {
	var canvas = createCanvas(w * 2, h * 2);
	canvas.drawingContext.miterLimit = 5;
}

function draw() {
	background("#050712");

	// draw the image
	image(cryImage, 0, 0, width);

	// text
	textSize(50);
	fill("white");
	stroke("black");
	strokeWeight(5);
	textStyle(BOLD);
	textAlign(LEFT);
	textFont("Trebuchet MS");
	text("When you're making", w - 240, h - 195);

	textAlign(CENTER);
	text("a meme", w, h - 140);

	textAlign(LEFT);
	text("but all the good pics", w -240, h + 180);

	textAlign(CENTER);
	text("are copyrighted",w, h+ 230);
}