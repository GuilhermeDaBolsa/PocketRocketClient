import Body from "./Body";

class Player extends Body {
	constructor(game) {
		super(0, 0, 1);

		this.width = 30;
		this.height = 30;

		this.game = game;

		this.walkSpeedAcceleration = 8;
		this.tick = 0;
	}
	update() { //TODO AAAAAAAA EVERY THING HERE IS DUPLICATED, PLS FIX
		this.tick += 1;

		const currentSpeedYDirection = Math.sign(this.speedY);
		const currentSpeedXDirection = Math.sign(this.speedX);
		const moveSpeedXLimit = 3;
		const moveSpeedYLimit = 3;
		let moveXdirection = 0;
		let moveYdirection = 0;

		//INPUT
		if(this.game.input.keys.has("ArrowUp"))
			moveYdirection -= 1
		
		if(this.game.input.keys.has("ArrowDown"))
			moveYdirection += 1;
		
		if(this.game.input.keys.has("ArrowLeft"))
			moveXdirection -= 1
		
		if(this.game.input.keys.has("ArrowRight"))
			moveXdirection += 1;
		
		const moveXSpeed = moveXdirection * this.walkSpeedAcceleration * this.game.deltaTime;
		const moveYSpeed = moveYdirection * this.walkSpeedAcceleration * this.game.deltaTime;

		if(currentSpeedYDirection == moveYdirection) {
			if(Math.abs(this.speedY + moveYSpeed) < moveSpeedYLimit) {
				this.speedY += moveYSpeed;
			}
		} else {
			this.speedY += moveYSpeed;
		}

		if(currentSpeedXDirection == moveXdirection) {
			if(Math.abs(this.speedX + moveXSpeed) < moveSpeedXLimit) {
				this.speedX += moveXSpeed;
			}
		} else {
			this.speedX += moveXSpeed;
		}

		if(this.tick >= 30) {
			console.log("end tick");
			this.tick = 0;
			/*try {
				this.game.socket.send(`${this.x},${this.y}`);
			}catch{}*/
		}

		super.update();
		
		this.speedX *= 0.98;
		this.speedY *= 0.98;
	}
	draw(context) {
		context.fillStyle = "white"
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}

export default Player;