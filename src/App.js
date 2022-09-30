import React from "react";
import HocTodos from "./Todos";
import HocUsers from "./UserList";

export default function App() {
  return (
    <div >
      <h1>Higher Order Component</h1>
      <div className="section">
      <div>
        <p>UserList</p>
        <HocUsers />
      </div>
      <div>
        <p>TodoLists</p> 
        <HocTodos />
      </div>
      </div>
    </div>
  );
}
