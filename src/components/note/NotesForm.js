import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions/note";
import {
  InputLabel,
  Input,
  Button,
  TextField,
  Typography
} from "@material-ui/core";

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
    console.log("NotesForm this.state()", this.state);
    debugger;

    let { title, content } = this.state;
    this.props.addNote(title, content);
    this.clearAllTextFiled();
  };

  clearAllTextFiled = () => {
    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2" component="h5">
          REDUX-REACT
        </Typography>
        <br />

        <form onSubmit={this.handleSubmission}>
          <InputLabel htmlFor="my-input">Note title</InputLabel>
          <Input
            id="my-input"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />

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

const mapDispatchToProps = {
  addNote: addNote
};

export default connect(
  null,
  mapDispatchToProps
)(NotesForm);
