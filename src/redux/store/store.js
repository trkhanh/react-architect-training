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
    },
    {
      title: "What is Reducers?",
      content: `Reducers are pure functions that define HOW the app state changes. 
      In other words, they are used to recalculate the new application state or, at least a part of it.
      Whenever we dispatch an action to our store, the action gets passed to the reducer.
      The reducer function takes two arguments: the previous app state, the action being dispatched and returns the new app state.
      ******     (previousState, action) => newState      ******
    `
    },
    {
      title: "Reducers very complexity?",
      content: `In a real-world application, your reducers most probably will get very complex. 
      To deal with reducer complexity, we chunk them down in multiple, simpler reducers and later, 
      we combine them with a Redux helper function called combineReducers.
    `
    },
    {
      title: "mapStateToProps?",
      content: `This is the first argument of the connect function.
      As its name suggests, we map part of our application state into the actual properties of our component.
      mapStateToProps is actually a function which takes the entire state of our app as its first argument and returns an object of data that our component will need, i.e. 
      the first parameter is equivalent to store.getState().
      mapStateToProps takes an optional second argument, which lets you use some of the component props.
      This can be useful when we need additional information from the component’s props to retrieve data from the store mapStateToProps is called every time our app state changes
       (the state parameter) or any field of the ownProps object changed.
      Further, our component will re-render when either ownProps or stateProps is different, which means we’ll always get the most recent values from the state.
      However, note that as we mentioned before, in React we don’t access the store directly, thus we never call store.dispatch(). We just call our action creator and the rest is handled magically by the connect function.
      “What about if mapDispatchToProps is a function, not an object? And when would I want to use it as a function?”
      I’m going to quote this from the React-Redux documentation, since it’s pretty straightforward:
      “Defining mapDispatchToProps as a function gives you the most flexibility in customizing the functions your component receives, and how they dispatch actions. You gain access to dispatch and ownProps. You may use this chance to write customized functions to be called by your connected components.”
      dispatch and store.dispatch are actually the same thing, while the ownProps, as we already know, are the component props that get passed when creating the component.
      There’s one more thing I want to stress out about mapDispatchToProps:
      The dispatch function will be available out of the box in your component if you don’t provide a second argument in the connect function or the object you returned from the mapDispatchToProps function returns a dispatch field.
      For more information, visit this link from the React Redux documentation.
    `
    },
  ]
};

export default createStore(
  rootReducer,
  preloadState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
