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
	createCanvas(x * 2, y * 2);
}

function draw() {
	// draw scope
	background("#630000");

	// shapes with xy coordinates + size

	// face area

	stroke("black");
	strokeWeight(5);
	fill("#d1d0be");
	circle(x, y, s); // face

	// eyes
	stroke("black");
	strokeWeight(2);
	fill("#f2e935");
	ellipse(x - 50, y - 60, s - 230, s - 250); // left eye
	ellipse(x + 50, y - 60, s - 230, s - 250); // right eye
	noStroke();
	fill("black"); 
	ellipse(x - 50, y - 53, s - 285, s - 265); // left pupil
	ellipse(x + 50, y - 53, s - 285, s - 265); // right pupil
	noStroke();
	fill("#d1d0be");
	ellipse(x - 50, y - 77, s - 230, s - 280); // left eyelid
	ellipse(x + 50, y - 77, s - 230, s - 280); // right eyelid

	stroke("black");
	fill("#d1d0be");
	arc(x + 141, y - 20, s - 240, s - 240, PI + HALF_PI, HALF_PI); // right ear
	arc(x + 141, y - 20, s - 260, s - 260, PI + HALF_PI, HALF_PI); // left ear

	fill("#031540");
	arc(x, y + 20, s - 10, s - 45, TWO_PI, PI); // beard hair

	fill("#d1d0be");
	noStroke();
	ellipse(x, y + 60, s - 200, s - 240); // beard mouth area
	
	stroke("black");
	fill("#995494");
	triangle(x - 35, y + 40, x, y + 85, x + 35, y + 40); // mouth

	fill("white");
	triangle(x - 25, y + 40, x - 15, y + 55 , x - 5, y + 40); // left tooth
	triangle(x + 5, y + 40, x + 15, y + 55 , x + 25, y + 40); // right tooth

	
	// hair
	noStroke();
	fill("#031540");
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

	// shapes that are only xy points

	stroke("#031540");
	strokeWeight(10);
	line(x - 75, y - 95, x - 20, y - 85); // left eyebrow
	line(x + 20, y - 85, x + 75, y - 95); // right eye brow
	
	stroke("black");
	strokeWeight(2);
	noFill();
	line(x - 10, y - 30, x - 30, y + 5); // nose
	line(x - 30, y + 5, x, y + 5); // nose

	
	







	// traingle(x, y, x, y, x, y); (personal referance)
	
	
}
