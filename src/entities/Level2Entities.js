import Matter from "matter-js";
import Wall from "../components/Wall";
import Constants from "../Constants";
import Circle from "../components/Circle";
import Player from "../components/renderers/Player";
import Npc from "../components/renderers/Npc";

const Entities = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0;

  let player = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 8,
    Constants.MAX_HEIGHT / 2,
    45,
    45
  );

  let npc = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * 0.5,
    Constants.MAX_HEIGHT * 0.66,
    45,
    45,
    { isStatic: true }
  );

  let diningTable = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 7,
    Constants.MAX_HEIGHT / 3,
    80,
    65,
    { isStatic: true }
  );

  let chairOne = Matter.Bodies.circle(
    (x = Constants.MAX_WIDTH / 4.5),
    (y = Constants.MAX_HEIGHT / 3.3),
    (radius = 20),
    { isStatic: true }
  );

  let chairTwo = Matter.Bodies.circle(
    (x = Constants.MAX_WIDTH * 0.04),
    (y = Constants.MAX_HEIGHT / 3.3),
    (radius = 20),
    { isStatic: true }
  );
  let knife = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 2.5,
    Constants.MAX_HEIGHT / 6,
    45,
    45,
    { isStatic: true }
  );
  let island = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * 0.65,
    Constants.MAX_HEIGHT * 0.66,
    150,
    90,
    { isStatic: true }
  );
  let topCabinet = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * 0.9,
    Constants.MAX_HEIGHT * 0.15,
    650,
    52,
    { isStatic: true }
  );
  let rightCabinet = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * 0.84,
    Constants.MAX_HEIGHT * 0.25,
    52,
    300,
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
    top_wall,
    npc,
    left_wall,
    right_wall,
    bottom_wall,
    diningTable,
    chairOne,
    chairTwo,
    knife,
    island,
    topCabinet,
    rightCabinet,
  ]);

  return {
    physics: { engine: engine, world: world },
    player: { body: player, size: [45, 45], backgroundColor:"#DBD7D2", renderer: Player },
    npc: { body: npc, size: [45, 45], backgroundColor: "#DBD7D2", renderer: Npc },
    
    diningTable: {
      body: diningTable,
      size: [80, 65],
      color: "black",
      renderer: Wall,
    },
    chairOne: {
      body: chairOne,
      color: "black",
      radius: 20,
      renderer: Circle,
    },
    chairTwo: {
      body: chairTwo,
      color: "black",
      radius: 20,
      renderer: Circle,
    },
    knife: {
      body: knife,
      size: [25, 25],
      color: "black",
      renderer: Wall,
    },
    island: {
      body: island,
      size: [150, 90],
      color: "black",
      renderer: Wall,
    },
    topCabinet: {
      body: topCabinet,
      size: [650, 52],
      color: "black",
      renderer: Wall,
    },
    rightCabinet: {
      body: rightCabinet,
      size: [52, 300],
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