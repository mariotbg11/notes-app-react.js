import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
  return (
    <div className="p-3 max-w-5xl my-4 mx-auto">
      <h2 className="text-2xl mb-3 text-teal-950">Recent Note</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {notes.length === 0 ? (
          <div>
            <p className="text-teal-950">Tidak ada catatan</p>
          </div>
        ) : (
          notes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NotesList;
