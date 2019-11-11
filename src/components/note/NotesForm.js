import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions/note";
import { Typography } from "@material-ui/core";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";
import { TextareaAutosize, TextField } from "@material-ui/core";

class NotesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();

    let { title, content } = this.state;
    this.props.addNote(title, content);

    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2" component="h5">
          ETON
        </Typography>

        <form onSubmit={this.handleSubmission}>
          <InputLabel htmlFor="my-input">Note title</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <FormHelperText id="my-helper-text">
            Please add your note.
          </FormHelperText>

          <TextField
            id="outlined-textarea"
            label="Note content"
            placeholder="Placeholder"
            multiline
            margin="normal"
            variant="outlined"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Add Note
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {
    addNote: addNote
  }
)(NotesForm);
