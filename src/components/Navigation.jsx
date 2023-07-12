import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
        <h2>Meet applucation...!</h2>
        <Link to="/home">Home</Link>
        <Link to="/myMeeting">My Meetings</Link>
        <Link to="/addMeeting">Add Meetings</Link>
    </nav>
  )
}

export default Navigation