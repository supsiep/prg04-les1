
import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange, BoundingBox, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Background } from './background.js'
import { Shark } from './shark.js'
import { Bubble } from './bubble.js'
import { Score } from './score.js'

export class Level1 extends Scene {
    
    onInitialize(engine) {
        //make fishes
        for (let i = 0; i < 100; i++) {
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

        engine.currentScene.camera.strategy.lockToActor(shark)
        engine.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 2000))
    }

}