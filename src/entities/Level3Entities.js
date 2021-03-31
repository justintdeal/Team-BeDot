import Matter from "matter-js";
import Player from "../components/renderers/Player";
import Wall from "../components/Wall";
import Constants from "../Constants";
import Circle from "../components/Circle";
import Npc from "../components/renderers/Npc";

const Entities = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0;

  let player = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 2,
    Constants.MAX_HEIGHT / 6,
    45,
    45
  );

  let npc = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 10,
    Constants.MAX_HEIGHT / 6,
    45,
    45,
    { isStatic: true }
  );

  let pool = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 3,
    Constants.MAX_HEIGHT * 0.66,
    500,
    200,
    { isStatic: true }
  );

  let car = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * 0.85,
    Constants.MAX_HEIGHT * 0.46,
    90,
    150,
    { isStatic: true }
  );
  
  let dog = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * 0.75,
    Constants.MAX_HEIGHT * 0.86,
    30,
    30,
    { isStatic: true }
  );

  Matter.World.add(world, [
    player,
    npc,
    pool,
    car,
    dog,
  ]);

  return {
    physics: { engine: engine, world: world },
    player: { body: player, size: [45, 45], backgroundColor:"#DBD7D2", renderer: Player },
    npc: { body: npc, size: [45, 45], backgroundColor: "#DBD7D2", renderer: Npc },
    pool: {
      body: pool,
      size: [500, 200],
      color: "black",
      renderer: Wall,
    },
    car: {
      body: car,
      size: [90, 150],
      color: "black",
      renderer: Wall,
    },
    dog: {
      body: dog,
      size: [30, 30],
      color: "black",
      renderer: Wall,
    },
    
  };
};
export default Entities;