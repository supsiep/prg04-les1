import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange, BoundingBox } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Background } from './background.js'
import { Shark } from './shark.js'
import { Bubble } from './bubble.js'
import { Score } from './score.js'


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

        //make fishes
        for (let i = 0; i < 1000; i++) {
            const myFish = new Fish()
            this.add(myFish)
        }

        //make background
        const background = new Background()
        this.add(background)

        //make bubble
        for (let i = 0; i < 10; i++) {
            const bubble = new Bubble()
            this.add(bubble)
        }

        //make score
        const scoreLabel = new Score();
        this.add(scoreLabel)

        //make shark
        const shark = new Shark(scoreLabel)
        this.add(shark)

        this.currentScene.camera.strategy.lockToActor(shark)
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 2000))

        
        
    }

    fishLeft(e) {
        e.target.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
    }
}

new Game()
