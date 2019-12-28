export default class CollisionEngine {
	constructor(monsters, food){
		this.monsters = monsters
		this.food = food
	}

	handleCollisions(){
		this.monsters.monsters.forEach(monster => {
			//check if monster has target
			//if target && check if food exists in target - do nothing
			// else find nearest food
			// if food, update the directions
			const { centerOfMonster: { x: monsterX, y: monsterY } } = this.monsters.getMonsterContour(monster.position.x, monster.position.y, monster.size)
			if(monster.state == 'HUNGRY'){
				const { x: targetX, y: targetY } = monster.target || {}
				if(monster.target && this.food.coordinates[targetX][targetY]){
					//check if the food is in the reach and consume it
				}else{
					this.food.forEveryFood(foodCoordinate => {
						const { x: foodX, y: foodY } = foodCoordinate
						const foodMonsterDistance = Math.sqrt(Math.pow((foodX - monsterX), 2) + Math.pow((foodY - monsterY), 2))
						if(foodMonsterDistance < monster.senses && (!monster.target || monster.target.distance > foodMonsterDistance)){
							monster.target = { x: foodX, y: foodY, distance: foodMonsterDistance }
							monster.direction = Math.trunc(Math.acos((monsterX - foodX) / foodMonsterDistance))
						}else{

						}
					})
				}
			}
		})
	}
}