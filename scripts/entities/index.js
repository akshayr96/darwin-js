import Monsters from "./monsters"
import Food from "./food"
import CollisionEngine from './collisionEngine'

export default class Entities {
	constructor(config, ctx){
		this.ctx = ctx
		this.food = new Food(config)
		this.monsters = new Monsters(config)
		this.collisionEngine = new CollisionEngine(this.monsters, this.food)
		this.entities = [this.food, this.monsters]
	}

	renderFrame(){
		this.collisionEngine.handleCollisions()
		this.entities.forEach(entity => {
			entity.update()
			entity.draw(this.ctx)
		})
	}
}
