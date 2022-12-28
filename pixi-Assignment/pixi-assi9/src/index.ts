import { Application, TextStyle, Container, Sprite } from "pixi.js";
const PIXI = require("pixi.js");
const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0xffff00,
  width: innerWidth,
  height: innerHeight,
});

const conty: Container = new Container();
conty.x = window.innerWidth / 2 - 180;
conty.y = window.innerHeight / 2 - 50;
app.stage.addChild(conty);

const icon: Sprite = Sprite.from("empty-checkbox.png");
const icon2: Sprite = Sprite.from("checkmark.png");

// icon added
icon.anchor.set(0.5);
icon.x = app.screen.width / 2;
icon.y = 120;
icon.scale.set(0.1);
icon.interactive = true;
icon.cursor = "pointer";
app.stage.addChild(icon);
// icon added
icon2.anchor.set(0.5);
icon2.x = app.screen.width / 2;
icon2.y = 120;
icon2.scale.set(0.1);
icon2.interactive = true;
icon2.cursor = "pointer";
app.stage.addChild(icon2);
icon2.visible = false;

const style = new PIXI.TextStyle({
  fontFamily: "Comic Sans MS",
  fontVariant: "small-caps",
  fontWeight: "bolder",
});
const text = new PIXI.Text("Let's customize text in your Language :)", style);

text.x = window.innerWidth / 2 - 260;
text.y = 50;

app.stage.addChild(text);

const styly: TextStyle = new PIXI.TextStyle({
  align: "center",
  fill: "#754c24",
  fontSize: 42,
  fontFamily: "Comic Sans MS",
  fontVariant: "small-caps",
  fontWeight: "bolder",
});
const texty = new PIXI.Text("私に気づいて先輩！", styly); // Text supports unicode!
//'私に気づいて先輩！'
// texty.text = "This is expensive to change, please do not abuse";

conty.addChild(texty);

// function

let toggle = true;

icon.on("pointerdown", onIcon); //Action Listener
icon2.on("pointerdown", onIcon); //Action Listener
function onIcon() {
  if (toggle) {
    toggle = false;
    console.log("Icon Click!!!");
    icon2.visible = true;
    icon.visible = false;
    conty.x = 200;
    conty.y = window.innerHeight / 2 - 50;
    texty.text = "This is expensive to change, please do not abuse";
  } else {
    toggle = true;
    console.log("Icon Click!!!");
    icon2.visible = false;
    icon.visible = true;
    conty.x = window.innerWidth / 2 - 180;
    conty.y = window.innerHeight / 2 - 50;
    texty.text = "'私に気づいて先輩！";
  }
}
