import config from "./statics/config"

let canvas = document.getElementById('game')
let ctx = canvas.getContext('2d')
canvas.width = config.game.width
canvas.height = config.game.height

console.log(canvas.width, canvas.height)

ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);