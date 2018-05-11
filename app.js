//initialize app
var app = new PIXI.Application();
document.body.appendChild(app.view);

//add background
var background = PIXI.Sprite.fromImage('images/backgroud.png');
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);

//load textures
var textureButton = PIXI.Texture.fromImage('images/button.png');
var textureButtonDown = PIXI.Texture.fromImage('images/buttonDown.png');
var textureButtonOver = PIXI.Texture.fromImage('images/buttonOver.png');

//this function handles the button's pointerdown event
function onButtonDown() {
	this.isDown = true;
	this.texture = textureButtonDown;
}

//this function handles the button's pointerup event
function onButtonUp() {
	this.isDown = false;
	if (this.isOver) {
		this.texture = textureButtonOver;
	}
	else {
		this.texture = textureButton;
	}
}

//this function handles the button's pointerover event
function onButtonOver() {
	this.isOver = true;
	if (this.isDown) {
		return;
	}
	this.texture = textureButtonOver;
}

//this function handles the button's pointerout event
function onButtonOut() {
	this.isOver = false;
	if (this.isDown) {
		return;
	}
	this.texture = textureButton;
}

var buttons = [];

var buttonPositions = [
	[175, 75],
	[655, 75],
	[410, 325],
	[150, 465],
	[685, 445]
];

for (var i = 0; i < 5; i++) {
	var button = new PIXI.Sprite(textureButton);

	button.anchor.set(0.5);
	button.x = buttonPositions[i][0];
	button.y = buttonPositions[i][1];

	button.interactive = true;
	button.buttonMode = true;

	//add event listeners
	button
		.on('pointerdown', onButtonDown)
		.on('pointerup', onButtonUp)
		.on('pointerupoutside', onButtonUp)
		.on('pointerover', onButtonOver)
		.on('pointerout', onButtonOut);

	// add it to the stage
	app.stage.addChild(button);

	// add button to array
	buttons.push(button);
}

//add fun stuff (this is just an example)
buttons[0].scale.set(1.2);
buttons[2].rotation = Math.PI / 10;
buttons[3].scale.set(0.8);
buttons[4].scale.set(0.8, 1.2);
buttons[4].rotation = Math.PI;