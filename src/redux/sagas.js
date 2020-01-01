import { all, put, takeLatest } from "redux-saga/effects";

export function* fetchData() {
  const data = yield fetch("https://jsonplaceholder.typicode.com/posts");
  const res = yield data.json();
  try {
    yield put({ type: "FETCH_SUCCEEDED", payload: res });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", payload: error });
  }
}

export function* postData(action) {
  const data = yield fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(action.payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const res = yield data.json();
  try {
    yield put({ type: "POST_SUCCEEDED", res });
  } catch (error) {
    yield put({ type: "POST_FAILED", error });
  }
}

export function* watchPostData() {
  yield takeLatest("CREATE_POST", postData);
}

export function* watchFetchData() {
  yield takeLatest("FETCH_REQUESTED", fetchData);
}

export default function* rootSaga() {
  yield all([watchFetchData(), watchPostData()]);
}
