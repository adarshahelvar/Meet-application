import React from "react";
import "./MeetingCard.css";
import meetingImage from "../images/meeting image.jpg";

const MeetingCard = () => {
  return (
    <div className="meeting-card">
      <img
        src={meetingImage}
        className="meeting-card-image"
        alt="Meeting image"
        height="100px"
      />
      <h4>Why this meeting is importent</h4>
      <p className="meet-desc">
        Meeting help you remember the important details from a
        meeting and any action items that you or other team members need to
        complete before the next meeting.
      </p>
      <button type="button" className="btn-meetingcard">
        Join Meeting
      </button>
    </div>
  );
};

export default MeetingCard;
