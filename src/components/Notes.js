import React, { useContext } from "react";

import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
}
