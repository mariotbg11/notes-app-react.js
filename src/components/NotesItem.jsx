import React from "react";
import NotesItemBody from "./NotesItemBody";

function NotesItem({ title, body, createdAt, id, onDelete }) {
  return (
    <div>
      <NotesItemBody
        title={title}
        createdAt={createdAt}
        body={body}
        id={id}
        onDelete={onDelete}
      />
    </div>
  );
}

export default NotesItem;
