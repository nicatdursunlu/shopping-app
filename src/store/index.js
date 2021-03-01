import { combineReducers, createStore } from "redux";

import { MODULE_NAME as cartModuleName, reducer as cartReducer } from "./cart";

const rootReducer = combineReducers({
  [cartModuleName]: cartReducer,
});

const store = createStore(rootReducer);

export default store;
