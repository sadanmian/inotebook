import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all note
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYjk2OTk1NmQ0YzVmZmE3ODZhMDk1In0sImlhdCI6MTY5MzIwMTM3OH0.iP5eX54KsB6puu5iYC2n_D1JiY8xhs4HXq47AGHbunE",
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYjk2OTk1NmQ0YzVmZmE3ODZhMDk1In0sImlhdCI6MTY5MzIwMTM3OH0.iP5eX54KsB6puu5iYC2n_D1JiY8xhs4HXq47AGHbunE",
      },
      body: JSON.stringify({ title, description, tag }),
    });

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
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYjk2OTk1NmQ0YzVmZmE3ODZhMDk1In0sImlhdCI6MTY5MzIwMTM3OH0.iP5eX54KsB6puu5iYC2n_D1JiY8xhs4HXq47AGHbunE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
