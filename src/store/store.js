import taskReducer from "./task";
import { logger } from "./middleware/logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import errorReduces from "./errors";

const rootReducer = combineReducers({
  errors: errorReduces,
  tasks: taskReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });
}

export default createStore;
