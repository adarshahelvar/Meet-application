import React from "react";
import './App.css';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Routing from "./Routes/Routing";

function App() {
  return (
    <>
      <h1 className="container text-center mt-5">
        <Navigation />
        <Routing />
      </h1>
    </>
  );
}

export default App;
