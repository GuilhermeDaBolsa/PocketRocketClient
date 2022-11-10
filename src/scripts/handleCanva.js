window.addEventListener('load', () => {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = 500;
	canvas.height = 500;

	class InputHandler {

	}

	class Player {
		constructor(game) {
			this.game = game;
			this.width = 22;
			this.height = 22;
			this.x = 22;
			this.y = 22;
			this.speedY = 0;
		}
		update() {
			this.y += this.speedY;
		}
		draw(context) {
			context.fillRect(this.x, this.y, this.width, this.height);
		}
	}

	class Ball {

	}

	class Gol {

	}
	
	class UI {

	}
	
	class Game {
		constructor(width, height) {
			this.width = width;
			this.height = height;
			this.player = new Player(this);
		}
		update() {
			this.player.update();
		}
		draw(context) {
			this.player.draw(context);
		}
	}

	const game = new Game(canvas.width, canvas.height);

	function animate() {
		ctx.clearRect(0,0,canvas.width,canvas.height);

		game.update();
		game.draw(ctx);

		requestAnimationFrame(animate);
	}

	animate();
})