import Matter from "matter-js";
import Baby from "./components/Baby";
import Wall from "./components/Wall";
import Constants from "./Constants";
import Circle from "./components/Circle"

const Entities = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0;

  let baby = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 8,
    Constants.MAX_HEIGHT / 2,
    45,
    45
  );

  let npc = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 3,
    Constants.MAX_HEIGHT / 6,
    45,
    45,
    { isStatic: true }
  );

  let top_wall = Matter.Bodies.rectangle(
    (x = 0),
    (y = 0),
    (width = Constants.MAX_WIDTH * 2),
    (height = Constants.MAX_HEIGHT / 6),
    { isStatic: true }
  );
  let left_wall = Matter.Bodies.rectangle(
    (x = 0),
    (y = 0),
    (width = 10),
    (height = Constants.MAX_HEIGHT * 2),
    { isStatic: true }
  );
  let right_wall = Matter.Bodies.rectangle(
    (x = Constants.MAX_WIDTH),
    (y = 0),
    (width = 10),
    (height = Constants.MAX_HEIGHT * 2),
    { isStatic: true }
  );
  let bottom_wall = Matter.Bodies.rectangle(
    (x = Constants.MAX_WIDTH / 2),
    (y = Constants.MAX_HEIGHT),
    (width = Constants.MAX_WIDTH),
    (height = 10),
    { isStatic: true }
  );

  Matter.World.add(world, [
    baby,
    npc,
    top_wall,
    left_wall,
    right_wall,
    bottom_wall
  ]);

  return {
    physics: { engine: engine, world: world },
    baby: { body: baby, size: [45, 45], renderer: Baby },
    npc: { body: npc, size: [45, 45], renderer: Baby },
    top_wall: {
        body: top_wall,
        size: [Constants.MAX_WIDTH * 2, Constants.MAX_HEIGHT / 6],
        color: "black",
        renderer: Wall,
      },
      left_wall: {
        body: left_wall,
        size: [10, Constants.MAX_HEIGHT * 2],
        color: "black",
        renderer: Wall,
      },
      right_wall: {
        body: right_wall,
        size: [10, Constants.MAX_HEIGHT * 2],
        color: "black",
        renderer: Wall,
      },
      bottom_wall: {
        body: bottom_wall,
        size: [Constants.MAX_WIDTH, 10],
        color: "black",
        renderer: Wall,
      }
  };
};
export default Entities;