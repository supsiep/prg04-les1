import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from "./fish.js"

export class Shark extends Actor {
    scoreLabel;

    constructor (scoreLabel) {
        super({width:Resources.Shark.width, height:Resources.Shark.height})

        this.scoreLabel = scoreLabel
    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Shark.toSprite())
        this.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
        this.events.on("exitviewport", (e) => this.sharkLeft(e))
        this.on('collisionstart', (e) => this.hitSomething(e))
    }

    onPreUpdate (engine) {
        let xSpeed = 0
        let ySpeed = 0

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xSpeed = -500
            this.rotation -= 0.05
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xSpeed = 500
            this.rotation += 0.05
        }
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            ySpeed = -500
            this.rotation += 0.05
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            ySpeed = 500
            this.rotation -= 0.05

        }

        this.vel = new Vector(xSpeed, ySpeed)

    }

    sharkLeft(e) {
        this.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
    }

    hitSomething(e) {
        if (e.other.owner instanceof Fish) {
            e.other.owner.kill()

            if (e.other.owner.hasMine){
                this.scoreLabel.removePoint();
            } else {
                this.scoreLabel.addPoint();
            }
        }
    }
}