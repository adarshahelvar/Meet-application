import React from "react";
import "./MeetingCard.css";
import meetingImage from "../images/meeting image.jpg";

const MeetingCard = (props) => {
  console.log(props)
  return (
    <div className="meeting-card">
      <img
        src={meetingImage}
        className="meeting-card-image"
        alt="Meeting img"
        height="100px"
      />
      <div className="title-date">
      <h4>{props.title}</h4>
      <h6>{props.date}</h6>
      <h6>{props.time}</h6>
      </div>
        
      <p className="meet-desc">
       {props.desc}
      </p>
      <button type="button" className="btn-meetingcard">
        Join Meeting
      </button>
    </div>
  );
};

export default MeetingCard;
