import InputHandler from "./InputHandler";
import Player from "./Player";
//import Ball from "./Ball";

class Game2D {
	constructor(canvaElementInDOM, canvaWidth, canvaHeight) {
		this.canvas = canvaElementInDOM; 
		this.ctx = this.canvas.getContext('2d');
		this.canvas.width = canvaWidth;
		this.canvas.height = canvaHeight;

		this.players = [];
		this.input = new InputHandler();
		this.lastFrameTime = 0;
		this.deltaTime = 0;
		this.requestedFrameId = -1;
	}

	openConnection(serverConnection, userId) {
		this.socket = new WebSocket(serverConnection + "?userId=" + userId);

		this.socket.onopen = () => {
			console.log("bomdia");	
			this.players.push(new Player(this, userId))
		}
		this.socket.onclose = () => {
			console.log("boa noite");
		}
		this.socket.onmessage = (message) => {
			if(message.data[0] == "P") {
				this.players.push(new Player(this, message.data.substring(1)))
			} else {
				const players = message.data.split(";");

				for (let i = 0; i < players.length-1; i++) { //length-1 because there is a ';' in the end of the message
					const [id, px, py] = players[i].split(",");
					const player = this.players.find(p => p.id == id);
					if(player) {
						player.x = parseFloat(px);
						player.y = parseFloat(py);
					}
				}
			}
		}
	}

	addUsersAlreadyInRoom(users) {
		for (const user of users) {
			this.players.push(new Player(this, user.id));
		}
	}

	update() {
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].update();
		}
	}

	draw(context) {
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].draw(context);
		}
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