export default class CollisionEngine {
	constructor(monsters, food){
		this.monsters = monsters
		this.food = food
	}

	handleCollisions(){
		this.monsters.monsters.forEach(monster => {
			monster.target = null
			const { x: x1, y: y1 } = monster.position
			this.food.forEveryFood(foodCoordinate => {
				const { x: x2, y: y2 } = foodCoordinate
				const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
				if(distance < monster.senses && (!monster.target || monster.target.distance > distance)){
					const direction = Math.trunc(Math.acos((x2 - x1)/distance) * (180 / Math.PI))
					monster.target = { x: x2, y: y2, distance }
				}
			})
		})
	}
}

/**
 * x = distance cosT
 * y = distance sinT
 */