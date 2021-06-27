interface IPosition {
  x: number
  y: number
}

export default class Player {
  private width
  private height
  private dx
  private dy
  private maxSpeed
  private position: IPosition

  constructor() {
    this.width = 12
    this.height = 15
    this.maxSpeed = 15
    this.dx = 0
    this.dy = 0

    this.position = {
      x: innerWidth / 2 - this.width / 2,
      y: innerHeight - this.height * 3
    }
  }

  get getDX() {
    return this.dx
  }

  get getDY() {
    return this.dy
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.moveTo(this.position.x, this.position.y - this.height)
    ctx.lineTo(this.position.x + this.width, this.position.y + this.height)
    ctx.lineTo(this.position.x - this.width, this.position.y + this.height)
    ctx.lineTo(this.position.x, this.position.y - this.height)
    ctx.stroke()
    ctx.closePath()
  }

  update(deltaTime?: number) {
    if (!deltaTime) return

    this.position.x += this.dx
    this.position.y += this.dy

    const xGap = this.width + 5
    const yGap = this.height * 3

    if (this.position.x < xGap) this.position.x = xGap
    if (this.position.x + xGap > innerWidth) this.position.x = innerWidth - xGap

    if (this.position.y < yGap) this.position.y = yGap
    if (this.position.y + yGap > innerHeight)
      this.position.y = innerHeight - yGap
  }

  moveUp() {
    this.dy = -this.maxSpeed
  }

  moveDown() {
    this.dy = this.maxSpeed
  }

  moveLeft() {
    this.dx = -this.maxSpeed
  }

  moveRight() {
    this.dx = this.maxSpeed
  }

  stop() {
    this.dx = 0
    this.dy = 0
  }
}
