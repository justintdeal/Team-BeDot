import Matter from "matter-js";
import coffee from "./components/Coffee";
import Constants from "./Constants";

const Physics = (entities, { touches, time, dispatch, events }) => {
  let engine = entities.physics.engine;
  let world = entities.physics.world;
  let player = entities.player.body;

  let move = touches.find((x) => x.type === "move");
  if (move) {
    let pos = {
      x: player.position.x + move.delta.pageX,
      y: player.position.y + move.delta.pageY,
    };
    Matter.Body.setPosition(player, pos);
  }

  if (Matter.SAT.collides(player, entities.sideTable.body).collided) {
    dispatch({ type: "note-one-found"});         
  }
  else if (Matter.SAT.collides(player, entities.lamp.body).collided){
    dispatch({type: "note-two-found"})
  }
  else if (Matter.SAT.collides(player, entities.stairs.body).collided){
    dispatch({type: "at-objective"})
  }
  else if (Matter.SAT.collides(player, entities.npc.body).collided){
    dispatch({type: "npc-interact"})
  }
  else {
    dispatch({type: "none"})
  }
  Matter.Engine.update(engine, time.delta);
  //console.log(Constants.MAX_HEIGHT);
  //console.log(Constants.MAX_WIDTH);
  return entities;
};
export default Physics;