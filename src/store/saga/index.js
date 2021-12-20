import { all } from "@redux-saga/core/effects";
import watchPersonal from "./personal"
import watchPostData from "./postData"

export default function* rootSaga() {
    yield all([watchPersonal(), watchPostData()]);
  }
  