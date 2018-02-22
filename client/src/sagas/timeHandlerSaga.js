import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { addOvertimeHours } from '../actions';

export function* getWorkTimes() {
  yield delay(800);
  yield put( addOvertimeHours(14) );
}

export function* watchGetWorkTimes() {
  yield takeEvery('FETCH_WORK_TIMES', getWorkTimes);
}

export default watchGetWorkTimes;
