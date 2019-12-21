import { getRandomArbitrary } from "./../utils"

export default class Food {
	constructor(config){
		this.config = config
		this.radius = 5
		this.coordinates = this.generateRandomCoordinates() // { x1: [y1, y2,...] }
		this.color = '#e94b5a'
	}

	update(){

	}

	draw(ctx){
		Object.keys(this.coordinates).forEach(x => {
			this.coordinates[x].forEach(y => {
				ctx.beginPath();
				ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
				ctx.fillStyle = this.color;
				ctx.fill();
				ctx.stroke();
			})
		})
	}

	generateRandomCoordinates(){
		const coordinates = {}
		for(var i = 0; i < this.config.food.coeffecient; i++){
			const x = getRandomArbitrary(this.radius, this.config.game.width)
			const y = getRandomArbitrary(this.radius, this.config.game.height)
			coordinates[x] = coordinates[x] ? coordinates[x].concat(y) : [y]  
		}
		return coordinates
	}
}