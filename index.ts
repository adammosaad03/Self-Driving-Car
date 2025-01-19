import { getObstacleEvents } from './computer-vision';

interface AutonomousCar{
    isRunning?: boolean
    respond: (events: Events) => void
}
interface AutonomousCarProps{
  isRunning?: boolean
  steeringControl: Steering
}

interface Events{
  [events: string]: boolean
}

interface Control{
  execute: (command: string) => void
}

interface Steering extends Control{
  turn: (direction: string) => void
}

class Car implements AutonomousCar{
isRunning;
steeringControl;
  constructor(props: AutonomousCarProps)  {
    this.isRunning = props.isRunning
      this.steeringControl = props.steeringControl

            }
respond(events:Events){
  if(this.isRunning === false){
    console.log('You\'r car is off!')
    }

  Object.keys(events).forEach((eventKey => {
    if(events[eventKey] === false){
      return;
    }
    if(eventKey === 'ObstacleLeft'){
      this.steeringControl.turn('right')
    }
    if(eventKey === 'ObstacleRight'){
      return this.steeringControl.turn('left')
    }
  }));

}
}


class SteeringControl implements Steering{

  execute(command: string){
    console.log(`Executing: ${command}`)
  }

  turn(direction: string){
    this.execute(`turn ${direction}`)
  }
}
const steering = new SteeringControl()
console.log(steering.execute('faster'))
 const autonomousCar = new Car({isRunning: true, steeringControl: steering})
console.log(autonomousCar.respond(getObstacleEvents()))
