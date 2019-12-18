export default class Monsters {
	constructor(config){
		this.config = config
		this.steps = 0
		this.monsters = [
			this.createMonster(30, 5, 10, '#ff0000'),
			this.createMonster(30, 5, 10, '#0000ff'),
			this.createMonster(30, 5, 10, '#00ff00')
		]
	}

	update(){
		this.monsters.forEach(monster => {
			let updatedCoordinates
			if(this.steps % 30 == 0 || !monster.direction){
				updatedCoordinates = this.getNextStep(monster, null)
				monster.direction = updatedCoordinates.direction
			}else{
				updatedCoordinates = this.getNextStep(monster, monster.direction)
			}
			monster.position.x = updatedCoordinates.x 
			monster.position.y = updatedCoordinates.y
		})
		this.steps++
	}

	draw(ctx){
		this.monsters.forEach(monster => {
			const { x, y } = monster.position
			ctx.fillStyle = monster.color
			ctx.fillRect(x, y, monster.size, monster.size)
		})
	}

	createMonster(size, speed, senses, color){
		return {
			size,
			speed,
			senses,
			color,
			position: { x: 1, y: 1 },
			direction: null
		}
	}

	getNextStep(monster, direction = null){
		direction = direction || Math.random() * 2 * Math.PI
		const { x, y } = this.updateCoordinates(direction, monster.speed, monster.position)
		if(this.isMonsterInFrame(x, y, monster.size)){
			return { x, y, direction }
		}else{
			return this.getNextStep(monster, null)
		}
	}

	updateCoordinates(direction, magnitude, coordinates){
		const x = coordinates.x + (magnitude * Math.cos(direction))
		const y = coordinates.y + (magnitude * Math.sin(direction))
		return { x, y }
	}

	isMonsterInFrame(x, y, size){
		const { topOfMonster, bottomOfMonster, leftOfMonster, rightOfMonster } = this.getMonsterContour(x, y, size)
		return (topOfMonster > 0 && leftOfMonster > 0 && rightOfMonster < this.config.game.width && bottomOfMonster < this.config.game.height)
	}

	getMonsterContour(x, y, size){
		const topOfMonster = x 
		const bottomOfMonster = x + size
		const leftOfMonster = y
		const rightOfMonster = y + size
		return { topOfMonster, bottomOfMonster, leftOfMonster, rightOfMonster }
	}
}
