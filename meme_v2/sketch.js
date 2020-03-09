/*
	meme version 2
	3.5.2020
*/

// global scope
var cryImage;
var overhereImage;
var snoopyImage;
var counter = 0;
var instructions = "press me";
var x;
var y;

function preload() {
	cryImage = loadImage("cry.png");
	overhereImage = loadImage("overhere.png");
	snoopyImage = loadImage("snoopy.png");
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
	
	x = width - 70;
	y = height - 180;
}

function mousePressed() {
	counter++;
	if (counter == 3) {
		counter = 0;
	}
 	
	if (mouseX > width/2 && mouseY > height/2) {
		// bottom right
		instructions = 'nice try';
		y = 60;
	} else if (mouseX > width/2 && mouseY < height/2) {
		instructions = "over here";
		x = 50;
	} else if (mouseX < width/2 && mouseY < height/2) {
		instructions = "too slow";
		y = height - 180;
	}
}

function draw() {
	background("#faaecf");

	// quadrant reference
	/*stroke("red");
	line(250, 0, 250, height);
	line(0, 250, width, 250);*/

	// draw the image
	if (counter == 0){	
		image(cryImage, 0, 0, width, height);
	} else if(counter == 1) {
		image(snoopyImage, 0, 0, width, height);
	} else {
		image(overhereImage, 0, 0, width , height,);
	}

	 text
	textSize(50);
	fill("white");
	stroke("black");
	strokeWeight(5);
	textStyle(BOLD);
	textAlign(LEFT);
	textFont("Trebuchet MS");
	text("When you're making", 10, 10);

	textAlign(CENTER);
	text("a meme", 250, 60);

	textAlign(LEFT);
	text("but all the good pics", 10, 390);

	textAlign(CENTER);
	text("are copyrighted",250, 440);

	fill('yellow');
	stroke('red');
	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textFont("Trebuchet MS");
	textAlign(CENTER, TOP);

	text(instructions, x, y, 10);
}
