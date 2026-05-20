import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange, Keys, Label, FontUnit, Font, Color, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Level1 } from './Level1.js'


export class StartScreen extends Scene {
    onInitialize(engine) {
        const startLabel = new Label()
        startLabel.text = "druk op spatie om het spel te starten"
        startLabel.font = new Font({
            family: 'Arial',
            size: 30,
            unit: FontUnit.Px, 
            color: Color.Black
        })
        startLabel.pos = new Vector(100, 100);
        this.add(startLabel)

    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Keys.Space)) {
            this.startGame(engine)
        }
    }

    startGame(engine) {
        console.log("klik")
        engine.add('level1', new Level1())
        engine.goToScene('level1')
    }
}