export default class CollisionEngine {
	constructor(monsters, food){
		this.monsters = monsters
		this.food = food
	}

	handleCollisions2(){
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

	handleCollisions(){
		this.monsters.monsters.forEach(monster => {
			if(monster.state = this.monsters.states.HUNGRY){
				const { target, position: { x: monsterX, y: monsterY } } = monster
				console.log(target)
				if(target){
					debugger;
				}
				if(target && this.food.coordinates[target.x].includes(y)){
					return
				}else{
					//Monster hungty and targetless
					this.food.forEveryFood(foodCoordinate => {
						const { x: foodX, y: foodY } = foodCoordinate
						const distance = Math.sqrt(Math.pow((foodX - monsterX), 2) + Math.pow((foodY - monsterY), 2))
						if(distance < monster.senses && (!monster.target || monster.target.distance > distance)){
							monster.direction = Math.trunc(Math.acos((foodX - monsterX)/distance) * (180 / Math.PI))
							monster.target = { x: foodX, y: foodY, distance }
						}
					})

				}
			}else{
				// other states handler
			}
		})
	}
}