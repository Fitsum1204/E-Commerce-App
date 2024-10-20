import { call,all,put,takeLatest } from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { fetchCategoriesSuccess,fetchCategoriesFailed } from "./category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";


export function* fetchCategoriesAsync()  {
   
        try {
            const categoriesArray = yield call(getCategoriesAndDocuments,'categories');
            yield put(fetchCategoriesSuccess(categoriesArray)) 
        } catch (error) {
            yield put(fetchCategoriesFailed(error))
        }
    }
        
export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}  


export function* catagoriesSaga() {
    yield all([call(onFetchCategories)])
} 

