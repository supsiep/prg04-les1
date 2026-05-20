import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Mine } from "./mine.js"

export class Fish extends Actor {
    hasMine = false;

    constructor () {
        super({width:Resources.Fish.width, height:Resources.Fish.height})
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
        this.vel = new Vector(randomInRange(-100, 100), randomInRange(-100, 100))
        if(this.vel.x > 0) {
            this.graphics.flipHorizontal = true
        }
        this.events.on("exitviewport", (e) => this.fishLeft(e))

        

        if (Math.random() < 0.1) {
            const mine = new Mine
            mine.anchor = new Vector(0.5, 0)
            mine.scale = new Vector(0.5, 0.5)

            this.addChild(mine)

            this.hasMine = true
        }
    }

    fishLeft(e) {
        this.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
    }
}