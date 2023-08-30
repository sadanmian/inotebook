import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

export default function NoteItem({ note, updateNote, showAlert }) {
  const { title, description, tag, _id } = note;
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-3 ">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{title}</h5>
            <i
              onClick={() => {
                deleteNote(_id);
                showAlert("Deleted Successfully", "success");
              }}
              className="fa-regular fa-trash-can mx-2"
            ></i>
            <i
              className="fa-regular fa-pen-to-square mx-2"
              onClick={() => updateNote(note)}
            ></i>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
