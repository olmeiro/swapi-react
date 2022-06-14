import { useReducer } from "react";
import { reducer } from "../reducers/reducer";

const initialState = {
  people: [],
  planets: [],
  films: [],
  species: [],
  vehicles: [],
  starships: []
}

const useInitialState = () => {
  // const [state, setState] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state, dispatch
  }
}

export default useInitialState;