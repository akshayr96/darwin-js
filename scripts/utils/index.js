export const initializeCanvas = (width, height, canvas) => {
	const ctx = canvas.getContext('2d')
	canvas.width = width
	canvas.height = height
	return ctx
}

export const wipeFrameClean = (ctx, width, height) => {
	ctx.clearRect(0, 0, width, height)
	ctx.fillStyle = "#00A503";
	ctx.fillRect(0, 0, width, height);
}

export const getRandomArbitrary = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + min);
}
