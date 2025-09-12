import { useState } from "react"
import "../styles/feedback.css"

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    eventAttended: "",
    rating: 0,
    comments: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      rating: rating,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your feedback! (Note: This is a demo form)")
    console.log("Feedback submitted:", formData)
  }

  return (
    <>
      <div className="feedback-header about-hero">
        <div className="feedback-hero-text">
          <h1>
            Share Your Feedback
          </h1>
          <p className="feedback-subtitle">Help us improve campus events by sharing your experience and suggestions</p>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="feedback-container">

        <div className="feedback-form-container">
          <div className="form-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                fill="currentColor"
              />
            </svg>
            <h2>Event Feedback Form</h2>
          </div>

          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      fill="currentColor"
                    />
                  </svg>
                  Full Name
                </label>
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
                <label htmlFor="email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                  Email Address
                </label>
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
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="userType">User Type</label>
                <select id="userType" name="userType" value={formData.userType} onChange={handleChange} required>
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="staff">Staff</option>
                  <option value="guest">Guest</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="eventAttended">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                      fill="currentColor"
                    />
                  </svg>
                  Event Attended
                </label>
                <select
                  id="eventAttended"
                  name="eventAttended"
                  value={formData.eventAttended}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select the event</option>
                  <option value="techfest2025">TechFest 2025</option>
                  <option value="cultural-week">Cultural Week</option>
                  <option value="sports-meet">Annual Sports Meet</option>
                  <option value="workshop-ai">AI Workshop</option>
                  <option value="hackathon">Coding Hackathon</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    fill="currentColor"
                  />
                </svg>
                Overall Rating
              </label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`star ${formData.rating >= star ? "active" : ""}`}
                    onClick={() => handleStarClick(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comments">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                    fill="currentColor"
                  />
                </svg>
                Comments & Suggestions
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Share your experience, suggestions, or any additional comments..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" />
              </svg>
              Submit Feedback
            </button>
          </form>
        </div>

        <div className="feature-boxes">
          <div className="feature-box">
            <div className="feature-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                  fill="white"
                />
              </svg>
            </div>
            <h3>Your Voice Matters</h3>
            <p>Every feedback helps us create better campus events and experiences for everyone.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  fill="white"
                />
              </svg>
            </div>
            <h3>Anonymous Option</h3>
            <p>Feel free to share honest feedback. Your privacy and opinions are respected.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon yellow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  fill="white"
                />
              </svg>
            </div>
            <h3>Continuous Improvement</h3>
            <p>We regularly review feedback to enhance our events and campus activities.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback
