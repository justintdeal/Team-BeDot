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
    Constants.MAX_WIDTH / 12,
    Constants.MAX_HEIGHT / 2,
    45,
    45
  );

  let npc = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * (5 / 7),
    Constants.MAX_HEIGHT / 7,
    45,
    45,
    { isStatic: true }
  );

  let pool = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 3,
    Constants.MAX_HEIGHT / 2.5,
    400,
    200,
    { isStatic: true }
  );
  let dog = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * (2 / 3),
    Constants.MAX_HEIGHT * (3 / 4),
    45,
    45,
    { isStatic: true }
  );
  let tree = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * (4 / 5),
    Constants.MAX_HEIGHT * (1 / 6),
    45,
    45,
    { isStatic: true }
  );
  let car = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * (5 / 7),
    Constants.MAX_HEIGHT * (1 / 2),
    75,
    100,
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
    player,
    npc,
    pool,
    dog,
    tree,
    car,
    top_wall,
    left_wall,
    right_wall,
    bottom_wall,
  ]);

  return {
    physics: { engine: engine, world: world },
    player: { body: player, size: [45, 45], backgroundColor:"#88ccff", renderer: Player },
    npc: { body: npc, size: [45, 45], backgroundColor: "#88ccff", renderer: Npc },

    pool: {
        body: pool,
        size: [400, 200],
        color: "black",
        renderer: Wall,
    },
    dog: {
        body: dog,
        size: [45, 45],
        color: "black",
        renderer: Wall,
    },
    tree: {
        body: tree,
        size: [45, 45],
        color: "black",
        renderer: Wall,
    },

    car: {
        body: car,
        size: [75, 100],
        color: "black",
        renderer: Wall,
    },
    
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
    },
  };
};
export default Entities;
