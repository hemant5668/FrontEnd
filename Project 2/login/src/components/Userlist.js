import React from "react";
import "./Userlist.css"

export default function Userlist(props) {
  return (
    <ul className="users">
      {props.users.map((user) => (
        <li key={user.key}>
          {user.name} {user.age}
        </li>
      ))}
    </ul>
  );
}
