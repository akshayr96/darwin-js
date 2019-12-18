export default class Monsters {
	constructor(){
		this.steps = 0
		this.monsters = [{
			size: 30,
			speed: 3,
			senses: 10,
			color: '#ccc',
			position: { x: 200, y: 200 },
			direction: null
		}]
	}

	update(){
		this.monsters.forEach(monster => {
			if(this.steps % 30 == 0 || !monster.direction){
				monster.direction = Math.random() * 2 * Math.PI
			}
			monster.position.x = monster.position.x + (monster.speed * Math.cos(monster.direction))
			monster.position.y = monster.position.y + (monster.speed * Math.sin(monster.direction))
		})
		this.steps++
	}

	draw(ctx){
		this.monsters.forEach(monster => {
			const { x, y } = monster.position
			ctx.fillStyle = monster.color;
			ctx.fillRect(x, y, monster.size, monster.size);
		})
	}
}
