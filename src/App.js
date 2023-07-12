import React from "react";
import './App.css';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Routing from "./Routes/Routing";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <h1 className="container text-center mt-5">
        <Navigation />
        <Routing />
        <Footer />
      </h1>
    </>
  );
}

export default App;
