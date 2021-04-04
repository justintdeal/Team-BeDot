import Matter from "matter-js";

const Level3Dispatches = (entities, { dispatch }) => {
  let player = entities.player.body;
  if (Matter.SAT.collides(player, entities.dog.body).collided) {
    dispatch({ type: "pet" });
  }
  return entities;
};
export default Level3Dispatches;
