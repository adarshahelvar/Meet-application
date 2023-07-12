import React, { useEffect, useState } from "react";
import MeetingCard from "../components/MeetingCard";
import "./Home.css";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [meetings, setMeetings] = useState([]);


  // fetch the meetings
  useEffect(() => {
    fetch("https://meet-app-459bf-default-rtdb.firebaseio.com/meet.json")
      .then((response) => response.json())
      .then((data) => {
        let tempMeeting = [];
        for (const key in data) {
          let meeting = {
            id: key,
            ...data[key],
          };
          tempMeeting.push(meeting);
        }
        setMeetings(tempMeeting);
        setLoading(false)
      });
  }, []);

  useEffect(() => {
    console.log(meetings);
  }, [meetings]);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return { date: formattedDate, time: formattedTime };
  };

  return (
    <>
      <div className={loading === true ? "loader" : ""}></div>
      <div className="conatiner-card">
        {
        
        meetings.map((curElm) => {
          const { date, time } = formatDate(curElm.date);
          return (
            <>
            <MeetingCard
              title={curElm.title}
              desc={curElm.desc}
              date={date}
              time={time}
              />
              </>
          );
        })}


        
      </div>
    </>
  );
};

export default Home;

// filter method
// {
        
//   meetings.filter((elm)=>{
//     let today = new Date();
//     return(new Date(elm.date)>today)
//   }).map((curElm) => {
//     const { date, time } = formatDate(curElm.date);
//     return (
//       <MeetingCard
//         title={curElm.title}
//         desc={curElm.desc}
//         date={date}
//         time={time}
//       />
//     );
//   })}