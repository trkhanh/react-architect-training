import React, { Component } from "react";
import { connect } from "react-redux";
import { removeNote } from "../../redux/actions/note";
import { Typography, Button, Grid } from "@material-ui/core";

class AllNotes extends Component {
  removeNote = index => {
    this.props.removeNote(index);
  };

  render() {
    const notesItems = this.props.notes.map((note, index) => (
      <li key={index}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              {note.title}
            </Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <span>{note.content}</span>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.removeNote(index)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </li>
    ));

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          All Notes
        </Typography>

        <ul>{notesItems}</ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProprs = {
  removeNote: removeNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProprs
)(AllNotes);
