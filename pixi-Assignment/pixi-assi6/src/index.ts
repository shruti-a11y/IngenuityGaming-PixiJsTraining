import { Application, Sprite } from 'pixi.js'
import {Howl} from 'howler';
const PIXI = require('pixi.js')

// const {Howl, Howler} = require('howler');
const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: window.innerWidth,
	height: window.innerHeight
});


const clampy: Sprite = Sprite.from("button.png");
clampy.anchor.set(0.5)
clampy.x =app.screen.width/2;
clampy.y = app.screen.height/2;
app.stage.addChild(clampy);

const basicText = new PIXI.Text('Play Sound');
basicText.x = app.screen.width/2.19;
basicText.y = app.screen.height/2.1;


app.stage.addChild(basicText);

clampy.interactive = true;
clampy.cursor = "pointer"

let flag = true;
var sound = new Howl({
	src: ['stranger-things-124008.mp3']
  });

clampy.on("pointerdown",onClick);
function onClick() {
	console.log("button press");
	if(flag){
		sound.play();
		flag = false;
	}
	else{
		sound.stop();
		flag = true;
	}
}
  

