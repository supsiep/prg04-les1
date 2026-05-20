import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange, BoundingBox } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Background } from './background.js'
import { Shark } from './shark.js'
import { Bubble } from './bubble.js'
import { Score } from './score.js'
import { StartScreen } from './startscreen.js'


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
        this.add('startScreen', new StartScreen())
        this.goToScene('startScreen')
    }

    // fishLeft(e) {
    //     e.target.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))
    // }
}

new Game()
