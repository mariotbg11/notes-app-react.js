import React from "react";
import DeleteNoteButton from "./DeleteNoteButton";
import { showFormattedDate } from "../utils/notesdata";

function NotesItemBody({ title, body, createdAt, id, onDelete }) {
  return (
    <div className="overflow-hidden flex flex-col h-full w-full bg-gray-400 rounded bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-cream">
      <div className="p-3 flex-1">
        <h3 className="text-lg font-bold text-cream mb-1 text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h3>
        <p className="text-xs text-teal-900 mb-2">
          {showFormattedDate(createdAt)}
        </p>
        <p className="text-sm text-cream">{body}</p>
      </div>
      <DeleteNoteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesItemBody;
