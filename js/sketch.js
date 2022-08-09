let points = [
    { mouseX: 400, mouseY: 400 },
    { mouseX: 394, mouseY: 389 },
    { mouseX: 327, mouseY: 345 },
    { mouseX: 305, mouseY: 243 },
    { mouseX: 161, mouseY: 172 },
    { mouseX: 150, mouseY: 29 },
    { mouseX: 58, mouseY: 19 },
    { mouseX: 93, mouseY: 2 },
    { mouseX: 297, mouseY: 14 },
    { mouseX: 217, mouseY: 153 },
    { mouseX: 356, mouseY: 217 },
    { mouseX: 344, mouseY: 339 },
    { mouseX: 394, mouseY: 398 },
    { mouseX: 400, mouseY: 400 },
  
  ];
  
  let copys = 18;
  
  function setup() {
    frameRate(30);
    let background = createCanvas(windowWidth, windowHeight);
    background.parent('background');
  }
  
  function draw() {
    background("#9325ff");
    // background("#7b50de");
    noStroke();
    // noFill()
    angleMode(DEGREES);
    fill("#ff7127");
    let hw= windowWidth/2
    let hh= 400
    push()
    translate(windowWidth/2,windowHeight/2)
    scale((1/800)*windowWidth+0.1)
    for (let ii = 0; ii < copys; ii++) {
      push();
      rotate((360 / copys) * ii+ frameCount/6);
      beginShape();
      for (let i = 0; i < points.length; i++) {
        nois = noise(i*0.05+frameCount / 200);
        nois2 = noise(i*0.05+frameCount / 300+100)+1;
  
        curveVertex((points[i].mouseX - 400) * nois, (points[i].mouseY - 400)*nois2);
      }
  
      endShape();
      pop();
    }
    pop()
  }
  

  function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
  }

  // function mouseMoved(){
  //   console.log("hey")
  // }