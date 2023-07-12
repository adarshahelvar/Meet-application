import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <h1 className="container">
        <Navigation />
      </h1>
    </>
  );
}

export default App;
