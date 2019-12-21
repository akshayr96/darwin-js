import { getRandomArbitrary } from "./../utils"

export default class Food {
	constructor(config){
		this.config = config
		this.radius = 5
		this.coordinates = this.generateRandomCoordinates()
		this.color = '#e94b5a'
	}

	update(){

	}

	draw(ctx){
		this.coordinates.forEach(coordinate => {
			ctx.beginPath();
      ctx.arc(coordinate.x, coordinate.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = this.color;
			ctx.fill();
			ctx.stroke();
		})
	}

	generateRandomCoordinates(){
		const coordinates = []
		for(var i = 0; i < this.config.food.coeffecient; i++){
			const x = getRandomArbitrary(this.radius, this.config.game.width)
			const y = getRandomArbitrary(this.radius, this.config.game.height)
			coordinates.push({ x, y })
		}
		return coordinates
	}
}