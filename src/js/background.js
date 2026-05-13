import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {

    onInitialize(engine) {
        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(640, 360)
        this.z = -1
    }
}