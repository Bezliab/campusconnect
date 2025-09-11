// import React from "react";

// const Contact = () => {
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

// export default Contact;

"use client"

import { useState, useEffect } from "react"
import contactsData from "../data/contacts.json"
import "../styles/contact.css"

function Contact() {
  const [contacts, setContacts] = useState({ faculty: [], students: [] })

  useEffect(() => {
    setContacts(contactsData)
  }, [])

  return (
    <div className="container">
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Get in touch with our faculty and student coordinators for any event-related queries.
        </p>

        {/* Faculty Coordinators Section */}
        <section className="coordinators-section">
          <h2>Faculty Coordinators</h2>
          <div className="coordinators-grid">
            {contacts.faculty.map((faculty) => (
              <div key={faculty.id} className="coordinator-card" idName="fac coordinator-card">
                <h3>{faculty.name}</h3>
                <p className="designation">{faculty.designation}</p>
                <p className="department">{faculty.department}</p>
                <div className="contact-details">
                  <p>
                    <strong>Phone:</strong> {faculty.phone}
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <a href={`mailto:${faculty.email}`}> {faculty.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Coordinators Section */}
        <section className="coordinators-section">
          <h2>Student Coordinators</h2>
          <div className="coordinators-grid">
            {contacts.students.map((student) => (
              <div key={student.id} className="coordinator-card">
                <h3>{student.name}</h3>
                <p className="designation">{student.role}</p>
                <p className="department">{student.department}</p>
                <div className="contact-details">
                  <p>
                    <strong>Phone:</strong> {student.phone}
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <a href={`mailto:${student.email}`}> {student.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* College Location Section */}
        <section className="location-section">
          <h2>College Location</h2>
          <div className="map-container">
            <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.60867507936!2d3.88568777359533!3d7.397668912390913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d6af7758517%3A0x17e6ec5eb71490c3!2sIdea%20Konsult%20Limited%20Adamasingba!5e0!3m2!1sen!2sng!4v1757494004125!5m2!1sen!2sng"
             width="100%" 
             height="400" 
             style={{ border:0 }} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"
             title="College Location"
             ></iframe>
          </div>
          <div className="address-info">
            <h3>Campus Address</h3>
            <p>
              Idea Konsult College of Engineering
              <br />
              Adamasingba, Ibadan
              <br />
              Oyo State - 200281
              <br />
              Nigeria
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
