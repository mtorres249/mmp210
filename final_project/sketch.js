/*
final project
5.19.2020
*/

//sound variables
var music;
var laserSound;
var explosionSound

var x = 200;
var y = 500;
var v = 100; //x variable for speed
var speed = 7;

function preload() {
	music = loadSound("sawsquarenoise.mp3");
	laserSound = loadSound("Laser.wav");
	explosionSound = loadSound("Explosion24.wav");
}

function setup() {
	createCanvas(960, 720);
}

function draw() {
	background('black');
	
	if(laserSound.isPlaying()){
		background('navy');
	}else{
	if(explosionSound.isPlaying()){
		background('orange');
	}else{
		background('black')
	}
}

		//ship
		fill('red');
		square(x - 65, 665, 25);
		square(x + 20, 665, 25);
		rect(x - 17, 600, 20, 45);
		fill('white');
		rect(x - 60, 640, 100, 25);

		//asteroid
		fill('yellow');
		noStroke();
		ellipse(v, 420, 90, 90);

		//alien
		fill('green');
		square(v + 100, 140, 90, 30, 30, 5, 5);

		//asteroid
		fill('yellow');
		noStroke();
		ellipse(v, 100, 90, 90);

		//alien
		fill('green');
		square(v + 190, 260, 90, 30, 30, 5, 5);

		//asteroid
		fill('yellow');
		noStroke();
		ellipse(v - 200, 320, 90, 90);

		//alien
		fill('green');
		square(v - 150, 150, 90, 30, 30, 5, 5);

		//asteroid
		fill('yellow');
		noStroke();
		ellipse(v + 80, 310, 90, 90);

		//alien
		fill('green');
		square(v - 400, 400, 90, 30, 30, 5, 5);

		//asteroid
		fill('yellow');
		noStroke();
		ellipse(v + 300, 400, 90, 90);

		//alien
		fill('green');
		square(v + 400, 205, 90, 30, 30, 5, 5);
		v += speed;
		if (v > 750 || v < 0) {
		speed *= -1;
	}
}

function keyPressed(){
	if(keyCode == 75) { // K key
		laserSound.play();
	}
	if(keyCode == 76) { // L key
		explosionSound.play();
	}
		if(keyCode == 13) { // enter key
		if (music.isPlaying()) {
			music.pause();
		} else {
			music.play();
		}
	}
	  if (keyCode == 65) { // A key
    	x = x - 80;
  	  }
  	  if (keyCode == 68) { // D key
    	x = x + 80;
    }
}
