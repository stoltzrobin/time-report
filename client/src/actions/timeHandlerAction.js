export const FETCH_WORK_TIMES = 'FETCH_WORK_TIMES';
export function fetchWorkTimes() {
  return {
    type: FETCH_WORK_TIMES,
    payload: {},
    meta: {
      thunk: true,
    }
  }
}

export const ADD_OVERTIME_HOURS = 'ADD_OVERTIME_HOURS';
export function addOvertimeHours( hours ) {
  return {
    type: ADD_OVERTIME_HOURS,
    payload: {
      overtimeHours: hours
    },
    meta: {
      thunk: true,
    }
  }
}

export const ADD_MONTH_REPORT = 'ADD_MONTH_REPORT';
export function addMonthReport ( monthReport ) {
  return {
    type: ADD_MONTH_REPORT,
    payload: {
      monthReport,
    },
    meta: {
      thunk: true,
    }
  }
}

export const CHANGE_WORKTIME = 'CHANGE_WORKTIME';
export function changeWorkTime ( oldDay, time, timeChanged ) {
  return {
    type: CHANGE_WORKTIME,
    payload: {
      oldDay,
      time,
      timeChanged,
    },
    meta: {
      thunk: true,
    }
  }
}