import React from "react";
import { MdDeleteForever } from "react-icons/md";

function DeleteNoteButton({ id, onDelete }) {
  return (
    <button
      className="text-red-300 hover:text-red-600 w-full flex justify-center py-2 border-t-1 border-b-cream"
      onClick={() => onDelete(id)}
    >
      <MdDeleteForever size={22} />
    </button>
  );
}

export default DeleteNoteButton;
