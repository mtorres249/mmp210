/*
	self portrait w variables
	matthew torres
	2.11.2020
	class project
*/

// global scope
var x = 320; // origin for face
var y = 180;

// size variables
var s = 300;

function setup() {
	// setup scope
	createCanvas(640, 360);
}

function draw() {
	// draw scope
	background("gold");

	// shapes with xy coordinates + size

	// face area

	stroke("black");
	strokeWeight(5);
	fill("#d1b475");
	circle(x, y, s); // face

	// eyes
	stroke("black");
	strokeWeight(2);
	fill("white");
	ellipse(x - 50, y - 60, s - 230, s - 250); // left eye
	ellipse(x + 50, y - 60, s - 230, s - 250); // right eye
	noStroke();
	fill("#1c1301"); 
	circle(x - 50, y - 53, s - 265,); // left pupil
	circle(x + 50, y - 53, s - 265,); // right pupil
	noStroke();
	fill("#d1b475");
	ellipse(x - 50, y - 77, s - 230, s - 280); // left eyelid
	ellipse(x + 50, y - 77, s - 230, s - 280); // right eyelid

	stroke("black");
	fill("#d1b475");
	arc(x + 141, y - 20, s - 240, s - 240, PI + HALF_PI, HALF_PI); // right ear
	arc(x + 141, y - 20, s - 260, s - 260, PI + HALF_PI, HALF_PI); // left ear

	fill("black");
	arc(x, y + 20, s - 10, s - 45, TWO_PI, PI); // beard hair

	fill("#d1b475");
	noStroke();
	ellipse(x, y + 60, s - 200, s - 250); // beard mouth area
	
	stroke("black");
	fill("#995494");
	rect(x - 30, y + 45, 55, s - 275, s - 285); // mouth

	
	// hair
	noStroke();
	fill("black");
	circle(x - 100, y - 120,s - 265);
	circle(x - 80, y - 136, s - 265);
	circle(x - 60, y - 145, s - 265);
	circle(x - 40, y - 150, s - 265);
	circle(x - 20, y - 155, s - 265);
	circle(x, y - 155, s - 265);
	circle(x + 20, y - 155, s - 265);
	circle(x + 40, y - 155, s - 265);
	circle(x + 60, y - 150, s - 265);
	circle(x + 80, y - 140, s - 265);
	circle(x + 100, y - 120, s - 265);
	// hair

	rect(x - 75, y - 95, 55, s - 292); // eyebrow
	rect(x + 20, y - 95, 55, s - 292); // eyebrow


	// shapes that are only xy points
	
	stroke("black");
	noFill();
	line(x - 10, y - 30, x - 30, y + 5); // nose
	line(x - 30, y + 5, x, y + 5); // nose

	line(x - 30, y + 56, x + 23, y + 56) // lip break







	// traingle(x, y, x, y, x, y); (personal referance)
	
	
}
