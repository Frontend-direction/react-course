import { useContext } from "react";
import GameContext from "../context/game-context";

function useGameContext() {
  return useContext(GameContext);
}


export default useGameContext;