"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (this.isRunning === false) {
            console.log('You\'r car is off!');
        }
        Object.keys(events).forEach((eventKey => {
            if (events[eventKey] === false) {
                return;
            }
            if (eventKey === 'ObstacleLeft') {
                this.steeringControl.turn('right');
            }
            if (eventKey === 'ObstacleRight') {
                return this.steeringControl.turn('left');
            }
        }));
    }
}
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
const steering = new SteeringControl();
console.log(steering.execute('faster'));
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
console.log(autonomousCar.respond((0, computer_vision_1.getObstacleEvents)()));
