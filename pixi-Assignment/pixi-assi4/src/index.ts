import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: window.innerWidth,
	height : window.innerHeight,
});

const jackpot: Sprite = Sprite.from("jackpot.png");
const btn: Sprite = Sprite.from("button.png");
// let jackpotTimeout;

btn.anchor.set(0.5);

btn.x = app.screen.width / 2;
btn.y = app.screen.height / 2;

jackpot.anchor.set(0.5);
jackpot.x = app.screen.width / 2;
jackpot.y = app.screen.height / 2;
jackpot.scale.set(1.5);
jackpot.visible = false

app.stage.addChild(btn);
app.stage.addChild(jackpot);

btn.interactive = true;
btn.cursor = "pointer"

btn.on("pointerdown",onClick);
function onClick() {
	console.log("button press");
	btn.visible = false;
	jackpot.visible = true;
	console.log("timer stop");
	setTimeout(function(){
		jackpot.visible=false;
		btn.visible= true;
		console.log("timer start");
	},3000)


}
