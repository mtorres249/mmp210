/*
	loop assignment
	matthew torres
	3.30.2020
	class project
*/

function setup(){
	createCanvas(640, 360);
}

function draw(){
	background("red");

	for (let x = 50; x <= width; x += 80){

		noStroke();
		fill("navy");
		ellipse(x, 170, 70);//face

		fill("yellow");
		ellipse(x + 15, 160, 20);//right eye
		ellipse(x - 15, 160, 20);//left eye

		fill("yellow");
		rect(x - 10, 185, 20, 10);
	}
}


