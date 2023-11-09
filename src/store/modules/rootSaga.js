import { all } from 'redux-saga/effects';

import example from './examlpe/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
