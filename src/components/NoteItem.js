import React from "react";

export default function NoteItem({ note }) {
  const { title, description, tag } = note;
  return (
    <div className="col-md-3">
      <div className="card my-3 ">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Magnam perspiciatis voluptas voluptate natus, incidunt, quia
            vero ipsa nulla rem iste esse reiciendis fugit sequi est quam
            nesciunt architecto delectus sit.
          </p>
        </div>
      </div>
    </div>
  );
}
