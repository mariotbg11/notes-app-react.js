import React from "react";
import { GiNotebook } from "react-icons/gi";

function NotesHead() {
  return (
    <div className="py-5 px-4 border-b-1 border-b-cream">
      <p className="text-teal-950 font-semibold text-3xl flex items-center">
        <GiNotebook size={35} /> Notes
      </p>
    </div>
  );
}

export default NotesHead;
