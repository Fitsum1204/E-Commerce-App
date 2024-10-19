import { compose,legacy_createStore as createStore, applyMiddleware} from "redux";
import { rootReducer } from "./root-reducer";
import { persistReducer,persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";
//import { thunk } from "redux-thunk";
//import { loggerMiddleware } from "./middleware/logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const sagaMiddleware = createSagaMiddleware()
const middlewares = [process.env.NODE_ENV !=='production' &&  logger,sagaMiddleware].filter(Boolean)
const composedEnhancers = compose(applyMiddleware(...middlewares))
export const store = createStore(persistedReducer,undefined,composedEnhancers)

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store)