/*
* This system is responsible for detecting collisions and interactions in level one
* and informing the rest of the app 
*/

import Matter from "matter-js";

const Level2Dispatches = (entities, { dispatch }) => {
  let player = entities.player.body;
  if (Matter.SAT.collides(player, entities.diningTable.body).collided) {
    dispatch({ type: "note-one-found" });
  } else if (Matter.SAT.collides(player, entities.counter2.body).collided) {
    dispatch({ type: "note-two-found" });
  } else if (Matter.SAT.collides(player, entities.island.body).collided) {
    dispatch({ type: "at-objective" });
  } else if (Matter.SAT.collides(player, entities.npc.body).collided) {
    dispatch({ type: "npc-interact" });
  } else {
    dispatch({ type: "none" });
  }
  return entities;
};
export default Level2Dispatches;