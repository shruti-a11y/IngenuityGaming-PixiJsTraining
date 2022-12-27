import { Application, Sprite,Text } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: window.innerWidth,
	height: window.innerHeight
});

const font: Text =new Text("Basic text in pixi");
const font2: Text =new Text("What you do :)");
const icon: Sprite = Sprite.from("home.png");
const icon2: Sprite = Sprite.from("cross-sign.png");
const start: Sprite = Sprite.from("start-button.png");

// font added
font.anchor.set(0.5);
font.x = app.screen.width / 5;
font.y = app.screen.height / 2;
font.interactive = true;
font.cursor = "pointer";
app.stage.addChild(font);
// font added
font2.anchor.set(0.5);
font2.x = app.screen.width / 5;
font2.y = app.screen.height / 2;
font2.interactive = true;
font2.cursor = "pointer";
app.stage.addChild(font2);
font2.visible = false;


// icon added
icon.anchor.set(0.5);
icon.x = app.screen.width / 2;
icon.y = app.screen.height / 2;
icon.scale.set(0.2);
icon.interactive = true;
icon.cursor = "pointer";
app.stage.addChild(icon);
// icon added
icon2.anchor.set(0.5);
icon2.x = app.screen.width / 2;
icon2.y = app.screen.height / 2;
icon2.scale.set(0.2);
icon2.interactive = true;
icon2.cursor = "pointer";
app.stage.addChild(icon2);
icon2.visible= false

// button added
start.anchor.set(0.5);
start.x = app.screen.width-150 ;
start.y = app.screen.height / 2;
start.scale.set(0.2);
start.interactive = true;
start.cursor = "pointer";
app.stage.addChild(start);

font.on('pointerdown', onText);//Action Listener
function onText() {
	console.log("Text Click!!!");
	font2.visible=true;
	font.visible= false;
	setTimeout(function(){
		font2.visible=false;
		font.visible= true;
		console.log("timer start");
	},2000)
}

icon.on('pointerdown', onIcon);//Action Listener
function onIcon() {
	console.log("Icon Click!!!");
	icon2.visible=true;
	icon.visible= false;
	setTimeout(function(){
		icon2.visible=false;
		icon.visible= true;
		console.log("timer start");
	},2000)
}

start.on('pointerdown', onButtonDown);//Action Listener
function onButtonDown() {
	console.log("What you do :)");
}