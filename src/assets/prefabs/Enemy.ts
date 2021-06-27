import { getRandom } from "../../utils/random"
import sprite1 from "../images/sprite1.png"
import sprite2 from "../images/sprite2.png"

interface IPosition {
  x: number
  y: number
}

export default class Enemy {
  static wave = 1

  private currentSprite
  private dx
  private dy
  private position: IPosition

  constructor() {
    this.currentSprite = 0
    this.dx = getRandom(-2, 2)
    this.dy = getRandom(1, 3)

    this.position = {
      x: getRandom(0, innerWidth),
      y: -100
    }

    setInterval(() => {
      this.currentSprite = ++this.currentSprite % 2 // Find the modulo of the next sprite index
    }, 300)
  }

  get getPosition() {
    return this.position
  }

  get getDX() {
    return this.dx
  }

  get getDY() {
    return this.dy
  }

  set setSprite(nextSprite: typeof sprite1) {
    this.currentSprite = nextSprite
  }

  draw(ctx: CanvasRenderingContext2D) {
    const sprites = [sprite1, sprite2]

    const image = new Image()
    image.src = sprites[this.currentSprite]

    ctx.drawImage(image, this.position.x, this.position.y)
  }

  update(ctx: CanvasRenderingContext2D, deltaTime?: number) {
    if (!deltaTime) return

    this.position.x += this.dx
    this.position.y += this.dy

    this.draw(ctx)
  }

  stop() {
    this.dx = 0
    this.dy = 0
  }
}
