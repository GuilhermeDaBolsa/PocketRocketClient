import InputHandler from "./InputHandler";
import Player from "./Player";
//import Ball from "./Ball";

class Game2D {
	constructor(canvaElementInDOM, canvaWidth, canvaHeight) {
		this.canvas = canvaElementInDOM; 
		this.ctx = this.canvas.getContext('2d');
		this.canvas.width = canvaWidth;
		this.canvas.height = canvaHeight;

		
		this.player = new Player(this);
		this.input = new InputHandler();
		this.lastFrameTime = 0;
		this.deltaTime = 0;
		this.requestedFrameId = -1;
	}

	openConnection(serverConnection, userId) {
		this.socket = new WebSocket(serverConnection + "?userId=" + userId);

		this.socket.onopen = () => {
			console.log("bomdia");	
		}
		this.socket.onclose = () => {
			console.log("boa noite");
		}
		this.socket.onmessage = (message) => {
			const [dx, dy] = message.data.split(",");
			this.player.x = parseFloat(dx); 
			this.player.y = parseFloat(dy);
			//console.log(dx,dy);
		}
	}

	update() {
		this.player.update();
	}

	draw(context) {
		this.player.draw(context);
	}

	start() {
		this.animate();
	}

	stop() {
		cancelAnimationFrame(this.requestAnimationId);
	}

	animate(time = 0) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.deltaTime = (time - this.lastFrameTime) / 1000;
		this.lastFrameTime = time;
		this.update();
		this.draw(this.ctx);

		this.requestAnimationId = requestAnimationFrame((t) => this.animate(t));
	}
}

export default Game2D;