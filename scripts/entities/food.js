export default class Food {
	constructor(config){
		this.config = config
		this.coordinates = this.generateRandomCoordinates()
	}

	update(){

	}

	draw(ctx){
		this.coordinates.forEach(coordinate => {
			ctx.beginPath();
      ctx.arc(coordinate.x, coordinate.y, 5, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'yellow';
      ctx.fill();
		})
	}

	generateRandomCoordinates(){
		const coordinates = []
		for(var i = 0; i < this.config.food.coeffecient; i++){
			const x = Math.trunc(Math.random() * this.config.game.width)
			const y = Math.trunc(Math.random() * this.config.game.height)
			coordinates.push({ x, y })
		}
		return coordinates
	}
}