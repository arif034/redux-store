import { createStore } from "redux";

import CakeReducer from "./cake/CakeReducer.js";

const store = createStore(CakeReducer);

export default store;
