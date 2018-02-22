import { all } from 'redux-saga/effects';

import watchGetWorkTimes from './timeHandlerSaga';

export default function* rootSaga() {
  yield all([
    watchGetWorkTimes()
  ])
}

