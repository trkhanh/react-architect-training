import React, { Component } from "react";
import NotesForm from "./NotesForm";
import AllNotes from "./AllNotes";
import {Typography} from '@material-ui/core'

export default class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant="h1" component="h2">
          NOTE
        </Typography>

        <NotesForm />
        <hr />
        <AllNotes />
      </React.Fragment>
    );
  }
}
