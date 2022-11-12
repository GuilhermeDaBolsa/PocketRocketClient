import InputHandler from "./InputHandler";
import Player from "./Player";
//import Ball from "./Ball";

window.addEventListener('load', () => {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = 500;
	canvas.height = 500;

	class Game {
		constructor(width, height) {
			this.width = width;
			this.height = height;
			this.player = new Player(this);
			this.input = new InputHandler();
			this.lastFrameTime = 0;
			this.deltaTime = 0;
		}
		update() {
			this.player.update();
		}
		draw(context) {
			this.player.draw(context);
		}
	}

	const game = new Game(canvas.width, canvas.height);

	function animate(time = 0) {
		ctx.clearRect(0,0,canvas.width,canvas.height);

		game.deltaTime = (time - game.lastFrameTime) / 1000;
		game.lastFrameTime = time;
		game.update();
		game.draw(ctx);

		requestAnimationFrame(animate);
	}

	animate();
})