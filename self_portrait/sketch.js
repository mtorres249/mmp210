/*
	self portrait
	matthew torres
	2.6.2020
	class project
*/

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("gold");

	// shapes with xy coordinates + size

	// face area

	stroke("black");
	strokeWeight(5);
	fill("#d1b475");
	circle(320, 180, 300); // face

	// eyes
	stroke("black");
	strokeWeight(2);
	fill("white");
	ellipse(270, 120, 70, 50); // left eye
	fill("white"); 
	ellipse(370, 120, 70, 50); // right eye

	noStroke();
	fill("#1c1301"); 
	circle(270, 120, 50,); // left pupil
	fill("#1c1301"); 
	circle(370, 120, 50,); // right pupil

	stroke("black");
	fill("#d1b475");
	arc(461, 160, 60, 60, PI + HALF_PI, HALF_PI); // right ear
	arc(461, 160, 40, 40, PI + HALF_PI, HALF_PI); // left ear

	fill("black");
	arc(320, 200, 290, 255, TWO_PI, PI); // beard hair

	fill("#d1b475");
	noStroke();
	ellipse(320, 240, 100, 50); // beard mouth area
	
	stroke("black");
	fill("#995494");
	rect(290, 225, 55, 25, 15); // mouth


	// shapes that are only xy points
	
	stroke("black");
	noFill();
	line(310, 150, 290, 185); //nose
	line(290, 185, 320, 185); //nose





	// traingle(x, y, x, y, x, y); (personal referance)
	
	
}
