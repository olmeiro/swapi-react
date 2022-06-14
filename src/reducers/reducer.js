import { actions } from "../actions/actions";

export const reducer = (state, action) => {

  // console.log("state:", state);
  // console.log("actionType:", action.type);
  // console.log("actionReducer:", action.payload);

  switch (action.type) {
    case actions.ADD_PEOPLE:
      return {
        ...state,
        people: [action.payload]
      }
    case actions.ADD_PLANETS:
      return {
        ...state,
        planets: [action.payload]
      }
    case actions.ADD_SPECIES:
      return {
        ...state,
        species: [action.payload]
      }
    case actions.ADD_FILMS:
      return {
        ...state,
        films: [action.payload]
      }
    case actions.ADD_VEHICLES:
      return {
        ...state,
        vehicles: [action.payload]
      }
    case actions.ADD_STARSHIPS:
      return {
        ...state,
        starships: [action.payload]
      }
    default:
      return state;
  }

}