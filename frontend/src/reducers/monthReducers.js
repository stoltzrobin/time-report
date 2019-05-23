import { combineReducer } from "./combineReducer";

export const ADD_TIME = "ADD_TIME";
export const CHANGE_TIME = "CHANGE_TIME";

const changeTime = (state = "", action) => {
  switch (action.type) {
    case CHANGE_TIME:
      return action.editTime;
    default:
      return state;
  }
};

const addTime = (state = [], action) => {
  switch (action.type) {
    case ADD_TIME:
      // console.log("action: ", action.payload);
      // console.log("State: ", state);
      if (state.find(x => x.date.isSame(action.payload.date))) {
        console.log("SAME DATE!");
        // return [...state, { test: "hej" }];
      }
      return [...state, action.payload];
    default:
      return state;
  }
};

export const monthCombinedReducer = combineReducer({ addTime, changeTime });
