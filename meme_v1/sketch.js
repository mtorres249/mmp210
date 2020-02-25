/*
	meme version 1
	2.25.2020
*/

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 5;
}

function draw() {
	background("#1c1500");

	textSize(100);
	fill("#610b0b");
	stroke("white");
	strokeWeight(5);
	textStyle(BOLD);
	textAlign(LEFT);
	textFont("Trebuchet MS");
	text("MILLER S", 40, 250);

	strokeWeight(3);
	textSize(90);
	text("⋆", 363, 220);

	textSize(40);
	noStroke();
	text("ALE ⋆ HOUSE", 140, 300);
	textAlign(CENTER);
}