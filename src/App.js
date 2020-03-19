import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Resources from "./components/resources/resource";

const App = () => {
  //state->setState
  const [resources, setresource] = useState("posts");

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "25px" }}>
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => setresource("posts")}
          >
            Post
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => setresource("users")}
            style={{ marginLeft: "20px" }}
          >
            User
          </button>
        </div>
        <div className="col-md-12">
          <Resources resource={resources} />
        </div>
      </div>
    </div>
  );
};

export default App;
