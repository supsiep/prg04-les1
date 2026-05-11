import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(500, 300)
        fish.vel = new Vector(-10,0)
        fish.acc = new Vector(-10, 0)
        fish.events.on("exitviewport", (e) => this.fishLeft(e))
        this.add(fish)

        const background = new Actor()
        background.graphics.use(Resources.Background.toSprite())
        background.pos = new Vector(640, 360)
        background.z = -1
        this.add(background)

        
        for (let i = 0; i < 100; i++) {
            const shark = new Actor()
            shark.graphics.use(Resources.Shark.toSprite())
            shark.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
            shark.vel = new Vector(randomInRange(-100, 100), randomInRange(-100, 100))
            shark.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(shark)
        }

    }

    fishLeft(e) {
        e.target.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
    }
}

new Game()
