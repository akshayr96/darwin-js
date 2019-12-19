import Monsters from "./monsters"
import Food from "./food"

export default class Entities {
	constructor(config, ctx){
		this.ctx = ctx
		this.food = new Food(config)
		this.monsters = new Monsters(config)
		this.entities = [this.food, this.monsters]
	}

	renderFrame(){
		this.entities.forEach(entity => {
			entity.update()
			entity.draw(this.ctx)
		})
	}
}
