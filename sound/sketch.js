/*
sound sampler
5.10.2020
*/

//global sound varibales

var skateSong;
var hitSound;
var jumpSound;
var coinSound;
var explosionSound;

//global scope

var r, g, b;

function preload() {
	skateSong = loadSound("skate.mp3");
	hitSound = loadSound("Hit.wav");
	jumpSound = loadSound("Jump.wav");
	coinSound = loadSound("coin.wav");
	explosionSound = loadSound("Explosion.wav");

}

function setup() {
	var canvas = createCanvas(640, 360);
	canvas.drawingContext.miterLimit = 2;
	skateSong.playMode("restart");
}  

function draw() {

	if(skateSong.isPlaying()) {background(r, g, b);
		if (frameCount % 35 === 0) {
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);}
	} else {
		background('white');
	}

	if(jumpSound.isPlaying()) {
		fill("yellow");
		rect(0, 0, 100, height);
	}
	if(hitSound.isPlaying()) {
		fill("orange");
		rect(160, 0, 100, height);
	}
	if(coinSound.isPlaying()) {
		fill("purple");
		rect(320, 0, 100, height);
	}
	if(explosionSound.isPlaying()) {
		fill("red");
		rect(480, 0, 100, height);
	}
}

//plays music
function keyPressed() {
	if(keyCode == 32) { //space bar
		if (skateSong.isPlaying()) {
			skateSong.pause();
		} else {
			skateSong.play();
		}
	}
	if(keyCode == 13) { //enter key
		if (skateSong.isPlaying()) {
			skateSong.stop();
		} else {
			skateSong.play();
		}
	}

//plays sound effects
	if(keyCode == 87) { // W key
		jumpSound.play();
	}

	if(keyCode == 65) { // A key
		hitSound.play();
	}

	if(keyCode == 83) { // S key
		coinSound.play();
	}

	if(keyCode == 68) { // D key
		explosionSound.play();
	}
}