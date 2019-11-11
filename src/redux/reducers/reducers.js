import { ADD_NOTE, REMOVE_NOTE } from "../actions/note";

const initialState = {
  notes: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      console.log("ADD_NOTE", { state, action });
      return {
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content
          }
        ]
      };
    case REMOVE_NOTE:
      console.log("REMOVE_NOTE", { state, action });
      return {
        notes: state.notes.filter((note, index) => index != action.id)
      };

    default:
      return state;
  }
}

export default rootReducer;
