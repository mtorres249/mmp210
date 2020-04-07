/*
	meme version 2
	3.5.2020
*/

// global scope
var cryImage;
var overhereImage;
var snoopyImage;

var crySize;
var snoopyX;

var r, g, b;

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
		/*r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);*/
	canvas.drawingContext.miterLimit = 2;
	
	x = width - 70;
	y = height - 180;

	crySize = width;
	snoopyX = 0;
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
	background(r, g, b);
	if (frameCount % 35 === 0) {
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);
	}

	// quadrant reference
	/*stroke("red");
	line(250, 0, 250, height);
	line(0, 250, width, 250);*/

	// draw the image
	if (counter == 0){

		imageMode(CENTER);	
		image(cryImage, width/2, height/2, crySize, crySize);

		crySize +=3;
		if (crySize > width + 900){
			crySize = 0
		}
	

	} else if(counter == 1) {

		imageMode(CENTER);
		image(snoopyImage, snoopyX, height/2, width, height);

		snoopyX += 5;
		if(snoopyX > width + 250) {
			snoopyX = - 250;
		}

	} else {

		imageMode(CENTER);
		image(overhereImage, width/2, height/2, width , height,);
	}

	 //text

		//rotates text
		translate(0, 0);
		var rot = frameCount / 600 * PI;
		shearX(rot);

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
