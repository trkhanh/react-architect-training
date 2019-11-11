export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

export function addNote(title, content) {
  console.log("Action to created and  ----willDispatch()---> Dispatcher ---->", {
    type: ADD_NOTE,
    title: title,
    content: content
  });
  return { type: ADD_NOTE, title: title, content: content };
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}
