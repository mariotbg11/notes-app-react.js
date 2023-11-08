import React from "react";
import NotesHead from "./NotesHead";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";
import { getInitialData } from "../utils/notesdata";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <NotesHead />
        <NotesInput addNote={this.onAddNoteHandler} />
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NotesApp;
