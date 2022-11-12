class Body {
	constructor(x, y, weight) {
		this.x = x;
		this.y = y;

		this.weight = weight;

		this.speedX = 0;
		this.speedY = 0;

		this.currentSpeedDirectionX = 0;
		this.currentSpeedDirectionY = 0;
	}
	
	update() {
		this.currentSpeedDirectionX = Math.sign(this.speedX);
		this.currentSpeedDirectionY = Math.sign(this.speedY);

		this.x += this.speedX;
		this.y += this.speedY;
	}
}

export default Body;