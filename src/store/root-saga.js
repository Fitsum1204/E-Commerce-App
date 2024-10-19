import { call,all } from "redux-saga/effects";
import { catagoriesSaga } from "./category/category-saga";
import { userSagas } from "./user/user.sagas";
export function* rootSaga() {
    yield all([
        call(catagoriesSaga),
        call(userSagas)
    ])
} 