import {
  FETCH_WORK_TIMES,
  ADD_OVERTIME_HOURS,
  ADD_MONTH_REPORT,
  CHANGE_WORKTIME,
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
    case ADD_MONTH_REPORT:
      return {
        ...state,
        workTimes: payload.monthReport.workTimes,
        overtimeHours: payload.monthReport.overtime,
      }
    case CHANGE_WORKTIME: {
      let newWorkTimes = [...state.workTimes];
      if (newWorkTimes[payload.oldDay.key]) {
        if (payload.timeChanged.start) {
          newWorkTimes[payload.oldDay.key].start = payload.time;
        } else if (payload.timeChanged.lunch) {
          newWorkTimes[payload.oldDay.key].lunch = payload.time;
        } else if (payload.timeChanged.end) {
          newWorkTimes[payload.oldDay.key].end = payload.time;
        }
      }
      return {
        ...state,
        workTimes: [
          ...state.workTimes,
        ]
      }
    }
    default:
      return state;
  }
}