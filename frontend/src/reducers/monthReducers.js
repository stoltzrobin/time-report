import { combineReducer } from "./combineReducer";

export const ADD_TIME = "ADD_TIME";
export const CHANGE_TIME = "CHANGE_TIME";
export const ADD_START_TIME = "ADD_START_TIME";
export const ADD_LUNCH_TIME = "ADD_LUNCH_TIME";
export const ADD_END_TIME = "ADD_END_TIME";

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
      const date = state.find(x => x.date.isSame(action.payload.date));
      // const newData = state.map(day => {
      //   if (day.date.isSame(action.payload.date)) return
      // })
      if (date) {
        console.log("SAME DATE!", date);
        console.log("Action !", action);
        // return [...state, { test: "hej" }];
      }
      return [...state, action.payload];
    default:
      return state;
  }
};

const startTimes = (state = [], action) => {
  switch (action.type) {
    case ADD_START_TIME:
      return [
        ...state.filter(x => !x.date.isSame(action.payload.date)),
        action.payload
      ];
    default:
      return state;
  }
};
const lunchTimes = (state = [], action) => {
  switch (action.type) {
    case ADD_LUNCH_TIME:
      return [
        ...state.filter(x => !x.date.isSame(action.payload.date)),
        action.payload
      ];
    default:
      return state;
  }
};
const endTimes = (state = [], action) => {
  switch (action.type) {
    case ADD_END_TIME:
      return [
        ...state.filter(x => !x.date.isSame(action.payload.date)),
        action.payload
      ];
    default:
      return state;
  }
};

export const monthCombinedReducer = combineReducer({
  addTime,
  changeTime,
  startTimes,
  lunchTimes,
  endTimes
});
