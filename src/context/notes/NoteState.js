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
      _id: "64ed88553a487d829b3d94b6",
      user: "64eb969956d4c5ffa786a095",
      title: "New My Title 2",
      description: "Please get up early 2",
      tag: "general 2",
      date: "2023-08-29T05:55:33.005Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
