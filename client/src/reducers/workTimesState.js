import {
  FETCH_WORK_TIMES,
  ADD_OVERTIME_HOURS,
} from '../actions/timeHandlerAction';

const initialState = {
  workTimes: [],
  totalWorkTime: 0,
  overtimeHours: undefined,
};

export default function workTimesState(state = initialState, { payload, type }) {
  switch (type) {
    case FETCH_WORK_TIMES:
      return {
        ...state,
      };
    case ADD_OVERTIME_HOURS:
      return {
        ...state,
        overtimeHours: payload.overtimeHours,
      }
    default:
      return state;
  }
}