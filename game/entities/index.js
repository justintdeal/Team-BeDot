import Matter from "matter-js";
import Baby from "../components/Baby";
import Wall from "../components/Wall";
import Constants from "../Constants";
import Coffee from "../components/Coffee";
import Health from "../components/Health";

const Entities = () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0;

  let baby = Matter.Bodies.rectangle(50, 50 / 2, 45, 45);
  let coffee = Matter.Bodies.rectangle(290, 200, 50, 50);
  let coffee2 = Matter.Bodies.rectangle(150, 300, 50, 50);
  
  let top_wall = Matter.Bodies.rectangle(
    x = Constants.MAX_WIDTH / 2,
    y = Constants.MAX_HEIGHT / 35,
    width = Constants.MAX_WIDTH,
    height = 50,
    { isStatic: true }
  );
  let left_wall = Matter.Bodies.rectangle(
    x = 0,
    y = 0,
    width = 10,
    height = Constants.MAX_HEIGHT * 2,
    { isStatic: true }
  );
  let right_wall = Matter.Bodies.rectangle(
    x = Constants.MAX_WIDTH,
    y = 0,
    width = 10,
    height = Constants.MAX_HEIGHT * 2,
    { isStatic: true }
  );
  let bottom_wall = Matter.Bodies.rectangle(
    x = Constants.MAX_WIDTH/2,
    y = Constants.MAX_HEIGHT - 50,
    width = Constants.MAX_WIDTH,
    height = 10,
    { isStatic: true }
  );
  // let wall1 = Matter.Bodies.rectangle(240, 200, 10, Constants.MAX_HEIGHT + 50, {
  //   isStatic: true,
  // });


  Matter.World.add(world, [
    baby,
    top_wall,
    coffee,
    coffee2,
    // wall1,
    left_wall,
    right_wall, 
    bottom_wall
  ]);

  return {
    physics: { engine: engine, world: world },
    baby: { body: baby, size: [45, 45], renderer: Baby },
    top_wall: {
      body: top_wall,
      size: [Constants.MAX_WIDTH, 50],
      color: "black",
      renderer: Wall,
    },
    left_wall: {
      body: left_wall,
      size: [10, Constants.MAX_HEIGHT*2],
      color: "black",
      renderer: Wall,
    },
      right_wall: {
      body: right_wall,
      size: [10, Constants.MAX_HEIGHT*2],
      color: "black",
      renderer: Wall,
    },
    bottom_wall: {
      body: bottom_wall,
      size: [Constants.MAX_WIDTH, 10],
      color: "black",
      renderer: Wall,
    },


    coffee: { body: coffee, size: [50, 50], renderer: Coffee },
    coffee2: { body: coffee2, size: [50, 50], renderer: Coffee },
    // wall1: {
    //   body: wall1,
    //   size: [10, Constants.MAX_HEIGHT * 2],
    //   color: "black",
    //   renderer: Wall,
    // },

    health: {value: 3, renderer: Health },
  };
};
export default Entities;
