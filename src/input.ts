import Player from "./assets/prefabs/Player"

export default class InputHandler {
  constructor(player: Player) {
    document.addEventListener("keydown", event => {
      switch (event.key) {
        case "ArrowUp":
          player.moveUp()
          break

        case "ArrowDown":
          player.moveDown()
          break

        case "ArrowLeft":
          player.moveLeft()
          break

        case "ArrowRight":
          player.moveRight()
          break

        default:
          break
      }
    })

    document.addEventListener("keyup", event => {
      switch (event.key) {
        case "ArrowUp":
          if (player.getDY < 0) player.stop()
          break

        case "ArrowDown":
          if (player.getDY > 0) player.stop()
          break

        case "ArrowLeft":
          if (player.getDX < 0) player.stop()
          break

        case "ArrowRight":
          if (player.getDX > 0) player.stop()
          break

        default:
          break
      }
    })
  }
}
