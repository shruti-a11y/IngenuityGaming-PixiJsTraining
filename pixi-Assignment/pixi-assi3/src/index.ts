import { Application, Sprite } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: window.innerWidth,
  height: window.innerHeight,
});
let position = 1;
// let numbers:Number[] = [1, 2, 3];
const img1: Sprite = Sprite.from("1.jpg");
const img2: Sprite = Sprite.from("2.jpg");
const img3: Sprite = Sprite.from("3.jpg");
// button
const left: Sprite = Sprite.from("left-arrow.png");
const right: Sprite = Sprite.from("right-arrow.png");

img1.anchor.set(0.5);

img1.x = app.screen.width / 2;
img1.y = app.screen.height / 2;
img1.scale.set(0.15);
app.stage.addChild(img1);
img1.visible = false;

// img2
img2.anchor.set(0.5);

img2.x = app.screen.width / 2;
img2.y = app.screen.height / 2;
img2.scale.set(0.2);
app.stage.addChild(img2);
img2.visible = false;

// img3
img3.anchor.set(0.5);

img3.x = app.screen.width / 2;
img3.y = app.screen.height / 2;
img3.scale.set(0.2);
app.stage.addChild(img3);
img3.visible = false;

// left
left.anchor.set(0.5);

left.x = 100;
left.y = app.screen.height / 2;
left.scale.set(0.2);
app.stage.addChild(left);
left.visible = true;
left.interactive = true;
left.cursor = "pointer";

// right arrow
right.anchor.set(0.5);

right.x = app.screen.width - 100;
right.y = app.screen.height / 2;
right.scale.set(0.2);
app.stage.addChild(right);
right.visible = true;
right.interactive = true;
right.cursor = "pointer";

// function
if (position == 1) {
  img1.visible = true;
}
left.on("pointerdown", onClickLeft);

function onClickLeft() {
  if (position > 1) {
    position = position - 1;
    if (position == 1) {
      img1.visible = true;
      img2.visible = false;
      img3.visible = false;
    } else if (position == 2) {
      img1.visible = false;
      img2.visible = true;
      img3.visible = false;
    } else if (position == 3) {
      img1.visible = false;
      img2.visible = false;
      img3.visible = true;
    }
  } else {
    console.log("no change");
  }
  console.log("button press");
  console.log(position);
}

right.on("pointerdown", onClickRight);
function onClickRight() {
  if (position < 3) {
    position = position + 1;
    if (position == 1) {
      img1.visible = true;
      img2.visible = false;
      img3.visible = false;
    } else if (position == 2) {
      img1.visible = false;
      img2.visible = true;
      img3.visible = false;
    } else if (position == 3) {
      img1.visible = false;
      img2.visible = false;
      img3.visible = true;
    }
  } else {
    console.log("no change");
  }

  console.log("button press");
  console.log(position);
}
