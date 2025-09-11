// import React from "react";

// const Feedback = () => {
//   return (
//     <div>
//       <h1>About CampusConnect</h1>
//       <p>
//         CampusConnect is your hub for campus events, galleries, feedback, and more.
//         Stay connected and discover what's happening around you!
//       </p>
//     </div>
//   );
// };

// export default Feedback;

"use client"

import { useState } from "react"
import "../styles/feedback.css"

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    eventAttended: "",
    rating: "",
    comments: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Static form - no actual submission
    alert("Thank you for your feedback! (Note: This is a demo form)")
    console.log("Feedback submitted:", formData)
  }

  return (
    <div className="container">
      <div className="feedback-page">
        <h1>Event Feedback</h1>
        <p className="feedback-intro">
          Your feedback helps us improve our events and create better experiences for everyone.
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="userType">User Type *</label>
            <select id="userType" name="userType" value={formData.userType} onChange={handleChange} required>
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="staff">Staff</option>
              <option value="guest">Guest</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="eventAttended">Event Attended *</label>
            <select
              id="eventAttended"
              name="eventAttended"
              value={formData.eventAttended}
              onChange={handleChange}
              required
            >
              <option value="">Select an event</option>
              <option value="techfest2025">TechFest 2025</option>
              <option value="cultural-week">Cultural Week</option>
              <option value="sports-meet">Annual Sports Meet</option>
              <option value="workshop-ai">AI Workshop</option>
              <option value="hackathon">Coding Hackathon</option>
              <option value="event">TEDx Event</option>
              <option value="concert">Mid-Semester Concert</option>
              <option value="seminar">Job Skill Seminar</option>
              <option values="meetup">Networking</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rating">Overall Rating *</label>
            <select id="rating" name="rating" value={formData.rating} onChange={handleChange} required>
              <option value="">Rate your experience</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comments">Comments & Suggestions</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Share your thoughts, suggestions, or any specific feedback about the event..."
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  )
}

export default Feedback