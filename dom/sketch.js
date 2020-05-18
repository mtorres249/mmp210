/*\
DOM
4.1.2020
*/

var angleSlider;
var nameInput;

function setup() {
	createCanvas(640, 360);
	noStroke();

	nameInput = createInput("Type Here");

	angleSlider = createSlider(0, TWO_PI, 0, PI * 0.05);
	angleSlider.input(pattern);


	var patternButton = createButton("New Pattern");
	patternButton.mousePressed(pattern);

	var saveButton = createButton("Save Image");
	saveButton.mousePressed(saveImage);

	pattern();
}

function saveImage() {
	save("pattern.png");
}

function pattern() {
	background('red');

	for(let x = 0; x <= width + 50; x += 100){
		push();
		translate(x, height/2);
		rotate(angleSlider.value());
		fill('yellow');
		stroke('black');	
		strokeWeight(2);
		rect(0, 0, random(100, 200), random(100, 200));
		pop();

	}

	textAlign(CENTER, CENTER);
	textSize(100);
	fill('white');
	stroke('black');
	strokeWeight(7);
	text(nameInput.value(), width/2, height/2);
} 