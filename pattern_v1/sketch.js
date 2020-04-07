/*
	pattern version 1
	matthew torres
	3.30.2020
	class project
*/

function setup(){
	createCanvas(640, 360);
	frameRate(1.5);
}

function draw(){
	background("#8b0000");

	for (let x = 50; x <= width; x += 80){

		let size = random(30, 150);

		let y = random(size/2, height - size/2);

		let r = random(0, 255);
		let g = random(70, 180);
		let b = random(70, 255);

		noStroke();
		fill(r, g, b);
		ellipse(x, y, size);//face

		fill("yellow");
		ellipse(x + 15, y - 10, size/5);//right eye
		ellipse(x - 15, y - 10, size/10);//left eye

		
		rect(x - 10, y + 15, 20, size/10);//mouth
	}
}


