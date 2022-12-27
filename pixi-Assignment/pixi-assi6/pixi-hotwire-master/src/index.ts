import { Application, Sprite,Container } from 'pixi.js'
import {Howl} from 'howler';

// const {Howl, Howler} = require('howler');
const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: window.innerWidth,
	height: window.innerHeight
});
const conty: Container = new Container();
conty.x = 200;
conty.y = 0;
app.stage.addChild(conty);

const clampy: Sprite = Sprite.from("button.png");
clampy.x =conty.width+200;
clampy.y = conty.height;
conty.addChild(clampy);

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
  

