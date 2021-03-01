import Matter from "matter-js";
// import Baby from "../components/Baby";
import Wall from "./components/Wall";
import Constants from "./Constants";
import Circle from "./components/Circle"
import Player from "./components/Player";
import Npc from "./components/Npc";

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
    Constants.MAX_WIDTH * .5,
    Constants.MAX_HEIGHT * .66,
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
    {isStatic: true}
  );

  let chairTwo = Matter.Bodies.circle(
    (x = Constants.MAX_WIDTH * 0.04),
    (y = Constants.MAX_HEIGHT / 3.3),
    (radius = 20),
    {isStatic: true}
  );
  let knife = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH / 2.5,
    Constants.MAX_HEIGHT / 6,
    45,
    45,
    { isStatic: true }
  );
  let island = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * .65,
    Constants.MAX_HEIGHT * .66,
    150,
    90,
    { isStatic: true }
  );
  let topCabinet = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * .9,
    Constants.MAX_HEIGHT * .15,
    650,
    52,
    { isStatic: true }
  );
  let rightCabinet = Matter.Bodies.rectangle(
    Constants.MAX_WIDTH * .84,
    Constants.MAX_HEIGHT * .25,
    52,
    300,
    { isStatic: true }
  );

  // let plant = Matter.Bodies.rectangle(
  //   Constants.MAX_WIDTH * .6,
  //   Constants.MAX_HEIGHT / 5,
  //   45,
  //   45, 
  //   {isStatic: true}
  // );
  // let stairs = Matter.Bodies.rectangle(
  //   Constants.MAX_WIDTH * .5,
  //   Constants.MAX_HEIGHT / 8,
  //   55,
  //   75, 
  //   {isStatic: true}
  // );
  // let stove = Matter.Bodies.rectangle(
  //   Constants.MAX_WIDTH * .3,
  //   Constants.MAX_HEIGHT * .95,
  //   75,
  //   50,
  //   {isStatic: true}
  // );
  // let desk = Matter.Bodies.rectangle(
  //   Constants.MAX_WIDTH * .5,
  //   Constants.MAX_HEIGHT * .95,
  //   75,
  //   80,
  //   {isStatic: true}
  // );
  // let chair = Matter.Bodies.rectangle(
  //   (x = Constants.MAX_WIDTH * .85),
  //   (y = Constants.MAX_HEIGHT / 2),
  //   (width = 30),
  //   (height = 30),
  //   {isStatic: true}
  // );

  // let cir_table = Matter.Bodies.circle(
  //   (x = Constants.MAX_WIDTH * .8),
  //   (y = Constants.MAX_HEIGHT * .3),
  //   (radius = 40),
  //   {isStatic: true}
  // );

  // let bookshelf = Matter.Bodies.rectangle(
  //   (x = Constants.MAX_WIDTH * .92),
  //   (y = Constants.MAX_HEIGHT *.35),
  //   (width = 30),
  //   (height = 60),
  //   {isStatic: true}
  // );
  
  // let lamp = Matter.Bodies.rectangle(
  //   (x = Constants.MAX_WIDTH * .92),
  //   (y = Constants.MAX_HEIGHT *.2),
  //   (width = 20),
  //   (height = 20),
  //   {isStatic: true}
  // );
  // let sideTable = Matter.Bodies.rectangle(
  //   Constants.MAX_WIDTH / 15,
  //   Constants.MAX_HEIGHT / 7,
  //   20,
  //   20,
  //   { isStatic: true }
  // );

  // let couch = Matter.Bodies.rectangle(
  //   Constants.MAX_WIDTH / 8,
  //   Constants.MAX_HEIGHT / 7,
  //   65,
  //   20,
  //   { isStatic: true }
  // );

  // let coffeeTable = Matter.Bodies.rectangle(
  //   Constants.MAX_WIDTH / 8,
  //   Constants.MAX_HEIGHT / 4,
  //   45,
  //   25,
  //   { isStatic: true }
  // );

  // let tv = Matter.Bodies.rectangle(
  //   Constants.MAX_WIDTH / 8,
  //   Constants.MAX_HEIGHT / 3,
  //   20,
  //   20,
  //   { isStatic: true }
  // );
  //let knife = Matter.Bodies.rectangle(250, 250 / 2, 50, 50);
  //let pacifier = Matter.Bodies.rectangle(230, 230 / 2, 50, 50);
  // let coffee = Matter.Bodies.rectangle(290, 200, 50, 50);
  //let coffee2 = Matter.Bodies.rectangle(150, 300, 50, 50);

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
  // let wall1 = Matter.Bodies.rectangle(240, 200, 10, Constants.MAX_HEIGHT + 50, {
  //   isStatic: true,
  // });

  Matter.World.add(world, [
    player,
    top_wall,
    // coffee,
    npc,
    // plant,
    // stairs,
    // stove,
    // desk,
    // chair,
    // cir_table,
    // bookshelf,
    // lamp,
    // sideTable,
    // coffeeTable,
    // tv,
    // couch,
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
    baby: { body: player, size: [45, 45], renderer: Player },
    npc: { body: npc, size: [45, 45], renderer: Npc },
    // plant: {
    //   body: plant,
    //   size: [45, 45],
    //   color: "green",
    //   renderer: Wall,
    // },
    // stairs: {
    //   body: stairs,
    //   size: [55, 75],
    //   color: "brown",
    //   renderer: Wall,
    // },
    // stove: {
    //   body: stove,
    //   size: [75, 50],
    //   color: "red",
    //   renderer: Wall,
    // },
    // desk: {
    //   body: desk,
    //   size: [75, 80],
    //   color: "grey",
    //   renderer: Wall,
    // },
    // chair: {
    //   body: chair,
    //   size: [30, 30],
    //   color: "black",
    //   renderer: Wall,
    // },
    // cir_table: {
    //   body: cir_table,
    //   color: "black",
    //   radius: 38,
    //   renderer: Circle,
    // },
    // bookshelf: {
    //   body: bookshelf,
    //   color: "black", 
    //   size: [30, 60],
    //   renderer: Wall,
    // },
    // lamp: {
    //   body: lamp, 
    //   color: "black",
    //   size: [20, 20], 
    //   renderer: Wall,
    // },
    // sideTable: {
    //   body: sideTable,
    //   size: [20, 20],
    //   color: "purple",
    //   renderer: Wall,
    // },

    // coffeeTable: {
    //   body: coffeeTable,
    //   size: [45, 25],
    //   color: "blue",
    //   renderer: Wall,
    // },

    // couch: {
    //   body: couch,
    //   size: [65, 20],
    //   color: "green",
    //   renderer: Wall,
    // },

    // tv: {
    //   body: tv,
    //   size: [20, 20],
    //   color: "red",
    //   renderer: Wall,
    // },
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
    topCabinet : {
      body: topCabinet,
      size: [650, 52],
      color: "black",
      renderer: Wall,
    },
    rightCabinet : {
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

    // coffee: { body: coffee, size: [50, 50], renderer: Coffee },

    // health: { value: 3, renderer: Health },
  };
};
export default Entities;
