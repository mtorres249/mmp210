/*
	loop assignment
	matthew torres
	3.30.2020
	class project
*/

function setup(){
	createCanvas(640, 360);
	noStroke();

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

function resetRotation() {
	angle = 0;
	pattern();
}

function pattern(){
	background("white");

	var w = 70; //width of one cell
	var h = w; //height of one cell

	for (let x = 0; x <= width; x += w){
		for (let y = 0; y <= height; y += h){

		push();
		translate(x, y);

		let r = random(0, 250);
		let g = random(20, 185);
		let b = random(0, 245);

		fill(r, g, b);

		stroke(b, g, r);
		strokeWeight(2); 
		ellipse(20, 40, 70);//face

		ellipse(-55, 30, 20);//left eye
		ellipse(-25, 30, 20);//right eye

		fill(r);
		rect(10, 55, 25, 10);

		pop();
		}
	}	
}