import { call, put, takeEvery } from 'redux-saga/effects';

import { addMonthReport } from '../actions';

import { fetchMonthReport } from '../api/index';

export function* getWorkTimes() {
  const monthReport = yield call( fetchMonthReport, 2018, 3 );
  yield put( addMonthReport(monthReport) );
}

export function* watchGetWorkTimes() {
  yield takeEvery('FETCH_WORK_TIMES', getWorkTimes);
}

export default watchGetWorkTimes;
