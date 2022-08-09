p5.disableFriendlyErrors = true;

let GraphSize = 1200;
let movement = 0;
let AUTHENTICSans;
let discoball
let shine
let discoBallSize
let hover =0;
let distToBall

let starPosition = [];
let colors = ["#ff280e","#ffd5c7","#87ff8e","#8a3eff","#1C132A"]


function preload() {
  AUTHENTICSans = loadFont('./fonts/AUTHENTICSans-130.otf');
    discoball = loadImage('./imgs/discoball.jpg');
}

function setup() {
  frameRate(30)
  let background = createCanvas(windowWidth, windowHeight, WEBGL);
  
  background.parent('background');

  shine =  createGraphics(250, 100);

  for (let i = 0; i < 10; i++) {
    starPosition[i] = i * width/10;
  }
  
  for (let i = 0; i < 250/2; i++) {
    shine.stroke(255,255,255,i*2)
    shine.line(i, 0, i, 100);
    
    shine.stroke(255,255,255,i*2)
    shine.line(-i+250, 0, -i+250, 100);
  }
}

function draw() {
  clear();

  background(colors[4]);
  textFont(AUTHENTICSans,20);
  noStroke(); 
  stars()
  discoBall()


  if(distToBall<discoBallSize+50) {
    // console.log("hey") 
    hover = 40
    }else{
      hover = 0
    }
}

function mouseMoved() {
  distToBall = dist(mouseX,mouseY,width/2,height/2)
}

function stars() {
    fill(colors[3])

  for (let col = 0; col < 10; col++) {
    for (let row = 0; row < 10; row++) {
      if (starPosition[row] > width) {
        starPosition[row] = 0;
      } else {
        starPosition[row] += 0.07;
      }
      if (col%2 == 0){
         x = starPosition[row] - width/2;
      } else{
          x = (starPosition[row] - width/2)*-1;
      }
      y = noise(frameCount / 100 + row * 0.1+col*0.2) * 40 +col* height/10 - height/2;
      s = noise(frameCount / 20 + row * 10) * 30;
      circle(x, y, s);
    }
  }
 
}
function discoBall() {
  push();
  rotateY(frameCount/300);
  smooth();
  texture(discoball);
  discoBallSize= constrain(height/3.5,20,width/4)+hover;
  sphere(discoBallSize, 24, 12);
  
  texture(shine);
  rectMode(CENTER)
  rect(0,0,width,200)
  push()
  rotateY(PI/3);
  rotateZ(-PI/10);
  rect(0,0,width,200)
  pop();
  push()
  rotateY(PI/3*2);
  rotateZ(PI/10);
  rect(0,0,width,200)
  pop();  
   pop();  

}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function windowResized() {
  for (let i = 0; i < 10; i++) {
    starPosition[i] = i * width/10;
  }
  resizeCanvas(windowWidth, windowHeight);
}