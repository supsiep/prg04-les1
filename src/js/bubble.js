import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Bubble extends Actor {

    onInitialize(engine) {
        this.graphics.use(Resources.Bubble.toSprite())
        this.pos = new Vector(randomInRange(0, 1280), 720)
        this.vel = new Vector(0, -10)
    }

}