import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaRebel } from "react-icons/fa";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const Names = () => {
    return (
      <React.Fragment>
        {users.map(user => (
          <ul className="list-group">
            <li key={user.id} className="list-group-item">
              {user.name}
            </li>
          </ul>
        ))}
      </React.Fragment>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button
            onClick={() => {
              Names();
            }}
            className="btn btn-primary"
          >
            <FaRebel />
            HELLO!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
