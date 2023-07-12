import React, { useRef, useState } from "react";
import "./AddMeeting.css";
import { useNavigate } from "react-router-dom";
const Addmetings = () => {
  const [loaderStatus, setLoaderStatus] = useState(false);

  let titleInput = useRef();
  let dateInput = useRef();
  let descInput = useRef();
  let navigate = useNavigate();

  const addMeetingHandler = () => {
    setLoaderStatus(true);
    let tempMeeting = {
      title: titleInput.current.value,
      date: dateInput.current.value,
      desc: descInput.current.value,
    };

    // https://meet-app-459bf-default-rtdb.firebaseio.com/meet.json" in this link we only get till firebaseio.com, the next part that is /meet.json is added by us so it will create a new folder like strucute called meet and show that data in json format
    fetch("https://meet-app-459bf-default-rtdb.firebaseio.com/meet.json", {
      method: "POST",
      body: JSON.stringify(tempMeeting),
    }).then(() => {
      setLoaderStatus(false);
      navigate('/')
      // useNavigate is used to naviate from one page url to another page url
    });
  };

  return (
    <div className=" add-container">
      <h1>Add Meeting</h1>
      <input
        type="text"
        placeholder="Enter Meeting Title..."
        ref={titleInput}
      />
      <input
        type="datetime-local"
        placeholder="Enter Meeting Time"
        ref={dateInput}
      />
      <input type="text" placeholder="Enter the Description" ref={descInput} />
      <button type="submit" className="btn" onClick={addMeetingHandler}>
        <p className={loaderStatus == true ? "spinner" : ""}></p>
        Add Meeting
      </button>
    </div>
  );
};

export default Addmetings;
