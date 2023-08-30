import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

export default function NoteItem({ note, updateNote, showAlert }) {
  const { title, description, _id } = note;
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-3 ">
        <div className="card-body">
          <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill badge text-bg-dark">
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
          </span>
          <h5 className="card-title">
            <p>{title}</p>
          </h5>

          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
