const btn1 = document.getElementById("red");
const btn2 = document.getElementById("blue");
const btn3 = document.getElementById("green");
console.log(btn1);

import { Application, Container, Graphics, Sprite } from "pixi.js";

const app = new Application({
  // view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: window.innerWidth,
  height: window.innerHeight,
});
//  to add canvas to body
document.body.appendChild(app.view);

const conty: Container = new Container();
conty.x = 0;
conty.y = 100;

app.stage.addChild(conty);

const clampy: Sprite = Sprite.from("clampy.png");
clampy.x = 100;
clampy.y = 100;
conty.addChild(clampy);

btn1?.addEventListener("click", function () {
  console.log("red");
  let obj = new Graphics();
obj.beginFill(0xff0000);
obj.drawRect(0, 0, window.innerWidth, innerHeight);

// Add it to the stage to render
app.stage.addChild(obj);
});
btn2?.addEventListener("click", function () {
  console.log("blue");
  let obj = new Graphics();
  obj.beginFill(0x0000FF);
  obj.drawRect(0, 0, window.innerWidth, innerHeight);
  
  // Add it to the stage to render
  app.stage.addChild(obj);
});

btn3?.addEventListener("click", function () {

  console.log("green");
  let obj = new Graphics();
  obj.beginFill(0x00FF00);
  obj.drawRect(0, 0, window.innerWidth, innerHeight);
  
  // Add it to the stage to render
  app.stage.addChild(obj);
});
