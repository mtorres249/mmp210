/*
	meme version 1
	2.25.2020
*/

// global scope
var cryImage;
var robotImage;
var fImage;
var counter = 0;
var instructions = "click here";
var x;
var y;

function preload(){
	cryImage = loadImage("cry.png");
	robotImage = loadImage("robot.jpg");
	fImage =loadImage("f.png");
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 5;
	x = width - 50;
	y = height - 200;
}

 function mousePressed(){
 	counter++;}
 	if (counter == 3); {
 		counter = 0;
 	}
 	if (mouseX > width/2 && mouseY > height/2){
 		// bottom right
 	instructions = "now click here";
 	}

function draw() {
	background("#050712");

	stroke("red");
	line(250, 0, 250, height);
	line(0, 250, width, 250);

	// draw the image
	image(cryImage, 0, 0, width);
	if(counter == 1){
	image(robotImage, 0, 0, width, height);
	}
	if(counter == 2){
	image(fImage, 0, 0, width , height,);
	}

	// text
	textSize(50);
	fill("white");
	stroke("black");
	strokeWeight(5);
	textStyle(BOLD);
	textAlign(LEFT);
	textFont("Trebuchet MS");
	text("When you're making", 10, 55);

	textAlign(CENTER);
	text("a meme", 250, 110);

	textAlign(LEFT);
	text("but all the good pics", 10, 430);

	textAlign(CENTER);
	text("are copyrighted",250, 480);

	textSize(20);
	text(instructions, x, y, 10);

}