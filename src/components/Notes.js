import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

export default function Notes({ showAlert }) {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;

  let history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    showAlert("Updated Successfully", "success");
  };

  const onChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <AddNote showAlert={showAlert} />

      <button
        ref={ref}
        type="button"
        className="btn btn-dark d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    minLength={5}
                    required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    minLength={5}
                    required
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-dark"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 container">
        <h2>Your Notes</h2>
        {notes.length === 0 && (
          <p className="text-danger">No Notes to display</p>
        )}
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            updateNote={updateNote}
            showAlert={showAlert}
          />
        ))}
      </div>
    </>
  );
}
