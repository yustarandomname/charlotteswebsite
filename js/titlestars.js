let canvasSize;
let star;
let h1 = document.querySelectorAll("h1")

function setup() {
  windowResized();
  let canvas = createCanvas(canvasSize.w, canvasSize.h);
  canvas.position(h1[0].offsetLeft,h1[0].offsetTop-40)

  frameRate(1.5);
}

function draw() {
  clear();
  fill("#ff7127");
  noStroke()
  for (let i = 0; i < 5; i++) {
    cs = random(20, 40);
    x = random(cs, canvasSize.w - cs);
    y = random(cs, canvasSize.h - cs);
    r = random(0, 50);

    push();
    translate(x - 15, y - 15);
    scale(cs / 15);
    ster()
    pop();
  }
}

function ster(){
    beginShape();
    vertex(14.59, 7.29);
    bezierVertex(8.84, 8.14, 8.149999999999999, 8.84, 7.3, 14.58);
    bezierVertex(6.45, 8.83, 5.75, 8.14, 0.009999999999999787, 7.29);
    bezierVertex(5.76, 6.44, 6.45, 5.74, 7.3, 0);
    bezierVertex(8.15, 5.75, 8.85, 6.44, 14.59, 7.29);
    endShape();
}

function windowResized() {
  canvasSize = {w:h1[0].offsetWidth, h:h1[0].offsetHeight+80}
  resizeCanvas(canvasSize.w, canvasSize.h);
}
