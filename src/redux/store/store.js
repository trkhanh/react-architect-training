import { createStore } from "redux";
import rootReducer from "../reducers/reducers";

const preloadState = {
  notes: [
    {
      title: "Redux uses a single store",
      content: `Rather than locate state information in multiple
    stores across the app, Redux apps keep everything in one place. In Flux, you can
    have many different stores. Redux breaks from this and enforces a single global
    store.
    `
    }
  ]
};

export default createStore(
  rootReducer,
  preloadState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
