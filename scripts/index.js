import config from "./statics/config"
import Entities from "./entities"
import { initializeCanvas, wipeFrameClean } from "./utils"

const { width, height } = config.game

//canvas init
const rootElement = document.getElementById('game')
const ctx = initializeCanvas(width, height, rootElement)

//entities init
const entities = new Entities(config, ctx)

//Main Loop
const gameLoop = () => {
	wipeFrameClean(ctx, width, height)
	entities.renderFrame()
	requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
