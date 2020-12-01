import React from "react";

const ListInfo = ({ info }) => {
  return (
    <ul className="list-group mb-4">
      <li className="list-group-item active">User A - Information</li>
      <li className="list-group-item">
        Value of x :{" "}
        <span className="badge badge-danger">{info["xvalue"]}</span>
      </li>
      <li className="list-group-item">
        Fruit : <span className="badge badge-danger">{info["fruit"]}</span>
      </li>
      <li className="list-group-item">
        Date Selected :{" "}
        <span className="badge badge-danger">{info["date"]}</span>
      </li>
      <li className="list-group-item">
        Time Selected :{" "}
        <span className="badge badge-danger">{info["time"]}</span>
      </li>
      <li className="list-group-item">
        Value of y :{" "}
        <span className="badge badge-danger">{info["yvalue"]}</span>
      </li>
    </ul>
  );
};

export default ListInfo;
