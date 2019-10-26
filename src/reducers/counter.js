import initialState from "./initialState";

import { INCREMENT, DECREMENT } from "../actions/counter";

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
};
