import { Application, Sprite, TextStyle } from "pixi.js";
const PIXI = require("pixi.js");
const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: window.innerWidth,
  height: window.innerHeight,
});

const button: Sprite = Sprite.from("button.png");

button.anchor.set(0.5);

button.x = app.screen.width / 2;
button.y = app.screen.height / 2;

app.stage.addChild(button);

const styly: TextStyle = new PIXI.TextStyle({
  align: "center",
  fill: "#FFFFFF",
  fontSize: 42,
  fontFamily: "Comic Sans MS",
  fontVariant: "small-caps",
  fontWeight: "bolder",
});
const texty = new PIXI.Text("Click me！", styly);
texty.x = app.screen.width / 2;
texty.y = app.screen.height / 2;
app.stage.addChild(texty);

const menu: Sprite = Sprite.from("menu.png");

menu.anchor.set(0.5);

menu.x = app.screen.width / 2;
menu.y = app.screen.height / 2;
app.stage.addChild(menu);
menu.visible = false;

const closebutton: Sprite = Sprite.from("closebutton.png");

closebutton.anchor.set(.5);

closebutton.x = app.screen.width/2;
closebutton.y = app.screen.height/4.5;
app.stage.addChild(closebutton);
closebutton.visible = false;
closebutton.scale.set(0.2)


button.interactive = true;
button.cursor = "pointer";
closebutton.interactive = true;
closebutton.cursor = "pointer";

button.on("pointerdown", onclick);
closebutton.on("pointerdown", oncloseClick);

function onclick() {
	console.log("press");
	closebutton.visible = true;
	menu.visible = true;

  }
  function oncloseClick() {
	console.log(" closed press");
	menu.visible = false;
	closebutton.visible = false;
  }