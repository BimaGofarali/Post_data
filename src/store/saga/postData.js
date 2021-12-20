import axios from "axios";
import {
  POST_DATA_BEGIN,
  POST_DATA_SUCCESS,
  POST_DATA_FAIL,
  SERVER,
} from "../action/type";
import { takeEvery, put } from "redux-saga/effects";

function* postData(actions) {
  const { firstname, lastname, alamat, pendidikan, pengalamankerja, keahlian } =
    actions;
  try {
    const res = yield axios
      .post(`${SERVER}`, {
        firstname, lastname, alamat, pendidikan, pengalamankerja, keahlian
      })
    yield put({
      type: POST_DATA_SUCCESS,
      payload: res.data,
      loading: false,
      error: null,
    });
  } catch (err) {
    yield put({
      type: POST_DATA_FAIL,
      error: err,
    });
  }
}


export function* watchPostData() {
    yield takeEvery(POST_DATA_BEGIN, postData);
  }