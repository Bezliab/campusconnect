import { useState, useEffect } from "react";
import contactsData from "../data/contacts.json";
import "../styles/contact.css";

function Contact() {
  const [contacts, setContacts] = useState({ faculty: [], students: [] });
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const handleCardClick = (person) => {
    setSelectedPerson(person);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPerson(null);
  };

  return (
    <>
      <div className="contact-hero">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p className="hero-event-info">
            Get in touch with our faculty and student coordinators for any
            event-related queries.
          </p>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="container contact-content">
        <section className="coordinators-section">
          <h2>Faculty Coordinators</h2>
          <div className="coordinators-grid">
            {contacts.faculty.map((faculty) => (
              <div
                key={faculty.id}
                className="coordinator-card"
                onClick={() => handleCardClick(faculty)}
              >
                <div className="coordinator-image">
                  <img
                    src={faculty.image || "/placeholder.svg"}
                    alt={faculty.name}
                  />
                </div>
                <div className="coordinator-info">
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
              </div>
            ))}
          </div>
        </section>

        <section className="coordinators-section">
          <h2>Student Coordinators</h2>
          <div className="coordinators-grid">
            {contacts.students.map((student) => (
              <div
                key={student.id}
                className="coordinator-card"
                onClick={() => handleCardClick(student)}
              >
                <div className="coordinator-image">
                  <img
                    src={student.image || "/placeholder.svg"}
                    alt={student.name}
                  />
                </div>
                <div className="coordinator-info">
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
              </div>
            ))}
          </div>
        </section>

        {isPopupOpen && selectedPerson && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={closePopup}>
                ×
              </button>
              <div className="popup-header">
                <img
                  src={selectedPerson.image || "/placeholder.svg"}
                  alt={selectedPerson.name}
                  className="popup-image"
                />
                <h2>{selectedPerson.name}</h2>
              </div>
              <div className="popup-details">
                <div className="contact-detail-item">
                  <strong>Name:</strong> {selectedPerson.name}
                </div>
                <div className="contact-detail-item">
                  <strong>Department:</strong> {selectedPerson.department}
                </div>
                <div className="contact-detail-item">
                  <strong>Faculty:</strong> {selectedPerson.faculty}
                </div>
                <div className="contact-detail-item">
                  <strong>Position:</strong> {selectedPerson.position}
                </div>
                <div className="contact-detail-item">
                  <strong>Specialty:</strong> {selectedPerson.specialty}
                </div>
                <div className="contact-detail-item">
                  <strong>Phone:</strong> {selectedPerson.phone}
                </div>
                <div className="contact-detail-item">
                  <strong>Email:</strong>
                  <a href={`mailto:${selectedPerson.email}`}>
                    {" "}
                    {selectedPerson.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="location-section">
          <h2>College Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6086750793893!2d3.88568777359533!3d7.397668912390913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d6af7758517%3A0x17e6ec5eb71490c3!2sIdea%20Konsult%20Limited%20Adamasingba!5e0!3m2!1sen!2sng!4v1757591724413!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
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
    </>
  );
}

export default Contact;
