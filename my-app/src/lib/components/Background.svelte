<script lang="ts">
	import P5 from '$lib/components/P5.svelte';
	import type p5 from 'p5';

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
		{ mouseX: 400, mouseY: 400 }
	];

	let copys = 18;

	const sketch = (p5: p5) => {
		p5.setup = () => {
			p5.frameRate(30);
			let background = p5.createCanvas(p5.windowWidth, p5.windowHeight);
			background.parent('background');
		};

		p5.draw = () => {
			p5.background('#9325ff');
			// background("#7b50de");
			p5.noStroke();
			// noFill()
			p5.angleMode(p5.DEGREES);
			p5.fill('#ff7127');
			let hw = p5.windowWidth / 2;
			let hh = 400;
			p5.push();
			p5.translate(p5.windowWidth / 2, p5.windowHeight / 2);
			p5.scale((1 / 800) * p5.windowWidth + 0.1);
			for (let ii = 0; ii < copys; ii++) {
				p5.push();
				p5.rotate((360 / copys) * ii + p5.frameCount / 6);
				p5.beginShape();
				for (let i = 0; i < points.length; i++) {
					const nois = p5.noise(i * 0.05 + p5.frameCount / 200);
					const nois2 = nois + 1;

					p5.curveVertex((points[i].mouseX - 400) * nois, (points[i].mouseY - 400) * nois2);
				}

				p5.endShape();
				p5.pop();
			}
			p5.pop();
		};
	};
</script>

<P5 {sketch} />
