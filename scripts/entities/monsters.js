import { getRandomArbitrary } from "./../utils"

export default class Monsters {
	constructor(config){
		this.config = config
		this.steps = 0
		this.states = {
			HUNGRY: 'HUNGRY',
			TIERD: 'TIERD',
			REST: 'REST'
		}
		this.monsters = [
			this.createMonster(35, 3, 100, '#ff0000'),
			// this.createMonster(35, 3, 100, '#0000ff'),
			// this.createMonster(35, 3, 100, '#00ff00'),
			// this.createMonster(35, 3, 100, '#0000ff'),
			// this.createMonster(35, 3, 100, '#00ff00')
		]
		this.image = document.getElementById("monster")
	}

	update(){
		this.monsters.forEach(monster => {
			if(monster.state == this.states.HUNGRY && this.steps % monster.whim == 0){
				monster.direction = null
			}
			const { direction, x, y } = this.getNextStep(monster, monster.direction)
			monster.direction = direction
			monster.position = { x, y }
		})
		this.steps++
	}

	draw(ctx){
		this.monsters.forEach(monster => {
			const { x, y } = monster.position

			//Senses field circle
			ctx.beginPath();
			ctx.arc(x + monster.size / 2 , y + monster.size / 2, monster.senses, 0, 2 * Math.PI, false);
			ctx.stroke();

			if(monster.target){
				// target food pointer
				ctx.beginPath();
				ctx.arc(monster.target.x , monster.target.y, 10, 0, 2 * Math.PI, false);
				ctx.stroke();
			}
			
			ctx.drawImage(this.image, 0, 0, 50, 50, x, y, monster.size, monster.size);
		})
	}

	createMonster(size, speed, senses, color){
		const state = this.states.HUNGRY
		return {
			size,
			speed,
			senses,
			color,
			position: { x: 1, y: 1 },
			direction: null,
			state,
			target: null,
			whim: getRandomArbitrary(30, 50)
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

	checkMonstersReach(itemCoordinate, monster){
		const { position: { x, y }, size } = monster
		const { topOfMonster, bottomOfMonster, leftOfMonster, rightOfMonster } = this.getMonsterContour(x, y, size)
		return (
			(itemCoordinate.x > leftOfMonster && itemCoordinate.x < rightOfMonster) && 
			(itemCoordinate.y > topOfMonster && itemCoordinate.y < bottomOfMonster)
		)
	}
}
