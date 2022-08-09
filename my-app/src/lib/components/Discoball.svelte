<script lang="ts">
	import P5 from '$lib/components/P5.svelte';
import type { Font } from 'p5';
	import type p5 from 'p5';


let GraphSize = 1200;
let movement = 0;
let AUTHENTICSans: Font;
let discoball
let shine
let discoBallSize: number
let hover =0;
let distToBall: number

let starPosition = [];
let colors = ["#ff280e","#ffd5c7","#87ff8e","#8a3eff","#1C132A"]

	const sketch = (p5: p5) => {
    p5.preload = () => {
      AUTHENTICSans = p5.loadFont('./fonts/AUTHENTICSans-130.otf');
    discoball = p5.loadImage('./imgs/discoball.jpg');
    }

		p5.setup = () => {
      p5.frameRate(30)
  let background = p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
  
  background.parent('background');

  shine =  p5.createGraphics(250, 100);

  for (let i = 0; i < 10; i++) {
    starPosition[i] = i * p5.width/10;
  }
  
  for (let i = 0; i < 250/2; i++) {
    shine.stroke(255,255,255,i*2)
    shine.line(i, 0, i, 100);
    
    shine.stroke(255,255,255,i*2)
    shine.line(-i+250, 0, -i+250, 100);
		};

		p5.draw = () => {
			p5.clear(255,255,255,0);

  p5.background(colors[4]);
  p5.textFont(AUTHENTICSans,20);
  p5.noStroke(); 
  // stars()
  // discoBall()


  if(distToBall<discoBallSize+50) {
    // console.log("hey") 
    hover = 40
    }else{
      hover = 0
    }
		};
	};
</script>

<P5 {sketch} />
