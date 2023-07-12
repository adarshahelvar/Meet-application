import React, { useState } from "react";
import "./AddMeeting.css";

const Addmetings = () => {

    const [loaderStatus, setLoaderStatus] = useState(false);

    const loderStateHandler =()=>{
        setLoaderStatus(!loaderStatus);
    }

  return (
    <div className=" add-container">
      <h1>Add Meeting</h1>
      <input type="text" placeholder="Enter Meeting Title..." />
      <input type="datetime-local" placeholder="Enter Meeting Time" />
      <input type="text" placeholder="Enter the Description" />
      <button type="submit" className="btn" onClick={loderStateHandler}>
        <p className={loaderStatus == true ?"spinner" : ""}></p>
        Add Meeting
      </button>
    </div>
  );
};

export default Addmetings;
