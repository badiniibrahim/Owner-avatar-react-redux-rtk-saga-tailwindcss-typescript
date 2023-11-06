import { all, fork } from "redux-saga/effects";
import postsWatcherSaga from "./posts.saga";

export function* rootSaga() {
  yield all([fork(postsWatcherSaga)]);
}

export default rootSaga;
