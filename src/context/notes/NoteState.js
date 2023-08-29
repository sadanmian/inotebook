import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64eca9cfef74db5c417e7881",
      user: "64eb969956d4c5ffa786a095",
      title: "My Title",
      description: "Please Wake up early",
      tag: "Personal",
      date: "2023-08-28T14:06:07.535Z",
      __v: 0,
    },
    {
      _id: "64ed88553a487d829b33d94b6",
      user: "64eb969956d4c5ffa786a095",
      title: "New My Title 2",
      description: "Please get up early 2",
      tag: "general 2",
      date: "2023-08-29T05:55:33.005Z",
      __v: 0,
    },
    {
      _id: "64ed88553a2487d829b3d94b6",
      user: "64eb969956d4c5ffa786a095",
      title: "New My Title 2",
      description: "Please get up early 2",
      tag: "general 2",
      date: "2023-08-29T05:55:33.005Z",
      __v: 0,
    },
    {
      _id: "64ed88553a4867d829b3d94b6",
      user: "64eb969956d4c5ffa786a095",
      title: "New My Title 2",
      description: "Please get up early 2",
      tag: "general 2",
      date: "2023-08-29T05:55:33.005Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "64ed8822553a487d829b3d94b6",
      user: "64eb969956d4c5ffa786a095",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-29T05:55:33.005Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = (id) => {
    console.log("Note deleted with id:" + id);
    const newNote = notes.filter((note) => note._id !== id);
    setNotes(newNote);
  };

  // Edit a note
  const editNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
