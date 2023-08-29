import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";

export default function About() {
  const a = useContext(NoteContext);

  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      This is about {a.state.name} and he has done his {a.state.class}
    </div>
  );
}
