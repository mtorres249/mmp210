/*
	pattern version 1
	matthew torres
	4.30.2020
	class project
*/

var angle = 0;

function setup(){
	createCanvas(640, 360);
	frameRate(1.5);

	nameInput = createInput("Type Here");

	var rotateButton = createButton("Rotate");
	rotateButton.mousePressed(rotatePattern);

	var patternButton = createButton("New Pattern");
	patternButton.mousePressed(pattern);

	var reset =createButton("Reset");
	reset.mousePressed(resetRotation);

	var saveButton = createButton("Save Image");
	saveButton.mousePressed(saveImage);

	pattern();
}

function saveImage() {
	save("pattern.png");
}

function rotatePattern() {
	angle += 0.05 * PI;
	pattern();
}
function resetRotation() {
	angle = 0;
	pattern();
}

function pattern(){
	background("#8b0000");

	for (let x = 50; x <= width; x += 80){

		let size = random(30, 150);

		let y = random(size/2, height - size/2);

		let r = random(0, 255);
		let g = random(70, 180);
		let b = random(70, 255);

		noStroke();
		fill(r, g, b);

		push();
		translate(x, y);
		rotate(angle);

		ellipse(0, 0, size);//face

		fill("yellow");
		ellipse(15, -10, size/5);//right eye
		ellipse(-15, -10, size/10);//left eye

		
		rect(-10, 15, 20, size/10);//mouth

		pop();
	}

	textAlign(CENTER, CENTER);
	textSize(100);
	fill('white');
	stroke('black');
	strokeWeight(7);
	text(nameInput.value(), width/2, height/2);
}


