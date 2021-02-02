import Matter from 'matter-js';
import Baby from '../components/Baby'
import Wall from '../components/Wall'
import Constants from '../Constants'
import Coffee from '../components/Coffee'
import Health from '../components/Health';

const Entities = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    world.gravity.y = 0

    let baby =    Matter.Bodies.rectangle( 50, 50 / 2, 45, 45);
    let coffee = Matter.Bodies.rectangle(290, 200, 50, 50)
    let top =   Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2,  Constants.MAX_HEIGHT/35, Constants.MAX_WIDTH, 50, {isStatic:true});
    let health =   Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2,  Constants.MAX_HEIGHT/35, Constants.MAX_WIDTH, 50, {isStatic:true});

    let wall1 = Matter.Bodies.rectangle(240, 200, 10, Constants.MAX_HEIGHT+50, {isStatic:true})
   
   
    Matter.World.add(world, [baby, top, coffee, health, wall1]);

    return {
        physics: { engine: engine, world: world },
        baby: { body: baby, size: [45, 45], renderer: Baby},
        top: { body: top, size: [Constants.MAX_WIDTH, 50], color: "black", renderer: Wall },
        coffee: {body: coffee, size: [50, 50], renderer: Coffee},
        wall1:{body:wall1, size: [10, Constants.MAX_HEIGHT+50], color:"black", renderer: Wall},
        health: {body: health, value: 3, renderer: Health},
    }
  }
export default Entities;