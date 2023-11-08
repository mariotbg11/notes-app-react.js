import React from "react";
import Illustration from "../assets/Illustration.png";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      titleChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.titleChar >= 0 && event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          titleChar: 50 - event.target.value.length,
        };
      });
    }
  }

  onNoteChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="p-3 max-w-5xl my-12 mx-auto">
        <h1 className="text-teal-950 text-center text-5xl mb-5 font-bold">
          Welcome back!
        </h1>
        <div className="md:flex sm:block">
          <div className="w-full">
            <img
              src={Illustration}
              alt="A man illustration thinking to make a list on a note"
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <h2 className="text-2xl mb-3 text-teal-950">Create Note</h2>
            <form onSubmit={this.onSubmitEventHandler}>
              <p className="text-right text-teal-950">
                Sisa karakter: {this.state.titleChar}
              </p>
              <input
                className="block w-full p-3 my-3 rounded bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-cream"
                type="text"
                placeholder="Type your note title here..."
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
              />
              <textarea
                className="block w-full min-h-175 p-3 my-3 rounded bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-cream"
                type="text"
                placeholder="Type your note here..."
                value={this.state.body}
                onChange={this.onNoteChangeEventHandler}
              />
              <button
                type="submit"
                className="block w-full text-teal-950 font-bold p-2 rounded bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-cream"
              >
                Add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesInput;
