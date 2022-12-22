import Body from "./Body";

class Player extends Body {
	constructor(game, userId) {
		super(0, 0, 1);

		this.width = 30;
		this.height = 30;

		this.game = game;

		this.walkSpeedAcceleration = 8;
		this.tick = 0;
		this.id = userId;
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

		if(this.tick >= 6) {
			this.tick = 0;

			const buffer = new ArrayBuffer(4);
			const view = new DataView(buffer);
			
			view.setUint8(0, (this.game.input.keys.has('ArrowUp') 	? 1 : 0));
			view.setUint8(1, (this.game.input.keys.has('ArrowDown') ? 1 : 0));
			view.setUint8(2, (this.game.input.keys.has('ArrowLeft') ? 1 : 0));
			view.setUint8(3, (this.game.input.keys.has('ArrowRight')? 1 : 0));

			try {
				this.game.socket.send(buffer);
			}catch (ex) {
				console.error(ex);
			}
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