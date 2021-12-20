import axios from "axios";
import {
  GET_PERSONAL_BEGIN,
  GET_PERSONAL_SUCCESS,
  GET_PERSONAL_FAIL,
  SERVER,
} from "../action/type";
import {takeEvery, put} from "redux-saga/effects"

function * getPersonal (error) {
 try {
    const res = yield axios.get(`${SERVER}`);
    yield put ({
    type : GET_PERSONAL_SUCCESS,
    payload : res.data
    });
 } catch (err) {
    yield put ({
        type: GET_PERSONAL_FAIL,
        error: error
    });
 };
};

export function* watchPersonal () {
   yield takeEvery(GET_PERSONAL_BEGIN, getPersonal) 
}