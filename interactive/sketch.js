/*
	self portrait w variables
	matthew torres
	2.11.2020
	class project
*/

// global scope
var x = 320; // origin for face
var y = 180;

var r = 255; // color vriables
var g = 255;
var b = 255;

let value = "#d1d0be"; // skin color origin
let valueB = "#031540"; // hair color origin


// size variables
var s = 300;

function setup() {
	// setup scope
	createCanvas(x * 2, y * 2);
}

// Changes eye color
function mouseDragged() {
	r = map(mouseX, 0, width, 0, 255); // red
	g = map(mouseY, 0, height + width, 0, 255); // green
	b = map((mouseX + mouseY), 0, width + height, 0, 255); // blue
}

function draw() {
	// draw scope
	background("#630000");

	// shapes with xy coordinates + size

	// face area
	
	//x = mouseX
	//y = mouseY

	stroke("black");
	strokeWeight(5);
	fill(value);
	circle(x, y, s); // face

	// eyes
	stroke("black");
	strokeWeight(2);
	fill(b, g, r);
	ellipse(x - 50, y - 60, s - 230, s - 250); // left eye
	ellipse(x + 50, y - 60, s - 230, s - 250); // right eye
	noStroke();
	fill(g, r, b); 
	ellipse(x - 50, y - 53, s - 285, s - 265); // left pupil
	ellipse(x + 50, y - 53, s - 285, s - 265); // right pupil
	noStroke();
	fill(value);
	ellipse(x - 50, y - 77, s - 230, s - 280); // left eyelid
	ellipse(x + 50, y - 77, s - 230, s - 280); // right eyelid

	stroke("black");
	fill(value);
	arc(x + 141, y - 20, s - 240, s - 240, PI + HALF_PI, HALF_PI); // right ear
	arc(x + 141, y - 20, s - 260, s - 260, PI + HALF_PI, HALF_PI); // left ear

	fill(valueB);
	arc(x, y + 20, s - 10, s - 45, TWO_PI, PI); // beard hair

	fill(value);
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
	fill(valueB);
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

	stroke(valueB);
	strokeWeight(10);
	line(x - 75, y - 95, x - 20, y - 85); // left eyebrow
	line(x + 20, y - 85, x + 75, y - 95); // right eye brow
	
	stroke("black");
	strokeWeight(2);
	noFill();
	line(x - 10, y - 30, x - 30, y + 5); // nose
	line(x - 30, y + 5, x, y + 5); // nose
}

	// changes skin color
	function doubleClicked(){
	if (value === "#d1d0be"){
		value = "#f5bf73"; 
	} else {
		value = "#d1d0be";
	}
}
	// changes hair color
	function keyPressed(){
		if (keyCode === LEFT_ARROW) {
		valueB = "#0e4a02";
	} else if (keyCode === RIGHT_ARROW) {
		valueB = "#031540";
	}
		if (keyCode === DOWN_ARROW) {
		valueB = "#b50021";
	} else if (keyCode === UP_ARROW) {
		valueB = "#ffffff";
	}
		if (keyCode === SHIFT) {
		x = x; y = y; s = s +10;
	}else if (keyCode === BACKSPACE) {
		x = x; y = y; s = s - 10;
	}
}