import { SETLANG, SETTHEME } from "../actions/types";

// Initial State
const initialState = {
  lang: 'en',
};
  
// Reducer
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETLANG:
      return {
        ...state, lang: action.payload
      }
    default:
      return state;
  }
};

export default globalReducer;