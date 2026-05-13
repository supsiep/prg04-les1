import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Shark extends Actor {

    onInitialize(engine) {
        this.graphics.use(Resources.Shark.toSprite())
        this.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
        this.vel = new Vector(100, 0)
        this.events.on("exitviewport", (e) => this.fishLeft(e))
    }

    fishLeft(e) {
        if (this.vel.x > 0) {
            e.target.vel = new Vector(-100, 0)
            this.graphics.flipHorizontal = true
        } else if (this.vel.x < 0) {
            e.target.vel = new Vector(100, 0)
            this.graphics.flipHorizontal = false
        }
    }
}