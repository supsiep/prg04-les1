import { Actor, Engine, Vector, DisplayMode, Resource, randomInRange, Keys, Label, FontUnit, Font, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Score extends Label {

    score = 0;

    onInitialize(engine) {
        this.text = "Score: 0"
        this.font = new Font({
            family: 'Arial',
            size: 24,
            unit: FontUnit.Px, 
            color: Color.Black
        })
        this.pos = new Vector(100, 100);
    }

    addPoint() {
        this.score ++
        this.text = `Score: ${this.score}`
    }

    removePoint() {
        this.score --
        this.text = `Score: ${this.score}`
    }
}