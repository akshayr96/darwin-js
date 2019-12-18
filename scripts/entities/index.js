import Monsters from "./monsters"

export default class Entities {
	constructor(config, ctx){
		this.ctx = ctx
		this.monsters = new Monsters(config)
		this.entities = [this.monsters]
	}

	renderFrame(){
		this.entities.forEach(entity => {
			entity.update()
			entity.draw(this.ctx)
		})
	}
}
