import React, { Component } from "react";
import { connect } from "react-redux";
import { removeNote } from "../../redux/actions/note";
import { Typography, Button, Grid, Box } from "@material-ui/core";

class AllNotes extends Component {
  removeNote = index => {
    this.props.removeNote(index);
  };

  render() {
    const notesItems = this.props.notes.map((note, index) => (
      <Grid item key={index} style={{ fontFamily: "fantasy" }}>
        <Box border={1} borderRadius={16} borderColor="grey.500" style={{ padding: "15px" }}>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              {note.title}
            </Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <p>{note.content}</p>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.removeNote(index)}
          >
            Delete
          </Button>
        </Box>
      </Grid>
    ));

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          All Notes
        </Typography>

        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
          spacing={3}
        >
          {notesItems}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = {
  removeNote: removeNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
