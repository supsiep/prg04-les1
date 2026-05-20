import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Mine extends Actor {

    onInitialize(engine) {
        this.graphics.use(Resources.Mine.toSprite())
    }
}