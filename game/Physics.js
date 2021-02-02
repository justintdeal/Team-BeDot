import Matter from "matter-js";
import coffee from "./components/Coffee";

const Physics = (entities, { touches, time }) => {
  let engine = entities.physics.engine;
  let world = entities.physics.world;
  let baby = entities.baby.body;

  let move = touches.find((x) => x.type === "move");
  if (move) {
    let pos = {
      x: baby.position.x + move.delta.pageX,
      y: baby.position.y + move.delta.pageY,
    };
    Matter.Body.setPosition(baby, pos);
  }
  if (Matter.SAT.collides(baby, entities.coffee.body).collided) {
    entities.coffee.renderer = null;
    entities.health.value = 2;
  }
  Matter.Engine.update(engine, time.delta);

  return entities;
};
export default Physics;
