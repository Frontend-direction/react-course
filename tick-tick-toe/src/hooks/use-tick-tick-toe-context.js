import { useContext } from "react";
import TickTickToeContext from "../context/tick-tick-toe-context";

function useTickTickToeContext() {
  return useContext(TickTickToeContext);
}


export default useTickTickToeContext;