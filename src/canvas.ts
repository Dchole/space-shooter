import InputHandler from "./input"
import Player from "./assets/prefabs/Player"
import Enemy from "./assets/prefabs/Enemy"
import sprite1 from "./assets/images/sprite1.png"
import sprite2 from "./assets/images/sprite2.png"
import { getRandom } from "./utils/random"

const canvas = document.querySelector("canvas")!
const ctx = canvas.getContext("2d")!

canvas.width = innerWidth
canvas.height = innerHeight

const player = new Player()
const enemies: Enemy[] = []

setInterval(() => {
  enemies.push(new Enemy())
}, getRandom(700, 1500))

new InputHandler(player)

let lastTime = 0

const enemySprites = [sprite1, sprite2]

function gameLoop(timestamp: number = 0) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const deltaTime = timestamp - lastTime
  lastTime = timestamp

  enemies.forEach((enemy, index) => {
    enemy.update(ctx, deltaTime)
    enemy.getPosition.y > canvas.height && enemies.splice(index, 1)
  })

  player.update(deltaTime)
  player.draw(ctx)

  requestAnimationFrame(gameLoop)
}

gameLoop()
