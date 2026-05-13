import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Fish extends Actor {

    onInitialize(engine) {
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
        this.vel = new Vector(randomInRange(-100, 100), randomInRange(-100, 100))
        if(this.vel.x > 0) {
            this.graphics.flipHorizontal = true
        }
        this.events.on("exitviewport", (e) => this.fishLeft(e))
    }

    fishLeft(e) {
        this.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
    }
}