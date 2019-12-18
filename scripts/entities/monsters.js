export default class Monsters {
	constructor(){
		this.monsters = [{
			size: 30,
			speed: 1,
			senses: 10,
			color: '#ccc',
			position: {x: 0, y: 0}
		}]
	}

	update(){
		this.monsters.forEach(monster =>{
			monster.position.x = monster.position.x + monster.speed
			monster.position.y = monster.position.y + monster.speed
		})
	}

	draw(ctx){
		this.monsters.forEach(monster => {
			const { x, y } = monster.position
			ctx.fillStyle = monster.color;
			ctx.fillRect(x, y, monster.size, monster.size);
		})
	}
}
